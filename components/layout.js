import styles from './layout.module.scss'
import Link from 'next/link'
import Sidebar from './sidebar'
import Seo, { siteTitle } from './seo'

export default function Layout({ children, sideBarData }) {

  return (
    <div className={styles.appBody}>
      <Header/>
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          {children}
        </main>

        <Sidebar recentPost={sideBarData} />
      </div>
      <Footer/>
    </div>
  )
}

function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.container}>
        {/* <Link href="/">
          <a>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            />
          </a>
        </Link> */}
        <div className={styles.headerLogo}>
        <Link href="/">
          <a>{siteTitle}</a>
        </Link>
        </div>

      </div>
    </header>
  )
}

function Footer() {
  const d = new Date();
  const currentYear = d.getFullYear();
  return(
    <footer className={styles.footer}>
      <div className={styles.container}>© {currentYear} Amayadori.cloud</div>
    </footer>
  )
}