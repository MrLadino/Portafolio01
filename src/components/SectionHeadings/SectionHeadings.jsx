import React from 'react'
import LogoSena from '../../assets/LogoSena.png'
import './SectionHeadings.css'

export const SectionHeadings = ({content,id}) => {
  return (
    <section className='header'>
        <img className='headerLogo' src={LogoSena} alt="Logo Sena" />
        <h2 id={id} className='headerTitule'>{content}</h2>
    </section>
  )
}
