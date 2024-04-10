import { createContext, useState, useEffect } from "react";
import { nanoid } from 'nanoid';

const BASEURL = 'http://localhost:4000'
const fetchManagers = async () => {

    try {
        const response = await fetch(`${BASEURL}/managers`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const ManagersContext = createContext([])

export const ManagersContextProvider = ({ children }) => {
    const [managers, setManagers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const managersData = await fetchManagers();
            setManagers(managersData);
        };

        fetchData();
    }, []);

    const createManager = async (newManager) => {

        try {
            const addManager = {
                id: nanoid(), // Generate unique ID using nanoid
                ...newManager
            };
            const res = await fetch(`${BASEURL}/managers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addManager)
            });
            if (res.ok) {
                const addedNewManager = await res.json();
                setManagers([addedNewManager, ...managers]);
                console.log("Manager successfully added.");
            } else {
                throw new Error("Failed to add Manager.");
            }
        } catch (error) {
            console.error("Error adding Manager:", error);
        }
    };

    const updateManager = async (id, editManager) => {

        try {
            const res = await fetch(`${BASEURL}/managers/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editManager)
            });
            if (res.ok) {
                const updatedManager = await res.json();
                const updatedManagers = managers.map((manager) =>
                    manager.id === id ? updatedManager : manager
                );
                setManagers(updatedManagers);
                console.log("Manager successfully updated.");
            } else {
                throw new Error("Failed to update manager.");
            }
        } catch (error) {
            console.error("Error updating manager:", error);
        }
    };

    const deleteManager = async (id) => {

        try {
            const res = await fetch(`${BASEURL}/managers/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setManagers(managers.filter((manager) => manager.id !== id));
                console.log("Manager successfully deleted.");
            } else {
                throw new Error("Failed to delete Manager.");
            }
        } catch (error) {
            console.error("Error deleting Manager:", error);
        }
    };

    const contextValue = { managers, setManagers, createManager, updateManager, deleteManager };
    return (<ManagersContext.Provider value={contextValue}>
        {children}
    </ManagersContext.Provider>)
}

export default ManagersContextProvider;
