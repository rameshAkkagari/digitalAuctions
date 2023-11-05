import React,{Fragment, useEffect, useState} from 'react'
import axios from '../../../api/axios'
import classes from  './My_RegisterAuction.module.css'
import { Link } from 'react-router-dom'
import My_RegisterShimmer from '../../../skeletons/My_RegisterShimmer'
import All_My_RegisterItems from './All_My_RegisterItems'
function My_RegisterAuctions() {
    const [noData,setNoData] = useState("")
    const [registerAuctions,setRegisterAuctions] = useState([])
    const [shimmer,setShimmer] = useState(false)
    const token =  localStorage.getItem("token")
    useEffect(()=>{
        async function  myAuctionRegister(){
            try {
                const  response =await axios.get('api/v1/auction_registrations',{
                    headers:{Authorization :token}
                })
                console.log(response);
                setRegisterAuctions(response.data.data)
                if(response.status ===200){
                    setTimeout(()=>{
                        setShimmer(true)
                    },2500)
                }
            } catch (err) {
                const error = err.response
                if(error.status ===404){
                    setNoData(error.data.error)
                }
                console.log('catch');
            }
        }
        myAuctionRegister()
    },[])
    console.log(registerAuctions);

    const noAuctions = registerAuctions.length === 0
        return (
    <Fragment>
        <header>
            <img className={classes.mybanner} src='https://t3.ftcdn.net/jpg/00/90/58/90/360_F_90589053_h5MUOLzo1Oac24IeYibquYUUaneLkt7H.jpg' alt='myAuctions'/>
            <h1>My Register Auctions</h1>
        </header>

        {!shimmer && !noAuctions &&
            <>
                <My_RegisterShimmer/> 
                <My_RegisterShimmer/>
                <My_RegisterShimmer/>
                <My_RegisterShimmer/>
                <My_RegisterShimmer/>
                <My_RegisterShimmer/>
                <My_RegisterShimmer/>
           </> 
        }
        {noAuctions && <h2>No Register Auctions..</h2>}
        {!noAuctions && <section className={classes.regAuction}>
            <div className={classes.registermyAuctions}>
                <All_My_RegisterItems registerAuctions={registerAuctions} />
            </div>
        </section>
        }
    </Fragment>
  )
}


export default My_RegisterAuctions

