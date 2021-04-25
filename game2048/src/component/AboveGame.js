import React ,{useEffect} from "react";
import axios from 'axios';

export default function AboveGame() {

  useEffect(()=>{
    axios('/login',{
      method:"GET"
    }).then(res=>{
      console.log("Res:",res)
    })
  },[])

  return (
    <div className='above-game'>
      <p className='game-intro'>
        Join the tiles, get to <strong>2048!</strong>
      </p>
      <a href="/" className='restart-button'>New Game</a>
    </div>
  );
}
