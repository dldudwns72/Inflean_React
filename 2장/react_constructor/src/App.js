import React, { useState } from "react";
import ReactDom from "react-dom";
import ColorComponent from "./Color";
import Counter from "./Counter";
import ReactHooks from "./ReactHooks";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [desc, setDesc] = useState("");
  const [showOdd, setShowOdd] = useState(false);

  function onAdd() {
    const todo = { id: currentId, desc };
    setCurrentId(currentId + 1);
    setTodoList([...todoList, todo]); // 전개 연산자
  }
  function onDelete(e) {
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }
  function onSaveToServer() {}

  return (
    <div>
      <div>
        <h3>할 일 목록</h3>
        <ul>
          {todoList
            .filter((_, index) => (showOdd ? index % 2 === 0 : true))
            .map((todo) => (
              <li key={todo.id}>
                <span>{todo.desc}</span>
                <button data-id={todo.id} onClick={onDelete}>
                  삭제
                </button>
              </li>
            ))}
        </ul>
        <input type='text' value={""} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={onAdd}>추가</button>
        <button onClick={() => setShowOdd(!showOdd)}>홀수 아이템만 보기</button>
        <button onClick={onSaveToServer()}>서버에 저장</button>
      </div>

      <div>
        <ColorComponent />
      </div>

      <div>
        {/* 같은 Counter 컴포넌트가 사용되지만 각 컴포넌트의 상태값은 다르다 */}
        <Counter />
        <Counter />
      </div>

      {/* id root 이외의 영역에 생성하기,createPortal은 보통 모달 위해 사용됨 */}
      {/* 소스 상에서는 하위 코드가 ReactHooks 컴포넌트 보다 위에 있지만 index.html에서 id 가 somthing 인 div태그가 root 태그 보다 밑에 있음으로 화면상에서는 ReactHooks가 더 위로 오게 된다. */}
      {ReactDom.createPortal(
        <div>
          <p>CreatePortal</p>
        </div>,
        document.getElementById("somthing")
      )}

      <ReactHooks/>



    </div>
  );
}
