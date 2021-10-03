import styles from './sidebar.module.scss'
import Link from 'next/link'
import useCategories from './categories'

export default function Sidebar({ recentPost }) {
  const categories = useCategories();
  return(
    <aside className={styles.sidebar}>
    {recentPost && 
      <div className={styles.sideContain}>
        <h2>Recent Posts</h2>
        <nav><ul>
          {recentPost.map(({ id, title }) => (
            <li className={styles.sideItem} key={`recent-${id}`}>
              <Link href={`/blog/${id}`}><a>{title}</a></Link>
            </li>
          ))}
        </ul></nav>
      </div>
    }
      <div className={styles.sideContain}>
        <h2>Categories</h2>
        <nav><ul>
          {categories.map((item, i) => (
            <li key={`categories-${i}`} className={styles.sideItem}>
            <Link href={`/category/${item.id}`}>{item.label}</Link>
            </li>
          ))}
        </ul></nav>
      </div>
    </aside>
  )
}
