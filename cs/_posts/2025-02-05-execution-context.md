---
layout: post
title: 실행 컨텍스트 (Execution Context)
description: >
  실행 컨텍스트(Execution Context)에 대해 설명하는 페이지입니다.
image:
  path: /assets/img/cs/study.jpg
related_posts:
  - None
sitemap: true
comments: false
---

<i>last modified at: 2025. 02. 05.</i>

<h2>목차</h2>

- [개요](#개요)
- [실행 컨텍스트란?](#실행-컨텍스트란)
- [실행 컨텍스트 종류](#실행-컨텍스트-종류)
- [실행 컨텍스트 생성 예시](#실행-컨텍스트-생성-예시)
- [실행 컨텍스트의 구성 요소](#실행-컨텍스트의-구성-요소)
- [참고 자료](#참고-자료)
- [Comments](#comments)

## 개요

자바스크립트의 실행 컨텍스트에 대해 정리한 페이지입니다.

## 실행 컨텍스트란?

`실행 컨텍스트(Execution Context)`란 실행할 코드에 제공한 환경 정보들을 모아놓은 객체로, 코드가 실제로 실행될 때 그 코드의 변수, 함수, 스코프, this 바인딩 등 실행에 필요한 모든 정보를 관리하는 내부 메커니즘입니다. 자바스크립트는 어떤 실행 컨텍스트가 활성화되는 시점에 선언된 변수를 위로 끌어올리고(=호이스팅, Hoisting), 외부 환경 정보를 구성하고, this 값을 설정하는 등의 동작을 수행합니다. 동일한 환경에 있는 코드들을 실행할 때 필요한 환경 정보들을 모아 컨텍스트를 구성하고, 이를 콜스택(Call Stack)에 쌓아올렸다가, 가장 위에 쌓여있는 컨텍스트와 관련 있는 코드들을 실행하는 식으로 전체 코드의 환경과 순서를 보장합니다.

## 실행 컨텍스트 종류

실행 컨텍스트를 구성할 수 있는 방법으로 `전역 공간`, `함수`, `eval 함수`가 있습니다. 각 실행 컨텍스트에 대해 정리하자면 다음과 같습니다.

- `전역 실행 컨텍스트(Global Execution Context)`

  페이지나 스크립트가 로드될 때 자동으로 생성되며, 브라우저에서는 `window` 객체와 연결되고 Node.js에서는 `global` 객체와 연결됩니다.

- `함수 실행 컨텍스트(Function Execution COntext)`

  함수가 호출될 때마다 생성되며, 각 함수는 자신만의 컨텍스트를 가집니다.

- `Eval 실행 컨텍스트`

  `eval()` 함수로 실행되는 코드에 대해 생성되지만, 보안과 성능 문제로 거의 사용되지 않습니다.

## 실행 컨텍스트 생성 예시

실행 컨텍스트가 콜 스택에 어떤 순서로 쌓이는지 다음 자바스크립트 코드를 통해 확인해보도록 하겠습니다.

```javascript
// 자바스크립트 코드를 실행하는 순간 전역 실행 컨텍스트가 콜 스택에 담깁니다.
console.log(a); // undefined

var a = 1;

function outer() {
  function inner() {
    console.log(a); // undefined
    var a = 3;
  }

  inner();
  console.log(a); // 1
}

outer();
console.log(a); // 1
```

<img src="/assets/img/cs/execution-context/pic1.png" alt="pic1" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

먼저 위의 사진과 같이 처음 자바스크립트 코드가 실행되는 순간 자동으로 전역 실행 컨텍스트가 콜 스택에 담기게 됩니다.

<br />

<img src="/assets/img/cs/execution-context/pic2.png" alt="pic2" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

이후 outer 함수가 호출되면 자바스크립트 엔진은 outer에 대한 환경 정보를 수집해서 outer 실행 컨텍스트를 생성한 후 콜 스택에 담습니다. 콜 스택 맨 위에 outer 실행 컨텍스트가 놓인 상태이므로 전역 실행 컨텍스트와 관련된 코드의 실행을 일시 중단하고 outer 실행 컨텍스트와 관련된 코드, 즉 outer 함수 내부의 코드를 순서대로 실행합니다.

<br />

<img src="/assets/img/cs/execution-context/pic3.png" alt="pic3" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

outer 함수 내부에서 inner 함수가 호출되면 inner 실행 컨텍스트를 생성한 후 콜 스택에 담습니다. outer 실행 컨텍스트와 관련된 코드의 실행을 일시 중단하고 inner 함수 내부의 코드를 순서대로 실행합니다.

<br />

<img src="/assets/img/cs/execution-context/pic4.png" alt="pic4" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

이후 inner 함수의 실행이 종료되면 콜 스택에서 inner 실행 컨텍스트를 제거합니다. 콜 스택에서 inner 실행 컨텍스트를 제거하여 콜 스택 맨 위에 outer 실행 컨텍스트가 놓인 상태이므로 outer 함수 내부에서 inner 함수를 호출하는 코드 이후부터 실행합니다.

<br />

<img src="/assets/img/cs/execution-context/pic5.png" alt="pic5" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

outer 함수의 실행이 종료되면 콜 스택에서 outer 실행 컨텍스트를 제거합니다. 콜 스택에서 outer 실행 컨텍스트를 제거하여 콜 스택에는 전역 실행 컨텍스트만 남게 됩니다.

<br />

<img src="/assets/img/cs/execution-context/pic6.png" alt="pic6" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

마지막으로 자바스크립트 코드 실행이 종료되면 전역 공간에는 실행할 코드가 남아 있지 않으므로 콜 스택에서 전역 실행 컨텍스트를 제거하여 콜 스택에는 아무 것도 없는 상태로 종료됩니다.

## 실행 컨텍스트의 구성 요소

- VariableEnvironment
- LexicalEnvironment
  - EnvironmentRecord
  - outerEnvironmentReference

## 참고 자료

- ?

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
