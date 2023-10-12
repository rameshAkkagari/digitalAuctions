import React from 'react'
import classes from './Banner.module.css';
function Banner() {
  return (
    <>
        <div>
            <img className={classes.banner} src="https://github.com/redis-developer/NR-digital-auction-frontend/blob/main/public/img/intro-bg.jpg?raw=true" alt="React landing page" />
          </div>
          <div className={classes.text}>
            <h1>DIGITAL AUCTIONS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo<br/> veniam et incidunt earum nisi minus, animi, </p>
            <button>LEARN MORE</button>
          </div>
    </>
  )
}

export default Banner