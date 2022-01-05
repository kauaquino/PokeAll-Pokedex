import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import {  POKEMON_API_URL, IMG_API_URL } from '../config'
import { useParams, } from 'react-router-dom'
import { Box, CircularProgress, makeStyles, Typography, Grid, Button } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles((theme)=> ({
    pokeContainer:{
        margin: "auto",
        width: "80%",
        backgroundColor: "#7f58af",
        color: "white",
        marginTop: 75,
        textAlign: "center",
        borderRadius: 5,
        paddingTop: 30
    },
    textTitle:{
        textTransform: "upperCase",
        
    },
    img:{
        width: "170px",
        height: "170px"
    },
    pokemonInfo:{
        bottom: 100,
        width: "100%",
    },
    hr:{
        height: "0.01mm",
        width: "100%",
        
    },
    favorito:{
        height: 50,
        width: 50,
        marginTop: 15
    },
    text:{
        fontSize: 30,
        color: "white"
    },
    containerPoke:{
        textAlign: "center",
        placeContent: "center",
        paddingBottom: 30,
    },
}))

export default function Detalhes(){
        let { id } = useParams()

        const [pokemon, setPokemon] = useState(null)
        const classes = useStyles()
        useEffect(()=>{
         axios.get(POKEMON_API_URL + "/" + id).then((response)=>{
             if(response.status >= 200 && response.status < 300){
                let pokeObject = {
                    id: id,
                    nome: response.data.name,
                    peso: response.data.weight,
                    altura: response.data.height,
                    tipo: response.data.types,

                }
                setPokemon(pokeObject)
             }
         })
        }, [])
    

        if(pokemon){
            return(
               <Box>
                   <Box className={classes.pokeContainer}>
                        <Typography className={classes.titulo} variant="h4">
                                {pokemon?.nome}
                        </Typography>
                        <img className={classes.img} src={IMG_API_URL + "/" + pokemon?.id + ".png"}/>
                        <Box className={classes.pokemonInfo}>
                            <hr className={classes.hr}></hr>
                            <Grid container className={classes.containerPoke}>
                                <Grid item md={2} xs={12} sm={12} >
                                    <Typography className={classes.text}>
                                            Nome
                                            <br></br>
                                        {pokemon?.nome}
                                    </Typography>
                                </Grid>
                                <hr className={classes.hr}></hr>
                                <Grid item md={2} xs={6} sm={6} >
                                    <Typography className={classes.text} variant="h5">
                                            Altura
                                            <br></br>
                                       {pokemon?.altura}m
                                    </Typography>
                                </Grid>
                                <Grid item md={2} xs={6} sm={6} >
                                    <Typography className={classes.text} >
                                            Peso
                                            <br></br>
                                        {pokemon?.peso}kg
                                    </Typography>
                                </Grid>
                                        {pokemon?.tipo.map((Poketipo) =>{
                                            const { name } = Poketipo.type
                                            return (
                                                <Grid item md={2} xs={6} sm={6} key={name}>
                                                    <Typography className={classes.text} variant="h6">
                                                            Tipo
                                                            <br/>
                                                        {name}
                                                    </Typography>
                                                </Grid>
                                            )
                                        })}
                            </Grid>
                        </Box>
                   </Box>
               </Box>
            )
        }else{
            return <CircularProgress/>
        }

}