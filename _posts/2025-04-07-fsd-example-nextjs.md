---
title: "[개발 기록] Next.js 프로젝트에 FSD 아키텍처 적용하기"
description: Next.js 프로젝트에서 FSD 아키텍처를 적용하면서 경험한 내용에 대해 정리한 페이지입니다.
date: 2025-04-07 10:19:00 +/-TTTT
categories: [Front-end]
tags: [react, nextjs, fsd, development-history, typescript]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br>
React, Next.js, FSD, Development History, TypeScript</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong><br />
Next.js v15.2.2</p></blockquote>

## 개요

Next.js 프로젝트에서 FSD 아키텍처를 적용하면서 경험한 내용에 대해 정리한 페이지입니다.

## FSD 아키텍처 적용 전

FSD 아키텍처 적용 전에는 다음과 같은 프론트엔드 아키텍처 구조를 채택하였습니다.

<img src="/assets/img/front-end/fsd-example-nextjs/pic1.jpg" alt="FSD 아키텍처 적용 전 폴더 구조" />

위의 아키텍처 구조는 page 단위로 구분한 것으로 특정 페이지에서 사용하는 컴포넌트를 빠르게 찾을 수 있었습니다. 하지만 해당 폴더 구조는 특정 기능과 관련된 코드들이 너무 광범위하게 흩어져 있어서 기능을 수정하는 등 코드를 유지보수하기가 어려웠습니다. 특히 프로젝트 규모가 커지면서 공통 컴포넌트가 많아지다 보니 공통 컴포넌트를 관리하는 데 어려움을 겪었습니다. 따라서 기존의 아키텍처 구조를 변경하여 코드를 유지보수하기 쉽도록 개선할 필요성을 느꼈습니다. 이와 같은 상황에서 FSD 아키텍처를 적용하여 애플리케이션을 독립적인 비즈니스 기능 단위로 분할하면 유지보수하기 쉽다고 판단하여 아래와 같이 FSD 아키텍처를 적용하기로 결정하였습니다.

## FSD 아키텍처 적용하기

FSD 아키텍처는 다음과 같은 계층 구조를 갖습니다.

<img src="/assets/img/front-end/fsd-example-nextjs/pic2.avif" alt="FSD 아키텍처의 계층 구조" />

`Next.js(App Router)`에서 FSD 아키텍처를 적용하려고 할 때 발생할 수 있는 문제점으로 FSD 아키텍처의 `app` 레이어와 Next.js의 `app` 폴더와의 충돌 문제가 있습니다. `Next.js(App Router)`에서는 `app` 폴더를 통해 라우팅을 처리하지만, FSD 아키텍처에서 `app` 레이어는 애플리케이션 초기화, 라우팅, 전역 상태 관리 등을 담당하는 레이어입니다. 또한 `App Router`를 사용하더라도 `src` 폴더 내에 `pages` 폴더는 `Pages Router`를 사용하는 것으로 처리됩니다. 따라서 FSD 아키텍처에서 `pages` 폴더를 사용할 수 없습니다.

이 문제를 해결하기 위해 다음 2가지 해결 방법을 생각하였습니다.

1. FSD 아키텍처에서 사용하는 `pages` 레이어 이름을 `views`로 변경하는 것
2. Next.js의 app 폴더가 라우팅을 처리하므로 `pages` 레이어를 사용하지 않고 `app` 레이어가 `pages` 레이어의 역할까지 처리하도록 맡기는 것

위의 2가지 해결 방법 중에서 저는 2번을 선택하였습니다. `Next.js(App Router)`에서 app 폴더 내에 `page.tsx` 파일을 생성하여 페이지를 생성하므로 FSD 아키텍처에서 URL 경로에 매핑되는 페이지 컴포넌트를 관리하는 레이어인 `pages` 레이어를 사용할 필요가 없다고 생각하였습니다.

따라서 다음과 같은 폴더 구조를 채택하였습니다.

<img src="/assets/img/front-end/fsd-example-nextjs/pic3.jpg" alt="FSD 아키텍처 적용 후 폴더 구조" />

각 레이어 구현 방식에 대해 설명하자면 아래와 같습니다.

### shared

`shared` 레이어는 <b>어떤 기능에도 속하지 않는, 애플리케이션 전반에 걸쳐 재사용되는 요소를 관리하는 레이어</b>입니다. `app` 레이어와 마찬가지로 슬라이스를 포함하지 않으며, 공통적으로 사용되는 유틸리티 함수, 공통 UI 컴포넌트, 커스텀 훅, 상수 등을 포함합니다.

### entities

### features

### widgets

### app

## FSD 아키텍처 적용 후

## 참고 자료

- <a href="https://github.com/TripInfoWeb/solitour-frontend" target="_blank">https://github.com/TripInfoWeb/solitour-frontend</a>
- <a href="https://nextjs.org/docs#app-router-vs-pages-router" target="_blank">Introduction | Next.js</a>
- <a href="https://feature-sliced.github.io/documentation/kr/docs/guides/tech/with-nextjs" target="_blank">NextJS와 함께 사용하기 | Feature-Sliced Design</a>
- <a href="https://23life.tistory.com/entry/nextjs%EC%97%90-FSD-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0-%ED%8C%A8%ED%84%B4-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0" target="_blank">next.js에 FSD 폴더 구조 패턴 적용하기</a>
