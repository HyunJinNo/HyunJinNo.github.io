---
layout: post
title: 브라우저 렌더링 과정
description: >
  브라우저 렌더링 과정에 대해 정리한 페이지입니다.
image:
  path: /assets/img/cs/study.jpg
related_posts:
  - None
sitemap: true
comments: false
---

<i>last modified at: 2025. 02. 13.</i>

<h2>목차</h2>

## 개요

<hr />

브라우저 렌더링 과정에 대해 정리한 페이지입니다.

## 브라우저 렌더링 과정

<hr />

`브라우저 렌더링(Browser Rendring)`은 HTML, CSS, JavaScript 등의 웹 페이지 자원을 화면에 그리는 과정을 말합니다. 그리고 `브라우저 렌더링 과정(Browser Rendering Process)`은 웹 페이지를 사용자에게 보여주기 위해 거치는 일련의 과정으로 여러 단계로 구성됩니다. 브라우저 렌더링 과정을 단계별로 설명하자면 다음과 같습니다.

### Step 1 - 네트워크 요청 및 리소스 로드

먼저 사용자가 주소창에 URL을 입력하면 브라우저는 URL을 IP 주소로 변환하기 위해 `DNS(Domain Name System)` 서버에 쿼리를 보냅니다. DNS 서버는 도메인 이름을 IP 주소로 변환하여 브라우저에 반환하고, 브라우저는 해당 IP 주소를 통해 서버에 HTTP/HTTPS 요청을 보냅니다. 요청을 받은 서버는 HTML 문서와 함께 CSS, JavaSCript, 이미지 등 웹 페이지를 구성하는 모든 리소스를 클라이언트로 전달합니다.

### Step 2 - HTML 파싱 및 DOM 트리 생성

// TODO

먼저 DOM을 생성합니다. 브라우저는 HTML 문서를 파싱하여 DOM 트리를 생성합니다. 이때, HTML 태그를 노드로 변환하고, 노드 간의 계층 관계를 형성합니다.

### Step 3 - CSS 파싱 및 CSSOM 트리 생성

두 번째로 CSSOM(CSS Object Model)을 생성합니다. 브라우저는 CSS 파일을 파싱하여 CSSOM 트리를 생성합니다. 이때, CSS 속성을 노드로 변환하고, 노드 간의 계층 관계를 형성합니다.

### Step 4 - 렌더 트리 생성

세 번째로 DOM 트리와 CSSOM을 결합하여 렌더 트리를 생성합니다. 이때, 실제 화면에 표시될 요소만을 선택하여 렌더 트리를 형성합니다.

### Step 5 - 리플로우(Reflow)

### Step 6 - 페인팅(Painting)

## TODO

이제, 브라우저는 렌더 트리를 이용하여 각 요소의 크기와 위치를 계산하는 과정인 레이아웃을 거쳐, 화면에 요소를 그리는 페인팅 과정을 거치게 됩니다. 이때, 요소의 배경, 테두리, 글자 등을 그리게 됩니다.

(참고)
DOM은 **Document Object Model**으로 XML이나 HTML 문서에 접근하기 위한 인터페이스입니다. DOM은 자바스크립트로 접근하여 수정될 수 있습니다. **CSSOM(CSS Object Model)**은 CSS 객체 모델로 자바스크립트가 CSS를 동적으로 조작할 수 있게 해줍니다. HTML 대신 CSS가 대상인 DOM이라고 할 수 있습니다.

</aside>

## 참고 자료

<hr />

- <a href="https://developer.mozilla.org/ko/docs/Web/Performance/How_browsers_work" target="_blank">웹페이지를 표시한다는 것: 브라우저는 어떻게 동작하는가 - 웹 성능 | MDN</a>

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
