function Books(props) {
  const title = {
    marginTop: "10px",
    marginBottom: "0",
  }
  const subtitle = {
    marginTop: "0",
    marginBottom: "10px",
    color: "rgb(175 175 175)",
    fontStyle: "italic",
  }
  const bookStyle = {
    backgroundColor: "crimson",
    padding: "10px 20px",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "3px",
    borderRadius: "10px"
  }
  
  return(<div style={bookStyle}>
  <h2 style={title}>{props.bookTitle}</h2>
  <p3 style={subtitle}>{props.year}</p3>
  <p>{props.synopsis}</p>
  </div>)
}

export default Books