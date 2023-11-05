import React, { Fragment, useEffect, useState } from "react";
import classes from "./CreateForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { useNavigate,useParams } from "react-router-dom";
import axios from "../../api/axios";
function EditAuction() {
    
    const auctionURL = useParams()
    const MYITEM = auctionURL._id
    const EDIT = `api/v1/auctions/${MYITEM}`
    console.log(MYITEM);
    const navigate = useNavigate()
    const [auction,setAuction] = useState({})
    const [auctionName, setAuctionName] = useState(auction.name);
    const [description,setDescription]  = useState("")
    const [poster,setPoster] = useState("")
    const [estimate,setEstimate] = useState()
    const [tags, setTags] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date())

    const token = localStorage.getItem('token')

    const starthandleDateChange = startDate =>{
        setStartDate(startDate)
    }

    const endhandleDateChange = startDate =>{
        setEndDate(startDate)
    }

    const handleChange = (tags) => {
        setTags(tags);
    };

    useEffect(()=>{
    const EditAuction= async()=>{
        try{
            const response = await axios.get(MYITEM, {
                headers: { Authorization: token },
                });
                console.log(response);
                setAuction(response.data)
                if(response.status === 200){
                    
            }
        }catch(error) { 
            console.log(error);
        }
    };

    EditAuction();

    },[MYITEM, token]);
    const handlerSubmitAuctionItem  =async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.put(EDIT,JSON.stringify({
                name:auctionName || auction.name,
                description:description ||auction.description,
                start_date_time:startDate || auction.start_date_time,
                end_date_time:endDate || auction.end_date_time,
                poster:poster || auction.poster,
                estimate:estimate || auction.estimate,
                tags:tags|| auction.tags
            }),
            {
                headers:{ 'Content-Type': 'application/json',
                          'Authorization': token,
                }
            },
            )
            console.log(response);
            if(response.status === 200){
                toast.success("The auction updated successfully",{theme:"dark"})
                setTimeout(() => {
                    navigate('/my_auctions')
                }, 2500);
            }

        } catch (err) {
                console.log('error');
        }
    } 

  return (
    <div className={classes.formContainer}>
        <h1>Edit Auction</h1>
        <form className={classes.formAdding} onSubmit={handlerSubmitAuctionItem}>
            <div className={classes.textfileds}>
                <label htmlFor="name"> Auction Name</label>
                <input
                    type="text"
                    placeholder="Auction Name"
                    value={auctionName || auction.name}
                    onChange={(e) => setAuctionName(e.target.value)}
                />
            </div>

            <div className={classes.textfileds}>
                <label htmlFor="Description">Description</label>
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={description || auction.description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className={classes.textfileds}>
                <label htmlFor="start date time">start_date_time</label>
                <DatePicker
                    selected={startDate || auction.start_date_time}
                    onChange={starthandleDateChange}
                />
            </div>

            <div className={classes.textfileds}>
                <label htmlFor="End date time">End_date_time</label>
                <DatePicker
                    selected={endDate || auction.end_date_time}
                    onChange={endhandleDateChange}
                />
            </div>

            <div className={classes.textfileds}>
                <label htmlFor="poster">Poster</label>
                <input 
                    type="text" 
                    placeholder="Poster" 
                    value={poster || auction.poster}
                    onChange={(e) => setPoster(e.target.value)}
                />
            </div>

            <div className={classes.textfileds}>
                <label htmlFor="estimate">Estimate</label>
                <input 
                    type="text" 
                    placeholder="Estimate"
                    value={estimate || auction.estimate}
                    defaultValue={auction.estimate}
                    onChange={(e) => setEstimate(e.target.value)}
                
                />
            </div>

            <div className={classes.textfileds}>
                <label htmlFor="tags">Tags</label>
                <TagsInput
                    value={tags || auction.tags}
                    inputValue={auction? auction.tags :""}
                    onChange={handleChange}
                />
            </div>
                <button className={classes.adding}>Submit</button>
                <ToastContainer></ToastContainer>
        </form>
      
    </div>
  );
}

export default EditAuction;
