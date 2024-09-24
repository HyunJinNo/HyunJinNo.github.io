---
layout: post
title: VSCode에서 Prettier와 ESLint 설정 방법
description: >
  VSCode에서 Prettier와 ESLint 설정 방법에 대해 설명하는 페이지입니다.
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

<i>Environment</i>

- <i>eslint v9.11.0</i>

<h2>목차</h2>

- [개요](#개요)
- [Prettier란?](#prettier란)
- [ESLint란?](#eslint란)
- [Step 1 - VSCode Extensions](#step-1---vscode-extensions)
- [Step 2 - Prettier 설정하기](#step-2---prettier-설정하기)
  - [.prettierrc 파일 생성하기](#prettierrc-파일-생성하기)
  - [Editor: Format On Save](#editor-format-on-save)
- [Step 3 - ESLint 설정하기](#step-3---eslint-설정하기)
  - [.eslint.config.mjs 파일 생성하기](#eslintconfigmjs-파일-생성하기)
- [참고 자료](#참고-자료)
- [Comments](#comments)

## 개요

이번 글에서는 VSCode에서 Prettier와 ESLint 설정 방법에 대해 설명하겠습니다.

## Prettier란?

`Prettier`란 코드의 포맷을 자동으로 정리해주는 `코드 포맷터(Code Formatter)`입니다. JavaScript, TypeScript, HTML 등 다양한 프로그래밍 언어를 지원하며, Prettier를 사용하면 일관된 코드 스타일을 유지할 수 있습니다. 이를 통해 팀으로 협업하는 데 있어서 코드 스타일을 통일할 수 있다는 장점이 있습니다.

## ESLint란?

`ESLint`란 JavaScript와 TypeScript 코드에서 문법 오류나 잠재적 문제를 식별하거나, 코드 스타일 규칙을 통일하는데 사용하는 도구입니다. ESLint를 사용하면 코드 품질을 높이고 일관된 코드 스타일을 유지할 수 있습니다. 주로 버그를 예방하거나, 유지 보수를 쉽게 하기 위해 사용합니다.

## Step 1 - VSCode Extensions

먼저 다음과 같이 VSCode에서 Extensions 탭을 클릭하여 `Prettier - Code formatter`와 `ESLint`를 검색하여 설치합니다.

<img src="/assets/img/front-end/prettier-eslint/pic1.png" alt="pic1" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<img src="/assets/img/front-end/prettier-eslint/pic1.png" alt="pic1" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

## Step 2 - Prettier 설정하기

### .prettierrc 파일 생성하기

<a href="https://prettier.io/docs/en/options" target="_blank">https://prettier.io/docs/en/options</a>

### Editor: Format On Save

## Step 3 - ESLint 설정하기

### .eslint.config.mjs 파일 생성하기

## 참고 자료

- <a href="https://prettier.io/" target="_blank">Prettier · Opinionated Code Formatter</a>

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
