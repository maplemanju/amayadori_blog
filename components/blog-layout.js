import Layout, { siteTitle } from './layout'
import Head from 'next/head'
import styles from '../pages/post.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Date from './date'


export default function BlogLayout({ meta, children }) {
  return(
    <Layout>
      <Head>
        <title>{meta.title} | { siteTitle }</title>
        <meta name="description" content={meta.summary}/>
        <meta name="og:description" content={meta.summary} />
      </Head>
      <article className={styles.content}>
        <h1 className={utilStyles.headingStyle1}>{meta.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={meta.date} />
        </div>
        <div>{children}</div>
      </article>
    </Layout>
  )
}