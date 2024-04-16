import React, { useContext } from "react"
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import { Paper } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import Divider from '@mui/material/Divider';
import { SalesContext } from "../../context/SalesContext";

export default function Checkout({ order, setOrder  }) {
  const { sales, createSale, updateSale, deleteSale } = useContext(SalesContext);
  const removeOrder = (id) => {
    setOrder(order.filter(item => item.id !== id ));
    
 }
  return (

    <Paper elevation={12} >

      <StorefrontIcon />
      Orders:
      <Divider />
      <Card
        sx={{
          width: 320,
          boxShadow: "lg",
          overflowY: 'auto', maxHeight: '500px'

        }}
      >
        <CardContent >


          <Typography >
            {order.map(item => <div> <div key={item.id}>{item.name} {item.price} </div> <Button onClick={() => removeOrder(item.id)} style={{ backgroundColor: "red", color: "white" }}>Remove</Button><Divider /></div>)}
          </Typography>



        </CardContent >

      </Card>
      <Paper elevation={10}  >

        <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>SubTotal: $0.00</Typography>
        <Typography level="title-lg">Total: $0.00</Typography>

        <CardActions buttonFlex="1"  >
          <ButtonGroup >
            <Button  style={{ backgroundColor: "blue", color: "white" }}>Hold</Button>
            <Button style={{ backgroundColor: "green", color: "white" }}>Pay</Button>
          </ButtonGroup>
        </CardActions>
      </Paper>
    </Paper>
  );
}
