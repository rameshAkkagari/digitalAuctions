import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './ConformModal.module.css';
import ReactDOM from "react-dom";
import { publishShowActions } from '../store/publish-Slice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
function Publish() {

  const [successFullUnPublish,setSuccessFullUnPublish] = useState("")
        const id = useParams()
        const myitem = id.myitem
        console.log(myitem);
        const dispatch = useDispatch()

       const token = localStorage.getItem("token")


        const handlerCancle = () =>{
            dispatch(publishShowActions.toggle())
        }
    const publishHandler = async() =>{
        console.log('ok');
            try{
            const response =await axios.patch(`api/v1/auctions/${myitem}/publish`,null,{
                headers: { Authorization: token },
            })
            if(response.status === 200){
                setSuccessFullUnPublish(response.data.message)
                toast.success("The auction has been published successfully.")
                
            }
        console.log(response);
        } catch (error) {
            console.log('catch');
        }
    }

    const okey  =() =>{
      window.location.reload(true)
    }

    const Backdrop = () =>{
      return  <div className={classes.backdrop} onClick={handlerCancle}/>
    }

    const Error = () =>{
      return (
        <div className={classes.modal}>
        <header className={classes.header}>
             <h3>{successFullUnPublish ? 'The auction has been published successfully.' : 'Are you sure you want publish ?'}</h3>
        </header>
        {!successFullUnPublish && <div className={classes.registeractionBtns}>
            <button onClick={handlerCancle}>Cancle</button>
            <button onClick={publishHandler}>Confirm</button>
            <ToastContainer></ToastContainer>
        </div> }
        {successFullUnPublish &&  <div className={classes.registeractionBtns}><button onClick={okey}>Okey</button></div> }

       
    </div>
      )
    }
  return (
     <>
     {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
     {ReactDOM.createPortal(<Error  />, document.getElementById("error"))}

     </>
  )
}

export default Publish