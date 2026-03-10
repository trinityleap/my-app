import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task'
import Home from './Home'
import About from './About'
import Todos from './Todos'
import Error from './Error'
import PokemonPage from './PokemonPage'
import PokemonComp from './PokemonComp'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <div>
      <nav> 
        <Link to="/">Home</Link> |{" "}
        <Link to="/todos">Todos</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/pokemon">Pokemon</Link> |{" "}
        
        {/* <Link to="/error">Error</Link> */}
      </nav>

      <Routes> {/* container that holds routes  */}
        {/* defines which component loads for each URL */}
        <Route path="/" element={<Home />} /> 
        <Route path="/todos" element={<Todos />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/error" element={<Error />} /> */}

        <Route path="*" element={<Error />} />
    
        <Route path='/pokemon' element={<PokemonPage />} />
        <Route path="/pokemon/:name" element={<PokemonComp />} />
      </Routes>

    </div>
  )
  
}



export default App
