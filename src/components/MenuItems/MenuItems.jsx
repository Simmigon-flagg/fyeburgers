import { useContext } from "react";
import MenuCard from "../MenuCard/MenuCard"
import { InventoriesContext } from '../../context/InventoriesContext';

import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
export default function MenuItems() {
  const { inventories, createInventory, updateInventory, deleteInventory } = useContext(InventoriesContext);
  return (


    // <div>
    // <div style={{ gap: 30 , }}>


    // <div style={{ display: "flex", justifyContent: "space-around", gap: 5}}> 
  <div style={{ display: "flex", justifyContent: "space-around", gap: 80, display: "grid", gridTemplateColumns: "20% 20% 20% 20%"}}>

      {inventories.map((inventory) => (


        <MenuCard key={inventory.id} inventory={inventory} />


      ))}

    </div>

  );
}