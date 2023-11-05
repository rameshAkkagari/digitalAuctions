import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link ,useNavigate,useParams} from 'react-router-dom'
import classes from './MyAuctionItemDetails.module.css';
import axios from '../../../api/axios';
import ConformModal from '../../../modal/Publish';
import UnPublish from '../../../modal/UnPublish';
import {UnpublishActions} from '../../../store/UnPublish-slice';
import {useDispatch, useSelector } from 'react-redux';
import {publishShowActions} from '../../../store/publish-Slice'
import My_AuctionShimmer from '../../../skeletons/My_AuctionShimmer';
// import axios from "axios";
function MyAuctionItemDetails() {
    const id = useParams()
    const MYITEM = id.myitem
    const navigate = useNavigate()
    const [aucError,setAucError] = useState("")
    const [loading,setloading] = useState(false)
    const [nodata,setNoData] = useState("")
    const [item,setItem] = useState({}) 
    const  token = localStorage.getItem("token")

    const isModalOpen = useSelector((state) => state.publish.modaltoggle);

    const isUnpublish = useSelector((state) => state.unpublish.unPublish)

    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSpecifickAuction= async()=>{
    try {
        const response = await axios.get(`api/v1/auctions/created/${MYITEM}`, {
            headers: { Authorization: token },
            });
            if(response.status ===200){
                setTimeout(()=>{
                    setloading(true)
                },2500)
            }
        // Assuming response.data is an object representing a single item
            const auctionItem = response.data;
            const formattedStartDate = new Date(auctionItem.start_date_time).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        });

        const formattedEndDate = new Date(auctionItem.end_date_time).toLocaleString('en-US', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
        });
        const itemWithFormattedDates = {
          ...auctionItem,
          start_date_time: formattedStartDate,
          end_date_time: formattedEndDate,
        };
       
        setItem(itemWithFormattedDates);
    }catch (error) {
            const err = error.response.data;
            console.log(err.message);
            if(error.response.status === 500){
                    setTimeout(()=>{
                        navigate("/my_auctions")
                    },2000)
            }
            if (err.message) {
            setAucError(err.message);
            }
        }
    };

    fetchSpecifickAuction();
  }, [MYITEM, token]);

    const handlerPublishItem = async () =>{
        dispatch(publishShowActions.toggle())
    }


    const unPublishItem  =()=>{
        dispatch(UnpublishActions.toggleUnpublish())
    }
  return (
    <>
        { isModalOpen && <ConformModal />}
        {isUnpublish && <UnPublish/>}
        <div className={classes.myauctionItem}>
            <nav className={classes.backLinks}>
                <Link to='/my_auctions'>My Auctions</Link>
            </nav>

            {aucError ? <h2>{aucError}</h2> : 
            <>
            {!loading && <My_AuctionShimmer/>}
                {loading && <section className={classes.section}>
                    <h2 className={classes.itemName}>{item.name}</h2>
                    <div className={classes.auctionsTimes}>
                        <span className={classes.startTime}>{item.start_date_time}</span>
                        <span className={classes.startTime}>{item.end_date_time}</span>
                        <p className={classes.status}>
                            {item.status}
                        </p>
                    </div>

                    <article className={classes.auctionItemDetails}>
                        <div>
                            <h4 className={classes.maintitles}>World Trade Center Oculus Large Scale Installation, XO WORLD Project: 'XO Play' (AP edition)</h4>
                            <h4 className={classes.maintitle2}>Original XO WORLD Project: ‘XO Play’ World Trade Center Oculus large scale sculpture unveiled on the 40th anniversary of World Peace Day.</h4>
                            <p className={classes.description}>{item.description}</p>
                        </div>

                        <div>
                            <img className={classes.auctionImg} src={item.poster} alt='auctionItem'/> 
                            <Link to={`/editauction__/${item._id}`} ><button className={classes.editbtn}>Edit Auction</button></Link>
                            {item.status ==='published' && <button className={classes.publish} onClick={unPublishItem}>Unpublish</button>}
                            {item.status ==='unpublished' && <button className={classes.publish} onClick={handlerPublishItem}>Publish</button>}
                            
                            <ToastContainer></ToastContainer>
                        </div>
                    </article>

                    <img className={classes.smallImg} src={item.poster} alt='auctionItem'/>
                    <ol>
                        <li  className={classes.textlow}>
                            <span className={classes.spans}>Daniel Anderson</span><br/>
                            <span><strong>XO WORLD Project: 'XO Play'</strong></span><br/>
                            <span>Sculpture, 168 x 457 x 305 cm.</span><br/>
                            <span><strong>Estimate: </strong>{item.estimate}</span><br/>
                            <span><strong>Starting</strong>bid:$200,000</span>
                        </li>
                    </ol>
                </section>}
            </>}
        </div>
    </>
    
  )
}

export default MyAuctionItemDetails