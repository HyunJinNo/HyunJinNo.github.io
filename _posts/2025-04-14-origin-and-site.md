---
title: 출처와 사이트
description: 출처(Origin)와 사이트(Site)에 대해 정리한 페이지입니다.
date: 2025-04-14 15:02:00 +/-TTTT
categories: [Computer Science]
tags: [origin, site]
math: true
toc: true
pin: false
image:
  path: /assets/img/cs/study.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br>
Origin, Site</p></blockquote>

## 개요

`출처(Origin)`와 `사이트(Site)`에 대해 정리한 페이지입니다.

## 출처 (Origin)

### 출처의 개념

<b>`출처(Origin)`란 URL의 프로토콜(스키마)(Ex. http, https), 도메인(호스트), 포트 번호의 조합</b>으로 정의됩니다.

<img src="/assets/img/cs/origin-and-site/pic1.avif" alt="origin"/>

예를 들어, `https://www.example.com:443/account`의 출처는 `https://www.example.com:443`입니다. 또한 프로토콜, 도메인, 포트 번호가 모두 동일한 경우 `동일 출처(Same-Origin)`로 간주되고, 하나라도 다른 경우 `교차 출처(Cross-Origin)`로 간주됩니다. 예를 들어, `https://www.example.com`과 `https://www.example.com:443`은 동일 출처로 간주됩니다.(`https://www.example.com`의 포트 번호가 443번으로 생략되어 있음.) 반면에 `https://www.example.com`과 `http://www.example.com`는 프로토콜이 다르므로 교차 출처로 간주됩니다.

### 교차 출처와 동일 출처 예시

`https://www.example.com:443`를 기준으로 교차 출처와 동일 출처를 구분한 예시는 다음과 같습니다.

| URL                               | 출처      | 이유                                |
| --------------------------------- | --------- | ----------------------------------- |
| `http://www.example.com:443`      | 교차 출처 | 다른 프로토콜                       |
| `https://www.example2.com:443`    | 교차 출처 | 다른 도메인                         |
| `https://www.example.com:444`     | 교차 출처 | 다른 포트 번호                      |
| `https://example.com:443`         | 교차 출처 | 다른 도메인(하위 도메인)            |
| `https://api.example.com:443`     | 교차 출처 | 다른 도메인(하위 도메인)            |
| `https://www.example.com:443`     | 동일 출처 | 모두 일치                           |
| `https://www.example.com`         | 동일 출처 | 모두 일치(포트 번호 443번이 생략됨) |
| `https://www.example.com/account` | 동일 출처 | 모두 일치 (경로는 관련 없음)        |

## 사이트 (Site)

### 사이트의 개념

`사이트(Site)`란 도메인 이름의 `등록 가능한 도메인(Registrable Domain)` 부분을 의미합니다. 여기서 `등록 가능한 도메인`이란, <b>공개 접미사 목록의 항목</b>과 <b>바로 앞의 도메인 이름 부분</b>으로 구성됩니다.

<img src="/assets/img/cs/origin-and-site/pic2.avif" alt="site"/>

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br>
공개 접미사 목록은 다음 링크에서 확인하실 수 있습니다.<br />
<a href="https://publicsuffix.org/list/" target="_blank">공개 접미사 목록</a></p></blockquote>

<blockquote class="prompt-warning"><p><strong><u>Caution</u></strong><br>
<b>http://example.com</b>와 <b>https://example.com</b>처럼 프로토콜이 다른 경우 서버 설정에 따라 동일 사이트로 간주될 수도 있고, 교차 사이트로 간주될 수 있습니다. <b>2019년 말 이후로는 스키마(프로토콜)가 사이트에 포함됩니다.</b></p></blockquote>

예를 들어 `https://www.example.com`의 등록 가능한 도메인은 `example.com`입니다. 또힌 두 URL의 `등록 가능한 도메인`이 일치할 때 `동일 사이트(Same-Site)`로 간주되고, 다른 경우 `교차 사이트(Cross-Site)`로 간주됩니다. 예를 들어, `https://www.example.com`과 `https://api.example.com`은 동일 사이트로 간주됩니다. 반면에 `https://www.example.com`과 `http://www.example.co.kr`는 등록 가능한 도메인이 각각 `example.com`과 `example.co.kr`이므로 교차 사이트로 간주됩니다.

### 교차 사이트와 동일 사이트 예시

`https://www.example.com`를 기준으로 교차 사이트와 동일 사이트를 구분한 예시는 다음과 같습니다.

| URL                           | 사이트                       | 이유                                                          |
| ----------------------------- | ---------------------------- | ------------------------------------------------------------- |
| `https://www.example.co.kr`   | 교차 사이트                  |                                                               |
| `https://www.example2.com`    | 교차 사이트                  | 다른 도메인                                                   |
| `https://www.example.com`     | 동일 사이트                  | 모두 일치                                                     |
| `https://www.example.com:444` | 동일 사이트                  | 모두 일치(포트 번호는 관련 없음)                              |
| `https://api.example.com`     | 동일 사이트                  | 모두 일치(하위 도메인이 다른 것은 관련 없음)                  |
| `http://www.example.com`      | 교차 사이트 또는 동일 사이트 | 스키마가 포함되면 교차 사이트, 포함되지 않는 경우 동일 사이트 |

## 참고 자료

- `Origin`
  - <a href="https://web.dev/articles/same-site-same-origin?hl=ko" target="_blank">&apos;동일 사이트&apos; 및 &apos;동일 출처&apos; &nbsp;|&nbsp; Articles &nbsp;|&nbsp; web.dev</a>
  - <a href="https://developer.mozilla.org/ko/docs/Glossary/Origin" target="_blank">출처 - MDN Web Docs 용어 사전: 웹 용어 정의 | MDN</a>
  - <a href="https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy" target="_blank">동일 출처 정책 - 웹 보안 | MDN</a>
- `Site`
  - <a href="https://developer.mozilla.org/ko/docs/Glossary/Site" target="_blank">사이트 (Site) - MDN Web Docs 용어 사전: 웹 용어 정의 | MDN</a>
