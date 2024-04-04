import React, { useContext } from 'react'

import "./EmployeesList.css";
import { EmployeeContext } from '../../context/EmployeesContext';
import Modal from '../Modal/Modal';
const EmployeesList = () => {
  const { employees } = useContext(EmployeeContext);
  
  return (
    <div> {
      employees ? (
        <>
  
          {employees.map(employee => {
  
            return (<>
              <>
                <Modal employee={employee} />
                {employee.employeeId}
                {" "} | {" "}
                {employee.name}
  
                {" "} | {" "}
  
                {employee.role}
  
                {" "} | {" "}
  
                {employee.position}
                {" "} | {" "}
  
                {employee.access}
              </>
              <hr />
            </>)
          })}
        </>
      ) : (
        <p>Loading...</p>
      )
    }</div>
  )
}

export default EmployeesList