import React from 'react'
import classes from './DashBoard.module.css';
import Links from './Links';
import AuctionItems from './Items/AuctionItems';

function DashBoard() {
  return (
    <div className={classes.dashboard}>
        <Links/>
            <header className={classes.header}>
                <div className={classes.content}>
                    <div>
                        <h1>Digital Auctions</h1>
                        <p>Digital Auction makes it easy and safe to buy and sell unclaimed vahicles <br/> from the comfort of your home or office</p>
                    </div>
                    
                    <div className={classes.actionbtn}>
                        <button className={classes.welcome}>Welcome</button>
                        <button>view All actions</button>
                    </div>
                </div>
                <AuctionItems/>
            </header>
    </div>
  )
}

export default DashBoard