---
title: 에라토스테네스의 체 (Sieve of Eratosthenes)
description: 에라토스테네스의 체 (Sieve of Eratosthenes) 알고리즘에 대해 정리한 페이지입니다.
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

## 개요

`에라토스테네스의 체(Sieve of Eratosthenes)` 알고리즘에 대해 정리한 페이지입니다.

## 에라토스테네스의 체 (Sieve of Eratosthenes) 알고리즘

### 개념

`에라토스테네스의 체(Sieve of Eratosthenes)` 알고리즘은 주어진 정수 `n` 이하의 모든 소수를 효율적으로 찾는 알고리즘입니다.

### 구현

에라토스테네스의 체 구현은 다음과 같은 과정으로 이루어집니다.

1. 먼저 2부터 n까지의 수를 전부 한 목록에 작성합니다.
2. 그 다음에 이 목록에서 지워지지 않은 수들을 순회하며 각 수의 배수를 지우는 과정을 반복합니다. 이 때 지워지지 않은 수를 찾을 때 `n`이 아니라 `sqrt(n) (i * i <= n)`까지만 찾습니다.
3. i의 배수들을 모두 지울 때 `2 x i` 에서 시작하는 것이 아니라 `i x i` 부터 시작하면 계산하는데 시간을 단축할 수 있습니다.
4. 이와 같은 과정을 반복하고 나면 결과적으로 남은 수들은 모두 소수가 됩니다.

예를 들어 `1000` 이하의 모든 소수를 구하는 방법은 다음과 같습니다.

<b>1. 먼저 2부터 n까지의 수를 전부 한 목록에 작성합니다.</b>

<blockquote class="prompt-tip"><p><strong><u>Tips</u></strong> <br />
<b>Array(n + 1)</b>이 아니라 <b>new Uint8Array(n + 1)</b>을 사용하면 약 8배 더 적은 메모리를 사용하도록 메모리 사용량을 줄일 수 있습니다. 다만 false를 저장하면 실제로는 0이, true를 저장하면 실제로는 1이 저장된다는 점을 주의해야 합니다.</p></blockquote>

```javascript
const n = 1000;
const isPrime = new Uint8Array(n + 1).fill(true);
isPrime[0] = false; // 0은 소수가 아닙니다.
isPrime[1] = false; // 1은 소수가 아닙니다.
```

<b>2. 그 다음에 이 목록에서 지워지지 않은 수들을 순회하며 각 수의 배수를 지우는 과정을 반복합니다. 이 때 지워지지 않은 수를 찾을 때 `n`이 아니라 `sqrt(n) (i * i <= n)`까지만 찾습니다.</b>

<blockquote class="prompt-tip"><p><strong><u>Tips</u></strong> <br />
<b>i <= n</b>이 아니라 <b>i * i <= n</b>까지만 확인하면 시간을 단축할 수 있습니다. 이는 작은 소수의 배수 제거 과정에서 이미 대부분의 합성수가 제거되기 때문입니다.</p></blockquote>

```javascript
/* ... */

for (let i = 2; i * i <= n; i++) {
  /* ... */
}
```

<b>3 ~ 4. i의 배수들을 모두 지울 때 `2 x i` 에서 시작하는 것이 아니라 `i x i` 부터 시작하면 계산하는데 시간을 단축할 수 있습니다. 이와 같은 과정을 반복하고 나면 결과적으로 남은 수들은 모두 소수가 됩니다.</b>

<blockquote class="prompt-tip"><p><strong><u>Tips</u></strong> <br />
i의 배수들을 모두 지울 때 <b>i</b>보다 작은 배수들은 이미 이전 단계에서 제거되었기 때문에 <b>j = i * i</b>부터 시작하면 계산하는데 시간을 단축할 수 있습니다.</p></blockquote>

```javascript
/* ... */

for (let i = 2; i * i <= n; i++) {
  // i가 소수인 경우, i의 배수를 모두 제거합니다.
  if (isPrime[i]) {
    for (let j = i * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }
}
```

최종 구현 결과는 다음과 같습니다.

```javascript
const n = 1000;
const isPrime = new Uint8Array(n + 1).fill(true);
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
```

## Example

- <a href="https://www.acmicpc.net/problem/11690" target="_blank">11690번: LCM(1, 2, ..., n)</a>

  ```javascript
  const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = require("fs").readFileSync(path).toString();

  let answer = 1;
  const n = Number(input); // 2 <= n <= 100_000_000
  const isPrime = new Uint8Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (!isPrime[i]) {
      continue;
    }

    let value = i;

    while (true) {
      if (value * i > n) {
        answer *= value;
        answer %= Math.pow(2, 32);
        break;
      }

      value *= i;
    }
  }

  console.log(answer);
  ```

## 참고 자료

- <a href="https://ko.wikipedia.org/wiki/에라토스테네스의_체" target="_blank">에라토스테네스의 체 - 위키백과, 우리 모두의 백과사전</a>
- <a href="https://namu.wiki/w/에라토스테네스의%20체" target="_blank">에라토스테네스의 체 - 나무위키</a>
