import { Grid, Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme)=>({
    card: {
        cursor: 'pointer',
        backgroundColor: 'black', 
        color: 'white',
        "&:hover": {
            backgroundColor: "rgb(90,90,90)"
        }
    },
    cardMedia: {
        margin: "auto",
        width: 130,
        height: 130
    },
    cardContent:{
        textAlign: 'center'
    }
}))

export default function CardPoke(props){
    const classes = useStyles();
    const {pokemon, img} = props
    const { id, nome} = pokemon
    return(
        <Grid item xs={12} sm={2} key={id}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={img}> </CardMedia>
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            {nome}
                        </Typography>
                    </CardContent>
            </Card>
        </Grid>
    )
}