import React from 'react'
import classes from './Features.module.css';
import { TbBrandDenodo } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
function AllFeatures() {
  return (
    <>
        <div className={classes.eachFeatures}>
                <TbBrandDenodo size={30}/>
                <h3>Unlimited Auctions</h3>
                <p>Add as many auctions as you’d like to your online store. 
                    With no limits, you can stock and sell the variety of auctions 
                    that the modern customer demands.</p>
            </div>

            <div className={classes.eachFeatures}>
                <GrSecure size={30}/>
                <h3>Added security</h3>
                <p>Digital auctions offers fraud analysis to a secure website for all domains. 
                    Digital auctions is also Level 1 PCI DSS compliant for all financial transactions.
                </p>
            </div>

            <div className={classes.eachFeatures}>
                <AiOutlineEdit size={30}/>
                <h3>Fully customizable</h3>
                <p>Customize your auction your way to match every element of your brand. 
                    Choose estimate, poster, tags, , and more to make your 
                    auction your own.
                </p>
            </div>
    </>
  )
}

export default AllFeatures