import React from 'react'
import './PersonInfoStyle.css'
import img from '../../../assets/chat1.jfif'

function PersonInfo({img,name}) {
  return (
    <>
    <div className='info'>
        <img src={img} alt="" />
        <h2>{name}</h2>
    </div>
    </>
  )
}

export default PersonInfo