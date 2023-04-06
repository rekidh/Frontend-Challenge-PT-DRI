import Navbar from '../../components/molecules/Navbar'
import Banner from '../../components/molecules/Banner'
import Table  from '../../components/molecules/Table'
import style from './index.module.css'

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
          j
        </div>
      </div>
    </div>
  )
}
