import React from 'react'
import './Networks.css'

import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Networks = () => {
  return (
    <div className='divNetworks'>
        <ul className='networksList'>
            <li className='networks'><a className='linkNet' href="https://github.com/MrLadino"><FaGithub /></a></li>
            <li className='networks'><a className='linkNet' href="https://www.facebook.com/andresfelipe.ladino.12"><FaFacebookF /></a></li>
            <li className='networks'><a className='linkNet' href="https://www.instagram.com/ladino_007/?hl=es-es"><FaInstagram /></a></li>
            <li className='networks'><a className='linkNet' href="https://wa.me/+573206975352"><FaWhatsapp /></a></li>
        </ul>
    </div>
  )
}
