import './ButtonComponent.css'
const ButtonComponent =({handleReroll})=>{
  return(
    <>
      <div className='btn' onClick={()=> handleReroll()}>Reroll</div>
    </>
  )
}

export default ButtonComponent;