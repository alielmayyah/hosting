import React, { useState } from 'react'; // Import useState hook
import './Navbar.css'; // Import your CSS file
import logo from '../assets/imma white web.png';
import { motion } from 'framer-motion'; // Import Framer Motion
import { Link } from 'react-router-dom';

function Navbar() {
  // Define some animation variants for the navmenu items
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  // Create a state variable called isOpen and set it to false initially
  const [isOpen, setIsOpen] = useState(false);

  // Create a function to toggle the isOpen state variable
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navmenu">
        <motion.div
          className="how-to-use"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          whileHover="hover"
        >
          <Link className="nav-link" to="/comingsoon">
            How to use
          </Link>
        </motion.div>
        <motion.div
          className="pricing"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          whileHover="hover"
        >
          <Link className="nav-link" to="/comingsoon">
            Pricing
          </Link>
        </motion.div>
        <motion.div
          className="contact"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          whileHover="hover"
        >
          <Link className="nav-link" to="/comingsoon">
            Contact
          </Link>
        </motion.div>
        <motion.div
          className="about"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          whileHover="hover"
        >
          <Link className="nav-link" to="/comingsoon">
            About
          </Link>
        </motion.div>
      </div>
      <div className="logospace">
        <Link className="nav-link" to="/home">
          <motion.img
            className="logo"
            src={logo}
            alt="Imma logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 45, damping: 20 }}
            whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            dragElastic={0.5}
          />
        </Link>
         {/* Add a hamburger icon that toggles the isOpen state variable when clicked */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
      <div className="nav-buttons">
        <motion.div
          className="signup-button"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
          whileHover="hover"
        >
          <div className="sign-up">
            <Link className="nav-link" to="/comingsoon">
              Signup
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="login-button"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}
          whileHover="hover"
        >
          <div className="login">
            <Link className="nav-link" to="/comingsoon">
              Login
            </Link>
          </div>
        </motion.div>
      </div>


     

      {/* Conditionally render the nav menu items based on the isOpen state variable */}
      {isOpen && (
        <div className="navmenu-mobile">
        <motion.div
          className="how-to-use"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          whileHover="hover"
        >
          <Link className="nav-link" to="/comingsoon">
            How to use
          </Link>
        </motion.div>
        <motion.div
          className="pricing"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          whileHover="hover"
        >
          <Link className="nav-link" to="/comingsoon">
            Pricing
          </Link>
        </motion.div>
        <motion.div
          className="contact"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          whileHover="hover"
        >
          <Link className="nav-link" to="/comingsoon">
            Contact
          </Link>
        </motion.div>
        <motion.div
          className="about"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          whileHover="hover"
        >
          <Link className="nav-link" to="/comingsoon">
            About
          </Link>
        </motion.div>
        <div className="nav-buttons-mobile">
        <motion.div
          className="signup-button"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
          whileHover="hover"
        >
          <div className="sign-up">
            <Link className="nav-link" to="/comingsoon">
              Signup
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="login-button"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}
          whileHover="hover"
        >
          <div className="login">
            <Link className="nav-link" to="/comingsoon">
              Login
            </Link>
          </div>
        </motion.div>
      </div>
        </div>
        
      )}
    </div>
  );
}

export default Navbar;
