import React, { useState } from 'react'
import { TbLock } from "react-icons/tb";
import classes from './SingUp.module.css'
import { NavLink,useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const REGISTERURL = 'api/v1/users/sign_up'
function SignUp() {
    const navigate = useNavigate()
    const [firstName,setFirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [errorMgs,setErrorMgs] = useState("")
    const [success,setSuccess] = useState("")

    const [firstnameError,setFirstNameError] = useState("")

    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")


    const handlerSignup =async (e) =>{
        e.preventDefault()
        
        try {
            const response = await axios.post(REGISTERURL,JSON.stringify(
                {
                    first_name:firstName,
                    last_name:lastName,
                    email:email,
                    password:password
                }),
                {
                    headers:{ 'Content-Type': 'application/json'}
                });
            console.log(response);
            console.log('In Try Block')
            console.log(response);
            if(response.status === 200){
                setSuccess("You have registered successfully, please login")
            }
            setTimeout(()=>{
                if(response.status===200){
                    navigate('/signin')
                    toast.success("You have registered successfully",{position:toast.POSITION.TOP_RIGHT})
                }
            },2500)
            if(!response.ok){
                setErrorMgs("registered failed")
            }
            setFirstName("")
            setlastName("")
            setEmail("")
            setPassword("")
        }catch (error) {
            console.log('In Catch Block')
            console.log(error);
            if(error.response) {
                let errors = error.response.data.errors;
                if(errors.email) {
                    setEmailError(errors.email)
                }
                if(errors.first_name) {
                    setFirstNameError(errors.first_name)
                }
                if(errors.password) {
                   setPasswordError(errors.password)
                }
            }
        
        }
    }

  return (
    <div className={classes.SinupContainer}>
        <div className={classes.content}>
            <main className={classes.icon}>
             e  <h1><TbLock/></h1>
               <p>Sign Up</p>
            </main>
            {firstnameError && <small>{firstnameError}</small>}
           { !success &&  <form className={classes.sigupForm} onSubmit={handlerSignup}>
                <div className={classes.names}>
                    <input type="text" 
                        placeholder='First Name*' 
                        value={firstName} 
                        onChange={(e)=>setFirstName(e.target.value)}
                        />
                        
                    <input type="text" 
                        placeholder='Last Name*'
                        value={lastName}
                        onChange={(e)=>setlastName(e.target.value)}
                        />
                </div>
                
                <div>
                    {emailError && <small>{emailError}</small>}
                <input className={classes.email} 
                    type="email" 
                    name="email" 
                    id="email"  
                    placeholder='Email Address'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    autoComplete='off'
                />
                </div>

                <div>
                    {passwordError && <small>{passwordError}</small>}
                <input className={classes.password} 
                    type="password" 
                    name="password" 
                    id="password"  
                    placeholder='Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    
                />
                </div>
                <div>
                    <input type="checkbox" /> <small>I Want to receice inspiration,marketing promotions and updates via email.</small>
                </div>
                <button className={classes.sigupbtn}>SigUp</button>
                <ToastContainer></ToastContainer>
            </form>}
                {success && <h4>{success}</h4>}
                <NavLink to="/signin"><small>already have an account ? sigin</small></NavLink>
        </div>
    </div>
  )
}

export default SignUp