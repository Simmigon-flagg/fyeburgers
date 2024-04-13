import React, { useContext } from "react";
import "./Employees.css";
import { EmployeesContext } from "../../context/EmployeesContext";
import Employee from "../Employee/Employee";
import EmployeeModal from "../Modal/EmployeeModal";
import CustomButton from "../CustomButton/CustomButton";
const Employees = () => {
  const { employees, createEmployee, updateEmployee, deleteEmployee } =
    useContext(EmployeesContext);
  return (
    <div className="container">
      {/* TODO: Move code to GridComponent.jsx */}
      <div className="gridContainer">
        <CustomButton text={"Add New +"}>
          <EmployeeModal
            content={"Employee"}
            header={"Add New +"}
            createEmployee={createEmployee}
          />
        </CustomButton>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {employees.map((employee) => (
            <Employee
              key={employee.id}
              employee={employee}
              updateEmployee={updateEmployee}
              deleteEmployee={deleteEmployee}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;
