import CubeComponent from './CubeComponent';
import ButtonComponent from './ButtonComponent';

import { v4 as uuidv4 } from 'uuid';
import './Gameboard.css'
import {useEffect, useState} from 'react';


function GameBoard(){
  
  const [dice, setDice] = useState([])
  const [playedDice, setPlayedDice]=useState();

  const getDiceArray =()=>{
    let result=[];
    for (let i = 0; i < 10; i++) {
      let temp =Math.floor(Math.random()*10);
      result.push({value:temp, match: false})
    }
    return result
  }

  useEffect(() => {
    const diceArray = getDiceArray();
    return () => {
      setDice(diceArray);
      // console.log(diceArray)
    }
  }, [])
  

  const toggleActive = e=> {
      let result = dice.map(val=> {
        console.log('sadfsdf',typeof(playedDice), e)
        if(parseInt(val.value)===playedDice){
          console.log(val)
          val.match=true;
          val.selected=true;
          return val;
        }else{
          return val;
        }
      }
      )
      setDice(result);
  }

  const handleClick = e =>{
    const clickedVal = e.target;
    if(playedDice==undefined){ 
      console.log('played', clickedVal.value)
      console.log(typeof(clickedVal.value), clickedVal.value)
      let t = parseInt(clickedVal.value);
      console.log(t)
      setPlayedDice(t)
    }
    if(playedDice){
      let t = parseInt(clickedVal.value);
      toggleActive(t)
    }
    
    
  }

  const handleReroll= ()=>{
    console.log('Clicked reroll')
    console.log(dice)
    let tempArry = [];

    // console.log(dice)
    for(let i=0; i<dice.length; i++){
        // check if the selected -- then do no update with mew value
      if("selected" in dice[i]===true){
        tempArry.push(dice[i]);
      }else{
        let _value= Math.ceil(Math.random()*10)
        let tmpObject = {value: _value, match: false}
        console.log(
          'FSDFSD', {});
        tempArry.push(tmpObject);

      }
    }
    setDice(tempArry)
  }
  return(
    <>
      <div className='container-lg'>
        <div className='board'>
          {dice.map((e,idx)=> (
          <CubeComponent onClick={(e)=>handleClick(e)} id={idx} key={uuidv4()} match={e.match} tile={e.value} value={e.value}/>))}
        </div>
        <div className='container'>
              <ButtonComponent handleReroll={handleReroll}/>
        </div>
      </div>
    </>
  )

}

export default GameBoard;