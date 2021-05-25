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

# 리덕스에서 비동기 처리하기
1. redux-thunk
  - 비동기 로직이 간단할 때 사용 
  - 간단한 시작
2. redux-observable
 - 비동기 코드가 많을 때 사용
 - RxJs패키지 기반, 고난이도
3. reudx-saga
 - 비동기 코드가 많을 때 사용
 - 제너레이터 활용
 - 테스트코드 작성 용이

 # Redux-saga 
  ```javascript
  import {all,call,put,takeLeading} from 'redux-saga/effects';
  import {actions,types} from "./index"; // 내가 지정한 액션과 타입
  import {callApiLike} from "../../commom/api"; // API 호출 함수

/*
  최초 로딩 후 id의 값을 하나 증가하고 API를 호출하며 API 호출이 끝나면 로딩 해제
*/
  export function* fetchData(action){
    yield put(actions.setLoading(true)) // put : 리덕스 액션 발생 
    yield put(actions.addLike(action.timeline.id,1)) 
    yield call(callApiLike) // 함수 실행
    yield put(actions.setLoading(false))
  }

  export default function* (){
    yield all([takeLeading(types.REQUEST_LIKE,fetchData)]);
    // all 과 takeLeading은 Redux-saga에서 지원해주는 함수
    // takeLeading 가장 최초로 처리중인것에 우선순위를 두고 액션을 처리한다. (후에 진행되는 액션은 무시한다) <-> takeLatest
    // REQUEST_LIKE(사용자 지정 액션)이 발생했을때 두번쨰 매개변수의 함수를 실행한다. 
  }
  ```

  Redux-saga store
  ``` javascript
  import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
  import {all} from "redux-saga/effects";
  import createSagaMiddleware from "redux-saga";
  
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = window._REDUX_DEVTOOLS_ETENSION_COMPOSE__ || compose;
  
  const store = createStore(
   reducer,
   composeEnhancers(applyMiddleware(sagaMiddleware)),
 )

 function* rootSaga(){
   yield all([timelineSaga(),middleware2,....]);
 }

 sagaMiddleware.run(rootSaga); // 미들웨어 실행

  ```
