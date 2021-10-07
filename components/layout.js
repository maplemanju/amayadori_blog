import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'
import Sidebar from './sidebar'

export const siteTitle = 'Amayadori'
export const siteDesc = 'My name is Maya and I am a nomad web engineer living in Japan.'

export default function Layout({ children, sideBarData }) {
  const homeDesc = `Blogs about Coding, Lifestyle, Games, Manga and other nerdy things from Japan! ${siteDesc}`
  let homeSrc;
  if (typeof window !== 'undefined') {
    homeSrc = window.location.origin
  }

  return (
    <div className={styles.appBody}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={homeDesc} />
        
        <meta name="og:title" content={siteTitle} />
        <meta name="og:description" content={homeDesc} />
        <meta property="og:image" content={`${homeSrc}/images/profile.png`}/>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@amayadoring" />
        <meta name="twitter:creator" content="@amayadoring" />

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