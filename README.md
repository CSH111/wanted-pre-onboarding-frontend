# 원티드 프리온보딩 사전과제 - 조성호

## 배포링크

https://tangerine-biscuit-f12ec3.netlify.app/

<br>

## 사용 라이브러리

- axios
- react-router-dom
- styled-components
- styled-reset
- react-fontawesome

<br>

## 프로젝트 실행방법

### 패키지 설치

```
npm install
```

### app실행

```
npm start
```

<br>

## 과제

### 설명

- `src/api/axios`에서 axios 요청에 대한 baseURL, header, contents type을 정의합니다.
- `src/hooks`의 커스텀 훅들을 이용해 개별 컴포넌트의 로직을 추상화하고 재사용했습니다. 대부분의 api요청은 hooks에 정의되어 있습니다.
- todoList는 api 요청에 따라 `TodoContext`에 설정되어 출력됩니다.

  <br>

### Assignment1

- `helpers/validation.js` 에서 조건에 따라 Boolean을 리턴하는 함수 정의했습니다.

- `pages/Register/RegisterForm` 에서 해당 함수를 이용해 버튼 활성화 및 알림 메세지를 출력합니다.

  <br>

### Assignment2

- `Login`,`Register`페이지에서 `hooks/useAccount` 훅을 이용해 로그인 및 회원가입 기능을 구현했습니다.
- 로그인 및 회원가입시 응답받은 토큰은 localStorage에 저장됩니다.

  <br>

### Assignment3

- `react-router-dom` 라이브러리의 nested route를 이용해 `Protected`, `Public` route를 설정했습니다.
- `Protected`에는 `Todo`페이지가 nesting 되어있습니다.
- `Public`에는 `Login, Register`페이지가 nesting 되어있습니다.
- 토큰 없이 `Proteced`에 접속할 경우 홈으로 리다이렉트됩니다.
- 토큰 있이 `Public`에 접속할 경우 todo페이지로 리다이렉트됩니다.

  <br>

### Assignment4

- `pages/Todo`에서 `hooks/useGet`을 이용해 api를 거쳐 투두리스트를 받아옵니다.
- 받은 리스트는 `TodoContext`의 `items`에 배열로 담기고 화면에 출력됩니다.
- `/pages/Todo/TodoForm`에서 `usePost` 훅을 이용해 post 요청을 보내고 응답받은 개별 todo를 `Todocontext`에 추가하고 화면에 반영합니다.

  <br>

### Assignment5

- `/pages/Todo/TodoListITem`에서 `usePut` 훅을 이용해 완료여부, 내용 수정에 대한 put요청을 보냅니다.
- 응답받은 데이터는 `TodoContext`에 추가하고 화면에 반영합니다.
- `useDelete` 훅을 이용해 delete요청을 보내고 화면에 반영합니다.
