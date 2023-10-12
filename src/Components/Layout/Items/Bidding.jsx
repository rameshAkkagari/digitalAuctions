import React from 'react'
import classes from './Bidding.module.css';
import { AiOutlineExclamation } from "react-icons/ai";
function Bidding() {
  return (
    <div className={classes.biddingpage}>
        <div className={classes.startbidding}>
            <p>
                <AiOutlineExclamation size={20}/> 
                Bidding starts <strong>fri,may 14 2021 5:55 PM </strong> set reminder
            </p>
        </div>

        <section className={classes.biddingAuction}>
            <div>
                <h1>Lamps</h1>
                <img src='https://ii1.pepperfry.com/media/catalog/product/b/r/800x880/brass-antique-gold-table-lamp-with-12-inches-off-white-lampshade-by-kp-lamps-store-brass-antique-gol-wgwbfj.jpg'/>
            </div>

        <main className={classes.biddingActivites}>
            <div className={classes.currentPrice}>
                <h1>$300</h1>
                <p>Current Bid(97 bids)</p>
            </div>

            <div className={classes.actionsButtons}>
                <button>-</button>
                <span>$310</span>
                <button>+</button>
            </div>

            <button className={classes.placeBID}>place BID</button>
            <ul>
                <li>$239 by shamshir annes 4 minites ago</li>
                <li>$239 by shamshir annes 4 minites ago</li>
                <li>$239 by shamshir annes 4 minites ago</li> 
                <li>$239 by shamshir annes 4 minites ago</li>
                <li>$239 by shamshir annes 4 minites ago</li>
                <li>$239 by shamshir annes 4 minites ago</li>
                <li>$239 by shamshir annes 4 minites ago</li>
                <li>$239 by shamshir annes 4 minites ago</li>
                <li>$239 by shamshir annes 4 minites ago</li>
                <li>$239 by shamshir annes 4 minites ago</li>
                <li>$239 by shamshir annes 4 minites ago</li>
            </ul>
        </main>
           
        </section>
    </div>
  )
}

export default Bidding