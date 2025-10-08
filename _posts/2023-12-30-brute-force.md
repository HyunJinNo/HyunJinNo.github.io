---
title: 브루트포스 알고리즘
description: 브루트포스 (Brute-force) 알고리즘에 대해 정리한 페이지입니다.
date: 2023-12-30 00:00:00 +/-TTTT
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

`브루트포스(Brute-force)` 알고리즘에 대해 정리한 페이지입니다.

## 브루트포스 (Brute-force) 알고리즘

### 개념

`브루트포스(Brute-force)` 알고리즘은 컴퓨터의 빠른 계산 능력을 이용해 <b>모든 경우의 수를 전부 시도해 보는 방법</b>을 의미합니다.

### 특징

브루트포스 알고리즘의 특징은 다음과 같습니다.

- `재귀(Recursion)`
  - <b>재귀 함수(Recursive function)</b>, 혹은 <b>재귀(Recursion)</b> 는 브루트포스 구현 시 자주 사용됩니다. 이는 모든 경우의 수를 체계적으로 탐색하는 데 재귀가 유용하기 때문입니다.
  - 재귀 함수란 자신이 수행할 작업을 유사한 형태의 여러 조각으로 쪼갠 뒤 그 중 한 조각을 수행하고, 나머지를 자기 자신을 호출해 실행하는 함수를 가리킵니다.
  - 쪼개지지 않는 가장 작은 작업들을 가리켜 `기저 사례(Base case)`라고 합니다. 기저 사례를 선택할 때는 존재하는 모든 입력이 항상 기저 사례의 답을 이용해 계산될 수 있도록 신경써야 합니다.
- `정확성`
  - 브루트포스 알고리즘은 모든 경우의 수를 시도하므로 반드시 정답을 찾을 수 있습니다.
- `시간 복잡도(Time Complexity)`
  - 브루트포스 알고리즘은 가능한 모든 경우의 수를 전부 시도해서 답을 찾는 방식이므로 경우의 수가 커질수록 시간 복잡도가 급증합니다. 따라서 입력 크기가 작을 때만 실용적이며, 커지면 현실적으로 사용하기 어렵습니다.

### 구현

브루트포스 알고리즘은 정답이 될 가능성이 있는, 가능한 모든 경우의 수를 전부 시도해보는 방식으로 구현을 하면 됩니다. 만약 브루트포스 알고리즘 구현 시 재귀를 사용하는 경우라면 다음과 같은 방식으로 구현할 수 있습니다.

1. 브루트포스 알고리즘은 모든 경우의 수를 전부 시도하므로, 걸리는 시간은 입력에 비례한다. 최대 크기의 입력을 가정했을 때 답의 개수를 계산하고 이들을 모두 제한 시간 안에 생성할 수 있을지를 가늠해야 합니다. 만약 시간 안에 계산할 수 없다면 다른 알고리즘을 적용해야 합니다.
2. 가능한 모든 답의 후보를 만드는 과정을 여러 개의 선택으로 나눕니다. 각 선택은 답의 후보를 만드는 과정의 한 조각이 됩니다.
3. 그 중 하나의 조각을 선택해 답의 일부를 만들고, 나머지 답을 재귀 호출을 통해 완성합니다.
4. 조각이 하나 밖에 남지 않은 경우, 혹은 하나도 남지 않은 경우에는 답을 생성했으므로, 이것을 기저 사례로 선택해 처리합니다.

## Example

- <a href="https://www.acmicpc.net/problem/9997" target="_blank">9997번: 폰트</a>

  ```javascript
  const path =
    process.platform === "linux" ? "/dev/stdin" : "./JavaScript/input.txt";
  const input = require("fs").readFileSync(path).toString().split("\n");

  const n = Number(input[0]); // 단어의 개수, 1 <= n <= 25
  const words = []; // 각 단어에 사용된 알파벳의 집합

  for (let i = 1; i <= n; i++) {
    const word = input[i].trim();
    let result = 0;
    for (const c of word) {
      result |= 1 << (c.charCodeAt(0) - "a".charCodeAt(0));
    }
    words.push(result);
  }

  let answer = 0; // 만들 수 있는 테스트 문장의 개수

  /**
   * 만들 수 있는 테스트 문장의 개수를 계산한다.
   * @param {number} index (index) 번째 단어
   * @param {number} used 지금까지 사용된 알파벳 종류
   */
  const solve = (index, used) => {
    if (index == n) {
      if (used === (1 << 26) - 1) {
        answer++;
      }
      return;
    }

    // (index) 번째 단어를 사용하지 않는 경우
    solve(index + 1, used);

    // (index) 번째 단어를 사용하는 경우
    used |= words[index];
    solve(index + 1, used);
  };

  solve(0, 0);
  console.log(answer);
  ```
