import { createContext, useState, useEffect } from "react";
// import products from ""
const fetchEmployees = async () => {
    try {
        const response = await fetch('http://localhost:4000/employees');
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


export const EmployeeContext = createContext([])


export const EmployeesContextProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const employeesData = await fetchEmployees();
            setEmployees(employeesData);
          };

        fetchData();
    }, []);
    // Empty dependency array ensures useEffect runs only once on component mount

    // const addEmployee = (itemId) => {

    //     setEmployees(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    //     console.log(employee);
    // }
    // const removeEmployee = (itemId) => {
    //     setEmployees(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    // }


    // const contextValue = { products, cartItems, addToCart, removeFromCart, getTotalCartAmount , getTotalCartItems};
    const contextValue = { employees , setEmployees};
    return (<EmployeeContext.Provider value={contextValue}>
        {children}
    </EmployeeContext.Provider>)
}
export default EmployeesContextProvider;
