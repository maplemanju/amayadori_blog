const H3 = ({ children }) => {
  const anchor = children.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()
  const text = children.replace(/\s{(.*?)}/, "")
  return (
    <h3 id={anchor}>
      {text}
    </h3>
  )
}

export default H3;