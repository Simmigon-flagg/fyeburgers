import pizza from "../../static/images/package-lock.jpeg"
import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from "@mui/material/InputLabel";
import { ListItemText } from "@mui/material";
import { SalesContext } from "../../context/SalesContext";
import Paper from '@mui/material/Paper';

export default function MenuCard({ inventory }) {

    const [count, setCount] = React.useState(0)
    const { sales, createSale, updateSale, deleteSale } = useContext(SalesContext);


    const removeItem = () => {
        if (count > 0) {
            setCount(count => count - 1)
        }
    }

    const addItem = () => {

        setCount(count => count + 1)
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
                <div >

                    <CardHeader subheader={inventory.name} title={inventory.price} />
                </div>
                <CardMedia
                    component="img"
                    height="100"
                    image={pizza}
                    alt={inventory.name}
                />


                <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
                    <IconButton onClick={removeItem} aria-label="Remove Item">
                        <RemoveIcon />
                    </IconButton>

                    <IconButton>
                        <ListItemText
                            contentEditable
                            shrink
                            onBlur={(e) => inputAdd(e)}
                            onKeyDown={handleKeyPress} // Add this line
                            primary={count}
                        >{count}</ListItemText>

                    </IconButton>
                    <IconButton onClick={addItem} aria-label="Add Item">
                        <AddIcon />
                    </IconButton>
                </CardActions>
                <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
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