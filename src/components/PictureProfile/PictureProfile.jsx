import React from 'react'
import pictureProfile from '../../assets/pictureProfile.jpg'
import './PictureProfile.css'

export const PictureProfile = () => {
  return (
    <section className='sectProfile'>
        <img className='imgProfile' src={pictureProfile} alt="ImgProfile" />
        <h2 className='nameProfile'>Juan Jose Gomez</h2>
        <span className='borderName'></span>
    </section>
  )
}
