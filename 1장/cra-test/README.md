# CRA(create-react-app)
 - 별도로 웹펙과 바벨을 설정하지않고 커스터마이징 된 리액트 환경 설정 라이브러리
 - cra환경에서는 서버사이드렌더링(SSR)기능을 수행하기에는 적합하지 않다.

 <br/>

 # 설치 방법
  ```npx react-create-app```

 <br/>
 
 # 실행 방법
 ``` npm start ```  <br/>
 ``` 최초 접속 도메인 localhost:3000```

<br/>

 - 이미지 사용 시 JS Import 형식을 사용하여 사용해야 해쉬값으로 경로가 들어가며 브라우저 캐싱에 용이하다. 


  # 동적 Import
   - import 한 내용을 화면 렌더링 시 가져오지 않고 특정한 이벤트 발생 시 동적으로 Import 할 수 있다.
   - 모든 데이터를 Import 해오지 않고 동적 Import를 통하여 특정한 상황에서만 가져오도록 하여 메모리 사용을 줄일 수 있다.
   ``` import('./data.json(import할 경로)').then(({ default : data})) => console.log({data}) } ) ; ```