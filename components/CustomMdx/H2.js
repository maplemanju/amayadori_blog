const H2 = ({ children }) => {
  const anchor = children.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()
  const text = children.replace(/\s{(.*?)}/, "")
  return (
    <h2 id={anchor}>
      {text}
    </h2>
  )
}

export default H2;