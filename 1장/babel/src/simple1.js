function LikeButton() {
  // liked 변수는 react.development.js 파일이 실행 될떄 전역변수로 노출된다.
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";

  return <button onClick={() => setLiked(!liked)}>{text}</button>;
  // return React.createElement(
  //     'button', //element요소, html에 해당하는 태그가 만들어진다. 여기서는 button 태그가 만들어 지는것
  //     {onClick : () =>setLiked(!liked)},
  //     text,
  //     )
}

function Container() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <LikeButton />
      <div>
        <span>현재 카운트 : </span>
        <span style={{ marginRight: 10 ,color:"red"}}>{count}</span>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count + -1)}>증가</button>
      </div>
    </div>
  );
}

const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(Container), domContainer);

// 위와 같은 JSX문법을 바벨을 통하여 createElement 형식으로 바꿔준다.

// ReactDOM는 react-dom.development.js 파일이 실행 될떄 전역변수로 노출된다.
// ReactDOM.render(
//   React.createElement("div", null, React.createElement(LikeButton), React.createElement(LikeButton), React.createElement(LikeButton)),
//   domContainer
// );

// createElement('사용할 element','실행될 action',dom에 표시될 내용)
