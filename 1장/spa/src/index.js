import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Route from './route';
// function App(){
//   useEffect(() => {
//     // 페이징 전환 요청 시
//     window.onpopstate = function (event) {
//       console.log(`location : ${document.location}, state : ${event.state}`);
//     };
//   }, []);
//   return (
//     <div id="root">
//       <button onClick={() => window.history.pushState("v1", "", "/page1")}>page 1 </button> 
//       {/*  pushState("값(value),이름,URL")  */}
//       <button onClick={() => window.history.pushState("v2", "", "/page2")}>page 2 </button>
//     </div>
//   );
// };

ReactDOM.render(
  // <React.StrictMode>
    // <App />,
    <Route/>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
