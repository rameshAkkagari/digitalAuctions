import React from 'react'
import { Link } from 'react-router-dom';
import classes from '../MY__Auctions/My_RegisterAuction.module.css';
function All_My_RegisterItems({registerAuctions}) {
  return (
    <div>
        {registerAuctions.map((item)=><li className={classes.bidAuctionsItems}>
                    <Link to={`/bidding/${item._id}`}><img className={classes.regiterimage} src={item.poster}/></Link>
                    <div className={classes.itemText}>
                            <h5>{item.start_date_time}</h5>
                            <Link><h1>{item.name}</h1></Link>
                            <h5>Online</h5>
                            <p className={classes.itemdescription}>{item.description}</p>
                            <Link>Bid now</Link>
                    </div>
                    </li>)}
        {/* <h1>my register auctions</h1> */}
    </div>
  )
}

export default All_My_RegisterItems