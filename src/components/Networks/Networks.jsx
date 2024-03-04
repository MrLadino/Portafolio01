import React from 'react'
import './Networks.css'

import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export const Networks = () => {
  return (
    <div className='divNetworks'>
        <ul className='networksList'>
            <li className='networks'><a className='linkNet' href="https://github.com/xGomezx"><FaGithub /></a></li>
            <li className='networks'><a className='linkNet' href="https://www.facebook.com/profile.php?id=100030273891304&mibextid=ZbWKwL"><FaFacebookF /></a></li>
            <li className='networks'><a className='linkNet' href="https://www.instagram.com/juanjosegomez182?igsh=aHJrbmptdmJ5M2M2"><FaInstagram /></a></li>
            <li className='networks'><a className='linkNet' href="https://x.com/Ax0624882686?t=3U0HqlxoIkAqqO1nzrsIDQ&s=09"><FaXTwitter /></a></li>
            <li className='networks'><a className='linkNet' href="https://wa.me/+573128922980"><FaWhatsapp /></a></li>
        </ul>
    </div>
  )
}
