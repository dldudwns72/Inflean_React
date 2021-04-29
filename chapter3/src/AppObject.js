import React, { createContext, useContext, useState } from "react";

const UserContext = createContext("unknown");

export default function AppObject() {
  const [user, setUser] = useState({ username: "unkown", age: 0 });
  const [name, setName] = useState("unknown");

  const [count, setCount] = useState(0);

  return (
    <div>
      ----------------------------------------------------------------------------------------------------
      <UserContext.Provider value={user}>
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>증가 </button>
      </UserContext.Provider>
    </div>
  );
}

const Profile = React.memo(function () {
  return (
    <div>
      <Gretting />
    </div>
  );
});

function Gretting() {
  // UserContext를 하나의 객체로 관리하면 userContext의 컴포넌트 내에 다른것이 변경되면 Consumer은 다시 재 랜더링 되지 않는다.
  const { username } = useContext(UserContext);
  return (
    <div>
      <p>{`${username} 님 안녕하세요`}</p>
    </div>
  );
}
