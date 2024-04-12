import React, { useContext } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./Inventories.css"
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
          <button onClick={() => inventories(params.row.id)}>Read</button>
          <button onClick={() => updateInventory(params.row.id)}>Update</button>
          <button onClick={() => deleteInventory(params.row.id)}>Delete</button>
        </div>
      ),
    },
  ];
  return (
    <div style={{ height: 'calc(100vh - 100px)', width: '100%' }}>
    <DataGrid
      rows={inventories}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5, 10, 20]}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
    // <div>
    //   {/* <InventoryModal content={"Inventory"} header={"Create"} createInventory={createInventory} /> */}
    //   <div style={{ height: 600, width: '100%' }}>
    //   <DataGrid
    //     rows={inventories}
    //     columns={columns}
    //     pageSize={5}
    //     rowsPerPageOptions={[5, 10, 20]}
    //     checkboxSelection
    //     disableSelectionOnClick
    //   />
    // </div>
    //   <div style={{ display: "flex", flexDirection: "column" }}>
    //     {/* {inventories.map((inventory) => (<Inventory key={inventory.id} inventory={inventory} updateInventory={updateInventory} deleteInventory={deleteInventory} />))} */}

    //   </div>
    // </div>
    );
}

export default Inventories