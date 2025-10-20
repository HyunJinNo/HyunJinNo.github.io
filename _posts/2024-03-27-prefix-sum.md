---
title: 누적 합 (Prefix Sum) 알고리즘
description: 누적 합 (Prefix Sum) 알고리즘에 대해 정리한 페이지입니다.
date: 2024-03-27 00:00:00 +/-TTTT
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

`누적 합(Prefix Sum)` 알고리즘에 대해 정리한 페이지입니다.

## 누적 합 (Prefix Sum) 알고리즘

### 개념

`누적 합(Prefix Sum)` 알고리즘은 배열의 구간 합(부분 합)을 빠르게 구할 수 있게 해주는 알고리즘 기법을 의미합니다. 다음과 같이 `scores`라는 1차원 정수 배열이 있을 때 첫 번째 원소부터 특정 index까지의 누적 합 배열 `S`이 있으면 다음과 같이 정의할 수 있습니다.

| index  | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| scores | 100 | 97  | 86  | 79  | 66  | 52  | 49  | 42  | 31  |
| S      | 100 | 197 | 283 | 362 | 428 | 480 | 529 | 571 | 602 |

```javascript
const scores = [100, 97, 86, 79, 66, 52, 49, 42, 31];

const S = [100, 197, 283, 362, 428, 480, 529, 571, 602];
```

### 시간 복잡도 (Time Complexity)

일반적으로 단순히 배열을 순회하면서 합을 구하면 한 번 계산할 때마다 `O(N)`의 시간이 걸립니다. 하지만 누적 합 배열을 미리 계산해두면 구간 합을 `O(1)`의 시간에 구할 수 있습니다. 특히 <b>누적 합 알고리즘은 구간 합을 여러 번 계산해야 할 때 효율적</b>입니다. 예를 들어 구간 합을 M번 구하는 문제가 있을 때, 단순 덧셈 방식은 `O(N * M)`의 시간이 걸리지만, 누적 합 알고리즘을 사용하면 누적 합 배열을 미리 계산해 두는데 걸리는 `O(N)` 시간이 소모된 이후에는 구간 합을 계산하는데 걸리는 시간이 거의 없으며, 총 `O(N + M)`의 시간 복잡도를 갖습니다.

단순 덧셈 방식과 누적 합 사용 방식의 시간 복잡도를 비교하면 다음과 같습니다.

| 방법         | 구간 합 계산 시간 | 전체 사전 준비 시간 |
| ------------ | ----------------- | ------------------- |
| 단순 덧셈    | `O(N)`            | 없음                |
| 누적 합 사용 | `O(1)`            | `O(N)`              |

### 구현

#### 1차원 배열에서의 누적 합

```javascript
const scores = [10, 20, 30, 40, 50];
const S = Array(scores.length).fill(0);
S[0] = scores[0];

for (let i = 1; i < scores.length; i++) {
  S[i] = S[i - 1] + scores[i];
}

console.log(S); // [10, 30, 60, 100, 150]

/**
 * scores[a]부터 scores[b]까지의 누적 합을 구하는 함수
 * @param {number} a 시작 인덱스
 * @param {number} b 끝 인덱스
 * @returns scores[a]부터 scores[b]까지의 누적 합
 */
const rangeSum = (a, b) => {
  if (a === 0) {
    return S[b];
  } else {
    return S[b] - S[a - 1];
  }
};

console.log(rangeSum(1, 3)); // 90
```

#### 2차원 배열에서의 누적 합

```javascript
const arr = [
  [10, 20, 30, 30],
  [20, 20, 40, 30],
  [50, 30, 20, 50],
  [40, 40, 40, 40]
];

const S = Array.from({ length: arr.length }, () =>
  Array(arr[0].length).fill(0)
);

// 각 행에 대한 누적 합 계산
for (let i = 0; i < arr.length; i++) {
  S[i][0] = arr[i][0];

  for (let j = 1; j < arr[i].length; j++) {
    S[i][j] = S[i][j - 1] + arr[i][j];
  }
}

for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    S[i][j] += S[i - 1][j];
  }
}

/*
[
  [ 10, 30, 60, 90 ],
  [ 30, 70, 140, 200 ],
  [ 80, 150, 240, 350 ],
  [ 120, 230, 360, 510 ]
]
*/
console.log(S);

/**
 * arr[startRow][startCol]과 arr[endRow][endCol]를 양 끝으로 갖는 부분 배열의 합을 구하는 함수
 * @param {number} startRow
 * @param {number} startCol
 * @param {number} endRow
 * @param {number} endCol
 * @returns arr[startRow][startCol]과 arr[endRow][endCol]를 양 끝으로 갖는 부분 배열의 합
 */
const rangeSum = (startRow, startCol, endRow, endCol) => {
  let result = S[endRow][endCol];

  if (startRow > 0) {
    result -= S[startRow - 1][endCol];
  }

  if (startCol > 0) {
    result -= S[endRow][startCol - 1];
  }

  if (startRow > 0 && startCol > 0) {
    result += S[startRow - 1][startCol - 1];
  }

  return result;
};

console.log(rangeSum(1, 1, 3, 3)); // 310
```

## Example

- <a href="https://www.acmicpc.net/problem/1806" target="_blank">1806번: 부분합</a>

  ```javascript
  const path =
    process.platform === "linux" ? "/dev/stdin" : "./JavaScript/input.txt";
  const input = require("fs").readFileSync(path).toString().split("\n");

  // n: 수열의 길이, 10 <= n <= 100,000
  // s: 합, 0 <= s <= 100,000,000
  const [n, s] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  const arrSum = Array(n).fill(0);

  arrSum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    arrSum[i] = arr[i] + arrSum[i - 1];
  }

  /**
   * 시작 Index 부터 끝 Index 까지의 부분 합을 반환하는 함수
   * @param {number} a 시작 Index
   * @param {number} b 끝 Index
   * @returns {number} 부분 합
   */
  const rangeSum = (a, b) => {
    if (a === 0) {
      return arrSum[b];
    } else {
      return arrSum[b] - arrSum[a - 1];
    }
  };

  let answer = Infinity;
  let a = 0;
  let b = 0;

  while (b < n) {
    if (rangeSum(a, b) >= s) {
      answer = Math.min(answer, b - a + 1);
      a++;
    } else {
      b++;
    }
  }

  console.log(`${answer === Infinity ? 0 : answer}`);
  ```

## 참고 자료

- <a href="https://book.acmicpc.net/algorithm/prefix-sum" target="_blank">누적 합</a>
