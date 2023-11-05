import React, { useState } from 'react'
import classes from './MainNavLinks.module.css';
import { AiOutlineHome,AiOutlineQuestionCircle } from "react-icons/ai";
import { PiClipboardTextBold } from "react-icons/pi";
import { HiOutlineFolderPlus } from "react-icons/hi2";
// import { BiCategory } from "react-icons/bi";
import { PiNotebookBold } from "react-icons/pi";
import { CgProfile,CgViewGrid } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
function MainNavLinks() {
    const [isdrop,setIsDrop] = useState(false)
    const dropmemu  =() =>{
        setIsDrop(true)
    }

    const toggleDropdown =()=>{
        setTimeout(()=>{
            if(isdrop){
                setIsDrop(false)
            }
        },4000)
    }
  return (
    <section className={classes.mainLinks}>
        <nav className={classes.links}>
            <ul>
                <NavLink to='/' className={({ isActive }) =>isActive ? classes.active : undefined} end>
                    <span><AiOutlineHome/></span>
                    <span>Home</span>
                </NavLink>

                <NavLink to='actions' className={({ isActive }) =>isActive ? classes.active : undefined}>
                    <span><PiClipboardTextBold/></span>
                    <span>Auctions</span>
                </NavLink>

                <NavLink to='create' className={({ isActive }) =>isActive ? classes.active : undefined}>
                    <span><HiOutlineFolderPlus/></span>
                    <span>Create</span>
                </NavLink>

                {/* <NavLink>
                    <span><BiCategory/></span>
                    <span>Categories</span>
                </NavLink> */}
                
                <NavLink to='myregisterAuctions' className={({ isActive }) =>isActive ? classes.active : undefined}>
                    <span><PiNotebookBold/></span>
                    <span>My Register Auctions</span>
                </NavLink>

                <NavLink to="my_auctions" className={({ isActive }) =>isActive ? classes.active : undefined}>
                    <span><CgViewGrid/></span>
                    <span>My Auctions</span>
                </NavLink>
            </ul>
        </nav>

        <div className={classes.profile}>
            <ul>
                <NavLink>
                    <span><AiOutlineQuestionCircle/></span>
                    <span>How it Works</span>
                </NavLink>


                <NavLink>
                    <span><CgProfile/></span>
                    <span className={classes.myaccount} onMouseEnter={dropmemu} onMouseOut={toggleDropdown}>My Account</span>
                    {isdrop && 
                        <ul className={classes.account}>
                            <NavLink>My Orders</NavLink>
                            <NavLink to='addresses'>Addresses</NavLink>
                            <NavLink to='profile'>Profile</NavLink>
                        </ul>
                    }
                </NavLink>
                
            </ul>
        </div>
    </section>
  )
}

export default MainNavLinks
               