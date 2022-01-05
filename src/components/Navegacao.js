import react from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) =>({
    AppBar:{
        backgroundColor: 'black'
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
            <Toolbar>
                <Link to="/" className={classes.link}>
                    <Typography>Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}