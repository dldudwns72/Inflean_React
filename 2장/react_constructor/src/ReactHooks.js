import React, { useState, useEffect } from "react";

const ReactHooks = () => {
  const [count, setCount] = useState(0);

  function onClick() {
    //   setCount(count+1)
    //   setCount(count+1)

    // 외부에서의 함수가 배치로 처리할려고 하는 경우 ReactDOM.unstable_batchedUpdates 사용 
    // ReactDOM.unstable_batchedUpdates(()=>{
    //     setCount(v =>v +1)
    //     setCount(v =>v +1)
    // });
    
    // setCount(변수변경함수)에서 파라미터로 함수를 사용해서 선언하면 처리되기 직전의 상태값을 매개변수로 받아
    // 동기적으로 처리가 된다.
    setCount(v => v + 1);
    setCount(v => v + 1);
  }

  useEffect(()=>{
      // 브라우저 탭 이름이 변경됨.
      document.title = `업데이트 횟수 ${count}`
  });

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
};

export default ReactHooks;
