import Layout from './layout'
import Seo, { siteTitle } from './seo'
import styles from './blog-layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Date from './date'
import H2 from './CustomMdx/H2'
import H3 from './CustomMdx/H3'
import H4 from './CustomMdx/H4'
import Mdximg from './CustomMdx/image'
import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'
import useCategories from './categories'


export default function BlogLayout({ toc=[], meta, children }) {
  const categories = useCategories()

  return(
    <Layout>
      <Seo
        pageTitle={`${meta.title} | ${ siteTitle }`}
        pageDesc={meta.summary}
        hero={meta.heroImg}
        publishDate={meta.publishDate}
        updateDate={meta.updateDate || meta.publishDate}
      />
      <article className={styles.content}>
        <header className={utilStyles.contentHeader}>
          <h1 className={utilStyles.headingStyle1}>{meta.title}</h1>
          <div className={utilStyles.metaInfo}>
            <Link href={`/category/${meta.category}`}>
              <a className={utilStyles.tagStyle}>{categories.find(cat => cat.id === meta.category).label}</a>
            </Link>
            <span style={{padding: "0 .5em"}}>/</span>
            <Date dateString={meta.updateDate} type="modify"/>
          </div>
          <p className={styles.summary}>{meta.summary}</p>
        </header>

        <div className={utilStyles.contentBody}>
        {toc.length > 0 && 
          <ol className={utilStyles.toc}>
            {toc.map(item=> {
              const title = item.title
              const link = title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()
              return <li><Link href={`#${link}`}><a>{title}</a></Link></li>
            })}
          </ol>
        }
        <MDXProvider components={{h2: H2, h3: H3, h4: H4, a: Link, img: Mdximg}}>
          {children}
        </MDXProvider>
        </div>
        
      </article>
    </Layout>
  )
}