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

# useMemo

# useCallBack

# useReducer
