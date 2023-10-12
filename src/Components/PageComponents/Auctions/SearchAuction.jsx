import React, { useState } from 'react'
import classes from './SearchAuction.module.css';
function SearchAuction({onReacive}) {
  const [serachAuction,setSearchAuction] = useState("")
  onReacive(serachAuction)
  return (
      <div className={classes.searchinput}>
        <input type='text' placeholder='Search Auctions' value={serachAuction} onChange={(e)=>setSearchAuction(e.target.value)}/>
      </div>
  )
}

export default SearchAuction
// .filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))