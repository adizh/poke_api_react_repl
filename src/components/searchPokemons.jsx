import React,{useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'
export default  function searchPokemons({pokemon,names,setThis}){
    const [search,setSearch]=useState([])
    useEffect(()=>{ 
       getSingleOne() 
      return () => {
      setSearch({})
    }
    },[pokemon])
    const getSingleOne=()=>{
        pokemon.forEach(async(item)=>{
try{
    const res=await axios(`https://pokeapi.co/api/v2/pokemon/${names}
`)
    setSearch(res.data)
}catch(err){
    console.log(err)
}
        })
    }

    return(
            <div 
               onClick={()=>setThis(search)}
                class='searching'>
          
                    <img src={`${

 search && search?.sprites?.other?.dream_world?.front_default
          ? search?.sprites?.other?.dream_world?.front_default
          : search?.sprites?.other?.home?.front_default
                    }`}   
alt='sds' />            
         <p  >   {search.name}</p> 
         
    </div>
    )
} 