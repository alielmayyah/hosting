// ComingSoon.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from '../assets/imma white web.png'
import './Comingsoon.css'
function ComingSoon() {
  return (
    <div className="comingsoon">
    <img className='imageanimation' src={logo} alt="" />
    <h1 className='comingsoontext'> Coming Soon </h1>
 
    <div className="bar">
        <div className="loading"></div>
    </div>
    
</div>
  );
}

export default ComingSoon;
