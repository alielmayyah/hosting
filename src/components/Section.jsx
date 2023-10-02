import React from "react";
import "./Section.css";
import screen from '../assets/Screen.png'
import arrowsvg from '../assets/Vector.svg'
function Section() {
 

  return (
    <div className="section-1">
       <div className="left">
         <img  className='arrow-screen-1'src={arrowsvg}></img>
               <h1 className="powered">Powered by ChatGPT-4</h1>
       </div>
      <img className='screen-1' src={screen}></img>
    </div>
  );
}

export default Section;
