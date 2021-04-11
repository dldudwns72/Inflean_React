# CRA(create-react-app)

- 별도로 웹펙과 바벨을 설정하지않고 커스터마이징 된 리액트 환경 설정 라이브러리
- cra환경에서는 서버사이드렌더링(SSR)기능을 수행하기에는 적합하지 않다.

 <br/>

# 설치 방법

`npx react-create-app`

 <br/>
 
 # 실행 방법
 ``` npm start ```  <br/>
 ``` 최초 접속 도메인 localhost:3000``` <br/>
 ``` HTTPS=true npm start(mac), set HTTPS=true && npm start (windows) ``` // https 실행


<br/>

- 이미지 사용 시 JS Import 형식을 사용하여 사용해야 해쉬값으로 경로가 들어가며 브라우저 캐싱에 용이하다.

# 동적 Import

- import 한 내용을 화면 렌더링 시 가져오지 않고 특정한 이벤트 발생 시 동적으로 Import 할 수 있다.
- 모든 데이터를 Import 해오지 않고 동적 Import를 통하여 특정한 상황에서만 가져오도록 하여 메모리 사용을 줄일 수 있다.
  `import('./data.json(import할 경로)').then(({ default : data})) => console.log({data}) } ) ;`

# 빌드(Build)

npm build 시 build 파일이 생성되며 build 폴더 내부에 index.html 정적 파일 생성
해당 정적파일 실행 npx serve -s build

- 작은 사이즈의 이미지는 JS파일로 빌드되어 들어가고 큰 사이즈의 이미지는 static>media 파일 안에 저장되어 있다.

# 테스트(Test)

- 실행 방법 npm test => .test.js || spec.js 파일들을 실행하여 태스트한다.

# eject
- CRA 환경에서 환경설정을 할 떄 사용하는 기능

# polyfill
 - 최신 및 특정한 기능은 브라우저마다 지원을 해주는 경우가있고 안해주는 경우가 있다 <br/>
   이에 따른 설정을 해주어야 하는데 index.js에 polyfill을 추가하여 설정해주면 된다.

# 환경 변수
  process.env.{변수이름}, process.env.NODE_ENV  <br/>
  환경변수 별 파일을 설정할 수 있다.