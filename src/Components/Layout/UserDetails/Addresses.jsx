import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';
import classes from './AddNewAddress.module.css';
import AddNewAddress from './AddNewAddress';
// import { SlOptionsVertical } from "react-icons/si";
import { SlOptionsVertical } from "react-icons/sl";
function Addresses() {
    const [showfrom,setShowFrom] = useState(false)
    const showEditAddresses  =() =>{
        setShowFrom(!showfrom)
    }
  return (
    <section className={classes.addressesSection}>
        <div className={classes.addresses}>
            <h3>Manage Addresses</h3>
            <Link className={classes.addnew} onClick={showEditAddresses}>
                <AiOutlinePlus size={30}/>
                <h4>ADD A NEW ADDRESS</h4>
            </Link>
        </div>
       {showfrom && <AddNewAddress/>} 

        <article className={classes.currentAddress}>
                <p>
                    <span>Home</span>
                    <small> <SlOptionsVertical size={20}/></small>
                </p>
                <div className={classes.user}>
                    <span>username</span>
                    <span>Phone numbar</span>
                </div>
                <h5> user Address ........................................, BANGALORE, Karnataka -</h5>
                <h4>560102</h4>
        </article>
    </section>
  )
}

export default Addresses