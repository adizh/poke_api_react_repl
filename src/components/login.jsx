import React,{useState} from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
} from 'react-router-dom';
function Login(
    {loggedIn,                                   setLoggedIn} 
) {
    const [email,setEmail]=useState('')
    const submitForm=(e)=>{
        e.preventDefault()
       if( email && email.length  > 5 ){
            setLoggedIn(true)
       }
    }
     if(loggedIn){
          return  <Navigate to="/" />
      }
    return(
        <div>
        Login page
          <form onSubmit={submitForm}>
                <input type='email'
                    onChange={(e)=>setEmail(e.target.value)}
                    />
               < button type='submit'> Submit</button>
            </form>  
        </div>
    )
}

export default Login