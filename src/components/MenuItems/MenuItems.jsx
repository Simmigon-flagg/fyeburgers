import { useContext } from "react";
import  MenuCard from "../MenuCard/MenuCard"
import { InventoriesContext } from '../../context/InventoriesContext';
export default function MenuItems() {
  const { inventories, createInventory, updateInventory, deleteInventory } = useContext(InventoriesContext);
  return (
    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: 'wrap', flex: '3 0 25%', gap: 30}}>

      {inventories.map((inventory) => (
        <MenuCard key={inventory.id} inventory={inventory}/>
      ))}
    </div>
  );
}