// import React, { useEffect, useState } from 'react'
// import classes from './AuctionItems.module.css';
// import { MdLocationOn } from "react-icons/md";
// import {  FaChevronRight } from "react-icons/fa6";
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import SearchAuction from './Auctions/SearchAuction';
// import Pagination from './Pagination';

// function AuctionItems() {
//     // const PUBLICKAUCTIONITEMS = 'api/v1/auctions/'
//     const [publickAuctions,setPublickAuctions] = useState([])
//     const [parPage,setParPage] = useState([])
//     const [searchAuction,setSearchAuction] = useState('')

//     useEffect(()=>{
//         async  function fetchPublickAuctions (){
//             try {
//                   const response =await axios.get(`http://ec2-13-200-66-112.ap-south-1.compute.amazonaws.com/api/v1/auctions?page=${page}&page_size=20`,null,) 
//                   setPublickAuctions(response.data.data);
//                   console.log(publickAuctions);
//                   setParPage(response.data.data.slice(0,10))
//                   console.log(response.data.pagination.page);
//             }catch (error) {
//                   console.log('error');
//             }
//         }
//         fetchPublickAuctions()
//     },[])

//         // console.log(publickAuctions);

//         const onReacive = (auctionName) =>{
//             // console.log(auctionName);
//             setSearchAuction(auctionName)
//         }
//         const PageHandlerData = (pageNumber) =>{
//             setParPage(publickAuctions.slice((pageNumber*10)-10,pageNumber*10))
//         }
//   return (
//     <section>
//         <SearchAuction onReacive={onReacive}/>
//         <ul className={classes.publickAuctionsItem}>
//             {parPage.filter(item=>item.name.toLowerCase().includes(searchAuction.toLowerCase())).map((item)=><Link to={`/actions/${item.auction_url}`} className={classes.auctionItems}>
//             <img className={classes.publickimage} src={item.poster} alt={item.name}/>
//             <div className={classes.itemDetails}>
//                 <small>{item.start_date_time}</small>
//                 <h2>{item.name}</h2>
//                 <span className={classes.icon}><MdLocationOn size={20}/></span>
//                 <span>Online</span>
//                 <p>{item.description}</p>
//                 <Link className={classes.viewAuctions}>view Auctions</Link>
//                 <span className={classes.icon}><FaChevronRight/></span>
//             </div>
//             </Link>)}
//         </ul>
//             <Pagination publickAuctions={publickAuctions} PageHandlerData={PageHandlerData}/>
//     </section>
//   )
// }

// export default AuctionItems





import React, { Fragment, useEffect, useState } from 'react'
import classes from './AuctionItems.module.css';
import 'react-loading-skeleton/dist/skeleton.css'
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector,useDispatch } from 'react-redux';
import {CurrentpageAuctions} from '../../store/CurrentPage-slice';
import PublickAuctionShimmer from '../../skeletons/PublickAuctionShimmer';
function AuctionItems() {
    const [publickAuctions,setPublickAuctions] = useState([])
    const [total_records, settotal_records] = useState();
    const [page_size, setpage_size] = useState();
    const [shimmer,setShimmer] = useState(false)
    const page = useSelector((state)=>state.pagination.currentPage)
    const dispatch = useDispatch()
    // console.log(page);
     const prev  = page ===1 
     console.log(prev);
    useEffect(()=>{
        async  function fetchPublickAuctions (page){
            try {
                const response =await axios.get(`/api/v1/auctions?page=${page}&page_size=10`,null,) 
                console.log(response.data);
                const {data,pagination} = response.data;
                setPublickAuctions(data);
                if(response.status ===200){
                    setTimeout(()=>{
                        setShimmer(true)
                    },1000)
                }
                const totalrecords = pagination.total_records
                settotal_records(totalrecords)
                setpage_size(pagination.page_size)
                console.log(page_size);
                console.log(total_records);
            }catch(error) {
                console.log('error');
            }
        }
        fetchPublickAuctions(page)
    },[page])
    const increatement =() =>{
        dispatch(CurrentpageAuctions.handlerIncreament())
        window.scrollTo(0, 0);
    }

    const decreament = () => {
        dispatch(CurrentpageAuctions.handlerDecrement())
        window.scrollTo(0, 0);
    };
    return (
    <Fragment>
        {shimmer && 
        <div className={classes.allAuctionsItems}>
            <section className={classes.totalAuctions}>
                <div className={classes.publickAuctions}>
                    {publickAuctions.map((item)=><Link to={`/actions/${item.auction_url}`} className={classes.publickAuctionsItems}>
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
                
                <div className={classes.pagebtns}>
                   {!prev && <button onClick={decreament}>Previous</button>}
                    <h2>{page}</h2>
                    <button onClick={increatement}>Next</button>
                </div>
            </section> 
        </div>}

        {!shimmer &&  <>
            <PublickAuctionShimmer/>
            <PublickAuctionShimmer/>
            <PublickAuctionShimmer/>
            <PublickAuctionShimmer/>
            <PublickAuctionShimmer/>
            <PublickAuctionShimmer/>
            <PublickAuctionShimmer/>
            <PublickAuctionShimmer/>
            <PublickAuctionShimmer/>
            <PublickAuctionShimmer/>
        </>}
    </Fragment>
    );
};
export default AuctionItems





