import SearchBar from '../../atom/SearchBar'
import style from './index.module.css'
import img from '../../../assets/banner.jpeg'
import assets from '../../../helpers/assetsLink'
import Button from '../../atom/Button'

export default function Index() {
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
          <Button size={{x:13,y:3}} class='btn-glass'>{assets.addIcon} Add New Customer </Button>
          <SearchBar/>
          <Button size={{x:6,y:3}} class='btn-glass'>{assets.filter} Filter </Button>
          <Button size={{x:6,y:3}} class='btn-glass'>{assets.refresh} Refresh </Button>
          <Button size={{x:4,y:3}} class='btn-glass'>{assets.print} </Button>
        </div>
      </div>
  )
}
