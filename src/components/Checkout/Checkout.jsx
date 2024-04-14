import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import { Paper, TextField } from "@mui/material";
import { Textarea } from "@mui/joy";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { blue } from "@mui/material/colors";
export default function Checkout() {
  return (
    <Card
      sx={{
        width: 320,
        boxShadow: "lg",
      }}
    >
      <CardContent>

        <StorefrontIcon />
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >



        </form>
        <TextField style={{ display: "flex", alignItem: "center" }}
          minRows={19}
          maxRows={21}
          multiline
          sx={{ mb: 1 }}
        ></TextField>
        <Typography level="title-lg">Total: 0.00</Typography>
        <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
          SubTax: 0.00
        </Typography>
      </CardContent>
      <Paper elevation={10}>
        <CardActions buttonFlex="1">
          <ButtonGroup>
            <Button style={{ backgroundColor: "blue", color: "white" }}>Hold</Button>
            <Button style={{ backgroundColor: "green", color: "white" }}>Pay</Button>
          </ButtonGroup>
        </CardActions>
      </Paper>
    </Card>
  );
}
