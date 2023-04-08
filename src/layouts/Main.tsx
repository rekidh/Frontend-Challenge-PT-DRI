import {Outlet} from 'react-router-dom'
import Sidebar from '../components/molecules/Sidebar'
import style from './main.module.css'
import { useLocation ,Navigate} from 'react-router-dom'
import assets from '../helpers/assetsLink'
export default function Main() {
  const loc = useLocation()
   if (loc.pathname==='/') {
     Navigate({to:'/customer'})
  }

  const listMenu =[
    {
      icont:assets.dashboard,
      name:'Dashboard',
      path:'dashboard',
    },
    {
      icont:assets.stock,
      name:'Stock',
      path:'stock',
    },
    {
      icont:assets.customer,
      name:'Customer',
      path:'customer',
    },
    {
      icont:assets.restaurant,
      name:'Restaurant',
      path:'restaurant',
    },
    {
      icont:assets.design,
      name:'Design',
      path:'design',
    },
    {
      icont:assets.reportIcon,
      name:'Report',
      path:'report',
    },
    {
     icont:assets.roleAdminIcon,
      name:'Role & Admin',
      path:'role_admin',
    },
    {
     icont:assets.settingIcon,
      name:'Setting',
      path:'setting',
    },

  ]
  const listMenu2 =[
    {
      icont:assets.shopping,
      name:'Stock',
      path:'menu',
    },
    {
      icont:assets.truckIcon,
      name:'Supply',
      path:'menu',
    },

  ]
  return (
    <div className={style.body}>
      <div className={style.container_main}>
        <div className={style.sidebar}>
          <Sidebar listMenu={listMenu} listMenu2={listMenu2}/>
        </div>
        
        <div className={style.main}>
          <div>
            <Outlet/>
          </div>

        </div>
      </div>
    </div>
  )
}
