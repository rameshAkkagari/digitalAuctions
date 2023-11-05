import React,{useState,useEffect} from 'react';
import classes from './EachItem.module.css';
import moment from 'moment';
import {BiSolidTimeFive} from "react-icons/bi";

function TargetDate({publickAuction}) {
    console.log(publickAuction);


    const targetDate = new Date(publickAuction.end_date_time).getTime()
    const [timeRemaining, setTimeRemaining] = useState(targetDate - Date.now());


    const originalDateTime = publickAuction.end_date_time;
    const updatedDateTime = moment(originalDateTime).subtract(1, 'seconds');
    const formattedDateTime = updatedDateTime.format('DD/MM/YYYY ');


    const originalDateTimestart = publickAuction.start_date_time;
    const updatedDateTimestart = moment(originalDateTime).subtract(1, 'seconds');
    const formattedDateTimestart = updatedDateTime.format('DD/MM/YYYY ');


    useEffect(() => {
        // Update the countdown every second
        const intervalId = setInterval(() => {
        const currentTime = Date.now();
        const timeDiff = targetDate - currentTime;
          
        if (timeDiff <= 0) {
            // Timer has expired
            clearInterval(intervalId);
            setTimeRemaining(0);
          } else {
            // Update the time remaining
            setTimeRemaining(timeDiff);
          }
        }, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [targetDate]);
      const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
      const seconds = Math.floor((timeRemaining / 1000) % 60);
  return (
    <div>
      <p>{formattedDateTimestart}  -  {formattedDateTime}</p>
      <span className={classes.timeicon}></span>
        <h4 className={classes.auctionTime}> <BiSolidTimeFive/> Auction Ends in {hours}H {minutes}M {seconds}S</h4>
    </div>
  )
}

export default TargetDate