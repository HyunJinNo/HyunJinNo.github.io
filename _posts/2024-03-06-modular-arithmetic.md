---
title: 모듈러 연산 (Modular Arithmetic)
description: 모듈러 연산 (Modular Arithmetic)에 대해 정리한 페이지입니다.
date: 2024-03-06 00:00:00 +/-TTTT
categories: [Algorithms]
tags: [algorithm]
math: true
toc: true
pin: false
image:
  path: /assets/img/algorithms/computer.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br />
Algorithm</p></blockquote>

## 개요

`모듈러 연산(Modular Arithmetic)`에 대해 정리한 페이지입니다.

## 모듈러 연산 (Modular Arithmetic)

### 개념

`모듈러 연산` 또는 `모듈러 산술`은 수학에서 나머지를 다루는 산술 체계를 의미합니다. 정수 `a`를 정수 `m`으로 나눈 나머지를 `a mod m`으로 표현합니다.

### 모듈러 연산의 성질

모듈러 연산의 주요 성질들은 다음과 같습니다.

#### 덧셈

$(a+b)\,mod\;m=[(a\,mod\;m)+(b\,mod\;m)]\,mod\;m$

#### 뺄셈

$(a−b)\,mod\;m=[(a\,mod\;m)−(b\,mod\;m)]\,mod\;m$

#### 곱셈

$(a*b)\,mod\;m=[(a\,mod\;m)*(b\,mod\;m)]\,mod\;m$

### 거듭제곱

$(aᵇ)\,mod\;m=((a\,mod\;m)ᵇ)\,mod\;m$

### 모듈러 역원을 이용한 나눗셈

모듈러 연산에서는 $(a/b)\,mod\;m$을 직접 구할 수 없습니다. 대신 b의 `곱셈 역원(Multiplicative inverse)`를 곱하는 방식으로 계산할 수 있습니다.

$(a/b)\,mod\;m=(a*b⁻¹)\,mod\;m$

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong> <br />
<b>모듈러 역원(Modular Inverse)</b>: 정수 a와 m에 대해 <b>(a * x) mod m = 1</b>을 만족하는 정수 x를 a의 모듈러 역원이라고 합니다. 예를 들어 정수 a가 3이고 m이 11일 때 (3 * 4) mod 11 = 1이므로 3의 모듈러 역원은 4입니다. <br />
</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong> <br />
b의 곱셈 역원은 항상 존재하는 것이 아니라, <b>b와 m이 서로소</b>일 때만 존재합니다. 다만 출제되는 대부분의 알고리즘 문제에서는 m이 <b>소수</b>인 경우가 많습니다.</p></blockquote>

모듈러 역원은 주로 TODO

## Example

- TODO

## 참고 자료

- <a href="https://ko.wikipedia.org/wiki/모듈러_산술" target="_blank">모듈러 산술 - 위키백과, 우리 모두의 백과사전</a>
- <a href="https://namu.wiki/w/합동식" target="_blank">합동식 - 나무위키</a>
- <a href="https://developer-mac.tistory.com/84" target="_blank">모듈러 연산 (Modular arithmetic)</a>
- <a href="https://namu.wiki/w/모듈러%20역원" target="_blank">모듈러 역원 - 나무위키</a>
