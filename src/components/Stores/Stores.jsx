import React, { useContext } from 'react'
import "./Stores.css"
import { StoresContext } from '../../context/StoresContext';
import SingleStore from '../SingleStore/SingleStore';
import StoreModal from '../Modal/StoreModal';
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
const Stores = () => {
  const { stores, createStore, updateStore, deleteStore } = useContext(StoresContext);
 
  const [newStore, setNewStore] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStore((prevStore) => ({
      ...prevStore,
      [name]: value,
    }));
  };
  const handleEditSubmit = (id, newStore) => {
    console.log(id);
    console.log(newStore);
    updateStore(id, newStore);
    // toggleModal()
  };
  const columns = [
    // { field: 'id', headerName: 'ID', width: 100 },
    { field: "id", headerName: "ID", width: 200, editable: false },
    { field: "name", headerName: "Store", width: 200, editable: true },
    { field: "branch_location", headerName: "Branch Location", width: 200, editable: false },
    { field: "store_number", headerName: "Store Number", width: 200, editable: false },
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
            onClick={() => deleteStore(params.row.id)}
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
        <StoreModal
          content={"Store"}
          header={"Add New +"}
          createStore={createStore}
        />
      </CustomButton>
      <DataGrid
        rows={stores}
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
    // <div>

    //   <StoreModal content={"Store"} header={"Create"} createStore={createStore} />
     
    //   <div style={{ display: "flex", flexDirection: "column" }}>
    //     {stores.map((store) => (<SingleStore key={store.id} store={store} updateStore={updateStore} deleteStore={deleteStore} />))}
      
    //   </div>
    // </div>
  )
}

export default Stores