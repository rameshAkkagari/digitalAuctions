import React from 'react'
import classes from './AuctionsBanner.module.css';
import AuctionLinks from './AuctionLinks';
function AuctionsBanner() {
  return (
    <div>
        <figure className={classes.banner}>
            <h1>Auctions</h1>
            <img src='https://theauctioncollective.com/media/crmpjppe/jack-penny-crop.jpg?anchor=center&mode=crop&width=1280&height=720&rnd=132660162481870000&format=webp&quality=90' alt='auctionsBanner'/>
        </figure>
        <AuctionLinks/>
    </div>
  )
}

export default AuctionsBanner