import React, {useState,useEffect} from 'react';

function BiddingTime({biddingAuction}) {
    const targetDate = new Date(biddingAuction.start_date_time).getTime()
    const [timeRemaining, setTimeRemaining] = useState(targetDate - Date.now());

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
    <strong><span>{hours}h{minutes}m{seconds}</span></strong>  
  )
};

export default BiddingTime;