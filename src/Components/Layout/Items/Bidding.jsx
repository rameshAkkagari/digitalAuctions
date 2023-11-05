import React,{useEffect, useState} from 'react'
import classes from './Bidding.module.css';
import { useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import BiddingTime from './BiddingTime';
// import { socket } from '../../../socket-io/socket';


function Bidding() {
    const id = useParams()
    const biddingID = id.id
    console.log(biddingID);
    const [biddingAuction,setBiddingAuction] = useState({})
    const [bidAmount,setBidAmount] = useState(0)
    // useEffect(() => {
    //     // Set up socket event listeners
    //     socket.on("connect", () => {
    //       console.log(socket.id);
    //     });
    
    //     socket.emit('message', 'Hello, from react js!');
    
    //     socket.on("message", (message) => {
    //       console.log(message);
    //     });
    
    //     socket.on("connect_error", (err) => {
    //       console.log(`connect_error due to ${err.message}`);
    //     });
    
    //     // Cleanup and remove event listeners when the component unmounts
    //     return () => {
    //       socket.disconnect();
    //     };
    //   }, []); 
    const token = localStorage.getItem('token')
    useEffect(()=>{
        async  function getBiddingAuction(){
            try {
                const response =await axios.get(`api/v1/auction_registrations/652a342d64f05b7e3da54927`,null,{
                    headers:{ Authorization : token}
                })
                console.log(response);
                setBiddingAuction(response.data)
            } catch (error) {
                // console.log(error);
            }
        }
        getBiddingAuction()
    },[token])
    // console.log(biddingAuction);

    const handlerBidAmount = (e)=>{
        e.preventDefault()
        const message =  {
            auction_id:biddingAuction._id,
            newBid:bidAmount
        } 
        console.log(message);
    }
    // useEffect(()=>{
    //     socket.on("connect",()=>{
    //         socket.emit("joinAuction",JSON.stringify({'auction_id':biddingID}));
    //     });
        
    // },[]);

    return (
    <div className={classes.biddingpage}>
        <div className={classes.startbidding}>
            <p className={classes.startTime}>
               <span>Bidding starts in </span> 
               <BiddingTime biddingAuction={biddingAuction}/>
               <span>set reminder</span>
            </p>
        </div>

        <section className={classes.biddingAuction}>
            <div>
                <h1>{biddingAuction.name}</h1>
                <img src={biddingAuction.poster} alt={biddingAuction.name}/>
            </div>

        <main className={classes.biddingActivites}>
            <div className={classes.currentPrice}>
                <h1>$300</h1>
                <p>Current Bid(97 bids)</p>
            </div>

            <form className={classes.actionsButtons} onSubmit={handlerBidAmount}>
                <input type="number" 
                    placeholder='Bid Amount' 
                    min="0" value={bidAmount} 
                    onChange={(e)=>setBidAmount(e.target.value)}
                />
                <button>Bid</button>
            </form>

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
        <p className={classes.biddingdescription}>{biddingAuction.description}</p>
    </div>
  )
}

export default Bidding