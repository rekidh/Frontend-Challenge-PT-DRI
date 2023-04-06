import style from './index.module.css'

export default function index() {
  return (
      <div className={style.container_arrow}>
       <span className={`${style.arrow} ${style.up}`}></span> 
       <span className={`${style.arrow} ${style.down}`}></span> 
     </div>
  )
}
