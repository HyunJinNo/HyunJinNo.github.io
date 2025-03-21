---
title: Euclidean Algorithm
description: 유클리드 알고리즘에 대해 설명하는 페이지입니다.
date: 2024-03-04 00:00:00 +/-TTTT
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
  - **유클리드 알고리즘(Euclidean Algorithm))** 은 두 수의 최대공약수를 구하는데 사용되는 방법입니다.
  - 유클리드 알고리즘은 두 수 a, b(a > b)의 공약수의 집합은 (a - b)와 b의 공약수 집합과 같다는 점을 이용합니다. 즉, a, b의 최대공약수 gcd(a, b)는 항상 (a - b)와 b의 최대공약수 gcd(a - b, b)와 같습니다.

## How to Use

### 최소 공배수

```java
// Java
int gcd(int a, int b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
```

```kotlin
// Kotlin
fun gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)
```

```javascript
/**
 * @param {number} a
 * @param {number} b
 */
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};
```

### 최대 공약수

```javascript
/**
 * @param {number} a
 * @param {number} b
 */
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

const a = 21;
const b = 15;

const lcm = (a * b) / gcd(Math.max(a, b), Math.min(a, b));
```

## Examples

- <a href="https://github.com/HyunJinNo/Algorithm/blob/main/Number%20Theory/Euclidean%20Algorithm/POTION.java" target="_blank">POTION</a>
- <a href="https://github.com/HyunJinNo/Algorithm/blob/main/%EB%B0%B1%EC%A4%80/Bronze%20I/2609.%E2%80%85%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98%EC%99%80%E2%80%85%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98/%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98%EC%99%80%E2%80%85%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98.kt" target="_blank">2609. 최대공약수와 최소공배수</a>
- <a href="https://www.acmicpc.net/problem/5347" target="_blank">5347번: LCM</a>
