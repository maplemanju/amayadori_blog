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

  const switchTheme = (theme) => {
    const current = document.documentElement.getAttribute('site-theme')
    const switchThisTheme = current === 'dark'  ? 'light' : 'dark'
    document.documentElement.setAttribute('site-theme', switchThisTheme)
  }


  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
        <Link href="/">
          <a>{siteTitle}</a>
        </Link>
        </div>
        <div className={styles.menu}>
          <div className={styles.switchBtn} onClick={() => switchTheme()} ></div>
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