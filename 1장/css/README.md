# CSS 방식
1. css 모듈 
2. sass
3. css in js (style component)

<br/>

일반 js의 class와 겹치지 않게 classname을 사용하여 스타일을 설정한다.

# 일반 CSS 작성
 - css 파일을 만들어 사용중인 js파일에서 해당 css 파일을 import 하여 사용
 - 같은 속성명을 사용할 시 충돌하여 css가 깨질 수 있다.

# CSS 모듈
- css파일명.module.css 파일을 사용하여 css파일을 만들고 해당 css파일을 import 하여 사용
- 뒤에 해시값이 붙어서 각 클래스 명은 고유값으로 된다.


# classnames
```npm install classnames``` <br/>
classnames(`css1,css2`) // 콤마(,) 단위로 사용할 수 있다.


# Sass
 ``` npm install node-sass```
 - 확장파일 .scss 파일 사용해야한다.
 - css 파일에서 각 파일 간 변수로 다룰 수 있다.

 # css-in-js
  ``` npm install styled-components``` 
   - 사용방법 <br/>
    1. import styled from 'style-components' <br/>
    2-1. const css컴포넌트명 = styled(css 바꿀 컴포넌트명) `css 내용`
    2-2. const css컴포넌트명 = styled.태그 `css내용`