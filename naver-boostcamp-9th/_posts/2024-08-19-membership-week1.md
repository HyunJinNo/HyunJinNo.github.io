---
layout: post
title: 멤버십 1일차 학습 정리
description: >
  네이버 부스트캠프 9기 멤버십 1일차 학습 정리 페이지입니다.
image:
  path: /assets/img/naver-boostcamp-9th/naver-boostcamp-9th.jpg
  srcset:
    1060w: /assets/img/naver-boostcamp-9th/naver-boostcamp-9th.jpg
    530w: /assets/img/naver-boostcamp-9th/naver-boostcamp-9th.jpg
    265w: /assets/img/naver-boostcamp-9th/naver-boostcamp-9th.jpg
related_posts:
  - None
sitemap: true
comments: false
---

> - 누군가 작성한 것을 그대로 쓰는 것이 아니라 **나만의 언어로 재구조화하여 작성**해야 합니다.
> - 기술 키워드에 대한 상세 내용도 좋고, 미션 해결 과정에서 기능 구현을 성공한 사례도, 트러블 슈팅 경험도 좋습니다.

<h2> 목차 </h2>

- [학습한 내용](#학습한-내용)
  - [HTML](#html)
    - [개념](#개념)
    - [Hyper Text](#hyper-text)
    - [HTML의 요소 구조](#html의-요소-구조)
    - [HTML 문서 기본 구조](#html-문서-기본-구조)
  - [CSS](#css)
    - [개념](#개념-1)
    - [Cascading](#cascading)
    - [주요 개념](#주요-개념)
  - [Client-Side Rendering (CSR)](#client-side-rendering-csr)
  - [Server-Side Rendering (SSR)](#server-side-rendering-ssr)
- [참고 자료](#참고-자료)
- [Comments](#comments)

## 학습한 내용

### HTML

#### 개념

HTML이란 **H**yper **T**ext **M**arkup **L**anguage의 약어로 웹 페이지를 작성하는 데 사용되는 마크업 언어입니다. 웹 페이지의 구조와 내용을 정의하는 데 사용되며, 브라우저가 이 언어를 해석하여 사용자에게 웹 페이지를 보여줍니다.

#### Hyper Text

`하이퍼텍스트(Hyper Text)`란 순차적으로 하나씩 접근하는 기존의 문서와 달리, 링크에 따라 다른 페이지로 이동하거나 동일 페이지 내 다른 위치로 즉시 접근할 수 있는 텍스트를 말합니다.

#### HTML의 요소 구조

```html
<tag attributeName="attributeValue">Content</tag>
```

- `태그(Tag)`

  태그는 HTML 요소를 정의하는 부분으로, 대부분의 태그는 여는 태그와 닫는 태그로 이루어져 있습니다. 일부 태그는 내용없이 사용되며, 이 경우에는 닫는 태그 필요하지 않습니다.

- `속성(Attribute)`

  속성은 HTML 태그에 추가적인 정보를 제공하는 것을 말합니다. 속성은 보통 태그 안에 위치하며, 이름과 값으로 구성됩니다.

- `컨텐츠(Contents)`

  여는 태그와 닫는 태그에 들어가는 요소로, 텍스트나 다른 HTML 요소가 중첩될 수 있습니다.

#### HTML 문서 기본 구조

HTML 문서의 기본 구조는 다음과 같습니다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>제목</title>
  </head>
  <body>
    <h1>html 문서 내용</h1>
  </body>
</html>
```

- `<!DOCTYPE html>`

  해당 문서가 HTML5로 작성되었음을 선언하는 부분입니다.

- `<html>`

  HTML 문서의 시작과 끝을 나타냅니다.

- `<head>`

  메타데이터를 포함하여, 브라우저에 의해 사용자에게 직접 표시되지 않습니다. 보통 문서의 제목, 문자 인코딩, 그리고 CSS나 스크립트 파일의 참조가 포함됩니다.

- `<body>`

  사용자가 실제로 보게 될 컨텐츠가 들어가는 부분입니다. 텍스트, 이미지, 링크, 리스트, 테이블 등 다양한 요소를 포함할 수 있습니다.

### CSS

#### 개념

`CSS(Cascading Style Sheets)`란 HTML로 작성된 웹 페이지의 외관과 레이아웃을 꾸미기 위해 사용되는 스타일링 언어입니다. CSS는 웹 페이지의 색상, 글꼴, 여백, 위치, 크기 등을 정의하고, HTML의 구조와 컨텐츠로부터 디자인을 분리하여 유지 관리와 재사용을 용이하게 합니다.

#### Cascading

CSS의 `Cascading` 개념은 여러 스타일 규칙이 충돌할 때 어떤 규칙이 적용될지 결정하는 우선순위 체계를 의미합니다. 일반적으로 다음 순서로 우선순위가 적용됩니다.

`inline css > internal css > external css > browser default`

#### 주요 개념

### Client-Side Rendering (CSR)

### Server-Side Rendering (SSR)

## 참고 자료

- `HTML`
  - <a href="https://velog.io/@strivepdev/HTML%EC%9D%B4%EB%9E%80" target="_blank">HTML이란?</a>
  - <a href="https://namu.wiki/w/HTML" target="_blank">https://namu.wiki/w/HTML</a>
  - <a href="https://ko.wikipedia.org/wiki/%ED%95%98%EC%9D%B4%ED%8D%BC%ED%85%8D%EC%8A%A4%ED%8A%B8" target="_blank">하이퍼텍스트</a>
- `CSS`
  - <a href="https://www.w3schools.com/css/css_intro.asp" target="_blank">https://www.w3schools.com/css/css_intro.asp</a>

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
