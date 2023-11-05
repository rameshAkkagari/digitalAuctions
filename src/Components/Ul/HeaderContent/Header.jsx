import React,{Fragment} from 'react'
import classes from './Header.module.css';
import { NavLink} from 'react-router-dom';
import MainNavLinks from '../MainHeaderContent/MainNavLinks';
function Header() {

  const token = localStorage.getItem("token");
  return (
    <Fragment>
        {!token && 
        <nav className={classes.header}>
            <h1>Auction landing page</h1>
            <ul className={classes.links}>
                <li>
                  <NavLink to='features' className={({ isActive }) =>isActive ? classes.active : undefined}>
                   features
                  </NavLink>
                </li>
                <li>about</li> 
                {/* <li>services</li> */}
                <li>
                  <NavLink to='team' className={({isActive})=>isActive ? classes.active :undefined}>
                    team
                  </NavLink>
                </li>
                <li>
                  <NavLink to='contact' className={({isActive})=>isActive ? classes.active : undefined}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='signup' className={({isActive})=>isActive ? classes.active:undefined}>sign up</NavLink>
                </li>
            </ul>
        </nav> }
        {token && <MainNavLinks/>}
    </Fragment>
  )
}

export default Header