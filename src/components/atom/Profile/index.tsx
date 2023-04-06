import React from 'react'
import img from '../../../assets/profile_img.png'
import style from './index.module.css'

export default function index() {
  return (
    <>
      <div className={style.container}>
         <img src={img} alt="Profile" />
         <div className={style.profileInfo}>
            <h5>Reki Desma Haldi</h5>
            <p>Frontend</p>
         </div>
      </div>
    </>
  )
}
