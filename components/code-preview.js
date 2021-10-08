import Head from 'next/head'


export default function CodePreview({ height, hash }) {
  const textStyle = {
    height: `200px`,
    boxSizing: `border-box`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    border: `1px dotted #d8d8d8`,
    borderRadius: `10px`,
    margin: `1em 0`,
    padding: `1em`,
  }

  return(
  <div>
    <Head>
      <script async="" src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
    </Head>

    <p className="codepen" data-height={height} data-slug-hash={hash} data-user="amayadoring" style={textStyle}>
      <span>See the Pen on <a href={`https://codepen.io/amayadoring/pen/${hash}`}>CodePen</a>.</span>
    </p>

  </div>
  )
}