import { Box, CircularProgress, Grid, makeStyles } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardPoke from '../components/Card'
import { IMG_API_URL, POKEMON_API_URL } from '../config'

const useStyles = makeStyles((theme)=> ({
    pokeContainer:{
        textAlign: "center",
        padding: "80px 10px 0px 10px",
        backgroundColor: "rgb(68,68,68)"
    }
}))

export default function Pokedex(){
    const classes = useStyles()
    const [pokemonData, setPokemonData] = useState(null)
    
    useEffect(()=>{
        axios.get(POKEMON_API_URL + "?limit=800").then((response)=>{
           if(response.status >= 200 && response.status < 300){
               const {results} = response.data
               let PokemonsList = []

               results.forEach((pokemonData, index) =>{
                   index++
                    let pokemon = {
                        id: index,
                        img: IMG_API_URL + index + ".png",
                        nome: pokemonData.name
                    }
                    PokemonsList.push(pokemon)
               
               });
               setPokemonData(PokemonsList)
           } 
        })
    }, [])


    return(
     <Box>
         {pokemonData ? (
             <Grid className={classes.pokeContainer} container spacing={2}>
                 {pokemonData.map((poke) =>{
                     return (
                         <CardPoke pokemon={poke} img={poke.img} key={poke.id}/>
                     )
                 })}
             </Grid>
         ) : (
             <CircularProgress style={{marginTop: 100}} />
         )}
     </Box>
    )
}