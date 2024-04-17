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

export default function Checkout({ order, setOrder }) {
  const { sales, createSale, updateSale, deleteSale } = useContext(SalesContext);
  const removeOrder = (id) => {
    setOrder(order.filter(item => item.id !== id));

  }
  return (

    <Paper elevation={12} sx={{

      position: "relative"

    }} >

      <StorefrontIcon />
      Orders:
      <Divider />
      <Card
        sx={{
          width: 320,
          boxShadow: "lg",
          overflowY: 'auto', maxHeight: '500px',
          position: "relative"

        }}
      >
        <CardContent sx={{ backgroundColor: "black" }}>
          <Typography>
            {order.map(item => (
              <div key={item.id}>
                {item.name} {item.price}
                <Divider />
                <Button
                  onClick={() => removeOrder(item.id)}
                  sx={{

                  }}
                >
                  Remove
                </Button>
              </div>
            ))}
          </Typography>
        </CardContent>

      </Card>
      <Paper elevation={10}  >

        <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>SubTotal: $0.00</Typography>
        <Typography level="title-lg">Total: $0.00</Typography>

        <CardActions buttonFlex="1" sx={{
   display: "flex",
   justifyItems: "flex-end"
   

 }} >
          <ButtonGroup >
            <Button style={{ backgroundColor: "blue", color: "white" }}>Hold</Button>
            <Button style={{ backgroundColor: "green", color: "white" }}>Pay</Button>
          </ButtonGroup>
        </CardActions>
      </Paper>
    </Paper>
  );
}
