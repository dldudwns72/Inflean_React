import React, { useState ,useCallback, useEffect} from "react"

const INITAL_TEXT = "안녕하세요";

export default function App(){
    const [text,setText] = useState(INITAL_TEXT);
    const [showText,setShowText] = useState(true);
    
    const setInitialText = useCallback(ref => ref && setText(INITAL_TEXT),[])

  
    return(
        <div>
            {
                showText && (
                    <input 
                        type = "text"
                        // ref = {ref => ref && setText(INITAL_TEXT)} // 요소가 생성 되었을떄 초기값으로 설정해 주는코드, 내부 요소는 변경되지 않는다
                        // 새로 컴포넌트가 호출되면 INITAL_TEXT가 계속 호출되기때문에 요소 내용이 변경되지 않고 INITAL_TEXT로 고정됨
                        ref = {setInitialText} // useCallBack을 이용하여 함수 기억

                        id = "hilee"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                )
            }
            <button onClick ={()=> setShowText(!showText)}>보이기 가리기</button>
        </div>
    )
}