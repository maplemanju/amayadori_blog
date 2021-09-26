import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import useCategories from './categories'

export default function Sidebar({ children }) {
  const categories = useCategories();
  return(
    <aside className={styles.sidebar}>
      {children}
      <div className={utilStyles.sideContain}>
        <h2>Categories</h2>
        <nav><ul>
          {categories.map((item, i) => (
            <li key={`categories-${i}`} className={utilStyles.sideItem}>
            <Link href={`/category/${item.id}`}>{item.label}</Link>
            </li>
          ))}
        </ul></nav>
      </div>
    </aside>
  )
}
