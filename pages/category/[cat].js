import Head from 'next/head'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import { getSortedPostsData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.scss'
import Link from 'next/link'
import Date from '../../components/date'
import Sidebar from '../../components/sidebar'
import useCategories from '../../components/categories'


const Cat = ({allPostsData, somePosts}) => {
  const router = useRouter()
  const { cat } = router.query
  const categories = useCategories()
  const category = categories.find(category => category.id === cat).label

  return (
    <Layout sideBar={<PageSideBox somePosts={somePosts}/>}>
      <Head>
        <title>{category}</title>
      </Head>
      <section>
        <ul className={utilStyles.blogList}>
          {allPostsData.filter(({category}) => category === cat).map(({ id, date, title, summary }) => {
            return (
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
            </li>)
          })}
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