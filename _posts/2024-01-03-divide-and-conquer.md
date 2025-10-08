---
title: 분할 정복 (Divide and Conquer)
description: 분할 정복 (Divide and Conquer)에 대해 정리한 페이지입니다.
date: 2024-01-03 00:00:00 +/-TTTT
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

`분할 정복(Divide and Conquer)`에 대해 정리한 페이지입니다.

## 분할 정복 (Divide and Conquer)

### 개념

`분할 정복(Divide and Conquer)`은 가장 유명한 알고리즘 디자인 패러다임으로, 주어진 문제를 둘 이상의 부분 문제로 나눈 뒤 각 문제에 대한 답을 재귀 호출을 이용해 계산하고, 각 부분 문제의 답으로부터 전체 문제의 답을 계산해내는 방식을 의미합니다.

### 특징

분할 정복의 가장 큰 특징은 문제를 작게 쪼개서 쪼개기 전 문제를 해결할 때보다 더 쉽게 해결하여 문제의 답을 계산하는 것입니다. 분할 정복은 다음 3단계로 이루어집니다.

1. `분할(Divide)`

   문제를 동일하거나 유사한 작은 문제로 나눕니다. 보통 <b>재귀</b>를 사용하여 분할합니다.

2. `정복(Conquer)`

   나눈 하위 문제를 <b>재귀적</b>으로 해결하며, 하위 문제가 충분히 작아지면(=Base case) 바로 해결합니다.

3. `병합(Merge)`

   하위 문제들의 해답을 모아 전체 문제의 답을 계산합니다.

## Example

- <a href="https://www.acmicpc.net/problem/1106" target="_blank">1106번: 호텔</a>

  ```javascript
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = require("fs")
    .readFileSync(path, "utf-8")
    .toString()
    .split("\n");

  // C: 늘려야하는 고객의 수, 1 <= C <= 1_000
  // 1 <= N <= 20
  const [C, N] = input[0].split(" ").map(Number);
  const arr = [];
  const cache = Array.from({ length: N }, () => Array(C).fill(-1));

  for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(" ").map(Number));
  }

  arr.sort((a, b) => {
    return b[1] / b[0] - a[1] / a[0];
  });

  const solution = (index, count) => {
    if (count >= C) {
      return 0;
    } else if (index >= N) {
      return Number.MAX_SAFE_INTEGER;
    } else if (cache[index][count] !== -1) {
      return cache[index][count];
    }

    let result = solution(index + 1, count);

    for (let i = index; i < N; i++) {
      result = Math.min(
        result,
        arr[index][0] + solution(index, count + arr[index][1])
      );
    }

    cache[index][count] = result;
    return result;
  };

  console.log(solution(0, 0));
  ```

## 참고 자료

- <a href="https://namu.wiki/w/분할%20정복%20알고리즘?from=분할%20정복" target="_blank">분할 정복 알고리즘 - 나무위키</a>

===============
