import style from './index.module.css'
import Button from '../../atom/Button'
import ArrowSort from '../../atom/ArrowSort'
import assets from '../../../helpers/assetsLink'
import type {Table} from './index.d'
export default function index(datas:Table) {
  const level=['warga','juragan','sultan','konglomerat','fails']

  const getClass=(prop:string)=>{
    switch(prop) {
      case 'warga': return style.warga
      case 'juragan':return style.juragan
      case 'sultan':return style.sultan
      case 'konglomerat': return style.konglomerat
      default: return style.fail
    }
  }
  return (
    <div className={style.container}>
      <table>
        <thead>
          <tr>
            <th >
              <div className={style.header_table}>
                <span>Costumer Name</span>  
                <ArrowSort/>
              </div>
            </th>
            <th >
              <div className={style.header_table}>
                <span>Level</span>  
                <ArrowSort/>
              </div>
            </th>
            <th >
              <div className={style.header_table}>
                <span>Favorite Menu</span>  
                <ArrowSort/>
              </div>
            </th>
            <th >
              <div className={style.header_table}>
              <span>Total Transaction</span>  
                <ArrowSort/>
              </div>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <br />
          {datas.dataTable?.map((data,index) =>{
            return (
              <>
            <tr key={index} >
              <td>{data.name}</td>
              <td > <span className={getClass(level[data.level?data.level-1:level.length-1].toString())}> <span>{ level[data.level?data.level-1:level.length-1]}</span></span></td>
              <td>{data.favorites}</td>
              <td>IDR {data.totalTransactions}</td>
              <td style={{display:'flex',gap:'0.5em'}}>
                <Button collor='#FAFAFA' size={{x:8,y:3}}>{assets.shieldIcon} Detail</Button>
                <Button collor='#FAFAFA' size={{x:3,y:3}} >{assets.editIcon}</Button>
                <Button collor='#FEF5F6' size={{x:3,y:3}} >{assets.deleteIcon}</Button>
              </td>
            </tr>
            <br />
            </>
            )
        })}

        </tbody>
        <tfoot>
             {/* mollitia soluta. Cupiditate ratione atque consequatur corporis? Harum quia, amet officiis fuga magnam cum autem numquam unde obcaecati odio? */}
        </tfoot>
      </table>
    </div>
  )
}
