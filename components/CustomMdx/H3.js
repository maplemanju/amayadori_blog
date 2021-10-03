const H3 = ({ children }) => {
  const anchor = children.match(/[^{#\}]+(?=})/g)
  const text = children.replace(/\s{(.*?)}/, "")
  return (
    <h3 id={anchor}>
      {text}
    </h3>
  )
}

export default H3;