import React from "react";
import "./Landing.css";
import laptop from "../assets/Macbook M2 Air Space Gray.png";
import {motion} from 'framer-motion'

function Landing() {
  const handleStartNowClick = () => {
    // Add your custom click logic here
    // For example, you can display a modal or perform other actions
  };


  return (
    <div className="container">
         <motion.div
        initial={{ y: -100 }}   // Initial position
        animate={{ y: 0 }}      // Final position
        transition={{ type: 'spring', stiffness:15}} // Animation type and parameters
      >
       <h1 className="header1">
        Your Intelligent Marketing Management Assistant
      </h1>
      <h2 className="header2">
        Unlock the Power of <span>IMMA</span> to Transform Your Marketing
        Strategy
      </h2>
      </motion.div>
      {/* <h1 className="header1">
        Your Intelligent Marketing Management Assistant
      </h1>
      <h2 className="header2">
        Unlock the Power of <span>IMMA</span> to Transform Your Marketing
        Strategy
      </h2> */}
      
      <div className="laptop-container">
        <img className="laptop" src={laptop} alt="laptop"></img>
      </div>
      <div className="buttons">
        <svg className="startnow" onClick={handleStartNowClick}>
          <defs>
            <linearGradient
              id="strokeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="25%" stopColor="#00c8ff" />
              <stop offset="75%" stopColor="#03c5c9" />
            </linearGradient>
          </defs>
          <rect
            x="0"
            y="0"
            rx="10"
            ry="10"
            stroke="url(#strokeGradient)"
            strokeWidth="2"
          />
          <text
            x="50%"
            y="50%"
            fill="#121212"
            dominantBaseline="middle"
            textAnchor="middle"
            className="startnow-text"
          >
            Start Now
          </text>
        </svg>


       


        {/* <div className="explore">
          <a href="#">Explore</a>
        </div> */}
      </div>
    </div>
  );
}

export default Landing;