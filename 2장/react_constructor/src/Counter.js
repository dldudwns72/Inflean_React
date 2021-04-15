import React, { useState } from "react";
import Title from "./Title";

export default function Counter() {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState({value : 0});

  function onClick_increase() {
    // setCount(count + 1);
    setCount({...count,value : count.value +1})
  }
  
  return (
    <div>
      <button onClick={onClick_increase}>증가</button>
      <Title title = {`현재 카운트 : ${count.value}`}/>
    </div>
  );
}
