// import React,{useEffect, useState} from 'react'
// import classes  from './EachItem.module.css';
// import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
// import { Link, useParams } from 'react-router-dom';
// import { BiChevronLeft, BiSolidTimeFive} from "react-icons/bi";
// import axios from '../../api/axios';
// import RegisterAuction from '../../modal/RegisterAuction';
// import { useDispatch,useSelector } from 'react-redux';
// import {RegisterActions} from '../../store/Register-slice'
// import moment from 'moment';
// function EachItem() {
//     const [publickAuction,setPublickAuction] = useState({})
//     const [isLoading,setIsloading] = useState(true)
//     const ID = useParams()
//     console.log(ID.url); 
//     const AuctionURL = ID.url


//     const isRegiterShow = useSelector((state)=>state.register.resitertoggle)
//     const dispatch = useDispatch()
//     useEffect(()=>{
//         const auctionurl = async () =>{
//             try {
//                 setTimeout(async()=>{
//                     const response =await axios.get(`api/v1/auctions/${AuctionURL}/view`,null)
//                 console.log(response.data);
//                 setPublickAuction(response.data)
//                 setIsloading(false)
//                 },2000)
//             } catch (error) {
//                 console.log('error');
//             }
//         }

//         auctionurl()
//     },[AuctionURL])

//     const handlerRegiterAuction  =() =>{
//         dispatch(RegisterActions.registerToggle())
//     }
//     const originalDateTime = publickAuction.end_date_time;
//     const updatedDateTime = moment(originalDateTime).subtract(1, 'seconds');
//     const formattedDateTime = updatedDateTime.format('DD/MM/YYYY HH:mm:ss');

//     const targetDate = new Date(publickAuction.end_date_time).getTime()
//     const [timeRemaining, setTimeRemaining] = useState(targetDate - Date.now());

//     useEffect(() => {
//         // Update the countdown every second
//         const intervalId = setInterval(() => {
//         const currentTime = Date.now();
//         const timeDiff = targetDate - currentTime;
          
//         if (timeDiff <= 0) {
//             // Timer has expired
//             clearInterval(intervalId);
//             setTimeRemaining(0);
//           } else {
//             // Update the time remaining
//             setTimeRemaining(timeDiff);
//           }
//         }, 1000);
    
//         return () => {
//           clearInterval(intervalId);
//         };
//       }, [targetDate]);
//       const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
//       const seconds = Math.floor((timeRemaining / 1000) % 60);

      
//   return (
//     <>
//         <nav className={classes.backLinks}>
//             <Link to='/dashboard'><BiChevronLeft size={30}/>Back</Link>
//             <Link to='/actions'>Auctions</Link>
//             <Link>{AuctionURL.id}</Link>
//         </nav> 
          
//        { !isLoading && <section className={classes.mainContent}>
//             <div>
//                 {isRegiterShow && <RegisterAuction publickAuction={publickAuction}/> } 
//                 <h1>{publickAuction.name}</h1>
//                 <h4>{hours}H {minutes}M {seconds}S</h4>
//                 {/* <h4>{moment(publickAuction.start_date_time).format("DD/MM/YYYY HH:mm:ss")}</h4> */}
//                 <div className={classes.auctionsTimes}>
//                     <p>
//                         <span><BiSolidTimeFive/></span>
//                         <span>{formattedDateTime}</span>
//                         {/* <span>{moment(publickAuction.end_date_time).format("DD/MM/YYYY HH:mm:ss")}</span> */}
//                     </p>
                    
//                 </div>
//             </div>

//             <article className={classes.auctionItemDetails}>
//                 <div>
//                     <h4>World Trade Center Oculus Large Scale Installation, XO WORLD Project: 'XO Play' (AP edition)</h4>
//                     <h4>Original XO WORLD Project: ‘XO Play’ World Trade Center Oculus large scale sculpture unveiled on the 40th anniversary of World Peace Day.</h4>
//                     <p className={classes.auctionItemDescription}>{publickAuction.description}</p>
//                 </div>
//                 <img className={classes.auctionImg} src={publickAuction.poster} alt='auctionItem'/>
//             </article>

//             <div>
//                 <h1>Join the auction</h1>
//                 <p>You must register to bid in this auction</p>
//                 <button className={classes.registerBTN} onClick={handlerRegiterAuction}>Register for the Auction</button>
//             </div>
//         </section>}
//        {
//         isLoading &&  <section className={classes.mainContent}>
//         <div>
//             <h1><Skeleton/></h1>
//             <h4><Skeleton/></h4>
//                 <div className={classes.auctionsTimes}>
//                     <p>
//                         <span><Skeleton/></span>
//                         <span><Skeleton/></span>

//                     </p>
//                 </div>
//         </div>

//         <article className={classes.auctionItemDetails}> 
//             <div>
//                 <h4><Skeleton/></h4>
//                 <h4><Skeleton/></h4>
//                 <Skeleton className={classes.auctionItemDescription}/>
//             </div>
//             <Skeleton className={classes.auctionImg}/>
//         </article>

//         <div>
//             <h1><Skeleton/></h1>
//             <p><Skeleton/></p>
//             <Skeleton className={classes.registerBTN}/>
//         </div>
//     </section>
//        }
//     </>
//   )
// }

// export default EachItem




import React,{useEffect, useState} from 'react'
import EachItemShimmer from '../../skeletons/EachItemShimmer';
import { Link, useParams } from 'react-router-dom';
import { BiChevronLeft, BiSolidTimeFive} from "react-icons/bi";
import axios from '../../api/axios';
import classes  from './EachItem.module.css';
import RegisterAuction from '../../modal/RegisterAuction';
import { useDispatch,useSelector } from 'react-redux';
import {RegisterActions} from '../../store/Register-slice'
import TargetDate from './TargetDate';
import moment from 'moment';
function EachItem() {
    const [publickAuction,setPublickAuction] = useState({})
    const [isShimmer,setIsShimmer] = useState(true)
    const ID = useParams()
    console.log(ID.url); 
    const AuctionURL = ID.url


    const isRegiterShow = useSelector((state)=>state.register.resitertoggle)
    const dispatch = useDispatch()
    useEffect(()=>{
        const auctionurl = async () =>{
            try {
                setTimeout(async()=>{
                    const response =await axios.get(`api/v1/auctions/${AuctionURL}/view`,null)
                console.log(response.data);
                setPublickAuction(response.data)
                setIsShimmer(false)
                },2000)
            } catch (error) {
                console.log('error');
            }
        }

        auctionurl()
    },[])

    const handlerRegiterAuction  =() =>{
        dispatch(RegisterActions.registerToggle())
    }
    const originalDateTime = publickAuction.end_date_time;
    const updatedDateTime = moment(originalDateTime).subtract(1, 'seconds');
    const formattedDateTime = updatedDateTime.format('DD/MM/YYYY HH:mm:ss');
      
  return (
    <>
        {!isRegiterShow && <RegisterAuction publickAuction={publickAuction}/> } 
        <nav className={classes.backLinks}>
            <Link to='/dashboard'><BiChevronLeft size={30}/>Back</Link>
            <Link to='/actions'>Auctions</Link>
            <Link>{AuctionURL.id}</Link>
        </nav> 
        {isShimmer &&  <EachItemShimmer/> }
        {!isShimmer && <section className={classes.mainContent}>
            <div>
                <h1 className={classes.title}>{publickAuction.name}</h1>
                <TargetDate publickAuction={publickAuction}/>
                {/* <span className={classes.timeicon}><BiSolidTimeFive/></span> */}
                {/* <span className={classes.auctionTime}>{formattedDateTime}</span> */}
            </div>

            <article className={classes.auctionItemDetails}>
                <div>
                    <h4 className={classes.auctionhardCode}>World Trade Center Oculus Large Scale Installation, XO WORLD Project: 'XO Play' (AP edition)</h4>
                    <h4 className={classes.auctionhardCode}>Original XO WORLD Project: ‘XO Play’ World Trade Center Oculus large scale sculpture unveiled on the 40th anniversary of World Peace Day.</h4>
                    <p className={classes.auctionItemDescription}>{publickAuction.description}</p>
                </div>
                <img className={classes.auctionImg} src={publickAuction.poster} alt='auctionItem'/>
            </article>

            <div>
                <h1 className={classes.join}>Join the auction</h1>
                <p className={classes.join}>You must register to bid in this auction</p>
                <button className={classes.registerBTN} onClick={handlerRegiterAuction}>Register for the Auction</button>
            </div>
        </section>}
    </>
  )
};

export default EachItem