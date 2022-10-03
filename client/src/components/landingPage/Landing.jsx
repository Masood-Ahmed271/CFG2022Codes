import * as React from 'react';
import Navbar from '../nav/Navbar';
import './landing.css';
import JA from '../images/JA.png';



export default function Landing() {
  return (
    <div className='Background'>
      <Navbar />
      <h1 className='title'> Junior Achievement Hong Kong </h1>
      <img className="ImageJA" src={JA} alt="JA image"/>
    </div>
  );
}