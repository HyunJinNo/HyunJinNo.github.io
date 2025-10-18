---
title: 삼분 탐색 (Ternary Search) 알고리즘
description: 삼분 탐색 (Ternary Search) 알고리즘에 대해 정리한 페이지입니다.
date: 2024-02-23 00:00:00 +/-TTTT
categories: [Algorithms]
tags: [algorithm]
math: true
toc: true
pin: false
image:
  path: /assets/img/algorithms/computer.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br />
Algorithm</p></blockquote>

## 개요

`삼분 탐색(Ternary Search)` 알고리즘에 대해 정리한 페이지입니다.

## 삼분 탐색 (Ternary Search) 알고리즘

### 개념

`삼분 탐색(Ternary Search)` 알고리즘은 탐색 구간을 절반으로 나누는 이분 탐색과 유사하게, 탐색 구간을 두 부분이 아닌 <b>세 부분</b>으로 나누는 탐색 방식입니다. 주로 `볼록 함수(Convex function)` 또는 `오목 함수(Concave function)`에서 <b>극값 또는 최대/최소값</b>을 찾을 때 자주 사용됩니다.

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br />
<b>볼록 함수(Convex function)</b>: <b>아래로 볼록</b>하게 생긴 함수<br />
<b>오목 함수(Concave function)</b>: <b>위로 볼록</b>하게 생긴 함수</p></blockquote>

### 특징

삼분 탐색 알고리즘의 특징은 다음과 같습니다.

- `단봉 함수(Unimodal function)`

  삼분 탐색 알고리즘은 단봉 함수에서만 사용할 수 있습니다. 만약 함수의 기울기가 0인 구간이 존재하고 그 때의 함수값이 극값이 아니라면 삼분 탐색 알고리즘을 사용할 수 없습니다.

  <blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br />
  <b>단봉 함수(Unimodal function)</b>: 어떤 점까지 증가하다고 그 이후로 감소하거나, 반대로 감소하다가 증가하는 형태의 함수</p></blockquote>

- `3등분`

  이분 탐색이 탐색 구간을 절반으로 나누고 하나의 중간점을 사용한다면, 삼분 탐색은 탐색 구간을 3등분하고 두 개의 중간점을 사용합니다.

- `정수와 실수`

  정수 뿐만 아니라 실수 구간에서도 삼분 탐색 알고리즘을 사용할 수 있습니다. 특히 실수 구간에서는 `오차 허용값(ε)`을 기준으로 반복합니다.

- `시간 복잡도(Time Complexity)`

  탐색 구간을 3등분하여 매번 구간 길이를 2/3로 줄이므로 `O(log₃N)`의 시간 복잡도를 갖습니다.

### 활용

삼분 탐색 알고리즘은 다음과 같은 분야에서 활용됩니다.

- `극값 찾기`

  볼록 함수 또는 오목 함수에서 극값을 찾는데 활용됩니다.

- `최대/최소값 찾기`

  2차 함수, 3차 함수의 최대/최소값을 찾는데 활용됩니다.

### 구현

삼분 탐색 알고리즘을 구현하기 위해선 먼저 탐색 구간을 파악해야 합니다. 탐색 구간이 [lo, hi]일 때, 탐색 구간을 3등분하기 위해 설정하는 두 개의 중간점의 위치는 각각 `(2 * lo + hi) / 3`, `(lo * 2 + hi) / 3`입니다.

#### 실수 구간 삼분 탐색

예를 들어 $y=-0.5x²+2x+12$ 라는 2차 함수에서 탐색 구간이 [-3, 6]일 때의 최댓값을 찾는 문제가 있을 경우, 탐색 구간을 3등분하기 위해 설정하는 두 개의 중간점은 `x = (2 * (-3) + 6) / 3 = 0`, `x = (-3 + 2 * 6) / 3 = 3`입니다.

<img src="/assets/img/algorithms/ternary-search/pic1.avif" alt="y = -0.5x² + 2x + 12" />

위의 사진을 보면 알 수 있듯이 `x = 0`인 지점보다 `x = 3`인 지점의 함수값이 더 큰 것을 알 수 있습니다. 이를 통해 최댓값은 왼쪽 1/3 구간 [-3, 0]에는 없다는 점을 알 수 있습니다. 만약 구간 [-3, 0]에 최댓값이 있다면 왼쪽 중간점의 함수값이 오른쪽 중간점의 함수값보다 커야하기 때문입니다. 따라서 왼쪽 1/3 구간을 배제하고 나머지 2/3 구간을 탐색하는 식으로 진행됩니다.

이 예시를 자바스크립트 코드로 나타내면 다음과 같습니다.

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br />
삼분 탐색을 실수 구간에서 사용할 때, 실수는 무한히 많은 값을 가지기 때문에 left와 right 사이를 완전히 좁혀서 한 점으로 만드는 것을 불가능합니다. 따라서 무한 루프를 방지하기 위해 보통 충분히 작아진 구간에서 멈출 수 있도록 <b>오차 허용값(ε)</b>을 사용합니다.</p></blockquote>

```javascript
const func = (x) => {
  return -0.5 * x * x + 2 * x + 12;
};

let left = -3;
let right = 6;
const eps = 1e-6; // 오차 허용값: 0.000001

while (right - left > eps) {
  const a = (2 * left + right) / 3;
  const b = (left + 2 * right) / 3;

  if (func(a) > func(b)) {
    right = b;
  } else {
    left = a;
  }
}

console.log(left); // 1.9999996102999702
console.log(func(left)); // 13.999999999999924
```

#### 정수 구간 삼분 탐색

실수 구간에서 삼분 탐색을 사용할 때 left와 right 사이를 완전히 좁혀서 한 점으로 만드는 것이 불가능하듯이, 정수 구간에서 삼분 탐색을 사용할 때도 한 점으로 만드는 것이 불가능합니다. 이 경우 오차 허용값 대신, <b>탐색 구간이 충분히 좁아질 때까지 반복하다가 브루트포스로 확인</b>하는 방식을 사용합니다.

$y=(x-4)²+2$ 라는 2차 함수에서 탐색 구간이 [-10, 10]일 때 최댓값을 찾는 문제가 있다고 가정합니다. 이 경우 `right - left > 2`일 때만 탐색을 반복하다가, 탐색 종료 이후 남은 몇 개의 정수 값만 직접 확인해서 최댓값을 찾으면 됩니다.

```javascript
const func = (x) => {
  return (x - 4) * (x - 4) + 2;
};

let left = -10;
let right = 10;

while (right - left > 2) {
  const a = Math.floor((2 * left + right) / 3);
  const b = Math.floor((left + 2 * right) / 3);

  if (func(a) > func(b)) {
    left = a;
  } else {
    right = b;
  }
}

let answer = func(left);

for (let num = left + 1; num <= right; num++) {
  answer = Math.min(answer, func(num));
}

console.log(left, right); // 3 5
console.log(answer); // 2
```

## Example

- <a href="https://www.acmicpc.net/problem/11664" target="_blank">11664번: 선분과 점</a>

  ```typescript
  const path: string =
    process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
  const input: readonly number[] = require("fs")
    .readFileSync(path)
    .toString()
    .split(" ")
    .map(Number);

  class Point {
    public readonly x: number;
    public readonly y: number;
    public readonly z: number;

    constructor(x: number, y: number, z: number) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  }

  const A = new Point(input[0], input[1], input[2]);
  const B = new Point(input[3], input[4], input[5]);
  const C = new Point(input[6], input[7], input[8]);

  /**
   * 두 점 사이의 거리를 반환하는 함수
   * @param point 선분 위의 점
   * @param C 점 C
   * @returns 두 점 사이의 거리
   */
  const getDistance = (point: Point, C: Point): number => {
    return Math.sqrt(
      (point.x - C.x) ** 2 + (point.y - C.y) ** 2 + (point.z - C.z) ** 2
    );
  };

  const solve = (): number => {
    let lo = new Point(A.x, A.y, A.z);
    let hi = new Point(B.x, B.y, B.z);

    for (let iter = 0; iter < 100; iter++) {
      const a = new Point(
        (lo.x * 2 + hi.x) / 3,
        (lo.y * 2 + hi.y) / 3,
        (lo.z * 2 + hi.z) / 3
      );
      const b = new Point(
        (lo.x + hi.x * 2) / 3,
        (lo.y + hi.y * 2) / 3,
        (lo.z + hi.z * 2) / 3
      );

      if (getDistance(a, C) > getDistance(b, C)) {
        lo = a;
      } else {
        hi = b;
      }
    }

    return getDistance(lo, C);
  };

  console.log(solve());
  ```

- <a href="https://www.acmicpc.net/problem/8986" target="_blank">8986번: 전봇대</a>

  ```javascript
  const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = require("fs").readFileSync(path).toString().trim().split("\n");

  const N = Number(input[0]); // 전봇대의 수, 1 <= N <= 100_000
  const x = input[1].split(" ").map(Number); // 1 <= x[i] <= 1_000_000_000

  let left = 0;
  let right = x[N - 1];

  const check = (x1) => {
    let result = 0;

    for (let i = 1; i < N; i++) {
      result += Math.abs(x1 * i - x[i]);
    }

    return result;
  };

  while (left + 2 < right) {
    const a = Math.floor((left * 2 + right) / 3);
    const b = Math.floor((left + 2 * right) / 3);

    if (check(a) < check(b)) {
      right = b;
    } else {
      left = a;
    }
  }

  let answer = check(left);

  for (let num = left + 1; num <= right; num++) {
    answer = Math.min(answer, check(num));
  }

  console.log(answer);
  ```

## 참고 자료

- <a href="https://www.yes24.com/product/goods/8006522" target="_blank">알고리즘 문제 해결 전략 세트 | 구종만 | 인사이트(insight) - 예스24</a>
- <a href="https://00ad-8e71-00ff-055d.tistory.com/41" target="_blank">39. Ternary Search</a>
- <a href="https://namu.wiki/w/볼록함수" target="_blank">볼록함수 - 나무위키</a>
