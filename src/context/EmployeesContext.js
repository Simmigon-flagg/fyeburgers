import { createContext, useState, useEffect } from "react";
import { nanoid } from 'nanoid';

const BASEURL = 'http://localhost:4000'
const fetchEmployees = async () => {
   
    try {
        const response = await fetch(`${BASEURL}/employees`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const EmployeesContext = createContext([])

export const EmployeesContextProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const employeesData = await fetchEmployees();
            setEmployees(employeesData);
        };

        fetchData();
    }, []);

    const createEmployee = async (newEmployee) => {
      
        try {
            const addEmployee = {
                id: nanoid(), // Generate unique ID using nanoid
                ...newEmployee
            };
            const res = await fetch(`${BASEURL}/employees`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addEmployee)
            });
            if (res.ok) {
                const addedNewEmployee = await res.json();
                setEmployees([addedNewEmployee, ...employees]);
                console.log("Employee successfully added.");
            } else {
                throw new Error("Failed to add Employee.");
            }
        } catch (error) {
            console.error("Error adding Employee:", error);
        }
    };

    const updateEmployee = async (id, editEmployee) => {
      
        try {
            const res = await fetch(`${BASEURL}/employees/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editEmployee)
            });
            if (res.ok) {
                const updatedEmployee = await res.json();
                const updatedEmployees = employees.map((Employee) =>
                    Employee.id === id ? updatedEmployee : Employee
                );
                setEmployees(updatedEmployees);
                console.log("Employee successfully updated.");
            } else {
                throw new Error("Failed to update Employee.");
            }
        } catch (error) {
            console.error("Error updating Employee:", error);
        }
    };

    const deleteEmployee = async (id) => {

        try {
            const res = await fetch(`${BASEURL}/employees/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setEmployees(employees.filter((employee) => employee.id !== id));
                console.log("Employee successfully deleted.");
            } else {
                throw new Error("Failed to delete Employee.");
            }
        } catch (error) {
            console.error("Error deleting Employee:", error);
        }
    };

    const contextValue = { employees, setEmployees, createEmployee, updateEmployee, deleteEmployee };
    return (<EmployeesContext.Provider value={contextValue}>
        {children}
    </EmployeesContext.Provider>)
}

export default EmployeesContextProvider;
