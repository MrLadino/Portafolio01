import React from 'react'
import './Header.css'

export const Header = ({children,visible}) => {
  return (
    <header className={visible}>
        {children}
    </header>
  )
}
