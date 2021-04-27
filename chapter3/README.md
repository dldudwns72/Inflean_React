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