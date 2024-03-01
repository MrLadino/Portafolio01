import React from 'react'
import './ReferencesCard.css'

export const ReferencesCard = ({name,position,phone,email}) => {
  return (
    <div className='infoReferences'>
        <p>Nombre: {name}</p>
        <p>Cargo: {position}</p>
        <p>Teléfono: {phone}</p>
        <p>Correo electrónico: {email}</p>
    </div>
  )
}
