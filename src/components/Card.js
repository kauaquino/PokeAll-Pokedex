import { Grid, Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
    card: {
        cursor: 'pointer',
        backgroundColor: '#7f58af', 
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
    },
    link:{
        textDecoration: 'none',
        fontWeight: 600
    }
}))

function LetterUper(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function CardPoke(props){
    const classes = useStyles();
    const {pokemon, img} = props
    const { id, nome} = pokemon
    return(
        <Grid item xs={6} sm={2} key={id}>
            <Link className={classes.link} to={"/pokemon/" + id}>
                <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={img}> </CardMedia>
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            {LetterUper(nome)}
                        </Typography>
                    </CardContent>
                 </Card>
            </Link>
        </Grid>
    )
}