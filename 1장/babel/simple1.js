function LikeButton() {
  // liked 변수는 react.development.js 파일이 실행 될떄 전역변수로 노출된다.
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text); // return React.createElement(
  //     'button', //element요소, html에 해당하는 태그가 만들어진다. 여기서는 button 태그가 만들어 지는것
  //     {onClick : () =>setLiked(!liked)},
  //     text,
  //     )
}

function Container() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8 : "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10,
      color: "red"
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + -1)
  }, "\uC99D\uAC00")));
}

const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(Container), domContainer); // 위와 같은 JSX문법을 바벨을 통하여 createElement 형식으로 바꿔준다.
// ReactDOM는 react-dom.development.js 파일이 실행 될떄 전역변수로 노출된다.
// ReactDOM.render(
//   React.createElement("div", null, React.createElement(LikeButton), React.createElement(LikeButton), React.createElement(LikeButton)),
//   domContainer
// );
// createElement('사용할 element','실행될 action',dom에 표시될 내용)