import React,{useEffect, useState} from 'react'
import classes  from './EachItem.module.css';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link, useParams } from 'react-router-dom';
import { BiChevronLeft, BiSolidTimeFive} from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbDna } from "react-icons/tb";
import axios from '../../api/axios';
function EachItem() {
    const EACHITEM = 'api/v1/auctions/'
    const [publickAuction,setPublickAuction] = useState({})
    const [isLoading,setIsloading] = useState(true)
    const ID = useParams()
    console.log(ID.url); 
    const AuctionURL = ID.url
    useEffect(()=>{
        const auctionurl = async () =>{
          try {
             setTimeout(async()=>{
                const response =await axios.get(`${EACHITEM}${AuctionURL}/view`,null)
            console.log(response.data);
            setPublickAuction(response.data)
            setIsloading(false)
             },3000)
          } catch (error) {
            console.log('error');
          }
        }

        auctionurl()
    },[AuctionURL])

  return (
    <>
        <nav className={classes.backLinks}>
            <Link to='/dashboard'><BiChevronLeft size={30}/>Back</Link>
            <Link to='/actions'>Auctions</Link>
            <Link>{AuctionURL.id}</Link>
        </nav>

           {isLoading &&  <section className={classes.mainContent} >
                <div>
                        <h1><Skeleton/></h1>
                        <h4><Skeleton/></h4>
                            <div className={classes.auctionsTimes}>
                                <p>
                                    <span><Skeleton/></span>
                                    <span><Skeleton/></span>
                                </p>
                                <p>
                                    <span><Skeleton/></span>
                                    <span><Skeleton/></span>
                                    <span><Skeleton/></span>
                                    <span><Skeleton/></span>
                                </p>
                            </div>
                    </div>

                    <article className={classes.auctionItemDetails}>
                    <div>
                        <h4 style={{ marginBottom: '10px' }}><Skeleton/></h4>
                        <h4 style={{ marginBottom: '10px' }}><Skeleton/></h4>
                        <p style={{ marginBottom: '10px' }}><Skeleton width={700} height={300}/></p>
                    </div>
                      <div style={{ marginLeft: '10rem' }} >
                      <Skeleton  width={400} height={500}  className={classes.auctionImg}/>
                      </div>
                </article>

                <div>
                    <h1><Skeleton/></h1>
                    <p><Skeleton/></p>
                </div>
            </section>}

           
       {!isLoading &&  <section className={classes.mainContent}>
            
            <div>
                <h1>{publickAuction.name}</h1>
                <h4>{publickAuction.start_date_time}</h4>
                <div className={classes.auctionsTimes}>
                    <p>
                        <span><BiSolidTimeFive/></span>
                        <span> {publickAuction.end_date_time}</span>
                    </p>
                    <p>
                        <span><FaRegCalendarAlt/></span>
                        <span>Add to calander</span>
                        <span><TbDna/></span>
                        <span>Copy a link to this page</span>
                    </p>
                </div>
            </div>

            <article className={classes.auctionItemDetails}>
                <div>
                    <h4>World Trade Center Oculus Large Scale Installation, XO WORLD Project: 'XO Play' (AP edition)</h4>
                    <h4>Original XO WORLD Project: ‘XO Play’ World Trade Center Oculus large scale sculpture unveiled on the 40th anniversary of World Peace Day.</h4>
                    <p>{publickAuction.description}</p>
                </div>
                <img className={classes.auctionImg} src={publickAuction.poster} alt='auctionItem'/>
            </article>

            <div>
                <h1>Join the auction</h1>
                <p>You must register to bid in this auction</p>
                <button className={classes.registerBTN}>Register for the Auction</button>
            </div>
        </section>}
    </>
  )
}

export default EachItem