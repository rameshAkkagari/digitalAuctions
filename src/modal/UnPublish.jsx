import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './ConformModal.module.css';
import ReactDOM from "react-dom";
import { UnpublishActions } from '../store/UnPublish-slice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import axios from 'axios';

function UnPublish() {
    
    const [successFullUnPublish,setSuccessFullUnPublish] = useState("")
    const id = useParams()
    const myitem = id.myitem
    console.log(myitem);
    const dispatch = useDispatch()

    const token = localStorage.getItem("token")
    const handlerCancle = () =>{
        dispatch(UnpublishActions.toggleUnpublish())
    }

    const Backdrop = () =>{
        return  <div className={classes.backdrop} onClick={handlerCancle}/>
      } 
    

      const Error = () =>{

        const handlerCancle = () =>{
            dispatch(UnpublishActions.toggleUnpublish())
        } 

        const handlerUnpublish = async() =>{
            console.log('ok');
                try {
                  const response =await axios.patch(`http://192.168.1.11:3000/api/v1/auctions/${myitem}/unpublish`,null,{
                      headers: { Authorization: token },
                  })
                  if(response.status === 200){
                      setSuccessFullUnPublish(response.data.message)
                      toast.success("The auction has been unpublished successfully.")
                  }
              console.log(response);
              } catch (error) {
                  console.log('catch');
              }
          }

          const okey  =()=>{
            window.location.reload(true)
          }

        return (
          <div className={classes.modal}>
          <header className={classes.header}>
               <h3>{successFullUnPublish ? 'The auction has been unpublished successfully.' : 'Are you sure you want to Unpublish ?'}</h3>
          </header>
         {!successFullUnPublish && <div className={classes.actionBtns}>
              <button onClick={handlerCancle}>Cancle</button>
              <button onClick={handlerUnpublish}>Confirm</button>
              <ToastContainer></ToastContainer>
          </div>}
          {successFullUnPublish && <div className={classes.actionBtns}><button onClick={okey}>Okey</button></div>}
      </div>
        )
      }
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop2"))}
      {ReactDOM.createPortal(<Error  />, document.getElementById("error2"))}
    </>
  )
}

export default UnPublish