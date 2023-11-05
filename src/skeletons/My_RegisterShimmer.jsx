import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from '../Components/PageComponents/MY__Auctions/My_RegisterAuction.module.css';
function My_RegisterShimmer() {
  return (
    <section className={classes.regAuction}>
        <div className={classes.registermyAuctions}>
            <li  className={classes.bidAuctionsItems}>
                <Skeleton className={classes.regiterimage}/>
                <div className={classes.itemText}>
                    <h5><Skeleton/></h5>
                        <h1><Skeleton/></h1>
                        <h5><Skeleton/></h5>
                        <Skeleton className={classes.itemdescription}/>
                        <Skeleton/>
                </div>
            </li>
        </div>
    </section>
  )
};

export default My_RegisterShimmer