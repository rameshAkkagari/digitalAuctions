import React,{Fragment} from 'react'
import classes from './Header.module.css';
import { NavLink} from 'react-router-dom';
import MainNavLinks from '../MainHeaderContent/MainNavLinks';
function Header() {

  const token = localStorage.getItem("token");
  return (
    <Fragment>
        {!token && <nav className={classes.header}>
        <h1>React landing page</h1>
        <ul className={classes.links}>
            <li>features</li>
            <li>about</li> 
            <li>services</li>
            <li>team</li>
            <li>content</li>
            <li>
            <NavLink to='signup'>sign up</NavLink>
            </li>
           
        </ul>
        </nav> }

        {token && <MainNavLinks/>}
    </Fragment>
  )
}

export default Header