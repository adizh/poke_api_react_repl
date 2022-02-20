import React,{useState,useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Pokemon from './components/pokemon'
import Login from './components/login'
import Detail from './components/TypesDetail'

import PokemonDetail from './components/pokemonDetail'
import axios from 'axios'
function App() {
    const [mainRes,setMainRes]=useState([])
    const [loggedIn,setLoggedIn]=useState(false )
    const [pageCount,setPageCount]=useState(1)
let perPage=20;
    
console.log('hello from App.jsx')
const getMainPokemons=async( { currentPage, perPage })=>{
    await axios(
 `https://pokeapi.co/api/v2/pokemon?offset=${(currentPage  - 1) * perPage}&limit=${perPage}`
    ).then(({data})=>{
        console.log(data)
        setPageCount(data.count / perPage)
        setMainRes(data.results)
    })
}
    useEffect(()=>{
       getMainPokemons({
        currentPage: pageCount,
        perPage:perPage
       })
    },[])
    
  return (
    <Routes>
    <Route path='/' element={<Pokemon loggedIn={loggedIn} mainRes={mainRes} pageCount={pageCount} getMainPokemons={getMainPokemons} setPageCount={setPageCount}
                                 />}>
    </Route>
          <Route path='/:pokemonName' element={<PokemonDetail pokemon={mainRes}/>}/>

       <Route path='/types/:typeName' element={<Detail />}/> 
        
        {/*} <Route path='/' element={<Pokemon
                                     loggedIn={loggedIn}
                                     /
                                     
                                     >}
            />*/}
        {/*<Route path="/login" element={<Login
       loggedIn={loggedIn}
                                          setLoggedIn={setLoggedIn}
                                          />} />   */}    
        
      </Routes>
  );
}

export default App;