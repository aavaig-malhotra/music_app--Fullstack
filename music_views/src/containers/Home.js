import { Login } from '../components/Login';
import React from 'react';
import { Register } from '../components/Register';
import { Singers } from '../components/Singers';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <div className='title-2'>
      <img className='title logo-1' src="cdcd.png"></img>
      <h1 className='text-center title-1 logo-1'><span className="txt-music">SOUL</span>MUSIC</h1>
      {/* <Singers/> */}
      <Link to='/' />
      {/* <Register/> */}
    </div>
  );
};
