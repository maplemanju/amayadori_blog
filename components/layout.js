import styles from './layout.module.scss'
import Link from 'next/link'
import Sidebar from './sidebar'
import Seo, { siteTitle } from './seo'
import { useState, useEffect } from 'react'

export default function Layout({ children, sideBarData }) {

  return (
    <div className={`${styles.appBody} dMode`}>
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
  const [siteTheme, setSiteTheme] = useState()

  useEffect(() => {
    setSiteTheme(window.localStorage.getItem('siteTheme1'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('siteTheme1', siteTheme)
    document.documentElement.setAttribute('site-theme', siteTheme)
  }, [siteTheme])


  const switchTheme = (theme) => {
    const switchThisTheme = siteTheme==='dark'  ? 'light' : 'dark'
    document.documentElement.setAttribute('site-theme', switchThisTheme)
    window.localStorage.setItem('siteTheme1', switchThisTheme)
    setSiteTheme(switchThisTheme)
  }

  const switchbtn = siteTheme==='dark' ? styles.darkBtn : styles.lightBtn

  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
        <Link href="/">
          <a>{siteTitle}</a>
        </Link>
        </div>
        <div className={styles.menu}>
          <div className={switchbtn} onClick={() => switchTheme()} ></div>
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