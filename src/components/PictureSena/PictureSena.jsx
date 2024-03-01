import React from 'react'
import LogoSena from '../../assets/LogoSena.png'
import './PictureSena.css'

export const PictureSena = () => {
  return (
    <section className='seccSena'>
        <img className='imgSena' src={LogoSena} alt="Logo Sena" />
    </section>
  )
}
