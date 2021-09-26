import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Sidebar from '../components/sidebar'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const somePosts = getSortedPostsData(1)
  return {
    props: {
      allPostsData,
      somePosts
    }
  }
}

export default function Home({ allPostsData, somePosts }) {
  return (
    <Layout sideBar={<PageSideBox somePosts={somePosts}/>}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <ul className={utilStyles.blogList}>
          {allPostsData.map(({ id, date, title, summary }) => (
            <li className={utilStyles.listItem} key={id}>
              <h2 className={utilStyles.headingStyle1}>
              <Link href={`/${id}`}>
                <a>{title}</a>
              </Link>
              </h2>
              <div className={utilStyles.lightText}>
                <Date dateString={date} />
              </div>
              <p>{summary}</p>
              <Link href={`/${id}`}>
                <a>Read More »</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export function PageSideBox({ somePosts }) {
  return (
    <Sidebar>
      <div className={utilStyles.sideContain}>
        <h2>Recent Posts</h2>
        <nav><ul>
          {somePosts.map(({ id, title }) => (
            <li className={utilStyles.sideItem} key={`recent-${id}`}>
              <Link href={`/${id}`}><a>{title}</a></Link>
            </li>
          ))}
        </ul></nav>
      </div>
    </Sidebar>
  )
}