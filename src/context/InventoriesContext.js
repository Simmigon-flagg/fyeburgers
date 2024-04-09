import { createContext, useState, useEffect } from "react";
import { nanoid } from 'nanoid';

const BASEURL = 'http://localhost:4000'
const fetchInventories = async () => {
    try {
        const response = await fetch(`${BASEURL}/inventories`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const InventoriesContext = createContext([])

export const InventoriesContextProvider = ({ children }) => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const inventoriesData = await fetchInventories();
            setInventories(inventoriesData);
        };

        fetchData();
    }, [inventories]);

    const createInventory = async (newInventory) => {
        try {
            const addInventory = {
                id: nanoid(), // Generate unique ID using nanoid
                ...newInventory
            };
            const res = await fetch(`${BASEURL}/inventories`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addInventory)
            });
            if (res.ok) {
                const addedNewInventory = await res.json();
                setInventories([addedNewInventory, ...inventories]);
                console.log("Inventory successfully added.");
            } else {
                throw new Error("Failed to add Inventory.");
            }
        } catch (error) {
            console.error("Error adding Inventory:", error);
        }
    };

    const updateInventory = async (id, editInventory) => {
        try {
            const res = await fetch(`${BASEURL}/inventories/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editInventory)
            });
            if (res.ok) {
                const updatedInventory = await res.json();
                const updatedInventories = inventories.map((inventory) =>
                    inventory.id === id ? updatedInventory : inventory
                );
                setInventories(updatedInventories);
                console.log("Inventory successfully updated.");
            } else {
                throw new Error("Failed to update Inventory.");
            }
        } catch (error) {
            console.error("Error updating Inventory:", error);
        }
    };

    const deleteInventory = async (id) => {

        try {
            const res = await fetch(`${BASEURL}/inventories/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setInventories(inventories.filter((inventory) => inventory.id !== id));
                console.log("Inventory successfully deleted.");
            } else {
                throw new Error("Failed to delete Inventory.");
            }
        } catch (error) {
            console.error("Error deleting Inventory:", error);
        }
    };

    const contextValue = { inventories,  setInventories, createInventory, updateInventory, deleteInventory };
    return (<InventoriesContext.Provider value={contextValue}>
        {children}
    </InventoriesContext.Provider>)
}

export default InventoriesContextProvider;