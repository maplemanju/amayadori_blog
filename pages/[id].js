import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData, getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import styles from './post.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Sidebar from '../components/sidebar'
import Link from 'next/link'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const recentPost = getSortedPostsData(3)
  return {
    props: {
      postData,
      recentPost
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}


export default function Post({ postData, recentPost }) {
  return (
    <Layout sideBarData={recentPost}>
      <Head>
        <title>{postData.title} | { siteTitle }</title>
      </Head>
      <article className={styles.content}>
        <h1 className={utilStyles.headingStyle1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}