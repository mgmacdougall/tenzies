import './App.css'
import Title from './Title';
import Gameboard from './GameBoard.jsx';

function App() {
  const strings={
    title: "Tenzies",
    details: "Roll until all the dice the same, click to hold dice, and 'Roll' to roll dice."
  }
  return (
    <>
      <div className="main-container">
        <div className='inner-container'>
            <Title text={strings.title} details={strings.details}/>
          <Gameboard/>
        </div>
      </div>
    </>
  )
}

export default App
