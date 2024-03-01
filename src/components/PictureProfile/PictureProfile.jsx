import React from 'react'
import imgProfile from '../../assets/imgProfile.jpg'
import './PictureProfile.css'

export const PictureProfile = () => {
  return (
    <section className='sectProfile'>
        <img className='imgProfile' src={imgProfile} alt="ImgProfile" />
        <h2 className='nameProfile'>Juan Jose Gomez</h2>
        <span className='borderName'></span>
    </section>
  )
}
