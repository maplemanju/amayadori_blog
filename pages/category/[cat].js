import Layout from '../../components/layout'
import Seo, { siteTitle, siteDesc } from '../../components/seo'
import { useRouter } from 'next/router'
import { getSortedPostsData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.scss'
import Link from 'next/link'
import Date from '../../components/date'
import useCategories from '../../components/categories'
import Pagination, { paginate } from '../../components/pagination'

const Cat = ({allPostsData, recentPost}) => {
  const router = useRouter()
  const { cat } = router.query
  const categories = useCategories()
  const category = categories.find(category => category.id === cat).label
  const catData = allPostsData.filter(({category}) => category === cat)

  //pagination info
  const postPerPage = 10
  const checkPage = router.query.page || router.asPath.match(new RegExp(`[&?]page=(.*?)(&|$)`)) || 1
  const currentPage = Array.isArray(checkPage) ? Number(checkPage[1]) : Number(checkPage)
  const postsData = paginate(catData, currentPage, postPerPage);
  

  return (
    <Layout sideBarData={recentPost}>
      <Seo
        pageTitle={`${category} | ${ siteTitle }`}
        pageDesc={`${category} related articles. ${siteDesc}`}
      />
      <header className={utilStyles.contentHeader}>
        <h1 className={utilStyles.arcTitle}>{category}</h1>
      </header>
      <section className={utilStyles.contentBody}>
        <ul className={utilStyles.blogList}>
          {postsData.map(({ id, publishDate, title, summary }) => {
            return (
            <li className={utilStyles.listItem} key={id}>
              <h2 className={utilStyles.headingStyle1}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              </h2>
              <div className={utilStyles.metaInfo}>
                {category}
                <span style={{padding: "0 .5em"}}>/</span>
                <Date dateString={publishDate}/>
              </div>
              <p>{summary}</p>
              <Link href={`/blog/${id}`}>
                <a>Read More »</a>
              </Link>
            </li>)
          })}
        </ul>
      </section>
      <Pagination length={catData.length} postPerPage={postPerPage} currentPage={currentPage} category={cat}/>
    </Layout>
  )
}

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

export async function getStaticPaths() {
  const categories = useCategories()
  const paths = categories.map((categ) => ({
    params: { cat: categ.id },
  }))
  return {
    paths,
    fallback: false
  }
}

export default Cat