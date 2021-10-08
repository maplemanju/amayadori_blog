import Image from 'next/image'

const Mdximg = (props) => {

  return (
    <figure className={props.type}>
      <Image {...props}/>
      <figcaption>{props.caption}</figcaption>
    </figure>
  )
}

export default Mdximg;