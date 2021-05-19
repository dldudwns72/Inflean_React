# 리덕스(Redux)

- 컴포넌트 코드로 부터 상태 관리 코드를 분리할 수 있다.
- 미들웨어를 활용한 다양한 기능 추가
  - 강력한 미들웨어 라이브러리
  - 로컬 스토리지에 데이터 저장하기 및 불러오기
- SSR 시 데이터 전달이 간편하다.
- 리액트 콘텍스트보다 효율적인 렌더링 가능

# 리덕스 구조

액션 => 미들웨어 => 리듀서 => 스토어 => 뷰 => 액션

```javascript
import { createStore, applyMiddleware } from "redux";

const MiddleFunction = (store) => (next) => (action) => {
  const delay = action.meta?.delay;
  if (!delay) {
    return next(action);

    const timeoutId = setTimeOut(() => next(action, delay));
    // next는 다음 미들웨어 함수로 값을 넘겨주며 없을시 리듀서로 넘겨준다
    return function cancel() {
      clearTimeout(timeoutId);
    };
  }
};

const myReducer = (state = { name: "mike" }, action) => {};
const store = createstore(myReducer, applyMiddleware(MiddleFunction));

store.dispatch({ type: "actionType", meta: { delay: 3000 } });
```

immer 불변객체 생성 라이브러리

# 리듀서(reducer)

- 순수함수로 구성 (부수 효과가 없어야 함)

# 스토어(store)

- 상태값을 저장
- 액션값이 끝났다는 걸 외부에 알림 (subscribe)

```javascript
import { createStore } from "redux";
const store = createStore(reducer);

store.subscribe(() => {
  const state = store.getState(); // 스토어의 현재 상태
});
```

# combineReducers

- N개의 리듀서를 결합해주는 라이브러리

```javascript
import { createStore, combineReducers } from "redux";

const reducer = combineReducers({
  reducer1: Reducer1,
  reducer2: Reducer2,
});

const store = createStore(reducer);
```

# react-reducer
 - 기존 reducer에서 상태값 로직이 변경시에만 렌더링이 되도록 조건을 걸어주었는데 react-reducer에서는 자동 감지 해준다.
```javascript
import { Provider,useSelecto,shallEqual,useDispatch } from "react-redux";

return(
  <Provider store ={store}> // 루트 컴포넌트에서 Provider 선언
    <FisrtComponent>
    <SecondComponent>
  </Provider>
)

  const FirstComponent = () =>{
    const data = useSelector(state => state.값) // 해당 반환값이 리듀서의 반환값
    const [data,data1] = useSelector(state => [state.값1,state.값2],shallEqual) // 여러 값을 받는 방법, 배열 사용, 두번째 매개변수는 변수 내부의 값이 변경되었는지 확인해준다.
  }
  const dispatch = useDispatch  
  store.dispatch(reducer) -> useDispatch(reducer)
```
