import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Section from "./components/Section";
import Laptop from './components/Laptopmodel';
import { motion, useAnimation } from "framer-motion";
import StarsCanvas from "./components/Stars";
import ComingSoon from "./components/Comingsoon";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import Routes component

function App() {
 
  document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
  })
  return (
    <div className="page">
      <BrowserRouter>
    
        <Navbar />
        <Routes> {/* Wrap your Route components in a Routes element */}
          <Route path="/comingsoon" element={<ComingSoon />} />
          
          <Route path="/home" element={<></>} />
          
        </Routes>
        <Landing></Landing>
        <Section></Section>
        {/* <Laptop></Laptop> */}
        
    </BrowserRouter>
    </div>
  );
}

export default App;


  //  // Create an animation control for the parallax effect
  //  const controls = useAnimation();

  //  // Define a scroll event listener
  //  const handleScroll = () => {
  //    // Calculate the scroll position as a value between 0 and 1 based on the window scroll position
  //    const scrollPosition =
  //      window.scrollY / (document.body.scrollHeight - window.innerHeight);
 
  //    // Update the animations based on the scroll position
  //    controls.start({ y: -scrollPosition * 200 }); // Adjust the value (200) to control the parallax effect
  //  };
 
  //  // Attach the scroll event listener when the component mounts
  //  useEffect(() => {
  //    window.addEventListener("scroll", handleScroll);
 
  //    // Clean up the event listener when the component unmounts
  //    return () => {
  //      window.removeEventListener("scroll", handleScroll);
  //    };
  //  }, []);
 
  // <motion.div
  //       initial={{ y: 0 }} // Initial position
  //       animate={controls} // Animation controlled by scroll position
  //       className="parallax-element"
  //     >
  //       <Landing />
  //     </motion.div>
  //     <motion.div
  //       initial={{ y: 0 }}
  //       animate={controls}
  //       className="parallax-element"
  //     >
  //       <Section />
  //     </motion.div>
  //     <StarsCanvas></StarsCanvas> 