---
title: 동적 계획법 (Dynamic Programming)
description: 동적 계획법 (Dynamic Programming)에 대해 정리한 페이지입니다.
date: 2024-01-06 00:00:00 +/-TTTT
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

`동적 계획법(Dynamic Programming)`에 대해 정리한 페이지입니다.

## 동적 계획법 (Dynamic Programming, DP)

### 개념

`동적 계획법(Dynamic Programming)`은 처음 주어진 문제를 더 작은 부분 문제들로 나눈 뒤 각 부분 문제의 답들로부터 원래 문제에 대한 답을 계산하는 알고리즘 기법입니다. 기본적으로 동적 계획법의 접근 방식은 주어진 문제를 부분 문제로 나눈 뒤 각 문제에 대한 답을 계산하고, 각 부분 문제의 답으로부터 전체 문제의 답을 계산해낸다는 점에서 <a href="../divide-and-conquer">분할 정복</a>과 비슷합니다. 하지만 동적 계획법은 분할 정복과 달리 중복되는 부분 문제가 존재하고, 해당 부분 문제의 결과를 재활용하여 중복 계산을 제거해 시간을 단축한다는 점에서 분할 정복과 차이점이 있습니다. 즉, 동적 계획법은 <b>"분할 정복 + 메모이제이션(Memoization)"</b>이라고 볼 수 있습니다.

### 특징

동적 계획법의 특징은 다음과 같습니다.

- `중복되는 부분 문제(Overlapping Subproblems)`

  큰 문제를 작은 부분 문제들로 나누어 해결하는 과정에서 같은 부분 문제가 여러 번 등장합니다. 예를 들어, 피보나치 수열(F(n) = F(n - 1) + F(n - 2))에서 `F(5)`를 구할 때 `F(4)`와 `F(3)`이 필요하고, `F(4)`를 구할 때 `F(3)`과 `F(2)`가 필요하므로 `F(3)`이라는 중복되는 부분 문제가 존재합니다.

- `메모이제이션(Memoization)`

  중복되는 부분 문제를 해결할 때 부분 문제의 결과를 저장하여 이후 같은 부분 문제를 해결할 때 이미 계산한 값을 재활용하여 중복 계산을 제거하는 특징이 있습니다. 이미 계산한 값을 저장해두는 메모리 공간이 존재하며, 이를 `캐시(Cache)`라고 합니다.

- `최적 부분 구조(Optimal Substructure)`

  큰 문제의 최적해를 구할 때 작은 부분 문제들의 최적해로부터 구할 수 있어야 동적 계획법을 적용할 수 있습니다. 예를 들어 A → B → C로 진행되는 최단 경로 문제에서 A → B의 최적해와 B → C의 최적해로부터 A → B → C의 최적해를 구할 수 있으므로 동적 계획법을 적용할 수 있습니다.

  <blockquote class="prompt-info"><p><strong><u>Info.</u></strong> <br />
  <b>최적 부분 구조(Optimal Substructure)</b>: 큰 문제의 최적해를 작은 부분 문제들의 최적해로부터 구할 수 있는 성질</p></blockquote>

- `점화식`

  동적 계획법의 핵심은 작은 부분 문제의 해를 이용해 큰 문제의 해를 구하는 것이기 때문에 점화식이 필수적으로 존재합니다. 예를 들어, 피보나치 수열에서는 `dp[n] = dp[n-1] + dp[n-2]`라는 점화식이 존재합니다. 만약 점화식이 없다면 동적 계획법을 적용할 수 없습니다.

- `시간 복잡도(Time Complexity)`

  동적 계획법은 중복 계산을 제거하므로 단순 재귀보다 시간 복잡도가 크게 개선됩니다. 예를 들어 피보나치 수열을 단순 재귀로 구현하면 `O(2ᴺ)`이지만, 동적 계획법을 적용하면 `O(N)`입니다.

### 구현

동적 계획법은 다음 2가지 방식으로 구현할 수 있습니다.

#### Top-down (Memoization)

Top-down 방식은 큰 문제부터 시작해서 계속 작은 부분 문제로 나누면서 해결하는 방식을 의미합니다. Top-down 방식은 <b>재귀</b>를 주로 활용하면서 중복되는 부분 문제에 대해 중복 계산을 피하기 위해 <b>cache</b>라는 메모리 공간에 이미 계산한 값을 저장합니다.

Top-down 방식의 장단점을 정리하면 다음과 같습니다.

- 장점
  - 좀 더 직관적인 코드를 짤 수 있습니다.
  - 부분 문제 간의 의존 관계나 계산 순서에 대해 고민할 필요가 없습니다.
  - 전체 부분 문제 중 일부의 답만 필요한 경우 더 빠르게 동작합니다.
- 단점
  - Sliding Window 테크닉을 사용할 수 없습니다.
  - 재귀를 활용하므로 Stack overflow 가능성에 대해 신경써야 합니다.

```javascript
const n = 10;
const cache = Array(n + 1).fill(-1);
cache[0] = 0;
cache[1] = 1;

const fib = (num) => {
  if (num <= 1) {
    return num;
  } else if (cache[num] !== -1) {
    return cache[num];
  }

  cache[num] = fib(num - 1) + fib(num - 2);
  return cache[num];
};

console.log(fib(10)); // 55
console.log(cache); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

#### Bottom-up (Tabulation)

Bottom-up 방식은 작은 부분 문제부터 시작해서 <b>테이블(배열)</b>에 값을 저장하며 해결하는 방식을 의미합니다. Bottom-up 방식은 <b>반복문</b>을 주로 활용하며, 재귀 호출이 없어 Top-down 방식보다 더 빠른 경우가 많습니다.

Bottom-up 방식의 장단점을 정리하면 다음과 같습니다.

- 장점
  - 재귀적 동적 계획법보다 보통 구현 코드 길이가 더 짧습니다.
  - 재귀 호출에 필요한 부하가 없기 때문에 좀 더 빠르게 동작합니다.
  - Sliding Window 테크닉을 사용할 수 있습니다.
- 단점
  - 구현이 좀 더 비직관적입니다.
  - 부분 문제 간의 의존 관계를 고려해 계산되는 순서를 신경써야 합니다.

```javascript
const n = 10;
const fib = Array(n + 1).fill(-1);
fib[0] = 0;
fib[1] = 1;

for (let i = 2; i <= n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib[10]); // 55
console.log(fib); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

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

- <a href="https://namu.wiki/w/동적%20계획법" target="_blank">동적 계획법 - 나무위키</a>
