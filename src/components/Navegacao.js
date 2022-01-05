import react from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) =>({
    AppBar:{
        backgroundColor: '#7f58af',
       
    },
    justify:{
        justifyContent: 'center'
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
}))

export default function Navegacao(){
    const classes = useStyles()
    
    return(
        <AppBar className={classes.AppBar} position="fixed">
            <Toolbar className={classes.justify}>
                <Link to="/" className={classes.link}>
                    <Typography>PokeAll - Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}