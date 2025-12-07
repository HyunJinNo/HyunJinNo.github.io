---
title: 폰트 최적화
description: 폰트 최적화 방법에 대해 정리한 페이지입니다.
date: 2025-12-07 00:00:00 +/-TTTT
categories: [Front-end]
tags: [react, nextjs, font]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br />
React, Next.js, Font</p></blockquote>

## 개요

폰트 최적화 방법에 대해 정리한 페이지입니다.

## 폰트 최적화 (Font Optimization)

### 중요성

TODO

### FOUT vs FOIT

`FOUT(Flash of Unstyled Text)`와 `FOIT(Flash of Invisible Text)`는 폰트 로딩 중 발생하는 시각적 현상입니다. `FOUT(Flash of Unstyled Text)`는 폰트의 다운로드 여부와 상관없이 먼저 텍스트를 보여준 후 폰트가 다운로드되면 그때 폰트를 적용하는 방식입니다. `FOIT(Flash of Invisible Text)`는 폰트가 완전히 다운로드되기 전까지 텍스트 자체를 숨기는 방식입니다.

CSS에서 `@font-face`의 `font-display` 속성을 활용하면 폰트가 적용되는 시점을 제어할 수 있습니다. `font-display` 속성에서 설정할 수 있는 값들을 정리하면 다음과 같습니다.

| font-display | 설명                  |
| ------------ | --------------------- |
| auto         | 브라우저 기본 동      |
| block        | FOIT                  |
| swap         | FOUT                  |
| fallback     | FOIT (timeout = 0.1s) |
| optional     | FOIT (timeout = 0.1s) |

### WOFF2 & WOFF

### Subset Font

## 참고 자료

- <a href="https://developer.mozilla.org/ko/docs/Web/CSS/Reference/At-rules/@font-face/font-display" target="_blank">font-display - CSS: Cascading Style Sheets | MDN</a>
- <a href="https://mong-blog.tistory.com/entry/CSS-font-display-%EA%B8%80%EA%BC%B4-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%B0%A9%EC%8B%9D%EC%9D%84-%EB%B3%80%EA%B2%BD%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95" target="_blank">[CSS] font-display, 글꼴 렌더링 방식을 변경하는 방법 :: Mong dev blog</a>
- <a href="https://codingeverybody.kr/css-font-display-%EC%86%8D%EC%84%B1/" target="_blank">CSS font-display 속성 – 올바른 이해와 사용 방법 - 코딩에브리바디</a>
