import React from 'react'
import style from './index.module.css'
export default function index() {
  return (
    <div className={style.container}>
      <h3>Customer</h3>
      <div className={style.container_nav_items}>
        <p>You can manage and organize your customer and other things here</p>
        <ul>
          <li><a href="/customer">Customer</a></li>
          <li><a href="/promo">Promo</a></li>
          <li><a href="/voucher">Voucher</a></li>
        </ul>
      </div>
    </div>
  )
}
