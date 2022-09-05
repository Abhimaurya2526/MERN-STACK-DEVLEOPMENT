// React Components are function
// Function name must start with uppercase letter .
// Function should return atleast single jsx element .
// Function should be exported 
// rafce
// Inline css in the form of object 
import React from 'react'  
import './home.css';
import myimg from'../image/testimonials.png';
const Home = () => {
  return (
    <div>
        <h1 className='myclass' style={{color : 'red', backgroundColor : 'yellow'}}>Home page</h1> 
        <img src={myimg} alt="" />
    </div>
  )
}

export default Home