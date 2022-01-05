import { Box, CircularProgress, Grid, makeStyles } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardPoke from '../components/Card'
import { IMG_API_URL, POKEMON_API_URL } from '../config'

const useStyles = makeStyles((theme)=> ({
    pokeContainer:{
        textAlign: "center",
        padding: "80px 10px 0px 10px",
        backgroundColor: "#D6D1F5"
    }
}))

export default function Pokedex(){
    const classes = useStyles()
    const [pokemonData, setPokemonData] = useState(null)
    
    useEffect(()=>{
        axios.get(POKEMON_API_URL + "?limit=402").then((response)=>{
           if(response.status >= 200 && response.status < 300){
               const {results} = response.data
               let PokemonsList = []

               results.forEach((pokemonData, index) =>{
                   index++
                    let pokemon = {
                        id: index,
                        img: IMG_API_URL + "/pokemon_icon_"+ ("000" + index).slice(-3) +"_00.png",
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