import React from 'react'
import classes from '../Components/PageComponents/EachItem.module.css';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function EachItemShimmer() {
  return (
    <section className={classes.mainContent}>
        <div>
            <Skeleton className={classes.title}/>
            <Skeleton className={classes.auctionTime}/>                        
            <Skeleton className={classes.timeicon}/>
            <Skeleton className={classes.auctionTime} />
        </div>
        <article className={classes.auctionItemDetails}> 
            <div>
                <Skeleton className={classes.auctionhardCode}/>
                <Skeleton className={classes.auctionhardCode}/>
                <Skeleton className={classes.auctionItemDescription}/>
            </div>
            <Skeleton className={classes.auctionImg}/>
        </article>
        <div>
            <Skeleton className={classes.join}/>
            <Skeleton className={classes.join}/>
            <Skeleton className={classes.registerBTN}/>
        </div>
    </section>
  )
}

export default EachItemShimmer