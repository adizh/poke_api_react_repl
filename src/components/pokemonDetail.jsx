import React,{useState,useEffect} from 'react'
import { useParams, Link } from "react-router-dom"
import axios from 'axios'
import '../App.css'

export default function pokemonDetail({pokemon}){
    const [detail,setDetail]=useState({})
    const [isHidden,setIsHidden]=useState(false)
    const {pokemonName}=useParams()
const filteredPokemons= pokemon.filter((e)=>e.name ===pokemonName)
    
    useEffect(()=>{ 
       getSingleOne() 
      return () => {
      setDetail({});
    }; 
    },[pokemon])
    const getSingleOne=()=>{
        filteredPokemons.forEach(async(item)=>{
try{
    const res=await axios(`https://pokeapi.co/api/v2/pokemon/${pokemonName}
`)
    console.log('data from detail',res.data)
    setDetail(res.data)
}catch(err){
    console.log(err)
}
        })
    }
    console.log('filtered',detail)
    return(
             <div class='detail'>
         <p>{detail.id}</p>
          
                    <img src={`${

 detail && detail?.sprites?.other?.dream_world?.front_default
          ? detail?.sprites?.other?.dream_world?.front_default
          : detail?.sprites?.other?.home?.front_default
                    }`}   
alt='sds' />            
         <p>   {detail.name}</p> 
<p>{detail?.abilities?.filter((e)=>e.is_hidden===false)
.map((e)=>e.ability.name).join('')
}</p>
<p className={`${isHidden===false ? 'hide':'show'}`}>
{detail?.abilities?.filter((e)=>e.is_hidden!==false)
.map((e)=>e.ability.name).join('')
}</p>
                 
<button className='btn btn-info'
onClick={()=>setIsHidden(!isHidden)}
    >{!isHidden ? 'Show' :'Hide'}</button>
                 
<Link to='/' className='btn btn-danger'>Back</Link>            
    </div>
    )
}
