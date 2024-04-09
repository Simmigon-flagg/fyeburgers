import React, { useContext } from 'react'
import "./Inventories.css"
import { InventoriesContext } from '../../context/InventoriesContext';
import Inventory from '../Inventory/Inventory';
import InventoryModal from '../Modal/InventoryModal';
const Inventories = () => {
  const { inventories, createInventory, updateInventory, deleteInventory } = useContext(InventoriesContext);
  return (
    <div>
      <InventoryModal content={"Inventory"} header={"Create"} createInventory={createInventory} />
      <ul style={{ display: "flex", flexDirection: "column" }}>

        {inventories.map((inventory) => (<Inventory key={inventory.id} inventory={inventory} updateInventory={updateInventory} deleteInventory={deleteInventory} />))}
      </ul>
    </div> ) }

export default Inventories