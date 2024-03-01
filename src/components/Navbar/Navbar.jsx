import React from 'react'

export const Navbar = ({children}) => {
  return (
    <nav>
        <ul>
            {children}
        </ul>
    </nav>
  )
}
