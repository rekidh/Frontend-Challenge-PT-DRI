
import type {ListMenu} from './index.d'
import assets from '../../../helpers/assetsLink'
import  Logos  from '../../atom/logo/Logo'
import style from './sidebar.module.css'
import Profile from '../../atom/Profile'
import Button from '../../atom/Button'
const Sidebar =(prop:ListMenu)=> {
  return (
    <div className={style.side_container}>
      <Logos>Square</Logos> 
      <div >
        Menu
        <ul>
          {prop.listMenu.map((item,index) =>{
            return(
              <li key={index}>
                <a href={item.path}>
                  <span>
                    {item.icont}
                  </span>
                    {item.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
        
      <div >
        Integration
            <ul>
          {prop.listMenu2?prop.listMenu2.map((item,index) =>{
            return(
              <li key={index}>
                <a href={item.path}>
                  <span>
                    {item.icont}
                  </span>
                    {item.name}
                </a>
              </li>
            )
          }):''}
        </ul>
      </div>
      <div className={style.profile}>
        <Profile/>
        <Button collor='#FEF5F6' size={{x:10,y:3}}>{assets.logoutIcon} <span style={{color:'#8F0A13',fontWeight: '600'}}>Logout</span> </Button>
      </div>
    </div>
  )
}
export default Sidebar
