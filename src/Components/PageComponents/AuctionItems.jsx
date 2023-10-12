import React, { useEffect, useState } from 'react'
import classes from './AuctionItems.module.css';
import { MdLocationOn } from "react-icons/md";
import {  FaChevronRight } from "react-icons/fa6";
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import SearchAuction from './Auctions/SearchAuction';
import Pagination from './Pagination';

function AuctionItems() {
    const PUBLICKAUCTIONITEMS = 'api/v1/auctions/'
    const [publickAuctions,setPublickAuctions] = useState([])
    const [parPage,setParPage] = useState([])
    const [searchAuction,setSearchAuction] = useState('')
    useEffect(()=>{
        async  function fetchPublickAuctions (){
            try {
                  const response =await axios.get(PUBLICKAUCTIONITEMS,null,)    
                  setPublickAuctions(response.data.data);
                  console.log(publickAuctions);
                  setParPage(response.data.data.slice(0,2))
                  console.log(parPage);
            }catch (error) {
                  console.log('error');
            }
        }
        fetchPublickAuctions()
    },[])

        // console.log(publickAuctions);

        const onReacive = (auctionName) =>{
            // console.log(auctionName);
            setSearchAuction(auctionName)
        }
        const PageHandlerData = (pageNumber) =>{
            setParPage(publickAuctions.slice((pageNumber*2)-2,pageNumber*2))
        }
  return (
    <section>
            <SearchAuction onReacive={onReacive}/>
            <ul className={classes.publickAuctionsItem}>
                {parPage.filter(item=>item.name.toLowerCase().includes(searchAuction.toLowerCase())).map((item)=><Link to={`/actions/${item.auction_url}`} className={classes.auctionItems}>
                <img className={classes.publickimage} src={item.poster} alt={item.name}/>
                <div className={classes.itemDetails}>
                    <small>{item.start_date_time}</small>
                    <h2>{item.name}</h2>
                    <span className={classes.icon}><MdLocationOn size={20}/></span>
                    <span>Online</span>
                    <p>{item.description}</p>
                    <Link className={classes.viewAuctions}>view Auctions</Link>
                    <span className={classes.icon}><FaChevronRight/></span>
                </div>
                </Link>)}
            </ul>
            <Pagination publickAuctions={publickAuctions} PageHandlerData={PageHandlerData}/>
    </section>
  )
}

export default AuctionItems