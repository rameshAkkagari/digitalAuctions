import React, { useEffect, useState } from 'react'
import axios from '../api/';
import classes from '../Components/Ul/MainHeaderContent/Profile.module.css';
import { useNavigate } from 'react-router-dom';
function Profile() {
    const logout = useNavigate()
    const [user,setUSer] = useState({})
    const token = localStorage.getItem("token")

    const PROFILE = 'api/v1/users/profile'

    useEffect(()=>{
       async function fetchProfile (){
        try {
            const response = await axios.get(PROFILE,{
                headers:{'Authorization': token,}
            })
            console.log(response.data);
            setUSer(response.data)
          } catch (error) {
            
          }
        }
        fetchProfile()
    },[token])
    const handlerLogout  =() =>{
        localStorage.removeItem("token")
        logout("/")
        window.location.reload(true)
    }
  return (
    <div className={classes.profilbackdrop}>
        <section className={classes.userinfo}>
            <h1>User Details</h1>
            <img className={classes.userimage} src={'https://joesch.moe/api/v1/' + user.first_name} alt={user.last_name}/>
              <h2>Name: {user.first_name}</h2>
              <h3>Last Name: {user.last_name}</h3>
              <h2>Email: {user.email}</h2>
         <button onClick={handlerLogout}>Log Out</button>
         </section>
    </div>
  )
}

export default Profile