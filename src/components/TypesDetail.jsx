import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import PokemonItem from './pokemonItem'
import axios from 'axios'
export default function Detail (){
    const {typeName}=useParams()
    const [type,setType]=useState({})
    useEffect(()=>{
        fetchOne();
    return () => {
      setType({});
    }
    },[])
    const fetchOne=()=>{
        axios(`https://pokeapi.co/api/v2/type/${typeName}`)
        .then(({data})=>{
            setType(data)
            console.log('types dat',data)
        }).catch((err)=>console.log(err))
    }
    return(
        <div> 
      <Link to='/'>Back</Link>
            {/*  {type.map((e)=>(
              <PokemonItem 
                 names={e.name} 
            pokemon={type} key={type.id}/>
            ))} */}
           {type?.pokemon?.map((e)=>(
           <pokemonItem pokemon={e.pokemon}/>
            ))} 

        </div>
    )
}