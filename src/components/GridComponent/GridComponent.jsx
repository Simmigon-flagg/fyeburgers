import React from 'react'
import "./GridComponent.css"
import { DataGrid } from "@mui/x-data-grid";

const GridComponent = (context) => {
  return (
    <div className="gridContainer">
        <button className="btn-add">
          <InventoryModal
            content={"Inventory"}
            header={"Add New +"}
            createInventory={createInventory}
          />{" "}
        </button>
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
  )
}

export default GridComponent