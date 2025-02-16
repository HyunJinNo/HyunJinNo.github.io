---
layout: post
title: Debounce와 Throttle
description: >
  Debounce와 Throttle에 대해 정리한 페이지입니다.
image:
  path: /assets/img/front-end/front-end.jpg
related_posts:
  - None
sitemap: true
comments: false
---

<i>last modified at: 2025. 02. 16.</i>

<h2>목차</h2>

- [개요](#개요)
- [Debounce와 Throttle이란?](#debounce와-throttle이란)
- [Debounce](#debounce)
  - [동작 원리](#동작-원리)
  - [useDebounce 구현하기](#usedebounce-구현하기)
- [Throttle](#throttle)
  - [동작 원리](#동작-원리-1)
  - [useThrottle 구현하기](#usethrottle-구현하기)
- [참고 자료](#참고-자료)
- [Comments](#comments)

## 개요

<hr />

`Debounce`와 `Throttle`에 대해 정리한 페이지입니다.

## Debounce와 Throttle이란?

<hr />

`Debounce`와 `Throttle`은 성능 최적화를 위한 기술로, 주로 사용자의 입력 이벤트(스크롤, 창 크기 조정 등)가 너무 자주 발생하는 경우 이를 조절하는 역할을 수행합니다. 이 둘의 핵심은 모두 <b>특정 함수의 호출 횟수를 줄여서 웹 성능이 저하되는 것을 방지하는 것</b>입니다.

`Debounce`와 `Throttle`의 차이점을 비교하면 다음과 같습니다.

| 구분       | 동작 방식                                           | 사용 사례                                    |
| ---------- | --------------------------------------------------- | -------------------------------------------- |
| `Debounce` | 특정 시간 동안 이벤트가 발생하지 않으면 함수를 실행 | 검색 입력, 자동 저장, 실시간 필터            |
| `Throttle` | 일정 시간 간격으로 함수를 실행                      | 무한 스크롤, 버튼 연타 방지, 윈도우 리사이즈 |

## Debounce

<hr />

`Debounce`는 연속적인 이벤트가 발생해도 마지막 이벤트가 발생한 후 일정 시간이 지나야 함수를 실행하도록 제한하는 역할을 수행합니다. 주로 검색 자동 완성, 검색어 입력 시 API 호출 등의 상황에서 사용합니다.

### 동작 원리

`Debounce`의 동작 원리는 다음과 같습니다.

1. 이벤트가 발생하면 타이머를 설정합니다.
2. 만약 기존 타이머가 완료되기 전에 이벤트가 발생하는 경우 기존 타이머를 제거하고 새로운 타이머를 설정합니다.
3. 타이머가 완료되면 함수를 실행합니다. 이후 `1.`부터 반복합니다.

### useDebounce 구현하기

`useDebounce` 커스텀 훅을 구현한 예시는 다음과 같습니다.

```typescript
/* useDebounce.ts */

import { useRef } from "react";

export const useDebounce = <T extends unknown[]>(
  callback: (...params: T) => void,
  debounceTime = 1000
) => {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...params: T) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      callback(...params);
      timeout.current = null;
    }, debounceTime);
  };
};
```

위의 코드를 설명하자면 다음과 같습니다.

```typescript
const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
```

타이머를 관리하는 변수입니다. `useRef`를 사용하여 리렌더링이 되더라도 타이머가 초기화되는 문제를 방지합니다.

```typescript
if (timeout.current) {
  clearTimeout(timeout.current);
}
```

기존 타이머가 완료되기 전에 이벤트가 발생하는 경우 기존 타이머를 제거하는 부분입니다.

```typescript
timeout.current = setTimeout(() => {
  callback(...params);
  timeout.current = null;
}, debounceTime);
```

마지막 이벤트가 발생한 후 일정 시간이 지난 후에 함수를 실행하는 코드입니다.

## Throttle

<hr />

`Throttle`은 일정 시간 간격으로 함수가 최대 한 번만 실행되도록 제한하는 역할을 수행합니다. 주로 무한 스크롤, 버튼 연타 방지, 윈도우 리사이즈 등에서 사용됩니다.

### 동작 원리

`Throttle`의 동작 원리는 다음과 같습니다.

1. 이벤트가 발생하면 함수를 호출한 후 타이머를 설정합니다.
2. 만약 타이머가 완료되기 전에 이벤트가 발생하는 경우 함수를 호출하지 않습니다.
3. 타이머가 완료된 후에 이벤트가 발생하면 `1.`부터 반복합니다.

### useThrottle 구현하기

`useThrottle` 커스텀 훅을 구현한 예시는 다음과 같습니다.

```typescript
/* useThrottle.ts */

import { useRef } from "react";

export const useThrottle = <T extends unknown[]>(
  callback: (...params: T) => void,
  throttleTime = 1000
) => {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...params: T) => {
    if (timeout.current) {
      return;
    }

    callback(...params);

    timeout.current = setTimeout(() => {
      timeout.current = null;
    }, throttleTime);
  };
};
```

위의 코드를 설명하자면 다음과 같습니다.

```typescript
const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
```

타이머를 관리하는 변수입니다. `useRef`를 사용하여 리렌더링이 되더라도 타이머가 초기화되는 문제를 방지합니다.

```typescript
if (timeout.current) {
  return;
}

callback(...params);
```

타이머가 설정되기 전에 이벤트가 발생하면 함수를 호출하는 부분입니다. 만약 타이머가 완료되기 전에 이벤트가 발생하는 경우 함수를 호출하지 않습니다.

```typescript
timeout.current = setTimeout(() => {
  timeout.current = null;
}, throttleTime);
```

함수 호출 후 일정 시간이 지난 후에 함수를 실행할 수 있도록 타이머를 설정하는 부분입니다.

## 참고 자료

<hr />

- <a href="https://velog.io/@ansrjsdn/TypeScript%EC%97%90%EC%84%9C-useDebounce-useThrottle-%EB%A7%8C%EB%93%A4%EA%B8%B0" target="_blank">TypeScript에서 useDebounce, useThrottle 만들기</a>

## Comments

<hr />
<script
  src="https://utteranc.es/client.js"
  repo="HyunJinNo/HyunJinNo.github.io"
  issue-term="pathname"
  theme="github-light"
  crossorigin="anonymous"
  async
></script>
