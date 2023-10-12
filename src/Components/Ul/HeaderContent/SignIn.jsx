import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './SignIn.module.css';
import { TbH3, TbLock } from "react-icons/tb";
import { NavLink,useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';

const LOGIN = '/api/v1/users/sign_in'
function SignIn() {

    const home = useNavigate();

    // const token = useRouteLoaderData('root');

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [usernotFound,setusernotFound] = useState("")
    const [worngpwd,setWorngPwd] = useState("")
    const [serverError,setServerError] = useState("")
    const [login,setLogin] = useState("")


    const loginHandler =async (e) =>{
        e.preventDefault()

        try {
            const response =await axios.post(LOGIN,JSON.stringify({
                email:email,
                password:password
            }),
            {
                headers:{'Content-Type':'application/json'}
            });
            console.log(response);
            
            if(response.status === 200){
                setLogin("Login successful")
                    home("/dashboard")
                    toast("Login successful",{position:toast.POSITION.TOP_CENTER})
                    setTimeout(()=>{
                        window.location.reload(true);
                    },1500)
            }
            console.log(response.data.token);
            const token  = response.data.token;
            localStorage.setItem('token',token)
            setEmail("")
            setPassword("")
            setusernotFound("")
            
        } catch (error) {
            // console.log('In Catch Block')
            if(error.response.status === 404){
                setusernotFound('User not found',{position:toast.POSITION.TOP_RIGHT})
                // window.location.reload(false)
                toast.error("User not found")
            }
            if(error.response.status === 401){
                setWorngPwd("Incorrect password")
                // window.location.reload(false)
                toast.warning("Incorrect password",{position:toast.POSITION.TOP_RIGHT})

            }
            if(error.response.status === 500){
                setServerError("Internal Server Error")
                // window.location.reload(false)
            }
            // window.location.reload(false)
            
        }
        
    }
   
    return (
    <div className={classes.SinupContainer}>
        <div className={classes.content}>
            <main className={classes.icon}>
               <h1><TbLock/></h1>
               <p>Sign In</p>
            </main>

            <form className={classes.sigupForm} onSubmit={loginHandler}>
                {serverError && <h3>{serverError}</h3>}
                {login && <h1>{login}</h1>}
                <div>
                    {usernotFound && <p>{usernotFound}</p>}
                    <input className={classes.email} 
                    type="email" 
                    name="email" 
                    id="email"  
                    placeholder='Email Address'
                    autoComplete='off'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div>
                    {worngpwd && <p>{worngpwd}</p>}
                    <input className={classes.password} 
                        type="password" 
                        name="password" 
                        id="password"  
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <button className={classes.sigupbtn}>Sign In</button>
                <ToastContainer></ToastContainer>
                <div className={classes.user}>
                    <a href="#"><small>Forgot password</small></a>
                    <NavLink to="/signup"><small>Don't have an account ? sig Up</small></NavLink>
                </div>
                
            </form>
               

                
        </div>
    </div>
   
  )
}

export default SignIn