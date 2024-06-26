/* Inventories.js */

import React, { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Inventories.css";
import { InventoriesContext } from "../../context/InventoriesContext";
import Inventory from "../Inventory/Inventory";
import InventoryModal from "../Modal/InventoryModal";
import CustomButton from "../CustomButton/CustomButton";

const Inventories = () => {
  const {
    inventories,
    createInventory,
    updateInventory,
    deleteInventory,
    toggleModal,
  } = useContext(InventoriesContext);
  const [newInventory, setNewInventory] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewInventory((prevStore) => ({
      ...prevStore,
      [name]: value,
    }));
  };
  const handleEditSubmit = (id, newInventory) => {
    console.log(id);
    console.log(newInventory);
    updateInventory(id, newInventory);
    // toggleModal()
  };

  

  const columns = [
    // { field: 'id', headerName: 'ID', width: 100 },
    { field: "name", headerName: "Name", width: 200, editable: true },
    { field: "price", headerName: "price", width: 100, editable: true },
    { field: "category", headerName: "Category", width: 150, editable: true },
    { field: "quantity", headerName: "Quantity", width: 150, editable: true },
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
            onClick={() => deleteInventory(params.row.id)}
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
        <InventoryModal
            content={"Inventory"}
            header={"Add New +"}
            createInventory={createInventory}
          />{" "}
        </CustomButton>
        <DataGrid
          rows={inventories}
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

export default Inventories;
