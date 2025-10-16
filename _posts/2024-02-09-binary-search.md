---
title: 이분 탐색 (Binary Search) 알고리즘
description: 이분 탐색 (Binary Search) 알고리즘에 대해 정리한 페이지입니다.
date: 2024-02-09 00:00:00 +/-TTTT
categories: [Algorithms]
tags: [algorithm]
math: true
toc: true
pin: false
image:
  path: /assets/img/algorithms/computer.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br/>
Algorithm</p></blockquote>

## 개요

`이분 탐색(Binary Search)` 알고리즘에 대해 정리한 페이지입니다.

## 이분 탐색 (Binary Search) 알고리즘

### 개념

`이분 탐색` 또는 `이진 탐색` 알고리즘은 정렬된 배열이나 리스트에서 원하는 값을 빠르게 찾는 알고리즘입니다. <b>정렬된 배열이나 리스트</b>를 같은 크기의 두 부분으로 나누고 필요한 부분에서만 탐색하도록 탐색 범위를 <b>절반</b>씩 줄여가며 원하는 값을 빠르게 찾습니다.

### 특징

이분 탐색 알고리즘의 특징은 다음과 같습니다.

- `정렬`

  이분 탐색 알고리즘은 <b>정렬된 배열이나 리스트</b>에서만 적용할 수 있습니다.

- `시간 복잡도(Time Complexity)`

  선형 탐색과 달리, 중간값을 기준으로 탐색 범위를 절반씩 줄여가며 원하는 값을 찾으므로 `O(log N)`의 시간 복잡도를 갖습니다. 이는 시간 복잡도가 `O(N)`인 선형 탐색보다 빠르므로 정렬된 자료 구조에서 원하는 값을 빠르게 찾을 수 있습니다.

### 구현

다음과 같이 `[2, 3, 5, 7, 11, 13, 17, 21, 23, 29]`이라는 배열이 있을 때, 숫자 25보다 작은 값들 중에서 가장 큰 값을 구하는 문제가 있다고 가정합니다.

```javascript
const arr = [2, 3, 5, 7, 11, 13, 17, 21, 23, 29];
const target = 25;
```

배열 arr이 오름차순으로 정렬되어 있으므로 이분 탐색 알고리즘을 적용할 수 있습니다. 다음과 같이 탐색 구간의 왼쪽 경계, 즉 target보다 작은 값의 인덱스 후보를 나타내는 `left(lower bound)`와 탐색 구간의 오른쪽 경계, 즉 target보다 크거나 같은 값의 첫 위치 후보를 나타내는 `right(upper bound)`를 정의합니다. 이 때 이분 탐색에서 `left`와 `right`의 초깃값은 어떤 값을 찾는가에 따라 신중하게 설정해야 합니다. 이번 문제에서는 arr 내에 target보다 작은 값이 없을 수도 있으므로 left의 초깃값을 -1로 설정하였고, 배열의 모든 값이 target보다 작을 수 있으므로 right의 초깃값을 arr.length로 설정하였습니다.

```javascript
/* ... */

let left = -1;
let right = arr.length;
```

이후 다음과 같이 `left + 1 < right`로 루프 조건을 설정합니다. 이 조건은 `left`와 `right` 사이에 최소 하나의 값만 남아 있을 때까지만 반복하도록 제한합니다.

```javascript
/* ... */

while (left + 1 < right) {
  /* ... */
}
```

루프 조건을 설정한 이후 탐색 범위를 절반으로 좁히면서 원하는 값을 찾아냅니다. 다음과 같이 탐색 범위를 절반으로 나누기 위해 `mid` 변수를 선언하고 `[left, right)` 구간의 가운데 인덱스 값을 할당합니다. 그리고 `arr[mid]`의 값이 찾고자 하는 값 후보인지 확인한 후 탐색 범위를 좁힙니다.

```javascript
/* ... */

while (left + 1 < right) {
  const mid = Math.floor((left + right) / 2);

  if (arr[mid] < target) {
    left = mid;
  } else {
    right = mid;
  }
}
```

탐색 이후 찾고자 하는 답이 `left`인지 `right`인지 생각하고 결정합니다. 위의 `arr[mid] < target`이 true인 경우일 때의 mid는 찾고자 하는 답의 후보에 해당하므로 `left`가 찾고자 하는 답임을 확인할 수 있습니다. 따라서 `left`를 선택하여 출력하면 됩니다.

```javascript
/* ... */

if (left >= 0) {
  console.log(arr[left]); // 23
} else {
  console.log("arr 내에 25보다 작은 값은 없습니다.");
}
```

최종 구현 결과는 다음과 같습니다.

```javascript
const arr = [2, 3, 5, 7, 11, 13, 17, 21, 23, 29];
const target = 25;
let left = -1;
let right = arr.length;

while (left + 1 < right) {
  const mid = Math.floor((left + right) / 2);

  if (arr[mid] < target) {
    left = mid;
  } else {
    right = mid;
  }
}

if (left >= 0) {
  console.log(arr[left]); // 23
} else {
  console.log("arr 내에 25보다 작은 값은 없습니다.");
}
```

## Example

- <a href="https://www.acmicpc.net/problem/19845" target="_blank">19845번: 넴모넴모 2020</a>

  ```javascript
  const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = require("fs").readFileSync(path).toString().split("\n");

  // N: 게임판의 세로 크기, 1 <= N <= 250_000
  // Q: 레이저를 설치할 수 있는 위치의 수, 1 <= Q <= 250_000
  const [N, Q] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 10^9
  let answer = "";

  for (let i = 2; i < 2 + Q; i++) {
    const [col, row] = input[i].split(" ").map(Number);

    let left = 0;
    let right = N;

    while (left + 1 < right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] < col) {
        right = mid;
      } else {
        left = mid;
      }
    }

    let result = arr[row - 1] - col;
    result += right - row + 1;

    if (result < 0) {
      result = 0;
    }

    answer += `${result}\n`;
  }

  console.log(answer.trim());
  ```

## 참고 자료

- <a href="https://namu.wiki/w/이진%20탐색?from=이분%20탐색" target="_blank">이진 탐색 - 나무위키</a>
- <a href="https://www.acmicpc.net/blog/view/109" target="_blank">이분 탐색(Binary Search) 헷갈리지 않게 구현하기</a>
