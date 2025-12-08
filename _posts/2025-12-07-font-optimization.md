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

웹 성능에서 폰트는 이미지 다음으로 큰 리소스로, 웹 페이지 로딩 속도에 큰 영향을 미칩니다. 또한 폰트를 다운로드하면서 기본 폰트가 웹 폰트로 바뀌면서 `CLS(Cumulative Layout Shift)`가 증가하는 등의 문제가 발생합니다. 따라서 폰트 최적화는 로딩 속도, 레이아웃 이동, 사용자 경험 등 여러 측면에서 중요합니다.

### FOUT vs FOIT

`FOUT(Flash of Unstyled Text)`와 `FOIT(Flash of Invisible Text)`는 폰트 로딩 중 발생하는 시각적 현상입니다. `FOUT(Flash of Unstyled Text)`는 폰트의 다운로드 여부와 상관없이 먼저 텍스트를 보여준 후 폰트가 다운로드되면 그때 폰트를 적용하는 방식입니다. `FOIT(Flash of Invisible Text)`는 폰트가 완전히 다운로드되기 전까지 텍스트 자체를 숨기는 방식입니다.

CSS에서 `@font-face`의 `font-display` 속성을 활용하면 폰트가 적용되는 시점을 제어할 수 있습니다. `font-display` 속성에서 설정할 수 있는 값들을 정리하면 다음과 같습니다.

| font-display | 설명                                                                                                                                                                                                                                                                                |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auto         | `브라우저 기본 동작` / 초깃값으로 브라우저의 정책에 따라 로딩 전략을 결정합니다.                                                                                                                                                                                                    |
| block        | `FOIT (timeout = 3s)` / 폰트가 다운로드되기를 기다리다가 3초가 지나도 폰트가 다운로드되지 않으면 기본 폰트로 텍스트를 보여줍니다. 이후 폰트가 다운로드되면 해당 폰트로 교체합니다.                                                                                                  |
| swap         | `FOUT` / 폰트가 다운로드되기 전까지 기본 폰트로 텍스트를 보여주다가 폰트가 다운로드되면 해당 폰트로 교체합니다.                                                                                                                                                                     |
| fallback     | `FOIT (timeout = 0.1s)` / 폰트가 다운로드되기를 기다리다가 0.1초가 지나도 폰트가 다운로드되지 않으면 기본 폰트로 텍스트를 보여줍니다. 이후 3초가 지나도 폰트가 다운로드되지 않으면 기본 폰트로 유지합니다. 3초가 지난 후 다운로드를 완료한 경우 폰트를 적용하지 않고 캐시해 둡니다. |
| optional     | `FOIT (timeout = 0.1s)` / 폰트가 다운로드되기를 기다리다가 0.1초가 지나도 폰트가 다운로드되지 않으면 기본 폰트로 텍스트를 보여줍니다. 이후 사용자의 네트워크 상태에 따라 기본 폰트로 유지할지, 아니면 다운로드한 폰트를 적용할지 브라우저가 결정합니다.                             |

### WOFF2 & WOFF

### Subset Font

## 참고 자료

- <a href="https://www.yes24.com/Product/Goods/115209526" target="_blank">프론트엔드 성능 최적화 가이드 | 유동균 | 인사이트(insight) - 예스24</a>
- <a href="https://developer.mozilla.org/ko/docs/Web/CSS/Reference/At-rules/@font-face/font-display" target="_blank">font-display - CSS: Cascading Style Sheets | MDN</a>
- <a href="https://mong-blog.tistory.com/entry/CSS-font-display-%EA%B8%80%EA%BC%B4-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%B0%A9%EC%8B%9D%EC%9D%84-%EB%B3%80%EA%B2%BD%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95" target="_blank">[CSS] font-display, 글꼴 렌더링 방식을 변경하는 방법 :: Mong dev blog</a>
- <a href="https://codingeverybody.kr/css-font-display-%EC%86%8D%EC%84%B1/" target="_blank">CSS font-display 속성 – 올바른 이해와 사용 방법 - 코딩에브리바디</a>
