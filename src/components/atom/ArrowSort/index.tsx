import style from './index.module.css'
import { useState } from 'react'

export default function Index() {
  // const sortNumber =data.sort((a,b)=>a.totalTransactions-b.totalTransactions)
  // const sortCharacterDesc =data.sort((a,b)=>{ 
  //   if(a.name<b.name) return 1;
  //   return -1
  // })
  // const sortCharacterAsc=data.sort((a,b)=>{ 
  //   if(a.name<b.name) return -1;
  //   return 1
  // })
  // const sortCharacterCo=data.sort((a,b)=>{ 
  //   if(a.name==b.level) return -1;
  //   return 1
  // })
  // console.log(sortCharacterDesc)
  const [active,setActive] =useState<boolean>(false)
  const isA =()=>{
    setActive(!active)
  }
  return (
      <div className={style.container_arrow}>
       <span className={`${style.arrow} ${style.up}`} style={{borderColor:active?'#5D5FEF':'#98949E'}} onClick={isA}></span> 
       <span className={`${style.arrow} ${style.down}`} style={{borderColor:active?'#98949E':'#5D5FEF'}} onClick={isA}></span> 
     </div>
  )
}
