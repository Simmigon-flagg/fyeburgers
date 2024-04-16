import React, { useContext, useState } from 'react'
import MenuItems from "../../components/MenuItems/MenuItems"
import { Box, Container } from '@mui/material'
import Checkout from '../../components/Checkout/Checkout'
import { InventoriesContext } from '../../context/InventoriesContext'

const Menu = () => {
    const [order, setOrder] = useState([])

    const { inventories } = useContext(InventoriesContext);
    return (
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: 100 }}>
            <h1>Menu</h1>
            <div>
                {/* <div style={{ display: "flex", justifyContent: "space-around", gap: 80, display: "grid", gridTemplateColumns: "20% 20% 20%", gridTemplateRows: "33% 33% 33%" }}> */}


                <MenuItems order={order} setOrder={setOrder} />
            </div>
            <Checkout order={order} setOrder={setOrder} />
        </div>




    )
}

export default Menu