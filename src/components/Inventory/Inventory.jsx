import React from 'react'

import "./Inventory.css";

import InventoryModal from '../Modal/InventoryModal';

const Inventory = ({ inventory, updateInventory, deleteInventory }) => {


  return (
    
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <p>{inventory.name}</p>
        <InventoryModal content={"Inventory"} header={"Read"} inventory={inventory} />
        <InventoryModal content={"Inventory"} header={"Update"} inventory={inventory} updateInventory={updateInventory} />
        <InventoryModal content={"Inventory"} header={"Delete"} inventory={inventory} deleteInventory={deleteInventory} />
      </div>


  )
}

export default Inventory