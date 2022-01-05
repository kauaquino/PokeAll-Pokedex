import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navegacao from './components/Navegacao'
import Detalhes from './containers/detalhes'
import Pokedex from './containers/pokedex'

export default function App(){
  return(
    <Router>
      <Navegacao/>
      <Routes>
        <Route exath path="/" element={<Pokedex/>} />
        <Route exath path="/pokemon/:id" element={<Detalhes/>} />
      </Routes>     
    </Router>
  )
}