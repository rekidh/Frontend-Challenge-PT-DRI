import SearchBar from '../../atom/SearchBar'
import style from './index.module.css'
import img from '../../../assets/banner.jpeg'
import assets from '../../../helpers/assetsLink'
import Button from '../../atom/Button'
import { type } from 'os'

export default function index() {
  return (
      <div className={style.banner}>
        <div className={style.bg}>
          <div className={style.rectangle}></div>
          <div className={style.shapes}></div>
          <img src={img} alt="" />
        </div>

        <h2>Customer</h2>
        <p>On this menu you will be able to create, edit, and also delete the customer. Also you can manage it easily.</p>
        <div className={style.action_container}>
           <Button size={{x:13,y:3}} type='btn-glass'>{assets.addIcon} Add New Customer </Button>
          {/* <button className={style.btn_glass}>{assets.addIcon}<span>Add New Customer</span> </button> */}
          <SearchBar/>
          <Button size={{x:6,y:3}} type='btn-glass'>{assets.filter} Filter </Button>
          <Button size={{x:6,y:3}} type='btn-glass'>{assets.refresh} Refresh </Button>
          <Button size={{x:4,y:3}} type='btn-glass'>{assets.print} </Button>
          {/* <button className={style.btn_glass}>{assets.filter} <span>Filter</span> </button>
          <button className={style.btn_glass}>{assets.refresh}  <span>Refresh</span></button>
          <button className={style.btn_glass}>{assets.print}  <span>Print</span></button> */}
        </div>
      </div>
  )
}
