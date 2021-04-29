import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext("dark");
const UserContext = createContext("unknown");

export default function App() {
  const [name, setName] = useState("JUN");
  const [color ,setColor] = useState(["blue","red"])

  return (
    <div>
      <ThemeContext.Provider value={color}>
        <UserContext.Provider value={name}>
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </UserContext.Provider>
      </ThemeContext.Provider>
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
  const theme = useContext(ThemeContext);
  const username = useContext(UserContext);
  return (
    <div>
      <p>{`${username} 님 안녕하세요`}</p>
      <select>
          {
            theme.map((color,index)=>{
              return (
                <option key = {index} value = {color}>{`${color} 색상`}</option>
              )
            })
          }
      </select>
    </div>
    // createContext를 이용하여 생성했을 경우
    // <UserContext.Consumer>
    //   {username =><p>{`${username}님 안녕하세요`}</p>}
    // </UserContext.Consumer>
  );
}
