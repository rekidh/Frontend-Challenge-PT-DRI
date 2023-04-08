import React from 'react'
import style from './logo.module.css'

interface Logo{
   children:React.ReactNode
}
 const Logos = (prop:Logo) => {
  return (
    <div className={style.container}>
      <div className={style.container_icon}>
         <div className={style.rectangle}></div>
         <div className={style.ellipse}></div>
      </div>
      <div className={style.child}>{prop.children}</div>
    </div>
  )
}

export default Logos