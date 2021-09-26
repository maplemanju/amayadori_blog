import Layout from '../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData, getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.scss'
import Sidebar from '../components/sidebar'
import Link from 'next/link'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const somePosts = getSortedPostsData(1)
  return {
    props: {
      postData,
      somePosts
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


export default function Post({ postData, somePosts }) {
  return (
    <Layout sideBar={<PageSideBox somePosts={somePosts}/>}>
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