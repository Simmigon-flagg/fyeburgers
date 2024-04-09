import React, { useState } from 'react'
import "./Employees.css"
// import NewEmployeeModal from '../../components/Modal/NewEmployeeModal';
import EmployeesComponent from '../../components/Employees/Employees';
const Employees = () => {
  return (
    <>
      <div>
        Employee
      </div>
      <EmployeesComponent />
    </>
  )
}

export default Employees