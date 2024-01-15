import './App.css';
import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [dice, setDice] = useState([]);
  const [win, setWin] = useState(false);
  const [currentNum, setCurrentNum] = useState(-1);

  useEffect(() => {
    const diceSample = [
      {id: 1, pip: 1, selected: false},
      {id: 2, pip: 2, selected: false},
      {id: 3, pip: 3, selected: false},
      {id: 4, pip: 4, selected: false},
      {id: 5, pip: 5, selected: false},
      {id: 6, pip: 6, selected: false},
      {id: 7, pip: 7, selected: false},
      {id: 8, pip: 8, selected: false},
      {id: 9, pip: 9, selected: false},
      {id: 10, pip: 10, selected: false}
    ];

    setDice(diceSample);
  }, []);

  const checkDidWin = () => {
    const t = dice.filter(e => e.selected === false);
    t.length === 0 ? setWin(true) : setWin(false);
  };

  const handleDieClick = e => {
    e.preventDefault();
    if (currentNum === -1) {
      setCurrentNum(e.target.value);
      let copyArray = [...dice];
      let {selected} = copyArray[e.target.id];
      copyArray[e.target.id].selected = !selected;
      setDice(copyArray);
      checkDidWin();
    }
    if (e.target.value === currentNum) {
      let copyArray = [...dice];
      let {selected} = copyArray[e.target.id];
      copyArray[e.target.id].selected = !selected;
      setDice(copyArray);
      checkDidWin();
    }
  };

  const handleReset = e => {
    e.preventDefault();
    setWin(false);
    let tempArray = [];
    for (let i = 0; i < 10; i++) {
      tempArray.push({
        id: i,
        pip: Math.floor(Math.random() * 10),
        selected: false
      });
    }
    setDice(tempArray);
  };

  const GameBoard = ({win}) => {
    return (
      <div className="large-container centered">
        <div className="med-container centered padding-top-20 color-black">
          <div className="small-container flex-column centered">
            <div>
              <h1 className="text-center">Tenzies</h1>
              <p className="text-center">Play tenzies - click Start</p>
            </div>
            {win
              ? <div className="win-banner">
                  <span>You Win</span>
                  <button onClick={handleReset}>Restart</button>
                </div>
              : ''}
            <div className="playboard">
              {dice.map((el, idx) => {
                return (
                  <button
                    key={uuidv4()}
                    className="die bold-font font-medium"
                    style={{backgroundColor: el.selected ? '#333' : null}}
                    id={idx}
                    value={el.pip}
                    onClick={e => handleDieClick(e)}>
                    {el.pip}
                  </button>
                );
              })}
            </div>
            <div className="controls">
              <button className="roll-button" onClick={e => handleReRoll(e)}>
                Re-Roll
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleReRoll = e => {
    e.preventDefault();
    let tempArray = [...dice];
    let arrayOfSelected = tempArray.filter(e => e.selected === true);
    let arrayOfNonSelected = tempArray.filter(e => e.selected !== true);

    for (let i = 0; i < arrayOfNonSelected.length; i++) {
      arrayOfNonSelected[i].pip = Math.floor(Math.random() * 10);
    }
    const temp = [...arrayOfSelected, ...arrayOfNonSelected];
    setDice(temp);
  };

  return <GameBoard win={win} />;
}

export default App;
