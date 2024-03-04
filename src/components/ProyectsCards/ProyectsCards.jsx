import React from 'react'
import './ProyectsCards.css'

export const ProyectsCards = ({titule,description,linkP,imgP}) => {
  return (
    <div className='card'>
        <img className='imgCard' src={imgP} alt="" />
        <div className='infoCard'>
            <h2>{titule}</h2>
            <p className='proyectDescription'>{description}</p>
            <a target='blanck' className='proyectLink' href={linkP}>Ir a proyecto</a>
        </div>
    </div>
  )
}
