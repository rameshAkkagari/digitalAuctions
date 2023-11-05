import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from '../Components/PageComponents/MY__Auctions/MyAuctionItemDetails.module.css'
function My_AuctionShimmer() {
  return (
    <div>
        <section className={classes.section}>
            <Skeleton className={classes.itemName}/>

            <div className={classes.auctionsTimes}>
                <Skeleton className={classes.startTime}/>
                <Skeleton className={classes.startTime}/>
                <Skeleton className={classes.status}/>
            </div>

            <article className={classes.auctionItemDetails}>
                <div>
                    <Skeleton className={classes.maintitles}/>
                    <Skeleton className={classes.maintitle2}/>
                    <Skeleton className={classes.description}/>
                </div>

                <div>
                    <Skeleton className={classes.auctionImg}/> 
                    <Skeleton className={classes.editbtn}/>
                </div>
            </article>
                <Skeleton className={classes.smallImg}/>
                <Skeleton className={classes.spans}/>
                <Skeleton className={classes.spans}/>
                <Skeleton className={classes.spans}/>
                <Skeleton className={classes.spans}/>
        </section>
    </div>
  )
};

export default My_AuctionShimmer