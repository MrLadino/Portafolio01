import React from 'react'
import ktm from '../../assets/Ktm.jpg'
import './ProyectsCards.css'

export const ProyectsCards = ({titule,description}) => {
  return (
    <div className='card'>
        <img className='imgCard' src={ktm} alt="" />
        <div className='infoCard'>
            <h2>{titule}</h2>
            <p className='proyectDescription'>{description}</p>
            <a className='proyectLink' href="#">Ir a proyecto</a>
        </div>
    </div>
  )
}
