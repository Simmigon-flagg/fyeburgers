import pizza from "../../static/images/package-lock.jpeg"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from "@mui/material/InputLabel";


export default function MenuCard({ inventory }) {
    
    return (
        
        <Card sx={{ maxWidth: 200, maxHeight: 500 }}>
            <CardHeader
                title={inventory.name}
                subheader={inventory.price}
            />
            <CardMedia
                component="img"
                height="120"
                image={pizza}
                alt={inventory.name}
            />

            <CardActions style={{ display: "flex", justifyContent: "center" }}>
                <IconButton aria-label="add to favorites">
                    <RemoveIcon />
                </IconButton>

                <IconButton>
                    <InputLabel shrink>20</InputLabel>

                </IconButton>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}