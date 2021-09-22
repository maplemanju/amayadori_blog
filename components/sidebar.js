import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'


export default function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <div className={styles.sideContain}>
        <h2>Recent Posts</h2>
        <nav><ul>
          <li className={styles.sideItem}>Sample</li>
          <li className={styles.sideItem}>Sample</li>
          <li className={styles.sideItem}>Sample</li>
        </ul></nav>
      </div>
      <div className={styles.sideContain}>
        <h2>Categories</h2>
        <nav><ul>
          <li className={styles.sideItem}>Sample</li>
          <li className={styles.sideItem}>Sample</li>
          <li className={styles.sideItem}>Sample</li>
        </ul></nav>
      </div>
    </aside>
  )
}