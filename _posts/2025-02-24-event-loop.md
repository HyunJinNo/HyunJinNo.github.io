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

## 개요

`이벤트 루프(Event Loop)`에 대해 정리한 페이지입니다.

## 이벤트 루프 (Event Loop)

### 이벤트 루프의 개념

<b>자바스크립트의 `이벤트 루프(Event Loop)`는 싱글 스레드 환경에서 비동기 작업, Non-blocking I/O, 동시성을 가능하게 하는 핵심 메커니즘입니다.</b> 자바스크립트 엔진(V8 등)은 단일 콜 스택만 사용하지만, 브라우저나 Node.js와 같은 런타임 환경은 Web API, 태스크 큐 등을 통해 비동기 작업과 동시성을 지원합니다.

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br>
자바스크립트는 <b>싱글 스레드</b> 언어로 콜 스택이 하나만 존재합니다. 콜 스택이 하나만 존재하므로 자바스크립트 엔진은 <b>한 번에 한 가지 작업만 수행</b>합니다. 함수가 호출되면 해당 함수의 실행 컨텍스트가 콜 스택(Call Stack)에 쌓이고, 실행이 끝나면 제거됩니다. 하나의 함수가 완전히 실행되어 콜 스택에서 제거되기 전에는 다른 작업이 끼어들 수 없습니다.</p></blockquote>

### 이벤트 루프의 구성 요소

이벤트 루프는 다음 요소들과 상호 작용합니다.

<img src="/assets/img/cs/event-loop/pic1.avif" alt="이벤트 루프는 콜 스택, Web API, 태스크 큐와 상호 작용합니다." />

- `콜 스택(Call Stack)`

  함수가 호출될 때 생성된 `실행 컨텍스트`를 저장하는 LIFO (Last-In-First-Out) 자료구조입니다.

- `Web API`

  브라우저 또는 Node.js가 제공하는 비동기 API로서 `setTimeout`, `fetch` 등이 있습니다.

- `태스크 큐(Task Queue)`

  `태스크 큐(Task Queue)`는 콜백 함수가 대기하는 큐입니다. `Web API`에서 완료된 비동기 작업의 콜백 함수는 태스크 큐에 저장되며, 콜 스택이 비어 있을 때 이벤트 루프에 의해 콜 스택으로 옮겨져 실행됩니다. `태스크 큐`에는 다음 2가지 종류가 있습니다.

  <blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br>
  마이크로태스크 큐가 매크로태스크 큐보다 우선순위가 높습니다. 따라서 마이크로태스크 큐  → 매크로태스크 큐 순서로 비동기 코드가 실행됩니다.</p></blockquote>

  - `마이크로태스크 큐(Microtask Queue)`

    Promise의 콜백, queueMicrotask, MutationObserver, async/await 등이 속하는 큐입니다.

  - `매크로태스크 큐(Macrotask Queue)`

    setTimeout, setInterval, setImmediate, DOM 이벤트, I/O 작업 등이 속하는 큐입니다.

- `이벤트 루프`

  이벤트 루프는 콜 스택이 비어 있을 때 태스크 큐 내에 존재하는 콜백을 콜 스택으로 옮겨서 비동기 코드를 실행하도록 돕는 역할을 수행합니다.

### 이벤트 루프의 동작 원리

이벤트 루프를 통해 비동기 코드가 실행되는 과정은 다음과 같습니다.

1. `콜 스택 실행`

   함수가 호출되면 콜 스택에 쌓이고, 실행이 완료되면 제거됩니다. 동기 코드는 즉시 실행되지만, 비동기 코드는 Web API로 이동합니다.

2. `Web API 처리`

   비동기 작업(Ex. 타이머, 네트워크 요청 등)이 완료되면 콜백 함수가 태스크 큐에 추가됩니다.

3. `이벤트 루프의 순회`

   이벤트 루프는 콜 스택에 실행할 코드가 남아있는지 계속 확인합니다. 만약 콜 스택이 비어 있으면, 이벤트 루프는 태스크 큐에서 대기 중인 콜백 함수를 꺼내 콜 스택으로 옮깁니다. 이 때 마이크로태스크 큐에 대기 중인 작업이 매크로태스크 큐에 대기 중인 작업보다 우선 순위가 높으므로 <b>마이크로태스크 큐 → 매크로태스크 큐</b> 순서로 큐를 확인합니다.

4. `콜백 실행`

   콜 스택에 추가된 콜백 함수는 호출된 후 콜 스택에서 제거됩니다.

### 이벤트 루프의 동작 순서 예시

#### 예시 1 - setTimeout & Promise

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve("C").then((res) => console.log(res));

console.log("D");
```

출력 순서는 <b>"A" → "D" → "C" → "B"</b>입니다. 콜 스택이 비워진 후 먼저 마이크로태스크 큐의 Promise 콜백이 모두 실행된 다음, 매크로태스크 큐에 있는 `setTimeout`의 콜백이 실행됩니다. 실행 순서를 자세하게 설명하면 다음과 같습니다.

1. <b>console.log("A");</b>

   먼저 콜 스택에 `console.log("A");`가 추가되어 실행된 후 콜 스택에서 제거됩니다.

   <img src="/assets/img/cs/event-loop/pic2.avif" alt="console.log('A');가 콜 스택에 추가" />

   <img src="/assets/img/cs/event-loop/pic3.avif" alt="console.log('A');가 콜 스택에서 제거" />

2. <b>setTimeout(() => { console.log("B"); }, 0);</b>

   `setTimeout` 코드가 콜 스택에 쌓인 후 `setTimeout`의 콜백 함수가 Web API로 옮겨지고 타이머가 작동합니다. 타이머가 0초로 설정되었으므로 바로 타이머가 종료되고 콜백 함수가 매크로태스크 큐로 이동합니다.

   <img src="/assets/img/cs/event-loop/pic4.avif" alt="setTimeout" />

   <img src="/assets/img/cs/event-loop/pic5.avif" alt="setTimeout" />

   <img src="/assets/img/cs/event-loop/pic6.avif" alt="setTimeout" />

3. <b>Promise.resolve("C").then((res) => console.log(res));</b>

   `Promise` 코드가 콜 스택에 쌓인 후 `then`의 콜백 함수가 마이크로태스크 큐로 이동합니다.

   <img src="/assets/img/cs/event-loop/pic7.avif" alt="Promise" />

   <img src="/assets/img/cs/event-loop/pic8.avif" alt="Promise" />

4. <b>console.log("D");</b>

   콜 스택에 `console.log("D");`가 추가되어 실행된 후 콜 스택에서 제거됩니다.

   <img src="/assets/img/cs/event-loop/pic9.avif" alt="console.log('D');가 콜 스택에 추가" />

   <img src="/assets/img/cs/event-loop/pic10.avif" alt="console.log('A');가 콜 스택에서 제거" />

5. <b>마이크로태스크 큐의 콜백 처리</b>

   콜 스택에 더 이상 실행할 코드가 남아있지 않는 경우 이벤트 루프는 태스크 큐에서 대기 중인 콜백 함수를 꺼내 콜 스택으로 옮깁니다. 이 때 마이크로태스크 큐의 콜백부터 먼저 처리합니다.

   <img src="/assets/img/cs/event-loop/pic11.avif" alt="마이크로태스크 큐의 콜백 처리" />

   <img src="/assets/img/cs/event-loop/pic12.avif" alt="마이크로태스크 큐의 콜백 처리" />

   <img src="/assets/img/cs/event-loop/pic13.avif" alt="마이크로태스크 큐의 콜백 처리" />

   <img src="/assets/img/cs/event-loop/pic14.avif" alt="마이크로태스크 큐의 콜백 처리" />

6. <b>매크로태스크 큐의 콜백 처리</b>

   마이크로태스크 큐에 콜백이 더 이상 존재하지 않는 경우 이벤트 루프는 매크로태스크 큐의 콜백을 콜 스택으로 옮깁니다.

   <img src="/assets/img/cs/event-loop/pic15.avif" alt="매크로태스크 큐의 콜백 처리" />

   <img src="/assets/img/cs/event-loop/pic16.avif" alt="매크로태스크 큐의 콜백 처리" />

실제 실행 결과도 다음과 같습니다.

<img src="/assets/img/cs/event-loop/pic17.avif" alt="실행 결과" />

#### 예시 2 - async/await

```javascript
const A = () => Promise.resolve("A");

async function myFunc() {
  console.log("B");
  const result = await A();
  console.log(result);
}

console.log("C");
myFunc();
console.log("D");
```

출력 순서는 <b>"C" → "B" → "D" → "A"</b>입니다. 먼저 <b>"C"</b>가 출력된 후 myFunc 함수가 호출되어 <b>"B"</b>를 호출합니다. 해당 함수 내부의 `A()`의 Promise가 해결되기 전까지 myFunc 함수를 일시 정지합니다. 이후 <b>"D"</b>를 출력한 후 마이크로태스크 큐에서 `await` 이후의 코드가 실행되어 <b>"A"</b>를 출력합니다. 실행 순서를 자세하게 설명하면 다음과 같습니다.

1. <b>console.log("C");</b>

   먼저 콜 스택에 `console.log("C");`가 추가되어 실행된 후 콜 스택에서 제거됩니다.

   <img src="/assets/img/cs/event-loop/pic18.avif" alt="console.log('C');가 콜 스택에 추가" />

   <img src="/assets/img/cs/event-loop/pic19.avif" alt="console.log('C');가 콜 스택에서 제거" />

2. <b>myFunc() 호출</b>

   비동기 함수인 `myFunc()`이 호출됩니다.

3. <b>console.log("B");</b>

   콜 스택에 `console.log("B");`가 추가되어 실행된 후 콜 스택에서 제거됩니다.

   <img src="/assets/img/cs/event-loop/pic20.avif" alt="console.log('B');가 콜 스택에 추가" />

   <img src="/assets/img/cs/event-loop/pic21.avif" alt="console.log('B');가 콜 스택에서 제거" />

4. <b>const result = await A();</b>

   비동기 함수 `A()`를 호출합니다. 이 때 <b>`await` 키워드로 인해 myFunc 내부의 코드 실행을 일시 중단하고 콜 스택에서 빠져나와 `await` 키워드 이후의 나머지 코드는 await A()의 then()의 콜백 함수로 처리되어 마이크로태스크 큐에 추가됩니다.</b>

   <img src="/assets/img/cs/event-loop/pic22.avif" alt="await 키워드" />

   <img src="/assets/img/cs/event-loop/pic23.avif" alt="await 키워드" />

5. <b>console.log("D");</b>

   콜 스택에 `console.log("D");`가 추가되어 실행된 후 콜 스택에서 제거됩니다.

   <img src="/assets/img/cs/event-loop/pic24.avif" alt="console.log('D');가 콜 스택에 추가" />

   <img src="/assets/img/cs/event-loop/pic25.avif" alt="console.log('D');가 콜 스택에서 제거" />

6. <b>마이크로태스크 큐의 콜백 처리</b>

   콜 스택에 더 이상 실행할 코드가 남아있지 않으므로 이벤트 루프는 마이크로태스크 큐에서 대기 중인 콜백 함수를 꺼내 콜 스택으로 옮깁니다.

   <img src="/assets/img/cs/event-loop/pic26.avif" alt="마이크로태스크 큐의 콜백 처리" />

   <img src="/assets/img/cs/event-loop/pic27.avif" alt="마이크로태스크 큐의 콜백 처리" />

실제 실행 결과도 다음과 같습니다.

<img src="/assets/img/cs/event-loop/pic28.avif" alt="실행 결과" />

위의 코드에서 주목할 점은 바로 `await` 키워드입니다. <b>`await` 키워드를 사용하면 해당 키워드를 사용한 코드의 나머지 코드 부분이 then()의 콜백 함수로 처리되어 마이크로태스크 큐에 옮겨집니다.</b> 즉, 위의 코드는 다음 코드와 같습니다.

```javascript
const A = () => Promise.resolve("A");

function myFunc() {
  console.log("B");
  return A().then((res) => {
    console.log(res);
  });
}

console.log("C");
myFunc();
console.log("D");
```

### 주의 사항

비동기 코드(Ex. `setTimeout`, `fetch`, `Promise.then`)는 <b>콜 스택이 비어있을 때(정확히는 콜 스택 내에 전역 실행 컨텍스트만 존재하고 더 이상 실행할 동기 코드가 없는 경우)만 실행</b>할 수 있습니다. 만약 다음과 같이 무한 루프 함수가 실행되고 있으면 콜 스택이 비워지지 않으므로 비동기 코드가 실행되지 않습니다.

<img src="/assets/img/cs/event-loop/pic29.avif" alt="무한 루프 함수가 실행되고 있으면 콜 스택이 비워지지 않으므로 비동기 코드가 실행되지 않습니다." />

또한 무한 루프 함수가 아니더라도 콜 스택을 오래 차지하고 있는 코드가 실행되고 있으면 콜 스택이 비어지기 전까지 비동기 코드의 실행이 지연됩니다.

예를 들어 다음 `setTimeout`은 의도한대로 약 1초 후에 콜백이 실행됩니다.

<img src="/assets/img/cs/event-loop/pic30.avif" alt="setTimeout" />

반면에 다음 자바스크립트 코드의 경우 반복문이 콜 스택을 오랫동안 차지하고 있으므로 `setTimeout`의 콜백이 실행되기까지 훨씬 더 오랜 시간이 걸리게 됩니다.

<img src="/assets/img/cs/event-loop/pic31.avif" alt="반복문이 콜 스택을 오랫동안 차지하므로 비동기 코드가 실행되기까지 훨씬 더 오랜 시간이 걸립니다." />

## 참고 자료

- <a href="https://inpa.tistory.com/entry/%F0%9F%94%84-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84-%EA%B5%AC%EC%A1%B0-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC" target="_blank">🔄 자바스크립트 이벤트 루프 동작 구조 & 원리 끝판왕</a>
- <a href="https://yong-nyong.tistory.com/71" target="_blank">[JavaScript] 이벤트 루프(Event Loop)에 대해서 파헤쳐 봅시다.</a>
- <a href="https://www.yes24.com/Product/Goods/118379776" target="_blank">Node.js 백엔드 개발자 되기 - 예스24</a>
