import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Sidebar from '../components/sidebar'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout sideBar={<PageSideBox allPostsData={allPostsData}/>}>
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

export function PageSideBox({ allPostsData }) {
  return (
    <Sidebar>
      <div className={utilStyles.sideContain}>
        <h2>Recent Posts</h2>
        <nav><ul>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.sideItem} key={id}>{title}</li>
          ))}
        </ul></nav>
      </div>
    </Sidebar>
  )
}