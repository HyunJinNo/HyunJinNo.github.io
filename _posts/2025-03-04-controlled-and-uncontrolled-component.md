---
title: 제어 컴포넌트(Controlled Component)와 비제어 컴포넌트(Uncontrolled Component)
description: 제어 컴포넌트(Controlled Component)와 비제어 컴포넌트(Uncontrolled Component)에 대해 정리한 페이지입니다.
date: 2025-03-04 23:28:00 +/-TTTT
categories: [Front-end]
tags: [front-end, react, typescript]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br>
Front-end, React, TypeScript</p></blockquote>

## 개요

`제어 컴포넌트(Controlled Component)`와 `비제어 컴포넌트(Uncontrolled Component)`에 대해 정리한 페이지입니다.

## 제어 컴포넌트 (Controlled Component)

`제어 컴포넌트(Controlled Component)`는 폼 입력 요소의 값이 <b>React의 `상태(State)`에 의해 제어</b>되는 컴포넌트입니다.

## 비제어 컴포넌트 (Uncontrolled Component)

`비제어 컴포넌트(Uncontrolled Component)`는 폼 입력 요소의 값이 React 상태가 아닌 <b>DOM 자체에서 관리</b>되는 컴포넌트입니다.

## 차이점 비교

제어 컴포넌트와 비제어 컴포넌트의 차이점을 표로 요약하면 다음과 같습니다.

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
