import React from 'react'
import './Item.css'

export const Item = ({content,route}) => <li className='itemStyle'><a className='linkStyle' href={route}>{content}</a></li>
