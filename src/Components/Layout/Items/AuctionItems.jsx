import React,{useState} from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import classes from './AuctionItems.module.css'
 const auctionsItems = [
    {
        id:"a1",
        title:"Lamps",
        image:"https://ii1.pepperfry.com/media/catalog/product/b/r/800x880/brass-antique-gold-table-lamp-with-12-inches-off-white-lampshade-by-kp-lamps-store-brass-antique-gol-wgwbfj.jpg",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit consequuntur excepturi laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
        price:300,
    },
    {
        id:"a2",
        title:"Sink",
        image:"https://i.pinimg.com/1200x/9c/d2/bc/9cd2bc2a72ca4aa20f1d4de53e3b74a5.jpg",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
        price:370,
    },
    {
        id:"a3",
        title:"Cashier station",
        image:"https://m.media-amazon.com/images/I/41pksMfJL5L._AC_UF1000,1000_QL80_.jpg",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.   laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
        price:200,
    },
    {
        id:"a3",
        title:"Cashier station",
        image:"https://m.media-amazon.com/images/I/41pksMfJL5L._AC_UF1000,1000_QL80_.jpg",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.   laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
        price:200,
    },
    {
        id:"a1",
        title:"Lamps",
        image:"https://ii1.pepperfry.com/media/catalog/product/b/r/800x880/brass-antique-gold-table-lamp-with-12-inches-off-white-lampshade-by-kp-lamps-store-brass-antique-gol-wgwbfj.jpg",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit consequuntur excepturi laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
        price:300,
    },
    {
        id:"a2",
        title:"Sink",
        image:"https://i.pinimg.com/1200x/9c/d2/bc/9cd2bc2a72ca4aa20f1d4de53e3b74a5.jpg",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
        price:370,
    },
    {
        id:"a3",
        title:"Cashier station",
        image:"https://m.media-amazon.com/images/I/41pksMfJL5L._AC_UF1000,1000_QL80_.jpg",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.   laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
        price:200,
    },
    {
        id:"a3",
        title:"Cashier station",
        image:"https://m.media-amazon.com/images/I/41pksMfJL5L._AC_UF1000,1000_QL80_.jpg",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.   laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
        price:200,
    },

 ]

function AuctionItems() {
  return (
    <div>
        <ul className={classes.auctionItems}>
            {auctionsItems.map((item)=>
            <li className={classes.items}>
                <img src={item.image} alt={item.title}/>
                <div className={classes.price}>
                    <div className={classes.icon}>
                        <h4>{item.title}</h4>
                        <h2><AiOutlineHeart/></h2>
                    </div>
                    <p>{item.description}</p>
                </div>
                <div className={classes.actions}>
                    <button>BID</button>
                    <p>Current Bil</p>
                    <h3>${item.price}</h3>      
                </div>
            </li>)}
        </ul>
    </div>
  )
}
export default AuctionItems

// import React, { useState } from 'react';
// import { AiOutlineHeart } from 'react-icons/ai';
// import classes from './AuctionItems.module.css';

//  const auctionsItems = [
//     {
//         id:"a1",
//         title:"Lamps",
//         image:"https://ii1.pepperfry.com/media/catalog/product/b/r/800x880/brass-antique-gold-table-lamp-with-12-inches-off-white-lampshade-by-kp-lamps-store-brass-antique-gol-wgwbfj.jpg",
//         description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit consequuntur excepturi laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
//         price:300,
//     },
//     {
//         id:"a2",
//         title:"Sink",
//         image:"https://i.pinimg.com/1200x/9c/d2/bc/9cd2bc2a72ca4aa20f1d4de53e3b74a5.jpg",
//         description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
//         price:370,
//     },
//     {
//         id:"a3",
//         title:"Cashier station",
//         image:"https://m.media-amazon.com/images/I/41pksMfJL5L._AC_UF1000,1000_QL80_.jpg",
//         description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.   laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
//         price:200,
//     },
//     {
//         id:"a3",
//         title:"Cashier station",
//         image:"https://m.media-amazon.com/images/I/41pksMfJL5L._AC_UF1000,1000_QL80_.jpg",
//         description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.   laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
//         price:200,
//     },
//     {
//         id:"a1",
//         title:"Lamps",
//         image:"https://ii1.pepperfry.com/media/catalog/product/b/r/800x880/brass-antique-gold-table-lamp-with-12-inches-off-white-lampshade-by-kp-lamps-store-brass-antique-gol-wgwbfj.jpg",
//         description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit consequuntur excepturi laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
//         price:300,
//     },
//     {
//         id:"a2",
//         title:"Sink",
//         image:"https://i.pinimg.com/1200x/9c/d2/bc/9cd2bc2a72ca4aa20f1d4de53e3b74a5.jpg",
//         description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.  laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
//         price:370,
//     },
//     {
//         id:"a3",
//         title:"Cashier station",
//         image:"https://m.media-amazon.com/images/I/41pksMfJL5L._AC_UF1000,1000_QL80_.jpg",
//         description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.   laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
//         price:200,
//     },
//     {
//         id:"a3",
//         title:"Cashier station",
//         image:"https://m.media-amazon.com/images/I/41pksMfJL5L._AC_UF1000,1000_QL80_.jpg",
//         description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.   laborum dolore eaque architecto est itaque cumque ipsam sapiente non delectus",
//         price:200,
//     },

//  ]

// const itemsPerPage = 3; // Number of items to display per page

// function AuctionItems() {
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the starting and ending indices for the current page
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // Slice the array to get the items for the current page
//   const displayedItems = auctionsItems.slice(startIndex, endIndex);

//   const totalPages = Math.ceil(auctionsItems.length / itemsPerPage);

//   const goToPage = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <ul className={classes.auctionItems}>
//         {displayedItems.map((item) => (
//           <li key={item.id} className={classes.items}>
//             <img src={item.image} alt={item.title} />
//             <div className={classes.price}>
//               <div className={classes.icon}>
//                 <h4>{item.title}</h4>
//                 <h2><AiOutlineHeart /></h2>
//               </div>
//               <p>{item.description}</p>
//             </div>
//             <div className={classes.actions}>
//               <button>BID</button>
//               <p>Current Bil</p>
//               <h3>${item.price}</h3>
//             </div>
//           </li>
//         ))}
//       </ul>

//       <div className={classes.pagination}>
//         <button
//           onClick={() => goToPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous Page
//         </button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={() => goToPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next Page
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AuctionItems;

 