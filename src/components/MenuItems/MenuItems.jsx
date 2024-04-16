import { useContext, useState } from "react";
import MenuCard from "../MenuCard/MenuCard"
import { InventoriesContext } from '../../context/InventoriesContext';
import { Paper } from "@mui/material";

export default function MenuItems({ order, setOrder }) {
  const { inventories } = useContext(InventoriesContext);

  return (

    <div style={{ display: "flex", justifyContent: "space-around", gap: 80, display: "grid", gridTemplateColumns: "20% 20% 20% 20%" }}>

      {inventories.map((inventory) => (
        <MenuCard key={inventory.id} inventory={inventory} order={order} setOrder={setOrder} />
      ))}

    </div>

  );
}