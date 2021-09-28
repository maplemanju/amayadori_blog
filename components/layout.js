import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Sidebar from './sidebar'

export const siteTitle = 'Amayadori'

export default function Layout({ children, sideBarData }) {
  return (
    <div className={styles.appBody}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="mask-icon" href="/logo/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#e2edda"/>
        <meta name="theme-color" content="#e2edda"/>
      </Head>
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