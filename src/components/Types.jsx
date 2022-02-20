import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Types(){

const [types,setTypes]=useState([])

    const fetchTypes=()=>{
        axios('https://pokeapi.co/api/v2/type')
        .then(({data})=>{
            
            setTypes(data.results)
        })
        .catch((err)=>{
            console.log(err)
        })
    
    }

    useEffect(()=>{
        fetchTypes();
        
        return ()=>{
            setTypes([]);
        }
    })
    return(
        <div style={{display:'flex',flexWrap:'wrap',gap:'20px',flexDirection:'column',margin:'20px'}}>
            {types.map((e)=>(
            <Link to={`/types/${e.name}`}>{e.name}</Link>
            ))}    
        </div>
    )
}