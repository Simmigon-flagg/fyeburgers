import { createContext, useState, useEffect } from "react";
import { nanoid } from 'nanoid';

const BASEURL = 'http://localhost:4000'

const fetchStores = async () => {
   
    try {
        const response = await fetch(`${BASEURL}/stores`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const StoresContext = createContext([])

export const StoresContextProvider = ({ children }) => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const storesData = await fetchStores();
            setStores(storesData);
        };

        fetchData();
    }, []);

    const createStore = async (newStore) => {

        try {
            const addStore = {
                id: nanoid(), // Generate unique ID using nanoid
                ...newStore
            };
            const res = await fetch(`${BASEURL}/stores`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addStore)
            });
            if (res.ok) {
                const addedNewStore = await res.json();
                setStores([addedNewStore, ...stores]);
                console.log("Store successfully added.");
            } else {
                throw new Error("Failed to add Store.");
            }
        } catch (error) {
            console.error("Error adding Store:", error);
        }
    };

    const updateStore = async (id, editStore) => {

        try {
            const res = await fetch(`${BASEURL}/stores/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editStore)
            });
            if (res.ok) {
                const updatedStore = await res.json();
                const updatedStores = stores.map((store) =>
                    store.id === id ? updatedStore : store
                );
                setStores(updatedStores);
                console.log("Store successfully updated.");
            } else {
                throw new Error("Failed to update store.");
            }
        } catch (error) {
            console.error("Error updating store:", error);
        }
    };

    const deleteStore = async (id) => {

        try {
            const res = await fetch(`${BASEURL}/stores/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setStores(stores.filter((store) => store.id !== id));
                console.log("Store successfully deleted.");
            } else {
                throw new Error("Failed to delete Store.");
            }
        } catch (error) {
            console.error("Error deleting Store:", error);
        }
    };

    const contextValue = { stores, setStores, createStore, updateStore, deleteStore };
    return (<StoresContext.Provider value={contextValue}>
        {children}
    </StoresContext.Provider>)
}

export default StoresContextProvider;
