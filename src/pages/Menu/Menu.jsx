import React from 'react'
import MenuItems from "../../components/MenuItems/MenuItems"
import { Box, Container } from '@mui/material'
import Checkout from '../../components/Checkout/Checkout'

const Menu = () => {
    return (


        <div style={{ display: "flex", justifyContent: "space-around" ,marginTop:100}}>
            {/* <div style={{ display: "flex", justifyContent: "space-around", gap: 80, display: "grid", gridTemplateColumns: "20% 20% 20%", gridTemplateRows: "33% 33% 33%" }}> */}

           
            <MenuItems />
            <Checkout />
        </div>




    )
}

export default Menu