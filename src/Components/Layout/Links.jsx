import React from 'react'
import classes from './Links.module.css';
function Links() {
  return (
    <nav className={classes.boardlinks}>
        <ul>
            <li>Home / </li>
            <li>List / </li>
            <li>App</li>
        </ul>
    </nav>
  )
}

export default Links