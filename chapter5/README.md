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
