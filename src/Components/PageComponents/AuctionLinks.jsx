import React from 'react'
import classes from './AuctionsBanner.module.css';
function AuctionLinks() {
  return (
    <div className={classes.navLinks}>
        <ul>
            <li>upcoming</li>
            <li>previous</li>
            <li>how to bid</li>
        </ul>
    </div>
  )
}

export default AuctionLinks