---
title: 이벤트 루프 (Event Loop)
description: 이벤트 루프(Event Loop)에 대해 정리한 페이지입니다.
date: 2025-02-24 11:00:00 +/-TTTT
categories: [Computer Science]
tags: [javascript, event-loop, exection-context]
math: true
toc: true
pin: false
image:
  path: /assets/img/cs/study.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br>
JavaScript, Event Loop, Execution Context</p></blockquote>

<h2>목차</h2>

- [개요](#개요)
- [이벤트 루프 (Event Loop)](#이벤트-루프-event-loop)
  - [이벤트 루프의 개념](#이벤트-루프의-개념)
  - [이벤트 루프의 구성 요소](#이벤트-루프의-구성-요소)
  - [이벤트 루프의 동작 원리](#이벤트-루프의-동작-원리)
  - [이벤트 루프의 동작 순서 예시](#이벤트-루프의-동작-순서-예시)
  - [주의 사항](#주의-사항)
- [참고 자료](#참고-자료)

## 개요

`이벤트 루프(Event Loop)`에 대해 정리한 페이지입니다.

## 이벤트 루프 (Event Loop)

### 이벤트 루프의 개념

<b>자바스크립트의 `이벤트 루프(Event Loop)`는 싱글 스레드 환경에서 비동기 작업, Non-blocking I/O, 동시성을 가능하게 하는 핵심 메커니즘입니다.</b> 자바스크립트 엔진(V8 등)은 단일 콜 스택만 사용하지만, 브라우저나 Node.js와 같은 런타임 환경은 Web API, 태스크 큐 등을 통해 비동기 작업과 동시성을 지원합니다.

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br>
<b>싱글 스레드</b>: 자바스크립트 엔진은 한 번에 한 가지 작업만 수행합니다. 함수가 호출되면 해당 함수의 실행 컨텍스트가 콜 스택(Call Stack)에 쌓이고, 실행이 끝나면 제거됩니다. 하나의 함수가 완전히 실행되어 콜 스택에서 제거되기 전에는 다른 작업이 끼어들 수 없습니다.</p></blockquote>

### 이벤트 루프의 구성 요소

이벤트 루프는 다음 요소들과 상호 작용합니다.

- `콜 스택(Call Stack)`

  함수가 호출될 때 생성된 `실행 컨텍스트`를 저장하는 LIFO (Last-In-First-Out) 자료구조입니다.

- `Web API`

  브라우저 또는 Node.js가 제공하는 비동기 API로서 `setTimeout`, `fetch` 등이 있습니다.

- `태스크 큐`

  `태스크 큐(Task Queue)`는 콜백 함수가 대기하는 큐입니다. `Web API`에서 완료된 비동기 작업의 콜백 함수는 태스크 큐에 저장되며, 콜 스택이 비어 있을 때 이벤트 루프에 의해 콜 스택으로 옮겨져 실행됩니다. `태스크 큐`는 다음 2가지 큐가 존재합니다.

  <blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br>
  마이크로태스크 큐 → 애니메이션 프레임 → 매크로태스크 큐 순서로 비동기 코드가 실행됩니다.</p></blockquote>

  - `마이크로태스크 큐(Microtask Queue)`

    Promise의 콜백, queueMicrotask, MutationObserver, async/await 등이 속하는 큐입니다.

  - `매크로태스크 큐(Macrotask Queue)`

    주로 `setTimeout`, `setInterval` `setImmediate`, DOM 이벤트, I/O 작업 등이 속하는 큐입니다.

  - `애니메이션 프레임(Animate Frames)`

    `requestAnimationFrame` API를 통해 등록한 콜백이 저장됩니다.

- `이벤트 루프`

  이벤트 루프는 콜 스택이 비어 있을 때 태스트 큐 내에 존재하는 콜백을 콜 스택으로 옮겨서 비동기 코드를 실행하도록 돕는 역할을 수행합니다.

### 이벤트 루프의 동작 원리

1. `콜 스택 실행`

   함수가 호출되면 콜 스택에 쌓이고, 실행이 완료되면 제거됩니다. 동기 코드는 즉시 실행되지만, 비동기 코드는 Web API로 이동합니다.

2. `Web API 처리`

   비동기 작업(Ex. 타이머, 네트워크 요청 등)이 완료되면 콜백 함수가 태스크 큐에 추가됩니다.

3. `이벤트 루프의 순회`
   이벤트 루프는 콜 스택에 실행할 코드가 남아있는지 계속 확인합니다. 만약 콜 스택이 비어 있으면, 이벤트 루프는 태스크 큐에서 대기 중인 콜백 함수를 꺼내 콜 스택으로 옮깁니다. 이 때 마이크로태스크 큐에 대기 중인 작업이 매크로태스크 큐에 대기 중인 작업보다 우선 순위가 높으므로 <b>마이크로태스크 큐 → 매크로태스크 큐 → 렌더링 단계(브라우저)</b> 순서로 큐를 확인합니다.

### 이벤트 루프의 동작 순서 예시

<img src="/assets/img/cs/event-loop/pic1.jpg" alt="pic1" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

출력 순서는 <b>"A" → "D" → "C" → "B"</b>입니다. 콜 스택이 비워진 후 먼저 마이크로태스크 큐의 Promise 콜백이 모두 실행된 다음, 매크로태스크 큐에 있는 `setTimeout`의 콜백이 실행됩니다.

<img src="/assets/img/cs/event-loop/pic2.jpg" alt="pic2" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

출력 순서는 <b>"C" → "B" → "D" → "A"</b>입니다. 먼저 <b>"C"</b>가 출력된 후 myFunc 함수가 호출되어 <b>"B"</b>를 호출합니다. 해당 함수 내부의 `printA()`의 Promise가 해결되기 전까지 myFunc 함수를 일시 정지합니다. 이후 <b>"D"</b>를 출력한 후 마이크로태스크 큐에서 `await` 이후의 코드가 실행되어 <b>"A"</b>를 출력합니다.

### 주의 사항

비동기 코드(Ex. `setTimeout`, `fetch`, `Promise.then`)는 <b>콜 스택이 비어있을 때(정확히는 콜 스택 내에 전역 실행 컨텍스트만 존재하고 더 이상 실행할 동기 코드가 없는 경우)만 실행</b>할 수 있습니다. 만약 다음과 같이 무한 루프 함수가 실행되고 있으면 콜 스택이 비워지지 않으므로 비동기 코드가 실행되지 않습니다.

<img src="/assets/img/cs/event-loop/pic3.jpg" alt="pic3" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

또한 무한 루프 함수가 아니더라도 콜 스택을 오래 차지하고 있는 코드가 실행되고 있으면 콜 스택이 비어지기 전까지 비동기 코드의 실행이 지연됩니다.

예를 들어 다음 `setTimeout`은 의도한대로 약 1초 후에 콜백이 실행됩니다.

<img src="/assets/img/cs/event-loop/pic4.jpg" alt="pic4" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

반면에 다음 자바스크립트 코드의 경우 반복문이 콜 스택을 오랫동안 차지하고 있으므로 `setTimeout`의 콜백이 실행되기까지 훨씬 더 오랜 시간이 걸리게 됩니다.

<img src="/assets/img/cs/event-loop/pic5.jpg" alt="pic5" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

## 참고 자료

- <a href="https://inpa.tistory.com/entry/%F0%9F%94%84-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84-%EA%B5%AC%EC%A1%B0-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC" target="_blank">🔄 자바스크립트 이벤트 루프 동작 구조 & 원리 끝판왕</a>
- <a href="https://yong-nyong.tistory.com/71" target="_blank">[JavaScript] 이벤트 루프(Event Loop)에 대해서 파헤쳐 봅시다.</a>
- <a href="https://www.yes24.com/Product/Goods/118379776" target="_blank">Node.js 백엔드 개발자 되기 - 예스24</a>
