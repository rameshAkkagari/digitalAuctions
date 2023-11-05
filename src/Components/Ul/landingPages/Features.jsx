import React from 'react';
import classes from './Features.module.css';
import AllFeatures from './AllFeatures';

function Features(){
  return (
    <div className={classes.allfeatures}>
            <h1>A website builder with perks</h1>
        <header className={classes.features}> 
            <AllFeatures/>
            <AllFeatures/>
            <AllFeatures/>
        </header>
    </div>
  )
}

export default Features