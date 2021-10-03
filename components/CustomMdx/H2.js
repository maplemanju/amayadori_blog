const H2 = ({ children }) => {
  const anchor = children.match(/[^{#\}]+(?=})/g)
  const text = children.replace(/\s{(.*?)}/, "")
  return (
    <h2 id={anchor}>
      {text}
    </h2>
  )
}

export default H2;