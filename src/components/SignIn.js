import axios from 'axios';
import React, { useState } from 'react'

const SignIn = () => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const loginHandler=(e)=>{
        e.preventDefault();
        let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9FbXBsb3llZWxvZ2luIiwiaWF0IjoxNjcyMjk2MDU2LCJleHAiOjE2NzIyOTk2NTYsIm5iZiI6MTY3MjI5NjA1NiwianRpIjoiRlk4MFVhUDE5U0dkQ1Y5USIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.xjC1-zBLCMntfFvdVni99VqZEo5dNAat_NGehkyDHiA"
        let data={
            email:email,
            password:pass
        }
        let config = {
            headers: {
              'Authorization': 'Bearer ' + token,
            }
          }
          axios.post( 
              'https://ananthjeevan.in/labourindia_app/domains/public/api/Employeelogin',
              data,
              config
            )
            .then( ( response ) => {
                console.log(response);
                console.log(response.data);
              alert( response.data.success?"login success":"login failed"
                )
            } )
            .catch(err=>console.log(err))
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loginHandler}>
            <label>Email:</label>
            <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            <label>Password:</label>
            <input type="password" value={pass}  onChange={(e)=>setPass(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
      
    </div>
  )
}

export default SignIn
