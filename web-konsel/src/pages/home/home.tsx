import React from 'react'
import { Link } from "react-router-dom";
import HomeHeader from './homeHeader';
import HomeProfile from './homeProfile';
import HomeRecentNews from './homeRecentNews';
import HomeRecentAnounce from './homeRecentAnounce';
import HomeRelatedLinks from './homeRelatedLinks';
import HomeContact from './homeContact';


function home() {
  return (
    <div className='fulll'>
        <HomeHeader/>
        <HomeProfile/>
        <HomeRecentNews/>
        <HomeRecentAnounce/>
        <HomeRelatedLinks/>
        <HomeContact/>
    </div>
  )
}

export default home