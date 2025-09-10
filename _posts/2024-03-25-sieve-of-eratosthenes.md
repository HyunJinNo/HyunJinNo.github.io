---
title: 에라토스테네스의 체 (Sieve of Eratosthenes)
description: 에라토스테네스의 체 (Sieve of Eratosthenes) 알고리즘에 대해 설명하는 페이지입니다.
date: 2024-03-25 00:00:00 +/-TTTT
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

## Introduction

- **Definition**
  - **에라토스테네스의 체(Sieve of Eratosthenes)** 는 주어진 수 n 이하의 모든 소수를 찾아내는데 자주 사용되는 방법이다.

## How to Use

1. 먼저 2부터 n까지의 수를 전부 한 목록에 쓴다.
2. 그 다음에 이 목록에서 지워지지 않은 수들을 순회하며 각 수의 배수를 지우는 과정을 반복한다. 이 때 지워지지 않은 수를 찾을 때 n이 아니라 sqrt(n)까지만 찾는다.
3. i의 배수들을 모두 지울 때 2 x i 에서 시작하는 것이 아니라 i x i 부터 시작하면 계산하는데 시간을 단축할 수 있다.
4. 이와 같은 과정을 반복하고 나면 결과적으로 남은 수들은 모두 소수가 된다.

```javascript
const n = 1001;
const isPrime = Array(n + 1).fill(true);
isPrime[0] = false; // 0은 소수가 아닙니다.
isPrime[1] = false; // 1은 소수가 아닙니다.

for (let i = 2; i * i <= n; i++) {
  // i가 소수인 경우, i의 배수를 모두 제거합니다.
  if (isPrime[i]) {
    for (let j = i * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }
}

/* ... */
```

## Examples

- <a href="https://github.com/HyunJinNo/Algorithm/blob/main/백준/Gold/11690.%E2%80%85LCM（1，%E2%80%852，%E2%80%85%EF%BC%8E%EF%BC%8E%EF%BC%8E，%E2%80%85n）/LCM（1，%E2%80%852，%E2%80%85%EF%BC%8E%EF%BC%8E%EF%BC%8E，%E2%80%85n）.js">LCM（1， 2， ．．．， n）.js</a>
- <a href="https://github.com/HyunJinNo/Algorithm/blob/main/Number%20Theory/Sieve%20of%20Eratosthenes/Sieve_of_Eratosthenes.js" target="_blank">비트마스크를 사용하는 에라토스테네스의 체</a>
