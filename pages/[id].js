import Layout from '../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData, getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.scss'
import Sidebar from '../components/sidebar'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const allPostsData = getSortedPostsData()
  return {
    props: {
      postData,
      allPostsData
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


export default function Post({ postData, allPostsData }) {
  return (
    <Layout sideBar={<PageSideBox allPostsData={allPostsData}/>}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingStyle1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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