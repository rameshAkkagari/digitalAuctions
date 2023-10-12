import React from 'react'
import classes from './MainNavLinks.module.css';
import { AiOutlineHome,AiOutlineQuestionCircle } from "react-icons/ai";
import { PiClipboardTextBold } from "react-icons/pi";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { BiCategory } from "react-icons/bi";
import { PiNotebookBold } from "react-icons/pi";
import { CgProfile,CgViewGrid } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
function MainNavLinks() {
  return (
    <section className={classes.mainLinks}>
      <nav className={classes.links}>
        <ul>
            <NavLink to='dashboard'>
                <span><AiOutlineHome/></span>
                <span>Home</span>
            </NavLink>

            <NavLink to='actions'>
                <span><PiClipboardTextBold/></span>
                <span>Auctions</span>
            </NavLink>

            <NavLink to='create'>
                <span><HiOutlineFolderPlus/></span>
                <span>Create</span>
            </NavLink>

            <NavLink>
                <span><BiCategory/></span>
                <span>Categories</span>
            </NavLink>
            
            <NavLink to='bidding'>
                <span><PiNotebookBold/></span>
                <span>My Biddings</span>
            </NavLink>

            <NavLink to="my_auctions">
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

            <NavLink to='profile'>
                <span><CgProfile/></span>
                <span>Profile</span>
            </NavLink>
        </ul>
      </div>
    </section>
  )
}

export default MainNavLinks