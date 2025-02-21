---
title: HTML img 태그 vs CSS background-image 속성
description: HTML img 태그와 CSS background-image 속성을 비교한 내용을 정리한 페이지입니다.
date: 2025-02-21 23:06:00 +0900
categories: [Front-end]
tags: [html, css, image]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br>
HTML, CSS, Image</p></blockquote>

## 개요

HTML `img` 태그와 CSS `background-image` 속성을 비교한 내용을 정리한 페이지입니다.

## HTML img 태그 vs CSS background-image 속성

```html
<img src="background-image.jpg" alt="background-image.jpg" />
```

```css
.sidebar {
  background-image: url("background-image.jpg");
}
```

HTML의 `img` 태그와 CSS의 `background-image`는 둘 다 이미지를 화면에 표시한다는 점에서 공통점이 있지만, 사용 목적과 특성에서 큰 차이가 있습니다. 이 둘을 서로 비교하면 다음과 같습니다.

### HTML img 태그

- <b>이미지가 문서 내 중요한 정보나 콘텐츠일 때 사용합니다.</b>
- <b>`alt` 속성은 검색 엔진이 이미지 내용을 이해하는 데 도움을 주므로 검색 엔진 최적화(SEO)에 유리합니다.</b>
- <b>`img` 태그는 HTML이 파싱되는 동안 바로 이미지 요청이 시작되므로 초기 렌더링 측면에서 성능이 좋습니다.</b>
- <b>`Lazy Loading(loading="lazy")`으로 성능 최적화가 가능합니다.</b>
- HTML 구조에 포함되어 이미지의 크기나 위치가 레이아웃에 직접 영향을 미칩니다.
- 이미지 로딩 실패 시 또는 스크린 리더에서 대체 텍스트(alt)로 내용을 전달할 수 있어 접근성이 좋습니다.
- 반응형 이미지를 위해 `width`, `height`, `srcset`, `sizes` 속성 등을 사용할 수 있습니다.
- 기본적으로 이미지의 원본 비율을 유지하지만, CSS로 추가 조절이 가능합니다.
- 마우스 우클릭 시 이미지로 인식할 수 있으며 검색 기능을 활용할 수 있습니다.

  <img src="/assets/img/front-end/img-vs-background-image/pic1.avif" alt="HTML img 태그로 이미지를 사용하는 경우 마우스 우클릭 시 이미지를 인식할 수 있으며 검색 기능을 활용할 수 있습니다." style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

### CSS background-image 속성

- <b>페이지의 디자인 요소나 배경으로 사용하며, 콘텐츠의 핵심 정보와 직접적인 관련이 없을 때 사용합니다.</b>
- <b>SEO에 거의 기여하지 않습니다.</b>
- <b>여러 이미지를 하나의 스프라이트(Sprite)로 관리해 성능을 최적화할 수 있습니다.</b>
- 요소의 배경으로 적용되므로, 콘텐츠와 분리된 디자인 레이어로 다룰 수 있습니다.
- 일반적으로 CSS와 함께 로드되므로, 초기 렌더링 차단 가능성이 낮습니다.
- 렌더링 지연이 발생할 수 있습니다.
- `background-size`, `background-position`, `background-repeat` 등의 속성을 통해 이미지의 표시 방식을 세밀하게 제어할 수 있습니다.
- 여러 이미지를 중첩하거나, 그라데이션과 결합하는 등 복잡한 시각적 효과 구현에 유용합니다.
- alt 속성이 없기 때문에 이미지 로딩에 실패하면 사용자에게 별도의 안내가 제공되지 않으며 빈 공간으로 표시됩니다.
- 검색 엔진이 배경 이미지를 별도로 인식하지 않습니다. 이와 더불어 마우스 우클릭 시 이미지로 인식하지 못합니다.

  <img src="/assets/img/front-end/img-vs-background-image/pic2.avif" alt="CSS background-image 속성으로 이미지를 사용하는 경우 마우스 우클릭 시 이미지로 인식하지 못합니다." style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

### img 태그를 사용하는 경우

HTML `img` 태그를 사용하는 경우는 다음과 같습니다.

- <b>이미지가 콘텐츠의 핵심 정보를 전달할 때</b> (Ex. 제품 사진, 다이어그램 등)
- <b>접근성과 SEO가 중요할 때</b>
- 이미지 로딩 실패 시 대체 텍스트(alt)가 필요할 때
- 이미지에 상호작용(Ex. 클릭, 확대 등)이 필요할 때
- 웹 페이지 성능을 높이고 싶을 때

### background-image 속성을 사용하는 경우

CSS `background-image` 속성을 사용하는 경우는 다음과 같습니다.

- <b>단순한 장식 효과나 디자인 요소로 사용할 때</b>
- 이미지가 콘텐츠에 영향을 주지 않아도 되는 경우 (Ex. 배경 패턴, 버튼 hover 효과)
- 여러 이미지를 하나의 스프라이트(Sprite)로 관리해 성능 최적화를 도모할 때
- 이미지 위에 텍스트 또는 다른 요소를 오버레이해야 할 때
- 반응형 배경을 유연하게 제어해야 할 때

## 성능 비교

HTML `img` 태그는 HTML이 파싱되는 동안 이미지 요청이 이루어집니다. `img` 태그는 HTML의 일부로서, 브라우저가 초기 렌더링 시 우선적으로 처리하며, 특히 `src` 속성이 명시된 이미지는 렌더링 블로킹 리소스로 간주되어 빠르게 로드됩니다. 반면에 CSS `background-image` 속성은 CSS 파싱 후에 요청이 이루어지므로 브라우저가 초기 렌더링 시 우선순위를 낮게 설정합니다. 따라서 초기 렌더링 측면에서 `img` 태그가 `background-image` 속성보다 성능이 좋습니다.
이와 관련해서 성능을 비교한 예시는 다음과 같습니다.

### CSS background-image 속성을 사용할 때

먼저 저의 블로그의 왼쪽 사이드바의 이미지를 CSS `background-image` 속성을 사용하여 지정한 결과입니다.

<img src="/assets/img/front-end/img-vs-background-image/pic3.avif" alt="CSS background-image 속성으로 왼쪽 사이드바에 배경 이미지를 넣은 경우" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<img src="/assets/img/front-end/img-vs-background-image/pic4.avif" alt="Lighthouse 기준 성능이 76점." style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

위의 사진을 보면 알 수 있듯이 `Lighthouse` 기준으로 성능이 76점이 나왔습니다. 이는 아래 사진을 보면 알 수 있듯이 왼쪽 사이드바에서 사용한 이미지의 로딩 시간이 오래 걸렸기 때문입니다.

<img src="/assets/img/front-end/img-vs-background-image/pic5.avif" alt="3.8초의 LCP" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<img src="/assets/img/front-end/img-vs-background-image/pic6.avif" alt="이미지 로딩 시간이 긴 편입니다." style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

### HTML img 태그를 사용할 때

초기 로딩 속도를 개선하기 위해 `background-image` 속성 대신 `img` 태그를 사용한 결과 다음과 같이 성능이 향상됨을 확인할 수 있습니다.

```html
<!-- The Side Bar -->

<aside
  aria-label="Sidebar"
  id="sidebar"
  class="d-flex flex-column align-items-end"
>
  <img
    class="sidebar-background"
    src="/assets/img/background/background.avif"
    alt="background"
  />

  <!-- (...생략) -->
</aside>
<!-- #sidebar -->
```

```css
.sidebar-background {
  position: absolute;
  z-index: -1;
  height: 100%;
  object-fit: cover;
}
```

<img src="/assets/img/front-end/img-vs-background-image/pic7.avif" alt="Lighthouse 기준 성능이 98점." style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

## 참고 자료

- <a href="https://velog.io/@leesegho/htmlimg%ED%83%9C%EA%B7%B8%EC%99%80-css-background-image%EC%9D%98-%EC%B0%A8%EC%9D%B4" target="_blank">html img 태그와 css background-image의 차이</a>
- <a href="https://daco2020.tistory.com/54" target="_blank">img 태그 와 {background-image} 의 차이를 알고 싶어?</a>
- <a href="https://stackoverflow.com/questions/492809/when-to-use-img-vs-css-background-image" target="_blank">html - When to use IMG vs. CSS background-image? - Stack Overflow</a>
