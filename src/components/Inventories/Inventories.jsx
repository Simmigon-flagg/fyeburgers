/* Inventories.js */

import React, { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./Inventories.css";
import { InventoriesContext } from '../../context/InventoriesContext';
import Inventory from '../Inventory/Inventory';
import InventoryModal from '../Modal/InventoryModal';

const Inventories = () => {
  const { inventories, createInventory, updateInventory, deleteInventory } = useContext(InventoriesContext);
  const columns = [
    // { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'quantity', headerName: 'Quantity', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div>
          <button className="btn-action" onClick={() => updateInventory(params.row.id)}>Update</button>
          <button className="btn-action" onClick={() => deleteInventory(params.row.id)}>Delete</button>
        </div>
      ),
    },
  ];
  return (
    <div className="container">
      <div className="gridContainer">
        <DataGrid
          rows={inventories}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default Inventories;
