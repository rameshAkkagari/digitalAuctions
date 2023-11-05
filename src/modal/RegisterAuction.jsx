import React, { useState } from 'react'
import ReactDOM from "react-dom";
import classes from './ConformModal.module.css';
import { RegisterActions } from '../store/Register-slice';
import { useDispatch } from 'react-redux';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
function RegisterAuction({publickAuction}) {
    const [badrequest,setBadRequest] = useState("")
    const [errorRegister,setErrorRegister] = useState("")
    const [noAuction,setNoAuction] = useState("")
    const [Unauthorized,setUnauthorized] = useState("")
    const dispatch = useDispatch()
        const Backdrop = () =>{
            const registerBack  =() =>{
                dispatch(RegisterActions.registerToggle())
            }
            return  <div className={classes.backdrop} onClick={registerBack}/>
        }

    const Error = ({publickAuction}) =>{
        const token = localStorage.getItem('token')
        const id = publickAuction._id
        // console.log(id);
        const registerCancle  =() =>{
            dispatch(RegisterActions.registerToggle())
            // console.log(publickAuction._id);
        }

        const auctionRegisterSuccessFull = async()=>{
            console.log('click');
            try {
                const response =await axios.post('api/v1/auction_registrations',JSON.stringify({
                    'auction_id':id
                }),
                {
                    headers:{
                        'Content-Type': 'application/json',
                        "Authorization" : token,
                    }
                })
                console.log(response);
                if(response.status ===200){
                    toast.success("You have successfully registered for the auction")
                    setTimeout(() => {
                        dispatch(RegisterActions.registerToggle())
                    }, 3500);
                }
                console.log('tyr');
            } catch (err) {
                console.log('catch');
                let error = err.response
                if(error.status === 409){
                    toast.info("You have already registered for the auction")
                    setTimeout(() => {
                        dispatch(RegisterActions.registerToggle())
                    }, 4000);
                }
                if(error.status === 400){
                    setBadRequest(error.data.message)
                };
                if(error.status ===500){
                    setErrorRegister(error.data.message)
                };
                if(error.status ===404){
                    setNoAuction(error.data.message)
                };
                if(error.status === 401){
                    toast.error("Token is invalid, please login again")
                    setUnauthorized(error.data.message)
                };
            };
        };
    return (
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h3>Are you sure you want to Register for this auction ?</h3>
                    {badrequest && <h3>{badrequest}</h3>}
                    {errorRegister && <h3>{errorRegister}</h3>}
                    {noAuction && <h3>{noAuction}</h3>}
                    {Unauthorized && <h3>{Unauthorized}</h3>}
                </header>

                <div className={classes.registeractionBtns}>
                        <button onClick={registerCancle}>Cancle</button>
                        <button onClick={auctionRegisterSuccessFull}>Yes</button>
                        <ToastContainer></ToastContainer>
                </div> 
           </div>
        )
    }

  return (
    <>
        {ReactDOM.createPortal(<Backdrop />, document.getElementById("register1"))}
        {ReactDOM.createPortal(<Error publickAuction={publickAuction} />, document.getElementById("register2"))}
    </>
  )
}

export default RegisterAuction