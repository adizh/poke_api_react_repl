import React,{useState,useEffect} from 'react';
import {
  Navigate,
} from 'react-router-dom';
import axios from 'axios'
import ReactPaginate from "react-paginate";
import 'bootstrap/dist/css/bootstrap.min.css'
import PokemonItem from './pokemonItem'
import Search from './searchPokemons';
import '../App.css';
import Types from './Types'
function Pokemon({loggedIn,mainRes,
                 pageCount, getMainPokemons,setPageCount
                 }) 
{
let perPage=20;
/* if (!loggedIn) {
    return <Navigate to="/login" />;
  } */
  const items=['apples','banana','orange']

  const [visible, setVisible] = useState(false)
  const [filtered,setFiltered]=useState(mainRes)
  const [results,setResults]=useState([])
  const [showRes,setShowRes]=useState(false)
  const [val,setVal]=useState('')

 const setThis = res => {
     setVal(res.name)
     filterBySearhc()
     setShowRes(false)
    console.log(val)
     console.log('data from setThs',res)
 }
    
    const filterAutoComplete=()=>{
setResults(filtered.filter((e)=>e.name.includes(val))
          || mainRes.filter((e)=>e.name.includes(val))
          )
        if(!val.length){
            setShowRes(false)
        }
    }
    useEffect(()=>{
        filterBySearhc()
    },[val])
    const filterBySearhc=()=>{
    setFiltered(mainRes.filter((item)=>
    item.name.includes(val)))
    }
    const inputChange=(e)=>{
        setVal(e.target.value);
        //filterBySearhc()
        if(val && val.length){
          setShowRes(true)
          filterAutoComplete()
  }
    }
  const toggleVisible = () => {
    const scrolled = document.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  window.addEventListener('scroll', toggleVisible);
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

    const handlePageClick=(number)=>{
        setPageCount(number.selected)
        getMainPokemons({
            currentPage: number.selected + 1,
            perPage:perPage
        })
       scrollToTop()
    }

  return (
   <div>
         <input placeholder='search for pokemon'
            style={{margin:'30px auto',display:'block',
                   }}
            onChange={inputChange} type='text'
             
             value={val}
             />
       <div class='search'>
         {val.length  && showRes!==false? results.map((e)=>(
        <Search 
            setThis={setThis}
            key={e.name}
            pokemon={filtered}
           names={e.name}   
           />
       )) : ""
       }
       </div>
<Types />
       <div class='pokemons'> 
       {filtered && val.length ? filtered.map((e)=>(
        <PokemonItem 
            key={e.name}
            pokemon={e}
           names={e.name}   
           />
       )) : 
       mainRes.map((e)=>(
        <PokemonItem 
            key={e.name}
            pokemon={mainRes}
           names={e.name}   
           />
       ))
       }
   {!filtered.length?<div>no res</div>:''}
           
       </div>
  <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />

    
   </div>
  )

}

export default Pokemon;