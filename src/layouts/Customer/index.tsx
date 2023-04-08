import Navbar from '../../components/molecules/Navbar'
import Banner from '../../components/molecules/Banner'
import Table  from '../../components/molecules/Table'
import style from './index.module.css'
import Button from '../../components/atom/Button'
import assets from '../../helpers/assetsLink'

export default function index() {
  const data =[
    {
      name:"reki",
      level:3,
      favorites:'chiken',
      totalTransactions:20000
    },
    {
      name:"anwar",
      level:1,
      favorites:'drink',
      totalTransactions:20400
    },
    {
      name:"joko",
      level:4,
      favorites:'chiken',
      totalTransactions:25000
    },
    {
      name:"siren",
      level:1,
      favorites:'takjil',
      totalTransactions:20000
    },
    {
      name:"mamat",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"mamat",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"mamat",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"mamat",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"mamat",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"mamat",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"mamat",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"mamat",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"mali",
      level:4,
      favorites:'drink',
      totalTransactions:24000
    },
    {
      name:"mamat",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"caca",
      level:3,
      favorites:'coca',
      totalTransactions:24000
    },
    {
      name:"mamat",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"jainal",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"anto",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"basir",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"mamat",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
    {
      name:"akmal",
      level:3,
      favorites:'chiken',
      totalTransactions:24000
    },
  ]

  return (
    <div className={style.container}>
      <Navbar/>
      <div className={style.colum}>
        <div className={style.row}>
          <Banner />
          <Table dataTable={data}/>
        </div>
        <div className={style.addsOn}>
          <div className={style.topAdds}>
            <p>See analytics of the Customer Clearly</p>
            <Button size={{x:9,y:3.5}} class='btn-glass' >See Analytics</Button>
          </div>
          <div className={style.botAdds}>
            <h2>Top Menu <span>This Week</span></h2>
            <p>10-12 Agustus 2023</p>
            <ol>
              <li>
                Nasi Goreng Jamur Special Resto Pak Min
              </li>
              <li>Tongseng Sapi Gurih</li>
              <li>Nasi Gudeg Telur Ceker</li>
              <li>Nasi Ayam serundeng</li>
              <li>Nasi Goreng Seafood</li>
            </ol>
            {assets.cart}
          </div>
        </div>
      </div>
    </div>
  )
}
