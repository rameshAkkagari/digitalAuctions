import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link ,useNavigate,useParams} from 'react-router-dom'
import classes from './MyAuctionItemDetails.module.css';
import axios from '../../../api/axios';
import ConformModal from '../../../modal/ConformModal';
import UnPublish from '../../../modal/UnPublish';
import {UnpublishActions} from '../../../store/UnPublish-slice';
import {useDispatch, useSelector } from 'react-redux';
import {ModalActions} from '../../../store/Modal-Slice'
// import axios from "axios";
function MyAuctionItemDetails() {
    const id = useParams()
    const MYITEM = id.myitem
    const SPECIFICAUCTION = `api/v1/auctions/created/${MYITEM}`
    const navigate = useNavigate()
    const [aucError,setAucError] = useState("")
    const [nodata,setNoData] = useState("")
    const [item,setItem] = useState({}) 
    const  token = localStorage.getItem("token")

    const isModalOpen = useSelector((state) => state.modal.modaltoggle);

    const isUnpublish = useSelector((state) => state.unpublish.unPublish)

    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSpecifickAuction= async()=>{
    try {
        const response = await axios.get(SPECIFICAUCTION, {
            headers: { Authorization: token },
            });
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
        dispatch(ModalActions.toggle())
        // toast.info("Are you sure you want publish ?",{theme:"dark"})
    }


    const unPublishItem  =()=>{
        dispatch(UnpublishActions.toggleUnpublish())
        // toast.warning("Are you sure you want to Unpublish ?",{theme:"dark"})
    }
  return (
    <>
        { isModalOpen && <ConformModal />}
        {isUnpublish && <UnPublish/>}
        <div className={classes.myauctionItem}>
            <nav className={classes.backLinks}>
                <Link to='/myauctions'>My Auctions</Link>
                <Link>{item.title}</Link>
            </nav>
            {aucError ? <h2>{aucError}</h2> : <>
            <section className={classes.section}>
                <h2>{item.name}</h2>
                <div className={classes.auctionsTimes}>
                    <span>{item.start_date_time}</span>
                    <span>{item.end_date_time}</span>
                    <p>
                        {item.status}
                    </p>
                </div>
                <article className={classes.auctionItemDetails}>
                <div>
                    <h4>World Trade Center Oculus Large Scale Installation, XO WORLD Project: 'XO Play' (AP edition)</h4>
                    <h4>Original XO WORLD Project: ‘XO Play’ World Trade Center Oculus large scale sculpture unveiled on the 40th anniversary of World Peace Day.</h4>
                    <p>{item.description}</p>
    
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
                    <li>
                        <span>Daniel Anderson</span><br/>
                        <span><strong>XO WORLD Project: 'XO Play'</strong></span><br/>
                        <span>Sculpture, 168 x 457 x 305 cm.</span><br/>
                        <span><strong>Estimate: </strong>{item.estimate}</span><br/>
                        <span><strong>Starting</strong>bid:$200,000</span>
                    </li>
                </ol>
            </section>
            </>}
            
    </div>
    </>
    
  )
}

export default MyAuctionItemDetails