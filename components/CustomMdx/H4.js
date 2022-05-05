const H4 = ({ children }) => {
  const anchor = children.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()
  const text = children.replace(/\s{(.*?)}/, "")
  return (
    <h4 id={anchor}>
      {text}
    </h4>
  )
}

export default H4;