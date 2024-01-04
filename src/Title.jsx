import "./Title.css"

function Title({text, details}){
  return(
    <>
    <div className='center-container'>
      <h3>{text}</h3>
      <p>{details}</p>
      </div>
    </>
  )
}

export default Title;