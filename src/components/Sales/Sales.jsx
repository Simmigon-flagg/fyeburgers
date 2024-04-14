import React, { useContext } from 'react'
import "./Sales.css"
import { SalesContext } from '../../context/SalesContext';
import Sale from '../Sale/Sale';
import SaleModal from '../Modal/SaleModal';
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Sales = () => {
  const { sales, createSale, updateSale, deleteSale } = useContext(SalesContext);
 
  const [newSale, setNewSale] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSale((prevSale) => ({
      ...prevSale,
      [name]: value,
    }));
  };
  const handleEditSubmit = (id, newSale) => {
    console.log(id);
    console.log(newSale);
    updateSale(id, newSale);
    // toggleModal()
  };
  const columns = [
    // { field: 'id', headerName: 'ID', width: 100 },
    { field: "orderId", headerName: "ID", width: 200, editable: false },
    { field: "timeOfSale", headerName: "Time of Sale", width: 200, editable: true },
    { field: "items", headerName: "Items", width: 200, editable: true },
    
   
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
            onClick={() => deleteSale(params.row.id)}
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
        <SaleModal
          content={"Sale"}
          header={"Add New +"}
          createSale={createSale}
        />
      </CustomButton>
      <DataGrid
        rows={sales}
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
)
}

export default Sales