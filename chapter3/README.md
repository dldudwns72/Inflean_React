# Context API
- 멀리 떨어저 있는 하위 컴포넌트에게도 속성 값을 전달해 줄 수 있다

```
const Provider변수명 = createContext("초기값")

<Provider변수명.Provider value = {값}>
    <컴포넌트>
</Provider변수명.Provider>

<Provider변수명.Consumer>
    provider에서 설정한 value값을 받아 처리 할 수 있다
</Provider변수명.Consumer>
```

Provider의 value가 변경 되면 하위의 모든 Consumer 컴포넌트는 다시 랜더링이 된다

Provider와 Consumer 사이의 컴포넌트 중 변경사항이 없으면 렌더링을 하지 않게 하려면 React.memo를 사용하여 불필요한 메모리 사용 해제
여러개의 Provider를 사용할 수 있다.

# ref
- 돔 요소에 크기나 스크롤 위치를 알고 싶은 경우 주로 사용 <br/>
- 자식 요소에 직접 접근할 수있다.
- 렌더링 결과가 실제 돔에 적용된 후에 Ref가 적용됨
- 태그 뿐만 아니라 컴포넌트에도 사용 될 수 있다, 컴포넌트에 사용되면 인스턴스로 활용되어진다.
- 조건부 렌더링 시 ref를 선언한 요소가 없을 경우 에러가 남, 요소가 없는 경우 렌더링 할 시 ref 변수 사용시 검사를 해주는 코드를 추가해야함

# forwardRef(메소드,매개변수)
- 컴포넌트에서 "ref" 선언 시 다른 ref 와 겹쳐 사용할 수 없어 이름을 변경 해 주어야 하는데 변경하지않고
ref로 사용시 해당 컴포넌트 선언시 forwardRef를 사용하여 ref를 구분지어 사용할 수 있다.
```
    EX)
    <Button ref = {buttonRef}>

    const Button = React.forwardRef(function ({onClick},ref)){
        reutnr(
            <button onClick = {onClick} ref = {ref}>
            저장
            </button>
        )
    }
```

# useRef(초기값)
 - 요소의 레퍼런스를 저장하기 위해 사용함, ref 사용의 Hooks화
 - 렌더링과 사용없는 값을 사용하기 위해 용이
 ```
    
 ```

# useMemo
 - 계산량이 많은 함수의 반환값을 재활용 하기 위해 사용됨
 - 의존성 배열안에 담겨있는 값이 변경이 되지 않으면 리액트에서 함수 반환값을 기억하여 재 계산하지 않고 사용함
 ```
 const value = useMemo(()=> 함수명(v1,v2),[v1,v2]) // 두번째 인자는 의존성 배열 
 ```
# useCallBack
- 함수를 컴포넌트에 할당할 시 값이 변경되지 않아도 새로운 함수가 생성되어 하위 컴포넌트가 불필요하게 재랜더링이 되는것을 방지
```
    const onSave = useCallback(()=> 함수명(v1,v2),[v1,v2]) // 두번째 인자는 의존성 배열
```

# useReducer
- 여러개의 상태값을 변경해야할때 유용
```
const [state,dispatch] = useReducer(reducer, 초기값);
// dispatch는 상태값을 변경을 전달해줄 함수, // reducer은 상태값을 전달받아 변경해줄 함수
function reducer(state,action){
    switch(action.type){
        case : '액션타입명'
            return {...state, 액션변수: action.액션변수 }
    }
}

onChange = {e => dispatch({type : '액션타입' , name : e.target.value})}
```

```
 떨어져있는 컴포넌트에게 useReducer를 활용하여 변수 변경하기
 const ProfileDispatch = React.createContext(null);
    function reducer(state,action){
        switch(action.type){
            case : '액션타입명'
                return {...state, 액션변수: action.액션변수 };
            case : 'setName'
                return {...state, name : action.name}
        }
    }
 const [state,dispatch] = useReducer(reducer, 초기값);
 <ProfileDispatch.Provider value={dispatch}>
    하위 컴포넌트
 </ProfileDispatch.Provider>

 const 하위 컴포넌트 = () =>{
     return(
         <input type = "text onChange = {e=>dispatch({type:setName,name : e.target.name})}/>
     )
 }

```

# useImperativeHandle
 - 하위 컴포넌트에서 생성한 함수 및 값을 부모 컴포넌트에서 사용할 수 있다.
```
 const profileRef = uesRef();
 profileRef.current.getNameLength()  
 profileRef.current.addAge(5) 

 <하위컴포넌트 ref ={profileRef}>
-----------------------------------------------------------
하위 컴포넌트(_,ref){
    useImperativeHandle(ref,() =>{
        addAge : value => setAge(age + value)
        getNameLength : () => name.length
    })
}

```

# useLayoutEffect
 - useEffect는 비동기적으로 렌더링 결과가 반영이 안되도 호출하고, useLayoutEffect는 렌더링 결과가 돔에 반영된 직후에 동기적으로 바로 호출됨
 - 연산이 많이 필요한 경우는 사용하지말것, 성능상으로는 useEffect가 효율적
 ```
  useLayoutEffect(()=>{
       실행할 함수
  },[의존성 배열])
 ```

# useDebugValue
 - 개발자도구 React 버전을 사용할 떄 state값을 명확하게 표시하기 위해 사용
 ```
    useDebugValue(
        state === STATE_START
        ? 'start'
        : state === STATE_RUNNING
        ? 'running'
        : 'stop'
    )
 ```
