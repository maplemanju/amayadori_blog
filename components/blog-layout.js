import Layout, { siteTitle } from './layout'
import Head from 'next/head'
import styles from './blog-layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Date from './date'
import H2 from './CustomMdx/H2'
import H3 from './CustomMdx/H3'
import H4 from './CustomMdx/H4'
import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'
import useCategories from '../components/categories'

export default function BlogLayout({ meta, children }) {
  const categories = useCategories()

  return(
    <Layout>
      <Head>
        <title>{meta.title} | { siteTitle }</title>
        <meta name="description" content={meta.summary}/>
        <meta name="og:description" content={meta.summary} />
      </Head>
      <article className={styles.content}>
        <header className={utilStyles.contentHeader}>
          <h1 className={utilStyles.headingStyle1}>{meta.title}</h1>
          <div className={utilStyles.metaInfo}>
            <Link href={`/category/${meta.category}`}>
              <a className={utilStyles.tagStyle}>{categories.find(cat => cat.id === meta.category).label}</a>
            </Link>
            <span style={{padding: "0 .5em"}}>/</span>
            <Date dateString={meta.date}/>
          </div>
          <p className={styles.summary}>{meta.summary}</p>
        </header>

        <div className={utilStyles.contentBody}>
        <MDXProvider components={{h2: H2, h3: H3, h4: H4, a: Link}}>
          {children}
        </MDXProvider>
        </div>

      </article>
    </Layout>
  )
}