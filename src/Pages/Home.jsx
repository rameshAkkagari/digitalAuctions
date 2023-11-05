import React from 'react'
import Banner from '../Components/Ul/HeaderContent/Banner';
import DashBoard from '../Components/Layout/DashBoard';
function Home() {
  const token = localStorage.getItem('token')
  return (
    <>
        {!token &&  <Banner/>}
        {token && <DashBoard/>}
    </>
  )
}

export default Home