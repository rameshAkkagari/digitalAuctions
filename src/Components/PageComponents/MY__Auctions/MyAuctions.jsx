import React, { useEffect, useState } from 'react'
import axios from '../../../api/axios';
import { Link } from 'react-router-dom';
import classes from './MyAuctions.module.css';
import { MdLocationOn } from "react-icons/md";
import {  FaChevronRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
function MyAuctions() {
  const GETAUCTIONS = 'api/v1/auctions/created?page=1&page_size=10'
  const token = localStorage.getItem("token")
  const [myauctions,setMyAuctions] = useState([])
  const [nodata,setNodata] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    async function fetchAuctions() {
        try {
            const response = await axios.get(GETAUCTIONS,{
                headers:{ 'Authorization': token,}
            });
            console.log(response.data.data);
            const auctionsWithFormattedDates = response.data.data.map(item => ({
                ...item,
                start_date_time: new Date(item.start_date_time).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                }),
                  end_date_time: new Date(item.end_date_time).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit', 
                })
            }));
            
            if(response.status === 404){
                setNodata('The auction you are looking is not present in the database')
            }
              setMyAuctions(auctionsWithFormattedDates);

            } catch (error) {
                console.error('Error fetching auctions:', error);
        }
    }

        fetchAuctions()
    },[token])
    const yourAuctions = myauctions.length === 0

    const handlerNewAuction = () =>{
        navigate('/create')
    }
  return (
        <div>
            <figure className={classes.banner}>
            <h1>MY AUCTIONS</h1>
                <img src='https://contemporarylynx.co.uk/wp-content/uploads/2019/09/auction-hammer.jpg' alt='auctionsBanner'/>
            </figure>
            {nodata && <h4>{nodata}</h4>}
            {/* <ul className={classes.auctionItems}>
                {myauctions.map((item)=><Link to={`/my_auctions/${item._id}`} key={item._id} className={classes.items}>
                    <img src={item.poster} alt="Large Scale" />
                    <div>
                        <small>{item.start_date_time}-{item.end_date_time}</small>
                        <h2>{item.name}</h2>
                        <span className={classes.icon}><MdLocationOn size={20}/></span>
                        <span>Online</span>
                        <p>{item.description}</p>
                        <Link className={classes.viewAuctions}>view Auctions</Link>
                        <span className={classes.icon}><FaChevronRight/></span>
                    </div>
                </Link>)}
            </ul> */}
            <div className={classes.allAuctionsItems}>
            <section className={classes.totalAuctions}>
                   {yourAuctions && <button className={classes.addYourauction} onClick={handlerNewAuction}>Add your auction</button>}
                {!yourAuctions && <div className={classes.publickAuctions}>
                    {myauctions.map((item)=><Link to={`/my_auctions/${item._id}`} className={classes.publickAuctionsItems}>
                        <img className={classes.auctionimage} src={item.poster}/>
                        <div className={classes.auctionitemText}>
                            {/* <h5>{moment(item.start_date_time).format('ddd, MMM D YYYY h:mm A')}</h5> */}
                            <h1>{item.name}</h1>
                            <h5>Online</h5>
                            <p className={classes.itemdescription}>{item.description}</p>
                            <span className={classes.viewAuctions}>view Auctions</span>
                            <span className={classes.icon}></span>

                        </div>
                    </Link>)}
                </div>}
            </section>  
        </div>
        </div>
      )
    }
    
export default MyAuctions


{/* <div className={classes.allAuctionsItems}>
            <section className={classes.totalAuctions}>
                <div className={classes.publickAuctions}>
                    {publickAuctions.map((item)=><Link to={`/my_auctions/${item._id}`} className={classes.publickAuctionsItems}>
                        <img className={classes.auctionimage} src={item.poster}/>
                        <div className={classes.auctionitemText}>
                            <h5>{moment(item.start_date_time).format('ddd, MMM D YYYY h:mm A')}</h5>
                            <h1>{item.name}</h1>
                            <h5>Online</h5>
                            <p className={classes.itemdescription}>{item.description}</p>
                            <span className={classes.viewAuctions}>view Auctions</span>
                        </div>
                    </Link>)}
                </div>
            </section>  
        </div> */}