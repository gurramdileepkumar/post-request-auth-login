import axios from 'axios';
import React, { useState,useEffect, useRef } from 'react'

const Register = () => {
   const [formData,setFormData]=useState([]);
   const [companyname,setCompanyname]=useState('');
   const [address,setAddress]=useState('');
   const [companytype,setCompanytype]=useState('');
   const [contactperson,setContactperson]=useState('');
   const [city,setCity]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');


  
   

   const resetForm=()=>{
      setCompanyname('');
      setAddress('');
      setContactperson('');
      setCity('');
      setEmail('');
      setPassword('')
   }

   const submitHandler=(e)=>{
      e.preventDefault();
      let data={
         CompanyName:companyname,
         Address:address,
         CompanyType:companytype,
         ContactPerson:contactperson,
         city:city,
         email:email,
         password:password
      }

      // console.log(JSON.stringify(data));
      
      axios.post("https://ananthjeevan.in/labourindia_app/domains/public/api/Employeeregister",data).then(resp=>{
         alert(resp.data.message);
         setFormData(resp.data)
      }).catch(err=>console.log(err));
       
      resetForm();
         
    }

  
  return (
    <div>
      <h1>Register</h1>
        <form onSubmit={submitHandler}>
            <div>
               <label htmlFor='companyname'>companyname</label>
               <input type='text' id='companyname' name="companyname" value={companyname} required onChange={(e)=>setCompanyname(e.target.value)} />
            </div>
            <div>
               <label htmlFor='address'>Address</label>
               <input type='text' id='address' required name="address"  value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div>
               <label htmlFor='companytype'>companytype</label>
               <input type='text' id='companytype' required name="companytype"  value={companytype} onChange={(e)=>setCompanytype(e.target.value)}/>
            </div>
            <div>
               <label htmlFor='contactperson'>contactperson</label>
               <input type='text' id='contactperson' required name="contactperson"  value={contactperson} onChange={(e)=>setContactperson(e.target.value)}/>
            </div>
            <div>
               <label htmlFor='city'>city</label>
               <input type='text' id='city' required name="city"  value={city} onChange={(e)=>setCity(e.target.value)}/>
            </div>
            <div>
               <label htmlFor='email'>email</label>
               <input type='text' id='email' required name="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
               <label htmlFor='password'>password</label>
               <input type='text' id='password' required name="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
               <button type='submit'>Submit</button>
            </div>
        </form>
      
    </div>
  )
}

export default Register
