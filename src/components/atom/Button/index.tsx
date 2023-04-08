import style from './index.module.css'
import React,{ButtonHTMLAttributes} from 'react'
interface MyButton {
  children?:React.ReactNode,
  collor?:string,
  class?:string,
  size?:{
    x:number,
    y:number
  },
}
export default function index(prop:MyButton & React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {

  switch (prop.class){
    case 'btn-glass': return(
      <button  {...prop} style={{width:prop.size?`${prop.size.x}em`:'',height:prop.size?`${prop.size.y}em`:''}}  className={style.glass}>{prop.children}</button>
    )
  }
  return (
    <button style={{width:prop.size?`${prop.size.x}em`:'',height:prop.size?`${prop.size.y}em`:'',background:prop.collor?prop.collor:'#FFF'}}  className={style.btn}>{prop.children}</button>
  )
}
