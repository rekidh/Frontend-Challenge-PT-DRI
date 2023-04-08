import {useState} from 'react'
import style from './index.module.css'
import Button from '../../atom/Button'
import ArrowSort from '../../atom/ArrowSort'
import assets from '../../../helpers/assetsLink'
import type {Table} from './index.d'
export default function Index(datas:Table) {
  
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage= 10 //esLint counter
  // const [postsPerPage, setPostsPerPage] = useState(10)

  //get the current page
  const indexOfLastPost = currentPage*postsPerPage
  const indexOfFirstPost = indexOfLastPost-postsPerPage
  const currentPost = datas.dataTable.slice(indexOfFirstPost,indexOfLastPost)
  const totalPages = Math.ceil(datas.dataTable.length/postsPerPage) //pembulatan ke atas
  const arrayOfPages =[]
  for(let i=1; i<=totalPages;i++){
    arrayOfPages.push(i)
  }
  const levelToCategory=['warga','juragan','sultan','konglomerat','fails']
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
          {currentPost.map((data,index) =>{
            return (
              <>
            <tr key={index} >
              <td>{data.name}</td>
              <td > <span className={getClass(levelToCategory[data.level?data.level-1:levelToCategory.length-1].toString())}> <span>{ levelToCategory[data.level?data.level-1:levelToCategory.length-1]}</span></span></td>
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
      </table>
        <div className={style.pagination}>
          <div className={style.pagination_info}>
            <p>Showing {postsPerPage} Data Customers</p>
          </div>
          <div className={style.pagination_number}>
            <ul>
              {arrayOfPages.map((number)=>
              <li className={number===currentPage?style.current:''}  onClick={(e)=>setCurrentPage(number)}> 
                <a href={`#${number}`}>{number}</a> 
              </li>
              )}
              <Button onClick={(e)=>currentPage>=arrayOfPages.length?'':setCurrentPage(currentPage+1)} collor='#FAFAFA' size={{x:4,y:1}} >Next {assets.next}</Button>
            </ul>
          </div>
        </div>
    </div>
  )
}
