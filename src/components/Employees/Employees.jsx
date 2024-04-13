import React, { useContext } from "react";
import "./Employees.css";
import { EmployeesContext } from "../../context/EmployeesContext";
import Employee from "../Employee/Employee";
import EmployeeModal from "../Modal/EmployeeModal";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Employees = () => {
  const { employees, createEmployee, updateEmployee, deleteEmployee } =
    useContext(EmployeesContext);
    const [newEmployee, setNewEmployee] = useState("");

    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewEmployee((prevStore) => ({
        ...prevStore,
        [name]: value,
      }));
    };
    const handleEditSubmit = (id, newEmployee) => {
      console.log(id);
      console.log(newEmployee);
      updateEmployee(id, newEmployee);
      // toggleModal()
    };
    const columns = [
      // { field: 'id', headerName: 'ID', width: 100 },
      { field: "id", headerName: "ID", width: 200, editable: false },
      { field: "name", headerName: "Name", width: 200, editable: true },
      { field: "position", headerName: "Position/Role", width: 200, editable: true },
      { field: "contact", headerName: "Contact Info", width: 200, editable: true },
      { field: "access", headerName: "Access", width: 200, editable: true },
      { field: "password", headerName: "Password", width: 200, editable: true },
     
      {
        field: "actions",
        headerName: "Actions",
        width: 200,
  
        renderCell: (params) => (
          <div>
            <button
              className="btn-action"
              onClick={() => handleEditSubmit(params.row.id, params.row)}
            >
              Change
            </button>
            <button
              className="btn-action"
              onClick={() => deleteEmployee(params.row.id)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ];

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
        <DataGrid
          rows={employees}
          columns={columns.map((column) => ({
            ...column,
            editable: true, // Enable editing for all columns
          }))}
          pageSize={5}
          onEditCellChange={(what) => console.log(what)}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
          onRowSelectionModelChange={(data) => console.log(data)}
        />
        
      </div>
    </div>
  );
};

export default Employees;
