// import React from 'react'
// import Bidding from './Components/Layout/Items/Bidding'
// import DashBoard from './Components/Layout/DashBoard';
// import Root from './Pages/Root';
// import SignIn from './Components/Ul/HeaderContent/SignIn'
// import SignUp from './Components/Ul/HeaderContent/SignUp'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import Home from './Pages/Home';

// import { checkAuthLoader, tokenLoader, trueToken } from './util/auth';
 
// const router = createBrowserRouter([
//     {path:"/",
//     element:<Root/>,
//     id:'root',
//     loader:tokenLoader,
//     children:[
//         {index:true ,element:<Home/>},
//         {path:"signup",element:<SignUp/>},
//         {path:"signin",element:<SignIn/>},
//         {path:"/dashboard",element:<DashBoard/>,loader:trueToken},
//         {path:"biddin",element:<Bidding/>,loader:trueToken}
//     ]
// }
// ])
// function App() {
//   return (
//     <RouterProvider router={router}>

//     </RouterProvider>
//   )
// }

// export default App

import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Root from './Pages/Root';
import Home from './Pages/Home';
import Contact from './Components/Ul/landingPages/Contact';
import Signup from './Components/Ul/HeaderContent/SignUp';
import SignIn from './Components/Ul/HeaderContent/SignIn';
import Actions from './Pages/Auctions';
import EachItem from './Components/PageComponents/EachItem';
// import Footer from './Components/Ul/MainHeaderContent/Footer';
import Create from './Pages/Create';
import ReqiuedAuth from './Pages/ReqiuedAuth';
import MyAuctionPage from './Pages/MyAuctionPage';
import Profile from './Pages/Profile';
import MyAuctionItemDetails from './Components/PageComponents/MY__Auctions/MyAuctionItemDetails';
import Bidding from './Components/Layout/Items/Bidding';
import EditAuction from './Components/PageComponents/EditAuction';
import MyRegisterAuctions from './Components/PageComponents/MY__Auctions/My_RegisterAuctions';
import Addresses from './Components/Layout/UserDetails/Addresses';
import Features from './Components/Ul/landingPages/Features';
// import AddNewAddress from './Components/Layout/UserDetails/AddNewAddress';
function App() {
  return (
    <div>
        <Root/>
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/features' element={<Features/>}/>
                <Route element={<ReqiuedAuth/>}>
                    <Route path='/actions' element={<Actions/>}/>
                    <Route path='/actions/:url' element={<EachItem/>}/>
                    <Route path='/create' element={<Create/>}/>
                    <Route path='/my_auctions' element={<MyAuctionPage/>}/>
                    <Route path='/my_auctions/:myitem' element={<MyAuctionItemDetails/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/editauction__/:_id' element={<EditAuction/>}/>
                    <Route path='/myregisterAuctions' element={<MyRegisterAuctions/>}/>
                    <Route path='/bidding/:id' element={<Bidding/>}/>
                    <Route path='/addresses' element={<Addresses/>}/>
                </Route>
        </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App
