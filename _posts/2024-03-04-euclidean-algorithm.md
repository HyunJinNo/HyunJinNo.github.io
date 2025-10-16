---
title: 유클리드 (Euclidean) Algorithm
description: 유클리드 (Euclidean) 알고리즘에 대해 정리한 페이지입니다.
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

## 개요

`유클리드(Euclidean)` 알고리즘에 대해 정리한 페이지입니다.

## 유클리드 (Euclidean) 알고리즘

### 개념

`유클리드(Euclidean)` 알고리즘은 두 수의 `최대공약수(Greatest Common Divisor, GCD)`를 구하는데 사용되는 알고리즘입니다. 유클리드 알고리즘은 두 자연수 `a`, `b`(`a > b`)에 대해 `a`와 `b`의 최대공약수는 `b`와 `a % b`의 최대공약수과 같다는 점을 이용합니다. 즉, `GCD(a, b)= GCD(b, a % b)`라는 식이 성립하며, 나머지 `b`가 0이 될 때까지 반복하여 최대공약수를 구하게 됩니다.

### 구현

#### 최대공약수 (Greatest Commmon Divisor, GCD)

```java
int gcd(int a, int b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
```

```kotlin
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

const a = 21;
const b = 15;

console.log(gcd(Math.max(a, b), Math.min(a, b))); // 3
```

#### 최소공배수 (Least Common Multiple, LCM)

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
console.log(lcm); // 105
```

## Example

- <a href="https://www.acmicpc.net/problem/9613" target="_blank">9613번: GCD 합</a>

  ```javascript
  const path =
    process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
  const input = require("fs").readFileSync(path).toString().split("\n");
  const t = Number(input[0]); // 테스트 케이스의 수, 1 <= t <= 100

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

  for (let i = 1; i <= t; i++) {
    const temp = input[i].split(" ").map(Number);
    const [n, arr] = [temp[0], temp.slice(1)];
    let result = 0;

    for (let j = 0; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        result += gcd(arr[j], arr[k]);
      }
    }

    console.log(result);
  }
  ```

## 참고 자료

- <a href="https://namu.wiki/w/유클리드%20호제법" target="_blank">유클리드 호제법 - 나무위키</a>
