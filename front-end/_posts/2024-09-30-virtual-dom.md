---
layout: post
title: 가상 돔(Virtual DOM)
description: >
  가상 돔(Virtual DOM)에 대해 설명하는 페이지입니다.
image:
  path: /assets/img/front-end/front-end.jpg
  srcset:
    1060w: /assets/img/front-end/front-end.jpg
    530w: /assets/img/front-end/front-end.jpg
    265w: /assets/img/front-end/front-end.jpg
related_posts:
  - None
sitemap: true
comments: false
---

<h2>목차</h2>

- [개요](#개요)
- [가상 돔(Virtual DOM)이란?](#가상-돔virtual-dom이란)
- [가상 돔(Virtual DOM)을 사용하는 이유](#가상-돔virtual-dom을-사용하는-이유)
- [가상 돔(Virtual DOM)의 동작 방식](#가상-돔virtual-dom의-동작-방식)
  - [createElement 함수와 렌더링](#createelement-함수와-렌더링)
  - [Diff 알고리즘 적용 및 업데이트](#diff-알고리즘-적용-및-업데이트)
  - [Reconciliation](#reconciliation)
- [Comments](#comments)

## 개요

이번 글에서는 가상 돔(Virtual DOM)의 개념에 대해 설명한 후, 리액트(React)에서 가상 돔이 사용되는 방식에 대해 설명하겠습니다.

## 가상 돔(Virtual DOM)이란?

`가상 돔(Virtual DOM, Virtual Document Object Model)`이란 메모리에 유지하는 실제 DOM의 가상 표현입니다. React나 Vue.js 등에서 사용하는 개념으로, 실제 DOM과 유사한 가벼운 객체를 메모리 상에 유지하면서 UI 업데이트 성능을 최적화하는 데 도움을 줍니다. UI가 변경되는 경우 실제 DOM에 바로 반영되지 않고 가상 돔에 먼저 반영된 후, 기존 가상 돔과 새로운 가상 돔을 비교하여 차이점을 찾아 실제 DOM을 업데이트하게 됩니다.

## 가상 돔(Virtual DOM)을 사용하는 이유

가상 돔을 사용하는 이유는, 실제 DOM을 최소한으로 조작하기 위해서입니다. 실제 DOM 조작은 브라우저의 렌더링 엔진에서 많은 리소스를 소비하게 됩니다. 특히, 페이지 전체를 새로 렌더링하는 경우 많은 시간이 소요될 수 있습니다. 또한 사용자 입력이나 애니메이션으로 인해 DOM을 자주 변경해야 하는 경우, DOM을 직접적으로 다루는 것은 많은 리소스를 소모할 수 있습니다.

이러한 성능 문제를 해결하기 위해 가상 돔이 사용됩니다. UI 변경 사항을 먼저 가상 돔에 반영한 후, 기존 가상 돔과 새로운 가상 돔을 비교하여 변경 사항을 모은 후 실제 DOM에 반영함으로써 불필요한 DOM 조작을 줄이고 성능을 최적화할 수 있습니다.

## 가상 돔(Virtual DOM)의 동작 방식

`리액트(React)`에서 가상 돔이 동작하는 방식은 다음과 같습니다.

### createElement 함수와 렌더링

먼저 JSX로 작성된 리액트 컴포넌트가 브라우저에 렌더링될 때, JS 파일로 컴파일되고 런타임 시점에 `React.createElement` 함수 호출로 변환됩니다.

`createElement` 함수는 먼저 노드 타입을 확인하여, `div`, `span` 같은 문자열은 기본 HTML 요소로, 함수나 클래스는 사용자 정의 컴포넌트로 인식합니다. 이후 전달된 속성(Props)들을 파싱하여 노드에 필요한 속성을 설정합니다. 이후 자식 요소들을 재귀적으로 탐색하고 처리하여 노드 트리를 구성함으로써 ...

`createElement` 함수는 주어진 태그, 속성, 자식 요소들을 조합하여 새로운 가상 돔과 실제 DOM 노드를 생성합니다.

### Diff 알고리즘 적용 및 업데이트

### Reconciliation

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
