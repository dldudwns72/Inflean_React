# 단일 페이지 애플리케이션 (SPA)
 1. 클라이언트 초기 요청
 2. 서버가 html을 준다
 3. 페이지 전환 요청 시 서버로 요청하는것이 아닌 필요할때마다 데이터를 요청
 4. 페이징 전환은 자체 라우팅을 통해서만 전환


<br/>

# SPA가 가능하기 위한 조건
 - 자바스크립트에서 브라우저로 페이지 전환 요청을 보낼 수 있다.
 - 사용자의 페이지 전환 요청을 자바스크립트에서 처리할 수 있다.
 - 브라우저는 서버로 요청을 보내지 않아야 한다.
 - pushState, replaceState 함수 <-> popstate 이벤트 를 통한 전달

 <br/>

 # react-route-dom
  ``` npm install react-rotuer-dom```
  - 코드 분할 용이
 
