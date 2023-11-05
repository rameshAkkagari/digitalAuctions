import React, { Fragment, useState } from "react";
import classes from "./CreateForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from '../../api/axios';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CreateForm() {
    const navigate = useNavigate()
    const AUCTIONS  = 'api/v1/auctions'
    const [auctionName, setAuctionName] = useState("");
    const [description,setDescription]  = useState("")
    const [poster,setPoster] = useState("")
    const [auction_url,setAuction_url] = useState("")
    const [estimate,setEstimate] = useState(2000)
    const [tags, setTags] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date())
    const [auction_urlError,setAuction_urlError] = useState("")

    
    const [successFullAdd,setSuccessFullAdd] = useState("")
    const [nameError,setNameError] = useState("")
    const [startTimeError,setStartTimeError] = useState("")

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

    const handlerSubmitAuctionItem  =async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.post(AUCTIONS,JSON.stringify({
                name:auctionName,
                description:description,
                start_date_time:startDate,
                end_date_time:endDate,
                poster:poster,
                auction_url:auction_url,
                estimate:estimate,
                tags:tags
            }),
            {
                headers:{ 'Content-Type': 'application/json',
                          'Authorization': token,
                }
            },
            )
            console.log(response);
            if(response.status === 201){
                setSuccessFullAdd("Auction created successfully")
                toast.success('Auction created successfully')

                setTimeout(() => {
                    navigate("/my_auctions");
                    // toast.success('Auction created successfully')
                  }, 2500);
            }
            
            } catch (err) {
            console.log('error');
            let error = err.response.data.errors
            if(error.name){
                setNameError(error.name)
            } 

            if(error.start_date_time){
                setStartTimeError(error.start_date_time)
            }
            if(error.auction_url){
                setAuction_urlError(error.auction_url)
            }
        }
    } 


  return (
    <div className={classes.formContainer}>
        <h1>Create Auction</h1>
        {successFullAdd ? <h2>{successFullAdd}</h2> : <form className={classes.formAdding} onSubmit={handlerSubmitAuctionItem}>
        <div className={classes.textfileds}>
            <label htmlFor="name"> Auction Name</label>
            {nameError && <span>{nameError}</span>}
            <input
                type="text"
                placeholder="Auction Name"
                value={auctionName}
                onChange={(e) => setAuctionName(e.target.value)}
            />
        </div>

        <div className={classes.textfileds}>
            <label htmlFor="Description">Description</label>
            <input 
                type="text" 
                placeholder="Description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>

        <div className={classes.textfileds}>
            <label htmlFor="start date time">start date time</label>
            {startTimeError && <span>{startTimeError}</span>}
            <DatePicker
                selected={startDate}
                onChange={starthandleDateChange}
            />
        </div>

        <div className={classes.textfileds}>
            <label htmlFor="End date time">End date time</label>
            <DatePicker
                selected={endDate}
                onChange={endhandleDateChange}
            />
        </div>

        <div className={classes.textfileds}>
            <label htmlFor="poster">Poster</label>
            <input 
                type="url" 
                placeholder="Poster" 
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
            />
        </div>

        <div className={classes.textfileds}>
            <label htmlFor="auction url">Auction url</label>
            {auction_urlError && <span>{auction_urlError}</span>}
            <input 
                type="" 
                placeholder="Auction_url" 
                value={auction_url}
                onChange={(e) => setAuction_url(e.target.value)}
            />
        </div>

        <div className={classes.textfileds}>
            <label htmlFor="estimate">Estimate</label>
            <input 
                type="text" 
                placeholder="Estimate"
                value={estimate}
                onChange={(e) => setEstimate(e.target.value)}
            />
        </div>

        <div className={classes.textfileds}>
            <label htmlFor="tags">Tags</label>
            <TagsInput
                value={tags}
                onChange={handleChange}
            />
        </div>
        <button className={classes.adding}>Create</button>
        <ToastContainer/>
      </form>}
      
    </div>
  );
}

export default CreateForm;
