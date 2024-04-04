import { createContext, useState, useEffect } from "react";
// import products from ""
const fetchInventory = async () => {
    try {
        const response = await fetch('http://localhost:4000/inventories');
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
            const employeesData = await fetchInventory();
            setInventories(employeesData);
          };

        fetchData();
    }, []);
    
    const contextValue = { inventories , setInventories};
    return (<InventoriesContext.Provider value={contextValue}>
        {children}
    </InventoriesContext.Provider>)
}
export default InventoriesContextProvider;