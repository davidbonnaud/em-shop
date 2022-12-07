import React from 'react';
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 FishHooked All Rights Reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiFillTwitterCircle />
      </p>
    </div>
  )
}

export default Footer