import SearchBar from '../../atom/SearchBar'
import style from './index.module.css'
import img from '../../../assets/banner.jpeg'
import assets from '../../../helpers/assetsLink'

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
          <button className={style.btn_glass}>{assets.addIcon}<span>Add New Customer</span> </button>
          <SearchBar/>
          <button className={style.btn_glass}>{assets.filter} <span>Filter</span> </button>
          <button className={style.btn_glass}>{assets.refresh}  <span>Refresh</span></button>
          <button className={style.btn_glass}>{assets.print}  <span>Print</span></button>
        </div>
      </div>
  )
}
