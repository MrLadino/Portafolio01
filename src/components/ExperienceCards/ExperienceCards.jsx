import React from 'react'
import './ExperienceCards.css'

export const ExperienceCards = ({img,valueP,progress}) => {
  return (
    <div className='experience'>
        <img className='imgXP' src={img} alt="" />
        <progress className='progressXP' value={valueP} max="100"></progress>
        <p className='ProgressP'>{progress}</p>
    </div>
  )
}
