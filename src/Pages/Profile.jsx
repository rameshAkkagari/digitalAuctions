import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import classes from '../Components/Ul/MainHeaderContent/Profile.module.css';
import { useNavigate } from 'react-router-dom';
import { Profileshimmer } from '../skeletons/ProfileSkeleton';
function Profile(){
    const logout = useNavigate()
    const [user,setUSer] = useState({})
    const token = localStorage.getItem("token")
    const [isLoading,setIsloading] = useState(false)
    const [login,setLogin] = useState("")
    useEffect(()=>{
        async function fetchProfile (){
            try {
                const response = await axios.get('api/v1/users/profile',{
                    headers:{'Authorization': token,}
                })
                console.log(response);
                if(response.status ===200) {
                    setTimeout(()=>{
                        setIsloading(true)
                    },2000)
                }
                setUSer(response.data)
            }catch (err) {
                console.log('catch');
                // console.log(error);
                let error = err.response
                if(error.status ===401){
                    setLogin(error.data.message)
                    localStorage.removeItem('token')
                }
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
    <>
        {login && <h4>{login}</h4>}
        {isLoading && <div className={classes.profilbackdrop}>
            <section className={classes.userinfo}>
                <h1>User Details</h1>
                <img className={classes.userimage} src={'https://joesch.moe/api/v1/' + user.first_name} alt={user.last_name}/>
                    <h2>Name: {user.first_name}</h2>
                    <h3>Last Name: {user.last_name}</h3>
                    <h2>Email: {user.email}</h2>
            <button onClick={handlerLogout}>Log Out</button>
            </section>
        </div>}
        
        {!isLoading && !login && <Profileshimmer/>}
    </>
  )
}

export default Profile