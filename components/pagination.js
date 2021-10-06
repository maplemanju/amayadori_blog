import Link from 'next/link'
import utilStyles from '../styles/utils.module.scss'

export default function Pagination({length, postPerPage, currentPage, category}) {
  const pages = Math.ceil(length / postPerPage)
  let links = [];
  for(let i = currentPage <= 1 ? currentPage : currentPage-1; i <= currentPage+1 && i <= pages; i++) {
    let url;
    if (category) {
      url = i == 1 ? `/category/${category}` : `/category/${category}?page=${i}`
    } else {
      url = i == 1 ? `/` : `?page=${i}`
    }
    const link = {
      url: url,
      page: i
    }
    links.push(link)
  }
  return (
    <div className={utilStyles.pagination}>
     {links.length>1 && links.map(({url, page}) => {
       return(
        <Link key={`postpage-${page}`} href={url}>
          <a className={currentPage==page ? utilStyles.current : ""}>{page}</a>
        </Link>
       )
     })}
    </div>
  )
}

export function paginate(data, pageNo, count) {
    const start = count*(pageNo-1)
    const finalData = data.slice(start,start+count)
    return finalData;
}