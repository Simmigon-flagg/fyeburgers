import { useContext } from "react";
import MenuCard from "../MenuCard/MenuCard"
import { InventoriesContext } from '../../context/InventoriesContext';
import { Paper } from "@mui/material";

export default function MenuItems() {
  const { inventories } = useContext(InventoriesContext);
  return (


    // <div>
    // <div style={{ gap: 30 , }}>


    // <div style={{ display: "flex", justifyContent: "space-around", gap: 5}}> 

    <div style={{ display: "flex", justifyContent: "space-around", gap: 80, display: "grid", gridTemplateColumns: "20% 20% 20% 20%" }}>

      {inventories.map((inventory) => (
       

          <MenuCard key={inventory.id} inventory={inventory} />

     

      ))}

    </div>

  );
}