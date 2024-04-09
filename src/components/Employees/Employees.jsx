import React, { useContext } from 'react'
import "./Employees.css"
import { EmployeesContext } from '../../context/EmployeesContext';
import Employee from '../Employee/Employee';
import EmployeeModal from '../Modal/EmployeeModal';
const Employees = () => {
  const { employees, createEmployee, updateEmployee, deleteEmployee } = useContext(EmployeesContext);
  return (
    <div>
      <EmployeeModal content={"Employee"} header={"Create"} createEmployee={createEmployee} />
      <ul style={{ display: "flex", flexDirection: "column" }}>

        {employees.map((employee) => (<Employee key={employee.id} employee={employee} updateEmployee={updateEmployee} deleteEmployee={deleteEmployee} />))}
      </ul>
    </div>
  )
}

export default Employees