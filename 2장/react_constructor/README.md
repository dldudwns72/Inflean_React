# React.Fragement 
 - 요소에 key를 부여하지 않아도 에러가 나지 않는다
 - 요소의 순서가 일종의 key 역할을 해주기 떄문-
 - 기존의 jsx 문법에서는 렌더링 시 태그로 감싸줘야 하는데 fragment를 사용 시 불필요한 태그 렌더링을 하지 않아도 된다.
 ``` 
    <React.Fragement> // === <>와 동일
    
    </React.Fragement> </>
```

 