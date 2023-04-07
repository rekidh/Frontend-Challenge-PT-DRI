import style from './index.module.css'
interface Button{
  children?:React.ReactNode,
  collor?:string,
  type?:string,
  size?:{
    x:number,
    y:number
  },
}
export default function index(prop:Button) {

  switch (prop.type){
    case 'btn-glass': return(
      <button style={{width:prop.size?`${prop.size.x}em`:'',height:prop.size?`${prop.size.y}em`:''}}  className={style.glass}>{prop.children}</button>
    )
  }
  return (
    <button style={{width:prop.size?`${prop.size.x}em`:'',height:prop.size?`${prop.size.y}em`:'',background:prop.collor?prop.collor:'#FFF'}}  className={style.btn}>{prop.children}</button>
  )
}
