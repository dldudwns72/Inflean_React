function LikeButton() {
    // liked 변수는 react.development.js 파일이 실행 될떄 전역변수로 노출된다.
    const [liked,setLiked] = React.useState(false);
    const text = liked ? "좋아요 취소" : "좋아요";
    
    return React.createElement(
        'button', //element요소, html에 해당하는 태그가 만들어진다. 여기서는 button 태그가 만들어 지는것
        {onClick : () =>setLiked(!liked)},
        text,
        )
}

const domContainer = document.getElementById('root');

 // ReactDOM는 react-dom.development.js 파일이 실행 될떄 전역변수로 노출된다.
ReactDOM.render(
    React.createElement(
        'div',
    null,
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    ),domContainer)

// createElement('사용할 element','실행될 action',dom에 표시될 내용)