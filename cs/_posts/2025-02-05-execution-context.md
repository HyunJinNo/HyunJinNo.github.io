---
layout: post
title: 실행 컨텍스트
description: >
  실행 컨텍스트에 대해 설명하는 페이지입니다.
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
- [실행 컨텍스트의 구성 요소](#실행-컨텍스트의-구성-요소)
- [참고 자료](#참고-자료)
- [Comments](#comments)

## 개요

자바스크립트의 실행 컨텍스트에 대해 정리한 페이지입니다.

## 실행 컨텍스트란?

`실행 컨텍스트(Execution Context)`란 실행할 코드에 제공한 환경 정보들을 모아놓은 객체로, 코드가 실제로 실행될 때 그 코드의 변수, 함수, 스코프, this 바인딩 등 실행에 필요한 모든 정보를 관리하는 내부 메커니즘입니다. 자바스크립트는 어떤 실행 컨텍스트가 활성화되는 시점에 선언된 변수를 위로 끌어올리고(=호이스팅, hoisting), 외부 환경 정보를 구성하고, this 값을 설정하는 등의 동작을 수행합니다. 동일한 환경에 있는 코드들을 실행할 때 필요한 환경 정보들을 모아 컨텍스트를 구성하고, 이를 콜스택(Call Stack)에 쌓아올렸다가, 가장 위에 쌓여있는 컨텍스트와 관련 있는 코드들을 실행하는 식으로 전체 코드의 환경과 순서를 보장합니다.

## 실행 컨텍스트 종류

실행 컨텍스트를 구성할 수 있는 방법으로 `전역 공간`, `함수`, `eval 함수`가 있습니다. 각 실행 컨텍스트에 대해 정리하자면 다음과 같습니다.

- `전역 실행 컨텍스트(Global Execution Context)`

  페이지나 스크립트가 로드될 때 자동으로 생성되며, 브라우저에서는 `window` 객체와 연결되고 Node.js에서는 `global` 객체와 연결됩니다.

- `함수 실행 컨텍스트(Function Execution COntext)`

  함수가 호출될 때마다 생성되며, 각 함수는 자신만의 컨텍스트를 가집니다.

- `Eval 실행 컨텍스트`

  `eval()` 함수로 실행되는 코드에 대해 생성되지만, 보안과 성능 문제로 거의 사용되지 않습니다.

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
