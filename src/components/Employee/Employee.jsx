import React from 'react'

import "./Employee.css";

import EmployeeModal from '../Modal/EmployeeModal';

const Employee = ({ employee, updateEmployee, deleteEmployee }) => {


  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      
      <p>{employee.name}</p>
      <EmployeeModal content={"Employee"} header={"Read"} employee={employee} />
      <EmployeeModal content={"Employee"} header={"Update"} employee={employee} updateEmployee={updateEmployee} />
      <EmployeeModal content={"Employee"} header={"Delete"} employee={employee} deleteEmployee={deleteEmployee} />
    </div>

  )
}

export default Employee