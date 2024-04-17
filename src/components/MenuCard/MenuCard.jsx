import React, { useContext, useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { ListItemText } from "@mui/material";
import { SalesContext } from "../../context/SalesContext";
import Paper from '@mui/material/Paper';

export default function MenuCard({ inventory, order, setOrder }) {

    const [count, setCount] = useState(0)
    const { sales, createSale, updateSale, deleteSale } = useContext(SalesContext);


    const removeItem = () => {
        if (count > 0) {
            setCount(count => count - 1)
        }
    }

    const addItem = (item) => {

        setOrder([...order, item])
    }

    const inputAdd = (e) => {
        const inputValue = parseInt(e.target.textContent, 10);
        setCount(isNaN(inputValue) ? 0 : inputValue);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // e.preventDefault(); // Prevents the default behavior of pressing Enter in a contentEditable element
            inputAdd(e);
        }
    }

    return (
        <Paper elevation={10} >

            <Card >


                <CardHeader subheader={inventory.name} title={inventory.price} />

                <CardMedia
                    component="img"
                    height="100"
                    image={inventory.image}
                    alt={inventory.name}

                />


                <CardActions style={{ display: "flex", justifyContent: "space-around" }}>

                    <RemoveIcon onClick={removeItem} />


                    <IconButton>
                        <ListItemText
                     

                            onBlur={(e) => inputAdd(e)}
                           
                            primary={count}
                            value={count}
                        >{count}</ListItemText>

                    </IconButton>

                    <AddIcon onClick={() => addItem(inventory)} />

                </CardActions >
                <CardActions >
                    <IconButton onClick={() => setCount(0)} aria-label="add to favorites">
                        Remove
                    </IconButton>

                    <IconButton onClick={addItem}>
                        Add
                    </IconButton>
                </CardActions>
            </Card>
        </Paper>
    );
}