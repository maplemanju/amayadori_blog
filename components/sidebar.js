import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import useCategories from './categories'

export default function Sidebar({ children }) {
  const categories = useCategories();
  console.log(categories)
  return(
    <aside className={styles.sidebar}>
      {children}
      <div className={utilStyles.sideContain}>
        <h2>Categories</h2>
        <nav><ul>
          {categories.map(item => (
            <li className={utilStyles.sideItem}>{item}</li>
          ))}
        </ul></nav>
      </div>
    </aside>
  )
}
