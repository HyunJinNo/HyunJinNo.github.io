---
title: 브라우저 렌더링 과정
description: 브라우저 렌더링 과정에 대해 정리한 페이지입니다.
date: 2025-02-13 00:00:00 +/-TTTT
categories: [Front-end]
tags: [rendering]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br> Rendering</p></blockquote>

## 개요

브라우저 렌더링 과정에 대해 정리한 페이지입니다.

## 브라우저 렌더링 과정

`브라우저 렌더링(Browser Rendring)`은 HTML, CSS, JavaScript 등의 웹 페이지 자원을 화면에 그리는 과정을 말합니다. 그리고 `브라우저 렌더링 과정(Browser Rendering Process)`은 웹 페이지를 사용자에게 보여주기 위해 거치는 일련의 과정으로 여러 단계로 구성됩니다. 브라우저 렌더링 과정은 <b>네트워크 요청 → HTML/CSS 파싱 → DOM/CSSOM 생성 → 렌더 트리 생성 → 레이아웃 계산 → 페인팅 → 합성</b>의 순서로 진행됩니다. 브라우저 렌더링 과정을 단계별로 설명하자면 다음과 같습니다.

### Step 1 - 네트워크 요청 및 리소스 로드

먼저 사용자가 주소창에 URL을 입력하면 브라우저는 URL을 IP 주소로 변환하기 위해 `DNS(Domain Name System)` 서버에 쿼리를 보냅니다. DNS 서버는 도메인 이름을 IP 주소로 변환하여 브라우저에 반환하고, 브라우저는 해당 IP 주소를 통해 서버에 HTTP/HTTPS 요청을 보냅니다. 요청을 받은 서버는 HTML 문서와 함께 CSS, JavaScript, 이미지 등 웹 페이지를 구성하는 모든 리소스를 클라이언트로 전달합니다.

<img src="/assets/img/front-end/browser-rendering-process/pic1.avif" alt="pic1" />

<img src="/assets/img/front-end/browser-rendering-process/pic2.avif" alt="pic2" />

### Step 2 - HTML 파싱 및 DOM 트리 생성

브라우저는 다운로드한 HTML 문서를 파싱하여 `DOM 트리`를 생성합니다. 이때, HTML 태그를 노드로 변환하고, 노드 간의 계층 관계를 형성합니다. 이 과정은 HTML 문서의 위에서 아래 방향으로 이루어집니다.

만약 HTML 파싱 중에 `async`나 `defer` 같은 설정이 되어있지 않은 `<script>` 태그를 만나는 경우 HTML 파싱을 일시 중단하고 자바스크립트를 실행하게 됩니다. 또한 외부 CSS 파일을 만나는 경우 `CSSOM` 생성 전까지 렌더링이 지연됩니다.

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br>
DOM은 <b>Document Object Model</b>으로 XML이나 HTML 문서에 접근하기 위한 인터페이스입니다. DOM은 자바스크립트로 접근하여 수정될 수 있습니다. <br />
<br />
<b>defer</b>: defer 속성을 사용하면 스크립트를 백그라운드에서 다운로드한 후 HTML 파싱이 완료된 후(모든 DOM이 로드된 후) 자바스크립트를 실행합니다. (DOMContentLoaded 이벤트가 발생하기 전에 실행됩니다.)<br />
<b>async</b>: async 속성을 사용하면 스크립트를 백그라운드에서 다운로드한 후 다운로드가 완료되면 즉시 실행합니다. (스크립트 실행 중에는 HTML 파싱이 일시 중지됩니다.)</p></blockquote>

### Step 3 - CSS 파싱 및 CSSOM 트리 생성

HTML 파싱과 `DOM 트리` 생성이 완료되면, 브라우저는 다운로드한 CSS 파일을 파싱하여 `CSSOM(CSS Object Model) 트리`를 생성합니다. 이때, CSS 속성을 노드로 변환하고 노드 간의 계층 관계를 형성합니다. 이 과정에서 브라우저는 CSS의 cascading 규칙에 따라 최종 스타일을 결정합니다.

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br>
<b>CSSOM(CSS Object Model)</b>은 CSS 객체 모델로 자바스크립트가 CSS를 동적으로 조작할 수 있게 해줍니다. HTML 대신 CSS가 대상인 DOM이라고 할 수 있습니다.</p></blockquote>

### Step 4 - 렌더 트리 생성

`DOM 트리`와 `CSSOM 트리`를 결합하여 `렌더 트리`를 생성합니다. 이때, 실제 화면에 표시될 요소만을 선택하여 `렌더 트리`를 형성합니다. 즉, `display: none` 속성이 적용된 요소는 `렌더 트리`에 포함되지 않습니다. 반면에 `visibility: hidden` 속성이 적용된 요소는 공간을 차지하므로 `렌더 트리`에 포함됩니다.

### Step 5 - 레이아웃/리플로우(Layout/Reflow)

`렌더 트리`가 생성되면 각 노드의 정확한 위치와 크기를 계산하는 레이아웃(또는 리플로우) 단계가 시작됩니다. 이 과정에서 `상대적 단위(%, em, rem 등)`를 실제 px 단위로 변환하며, 요소의 박스 모델(margin, border, padding, content)을 고려하여 최종 배치가 결정됩니다.

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br>
<b>박스 모델(Box Model)</b>은 모든 HTML 요소는 박스(Box) 형태의 영역으로 이루어져 있다는 개념입니다. 박스(Box)는 마진(margin), 테두리(border), 패딩(padding), 내용(content)로 구분됩니다.</p></blockquote>

### Step 6 - 페인팅(Painting)

브라우저는 계산된 레이아웃 정보를 바탕으로 각 요소를 실제 화면에 그리는 페인팅 단계를 실행합니다. 이 때, 각 요소의 배경, 테두리, 글자 등을 그리게 됩니다. 이 과정에서 브라우저는 성능 최적화를 위해 요소를 독립적인 `레이어(Layer)`로 분리하여 렌더링합니다. 이는 성능 저하를 초래할 수 있는 `레이아웃 스래싱(Layout Thrashing)`을 방지하기 위함입니다.

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br>
<b>레이아웃 스레싱(Layout Thrashing)</b>이란 웹 페이지에서 JavaScript가 <b>반복적으로 DOM을 읽고 쓰는 작업을 수행</b>할 때, 브라우저가 불필요하게 <b>레이아웃 계산을 여러 번 강제로 실행</b>하며 성능이 급격히 저하되는 현상을 말합니다.</p></blockquote>

### Step 7 - 합성(Composite)

이 단계에서는 여러 레이어(Layer)를 합성하여 최종 화면을 출력합니다. 이 때, GPU와 합성 스레드가 협력하여, 스크롤이나 애니메이션 시 부드러운 업데이트를 가능하게 합니다. `transform`, `opacity` 속성은 GPU 가속을 지원하며 별도 레이어에서 처리되어 리플로우를 일으키지 않고 애니메이션이 가능합니다.

### Step 8 - 리렌더링

리렌더링이 발생하면 `리플로우(Reflow)`와 `리페인트(Repaint)`가 발생합니다.

- `리플로우(Reflow)`

  웹 페이지 내에서 요소의 위치 또는 크기에 변화가 있는 경우, 즉 DOM이나 CSSOM에 변경이 발생하면, 영향을 받는 부분에 대해 다시 레이아웃 계산이 필요합니다. 이 경우, 변경된 부분에 대해 다시 렌더 트리를 구성하고 레이아웃 및 페인팅 단계, 합성도 다시 수행됩니다. 예를 들어, 요소의 크기, 위치, margin 등이 변경될 때 리플로우가 발생하며, 이 경우 페인팅과 합성도 다시 수행됩니다. width, height, padding, margin, border-width와 같은 크기 관련 속성, position, top, left와 같은 위치 관련 속성, display, flex 속성과 같은 레이아웃 관련 속성, font-size, font-weight와 같은 폰트 크기 관련 속성이 리플로우를 유발하는 속성입니다.

- `리페인트(Repaint)`

  레이아웃 변화 없이 색상, 배경 등 스타일만 변경되면 리페인트만 일어나며, 레이아웃 재계산없이 다시 화면을 그립니다. color, background-color와 같은 색상 관련 속성, border-color, border-radius와 같운 테두리 관련 속성이 리페인트를 유발하는 속성입니다.

<blockquote class="prompt-tip"><p><strong><u>Tips</u></strong><br>
리플로우와 리페인트는 웹 페이지가 렌더링되는 과정에서 발생하는 중요한 작업들로, 이 둘을 잘 관리하는 것이 성능 최적화에 도움이 됩니다.<br />
성능 최적화를 위한 방법으로는 다음 3가지를 고려할 수 있습니다.<br />
<br />

<b>- 리플로우를 유발하는 CSS 속성 사용 최소화하기</b><br />

width, height, margin, border, padding 등 리플로우를 유발하는 속성의 사용을 최소화하는 것이 좋습니다.<br />

<b>- CSS 애니메이션 최적화</b><br />

transform과 opacity 속성은 GPU 가속을 사용할 수 있어 리플로우를 일으키지 않고 리페인트만 발생시키므로 CPU 자원을 적게 사용합니다.<br />

<b>- will-change 속성 사용</b><br />

will-change 속성은 요소의 변화를 미리 브라우저에게 알려주어 브라우저가 GPU 가속을 활용하여 최적화하는 데 도움을 줍니다. 단, will-change 속성을 너무 많이 사용하면 오히려 성능이 저하될 수 있으므로 주의해야 합니다.

</p></blockquote>

## 참고 자료

- <a href="https://developer.mozilla.org/ko/docs/Web/Performance/How_browsers_work" target="_blank">웹페이지를 표시한다는 것: 브라우저는 어떻게 동작하는가 - 웹 성능 | MDN</a>
- <a href="https://f-lab.kr/insight/understanding-browser-rendering-process-20240711" target="_blank">브라우저 렌더링 과정 이해하기</a>
- <a href="https://jyostudy.tistory.com/207" target="_blank">주소창에 www.naver.com을 쳤을 때 일어나는 일</a>
- <a href="https://wormwlrm.github.io/2021/03/01/Async-Defer-Attributes-of-Script-Tag.html" target="_blank">스크립트의 실행 시점을 조절하는 Async와 Defer 속성 - 재그지그의 개발 블로그</a>
- <a href="https://poiemaweb.com/css3-box-model" target="_blank">CSS3 Box Model | PoiemaWeb</a>
- <a href="https://www.youtube.com/watch?v=HgEZ07U_OSc" target="_blank">프론트엔드 개발자 면접 단골 질문 6 | 리플로우와 리페인트</a>
- <a href="https://developer.mozilla.org/ko/docs/Web/CSS/will-change" target="_blank">will-change - CSS: Cascading Style Sheets | MDN</a>
