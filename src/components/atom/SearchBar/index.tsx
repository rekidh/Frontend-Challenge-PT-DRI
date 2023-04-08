import React from 'react'
import style from './index.module.css'
import assets from '../../../helpers/assetsLink'
export default function Index() {
  return (
    <div className={style.container}>

         <label htmlFor="search">{assets.searchIcon}</label>
         <input id='search' type="text" placeholder='Search Costumer'/>
         <button type='submit' className={style.btn_submit}>Search</button>
    </div>
  )
}
