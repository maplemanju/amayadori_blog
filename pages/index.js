import Layout from '../components/layout'
import Seo, { siteTitle, siteDesc } from '../components/seo'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import useCategories from '../components/categories'
import Pagination, { paginate } from '../components/pagination'
import { useRouter } from 'next/router'


export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  const recentPost = await getSortedPostsData(5)
  return {
    props: {
      allPostsData,
      recentPost
    }
  }
}

export default function Home({ allPostsData, recentPost }) {
  const categories = useCategories()
  const router = useRouter()

  //pagination info
  const postPerPage = 10
  const checkPage = router.query.page || router.asPath.match(new RegExp(`[&?]page=(.*?)(&|$)`)) || 1
  const currentPage = Array.isArray(checkPage) ? Number(checkPage[1]) : Number(checkPage)
  const postsData = paginate(allPostsData, currentPage, postPerPage);
  
  return (
    <Layout sideBarData={recentPost}>
      <Seo
        pageTitle={`${siteTitle} – Nomad Coder Life in Japan`}
        pageDesc={`Blogs about Coding, Lifestyle, Games, Manga and other nerdy things from Japan! ${siteDesc}`}
      />
      <section className={utilStyles.contentBody}>
        <ul className={utilStyles.blogList}>
          {postsData.map(({ id, publishDate, title, summary, category }) => (
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
                <Date dateString={publishDate}/>
              </div>
              <p>{summary}</p>
              <Link href={`/blog/${id}`}>
                <a>Read More »</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Pagination length={allPostsData.length} postPerPage={postPerPage} currentPage={currentPage} />
    </Layout>
  )
}