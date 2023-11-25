// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='bg-white shadow h-14'></div>
//   )
// }

// export default Navbar
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import image from '../logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
// C:\Users\SRICHANDANA\Desktop\mern_project\frontend\src\logo.jpg
// C:\Users\SRICHANDANA\Desktop\mern_project\frontend\src\close-up-young-colleagues-having-meeting_23-2149060288.avif
// C:\Users\SRICHANDANA\Desktop\mern_project\frontend\src\businesspeople-meeting-office-working_23-2148908922.avif

const Navbar = () => {
  return (
    <div className='bg shadow h-14 flex justify-between items-center px-4' style={{ backgroundColor: '#FFC436' }}>
      <div className='flex items-center'>
        {/* Clickable Logo */}
        <Link to='/'> {/* Use Link for the logo */}
          <img src={image} alt='Logo' className='h-8 w-8 mr-2 cursor-pointer' style={{height:'50px',width:'50px'}}/>
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <Link to="/" style={{ color: '#0C356A',textDecoration:'none' }}>Home</Link>
        <Link to="/ContactUs" style={{ color: '#0C356A',textDecoration:'none' }}>Contact Us</Link>
        <Link to="/About" style={{ color: '#0C356A',textDecoration:'none' }}>About</Link>
      </div>
    </div>
  );
};

export default Navbar;
