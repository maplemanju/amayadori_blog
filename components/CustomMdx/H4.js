const H4 = ({ children }) => {
  const anchor = children.match(/[^{#\}]+(?=})/g)
  const text = children.replace(/\s{(.*?)}/, "")
  return (
    <h4 id={anchor}>
      {text}
    </h4>
  )
}

export default H4;