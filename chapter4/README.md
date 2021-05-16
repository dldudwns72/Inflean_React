# 가독성을 위한 컴포넌트 관리

1. 속성값을 알 수 있는 propTypes를 가장 상단에 선언

```javascript
import PropTypes from "prop-types";

컴포넌트명.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
  optionalElement: PropTypes.element,
  // 모든 데이터 타입이 가능한 필수값
  requiredAny: PropTypes.any.isRequired,
};
```

2. 컴포넌트 선언은 항상 익명함수가 아닌 실제로 선언

3. 상위 컴포넌트에서 받은 props는 비구조화 할당으로 선언

```javascript
    myComponent({props1,props2})
    {
    props1
    props2
    }
    ==
    myComponent(props){
      props.props1
      props.props2
    }
```

4. 조건부 렌더링 시 삼항연산자 null 대신 &&로 렌더링을 명확하게 구분한다.

5. 재사용성과 기능 단위로 컴포넌트를 나눠서 코드를 작성한다.

- 변하지 않는 상수는 JSX 밖에 선언하여 사용한다. (무분별한 렌더링을 막기 위해)
- 자주 사용하는 컴포넌트는 components로 폴더 생성하여 사용
- 큰 UI 단의 기능들은 container 폴더를 생성하여 구분지어 나누면 좋다.

# 효율적인 useEffect 관리

```javascript
useEffect(()=>{
  function(userID, needDetail).then(data => setUser(data))
},[userID, needDetail])
// 위와 같은 구문에서userID, needDetail가 변경될떄 사이드 이펙트가 실행되게 해주는것을 권고해주고 있다.
```

```javascript
import { useEffect } from "react";
export default function useOnMounted(effect) {
  useEffect(effect, []);
}
useEffect(() => {
  fetchUser(userID).then((data) => setUser(data));
}, []);
// 위와 같이 최초 렌더링 한번만 실행 될 경우 해당 useEffect를 CustomHooks로 바꾸어 명시적으로 선언 해주어 사용하는것이 좋다, 나는 잘 모르겠다..
useOnMounted(() => fetchUser(userID).then((data) => setUser(data)));
```

• useEffect는 함수를 리턴해줘야 함으로 async await를 사용할 수 없고 함수 내부에서 async await를 사용해야 한다.
```javascript
// fetchAndSetUser 함수는 컴포넌트가 렌더링 될때마다 렌더링 되므로 useCallBack을 활용하여 userID가 변경 될 떄만 함수를 호출하게 해준다.
const fetchAndSetUser = useCallback(
  async function (needDetail){
    const data = await fetchUser(userID,needDetail)
    setUser();
  }
),[userID])

 useEffect(() =>{
   fetchAndSetUser(false);
},[fetchAndSetUser])
```