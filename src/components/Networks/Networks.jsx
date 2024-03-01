import React from 'react'
import './Networks.css'

import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Networks = () => {
  return (
    <div className='divNetworks'>
        <ul className='networksList'>
            <li className='networks'><FaLinkedinIn /></li>
            <li className='networks'><FaFacebookF /></li>
            <li className='networks'><FaInstagram /></li>
            <li className='networks'><FaTwitter /></li>
            <li className='networks'><FaWhatsapp /></li>
        </ul>
    </div>
  )
}
