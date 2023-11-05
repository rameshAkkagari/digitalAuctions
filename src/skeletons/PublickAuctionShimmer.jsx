// import React from 'react'
// import classes from '../Components/PageComponents/AuctionItems.module.css';
// import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
// function PublickAuctionShimmer() {
//   return (
//     <section>

//     <ul className={classes.publickAuctionsItem}>
//         <li className={classes.publickAuctionsItem}>
//              <Skeleton className={classes.publickimage}/>
//              <div className={classes.itemDetails}>
//              <small><Skeleton/></small>
//                         <h2><Skeleton/></h2>
//                         <Skeleton className={classes.icon}> Online</Skeleton>
//                         <Skeleton className={classes.itemdescription}></Skeleton>
//                         <Skeleton className={classes.viewAuctions}>view Auctions</Skeleton>
//              </div>
//         </li>
//     </ul>

//     </section>
//   )
// };

// export default PublickAuctionShimmer
import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from '../Components/PageComponents/AuctionItems.module.css';

function PublickAuctionShimmer() {
  return (
    <div className={classes.allAuctionsItems}>
        <section className={classes.totalAuctions}>
            <div className={classes.publickAuctions}>
                <li className={classes.publickAuctionsItems}>
                    <Skeleton className={classes.auctionimage}/>
                    <div className={classes.auctionitemText}>
                        <h5><Skeleton/></h5>
                        <h1><Skeleton/></h1>
                        <h5><Skeleton/></h5>
                        <Skeleton  className={classes.itemdescription}/>
                        <span><Skeleton/></span>
                    </div>
                </li>
            </div>
        </section>
    </div>
  )
}

export default PublickAuctionShimmer