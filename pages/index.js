import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Sidebar from '../components/sidebar'
import useCategories from '../components/categories'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const recentPost = getSortedPostsData(3)
  return {
    props: {
      allPostsData,
      recentPost
    }
  }
}

export default function Home({ allPostsData, recentPost }) {
  const categories = useCategories()
  return (
    <Layout sideBarData={recentPost}>
      <Head>
        <title>{siteTitle} – Nomad Coder Life in Japan</title>
      </Head>
      <section>
        <ul className={utilStyles.blogList}>
          {allPostsData.map(({ id, date, title, summary, category }) => (
            <li className={utilStyles.listItem} key={id}>
              <h2 className={utilStyles.headingStyle1}>
              <Link href={`/${id}`}>
                <a>{title}</a>
              </Link>
              </h2>
              <div>
                <span className={utilStyles.lightText}>
                  <Date dateString={date} />
                </span>
                <Link href={`/category/${category}`}>
                  <a className={utilStyles.tagStyle}>{categories.find(cat => cat.id === category).label}</a>
                </Link>
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