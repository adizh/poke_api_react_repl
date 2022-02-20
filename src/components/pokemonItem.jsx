import React,{useState,useEffect} from 'react'
import '../App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
function pokemonItem({pokemon,names}) {
  const [pokItem,setPokItem]=useState([])    
  useEffect(()=>{ 
       getSingleOne() 
      return () => {
      setPokItem({});
    }
    },[pokemon])
    const getSingleOne=()=>{
        pokemon.forEach(async(item)=>{
try{
    const res=await axios(`https://pokeapi.co/api/v2/pokemon/${item.name}
`)
    setPokItem(res.data)
}catch(err){
    console.log(err)
}
        })
    }
  return(
            <div class='pokItem'>
         <p>{pokItem.id}</p>
          
                    <img src={`${

 pokItem && pokItem?.sprites?.other?.dream_world?.front_default
          ? pokItem?.sprites?.other?.dream_world?.front_default
          : pokItem?.sprites?.other?.home?.front_default
                    }`}   
alt='sds' />            
         <p>   {names}</p> 
            <Link 
    to={`/${pokItem.name}`}            
        className='btn btn-primary'        >Info</Link>
    </div>
  )
}
export default pokemonItem