import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navegacao from './components/Navegacao'
import Pokedex from './containers/pokedex'

export default function App(){
  return(
    <Router>
      <Navegacao/>
      <Routes>
        <Route path="/" element={<Pokedex/>} />
      </Routes>     
    </Router>
  )
}