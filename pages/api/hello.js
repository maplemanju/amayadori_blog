import { getSortedPostsData } from '../../lib/posts'

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

const thisTest =  ({allPostsData}) => {
  return allPostsData
}

export default function handler(req, res) {
  //console.log(thisTest());
  if(thisTest()) {
    const apiObj = thisTest();
    res.status(200).json(apiObj)
  } else {
    res.status(200).json({test: "wait"})
  }
}