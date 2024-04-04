import React, { useState } from 'react'
import "./Employees.css"
import NewEmployeeModal from '../../components/Modal/NewEmployeeModal';
import EmployeesList from '../../components/EmployeesList/EmployeesList';
const Employees = () => {
  const [addNew, setNewEmployee] = useState("");
  return (
    <>
      <NewEmployeeModal />
      <EmployeesList />
    </>
  )
}

export default Employees