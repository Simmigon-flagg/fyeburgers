import { createContext, useState, useEffect } from "react";
import { nanoid } from 'nanoid';

const BASEURL = 'http://localhost:4000'
const fetchSales = async () => {

    try {
        const response = await fetch(`${BASEURL}/sales`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const SalesContext = createContext([])

export const SalesContextProvider = ({ children }) => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const salesData = await fetchSales();
            setSales(salesData);
        };

        fetchData();
    }, []);

    const createSale = async (newSale) => {

        try {
            const addSale = {
                id: nanoid(), // Generate unique ID using nanoid
                ...newSale
            };
            const res = await fetch(`${BASEURL}/sales`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addSale)
            });
            if (res.ok) {
                const addedNewSale = await res.json();
                setSales([addedNewSale, ...sales]);
                console.log("Sale successfully added.");
            } else {
                throw new Error("Failed to add Sale.");
            }
        } catch (error) {
            console.error("Error adding Sale:", error);
        }
    };

    const updateSale = async (id, editSale) => {

        try {
            const res = await fetch(`${BASEURL}/sales/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editSale)
            });
            if (res.ok) {
                const updatedSale = await res.json();
                const updatedSales = sales.map((sale) =>
                    sale.id === id ? updatedSale : sale
                );
                setSales(updatedSales);
                console.log("Sale successfully updated.");
            } else {
                throw new Error("Failed to update sale.");
            }
        } catch (error) {
            console.error("Error updating sale:", error);
        }
    };

    const deleteSale = async (id) => {

        try {
            const res = await fetch(`${BASEURL}/sales/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setSales(sales.filter((sale) => sale.id !== id));
                console.log("Sale successfully deleted.");
            } else {
                throw new Error("Failed to delete Sale.");
            }
        } catch (error) {
            console.error("Error deleting Sale:", error);
        }
    };

    const contextValue = { sales, setSales, createSale, updateSale, deleteSale };
    return (<SalesContext.Provider value={contextValue}>
        {children}
    </SalesContext.Provider>)
}

export default SalesContextProvider;
