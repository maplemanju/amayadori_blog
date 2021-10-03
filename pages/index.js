import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Sidebar from '../components/sidebar'
import useCategories from '../components/categories'
import dynamic from 'next/dynamic'

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  const recentPost = await getSortedPostsData(2)
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
      <section className={utilStyles.contentBody}>
        <ul className={utilStyles.blogList}>
          {allPostsData.map(({ id, date, title, summary, category }) => (
            <li className={utilStyles.listItem} key={id}>
              <h2 className={utilStyles.headingStyle1}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              </h2>
              <div className={utilStyles.metaInfo}>
                <Link href={`/category/${category}`}>
                  <a className={utilStyles.tagStyle}>{categories.find(cat => cat.id === category).label}</a>
                </Link>
                <span style={{padding: "0 .5em"}}>/</span>
                <Date dateString={date}/>
              </div>
              <p>{summary}</p>
              <Link href={`/blog/${id}`}>
                <a>Read More »</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}