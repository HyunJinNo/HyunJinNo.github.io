---
title: 제어 컴포넌트 vs 비제어 컴포넌트
description: 제어 컴포넌트(Controlled Component)와 비제어 컴포넌트(Uncontrolled Component)에 대해 정리한 페이지입니다.
date: 2025-03-04 23:28:00 +/-TTTT
categories: [Front-end]
tags: [react, typescript]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br>
React, TypeScript</p></blockquote>

## 개요

`제어 컴포넌트(Controlled Component)`와 `비제어 컴포넌트(Uncontrolled Component)`에 대해 정리한 페이지입니다.

## 제어 컴포넌트 (Controlled Component)

### 개념

`제어 컴포넌트(Controlled Component)`는 폼 입력 요소의 값이 <b>React의 `상태(State)`에 의해 제어</b>되는 컴포넌트입니다. 입력값에 따른 실시간 피드백(Ex. 검색어 자동 완성), 조건부 렌더링, 유효성 검사가 필요한 경우 사용하는 것이 좋습니다.

### 동작 방식

제어 컴포넌트는 사용자 입력이 발생할 때마다 `onChange` 이벤트 핸들러를 통해 상태를 업데이트합니다. 입력값은 항상 React 상태와 동기화되며, `value` prop으로 직접 할당됩니다.

### 장점

- `실시간 유효성 검증`

  사용자 입력마다 상태가 업데이트되므로 실시간으로 유효성 검증이 가능합니다.

- `중앙 집중식 관리`

  모든 데이터가 React 상태로 관리되어 예측 가능합니다.

### 단점

- `잦은 리렌더링`

  매 입력마다 리렌더링이 발생할 수 있어 성능 저하가 발생할 수 있습니다.

  <blockquote class="prompt-tip"><p><strong><u>Tips</u></strong><br>
  폼 입력값이 변경될 때마다 불필요한 리렌더링, 잦은 API 요청이 일어날 수 있으므로 Debounce나 Throttle 같은 방법을 사용하는 것이 좋습니다.</p></blockquote>

### 예시

```tsx
import { useState } from "react";

const ControlledComponent = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

export default ControlledComponent;
```

## 비제어 컴포넌트 (Uncontrolled Component)

### 개념

`비제어 컴포넌트(Uncontrolled Component)`는 폼 입력 요소의 값이 React 상태가 아닌 <b>DOM 내부에서 자체적으로 관리</b>되는 컴포넌트입니다. 대규모 폼에서 성능 최적화가 필요하거나, 파일 입력, 또는 서드파티 라이브러리와의 통합이 필요한 경우 사용하는 것이 좋습니다.

### 동작 방식

비제어 컴포넌트는 `ref`를 사용해 DOM 요소에 직접 접근하여 값을 가져옵니다. 초기 값은 `defaultValue`나 `defaultChecked`로 설정합니다.

### 장점

- `성능 최적화`

  폼 입력 요소의 값이 변경되더다도 리렌더링이 발생하지 않아 대규모 폼에 적합합니다.

- `간결성`

  간단한 폼에서 코드량이 줄어듭니다.

### 단점

- `폼 입력 요소 값 추적`

  실시간 유효성 검증이 어렵고, 값 추적이 제한적입니다.

### 예시

```tsx
import { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" defaultValue="" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledComponent;
```

## 차이점 비교

<b>제어 컴포넌트와 비제어 컴포넌트는 주로 폼 데이터를 어떻게 관리하느냐에 따라 구분됩니다.</b> 제어 컴포넌트와 비제어 컴포넌트의 차이점을 표로 요약하면 다음과 같습니다.

| 특징          | 제어 컴포넌트                 | 비제어 컴포넌트                          |
| ------------- | ----------------------------- | ---------------------------------------- |
| 데이터 관리   | React 상태(State)             | DOM 요소                                 |
| 값 추출       | `state`로 접근할 수 있습니다. | `ref`를 통해 DOM에서 추출할 수 있습니다. |
| 실시간 동기화 | 가능(`onChange` 사용)         | 불가능(폼 제출 시 주로 사용)             |
| 성능          | 잦은 리렌더링 가능성          | 리렌더링 최소화                          |
| 사용 사례     | 실시간 검증, 복잡한 폼        | 간단한 폼, 파일 업로드                   |

## 참고 자료

- <a href="https://ko.legacy.reactjs.org/docs/forms.html#controlled-components" target="_blank">제어 컴포넌트 (Controlled Component)</a>
- <a href="https://ko.legacy.reactjs.org/docs/uncontrolled-components.html" target="_blank">비제어 컴포넌트 - React</a>
- <a href="https://ko.react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components" target="_blank">컴포넌트 간 State 공유하기 – React</a>
- <a href="https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/" target="_blank">Controlled and uncontrolled form inputs in React don't have to be complicated</a>
