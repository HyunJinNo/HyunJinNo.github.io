---
title: 분리 집합 (Disjoint Set) 알고리즘
description: 분리 집합 (Disjoint Set) 알고리즘에 대해 정리한 페이지입니다.
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

`분리 집합(Disjoint Set)` 알고리즘에 대해 정리한 페이지입니다.

## 분리 집합 (Disjoint Set)

### 개념

`분리 집합(Disjoint Set)` 알고리즘, 또는 `유니온-파인드(Union-Find)`는 <b>서로 중복되지 않는 부분 집합들(분리 집합)을 효율적으로 관리</b>하는 자료 구조와 알고리즘을 의미합니다. 주로 <b>두 요소가 같은 집합에 속해 있는지 확인(Find)</b>하고, <b>두 집합을 하나로 합치는(Union)</b> 연산을 빠르게 수행하는 데 사용합니다.

### 특징

분리 집합의 특징은 다음과 같습니다.

- `서로소`

  분리 집합은 말 그대로 서로소, 즉 공통 원소가 없는 집합들의 모임을 의미합니다.

- `트리 구조와 대표 원소`

  집합은 트리 구조로 표현됩니다. 각 집합은 하나의 루트 노드, 즉 부모 노드로 식별됩니다. 각 노드는 부모 노드를 가리키는 포인터를 갖습니다. 루트 노드는 자기 자신을 부모로 가리킵니다.

- `초기화`

  처음에는 각 원소가 별도의 집합이 됩니다. 즉, n개의 원소가 존재하는 경우, {1}, {2}, ... , {n} 처럼 n개의 집합이 존재합니다. 각 원소의 부모는 자기 자신입니다.

- `Find 연산`과 `Union 연산`

  분리 집합 알고리즘에는 <b>원소 x가 속한 집합의 루트를 반환하는 Find 연산</b>과 <b>원소 x가 속한 집합과 원소 y가 속한 집합을 합치는 Union 연산</b>이 있습니다.

### 활용

분리 집합 알고리즘은 다음과 같은 분야에서 활용됩니다.

- `그래프 연결 요소 찾기`

  무방향 그래프에서 노드들이 연결되어 있는지(Find), 연결 요소를 추적하는 데 사용됩니다.

- `최소 스패닝 트리`

  `크루스칼 알고리즘(Kruskal's Algorithm)` 등에서 사이클을 판별하여 `최소 신장 트리(Minimum Spanning Tree, MST)`를 구성하는 데 사용됩니다.

### 구현

#### 자료 구조

```typescript
const size = 100;
const parent = Array.from({ length: size }, (_value, index) => index);
const rank = Array(size).fill(0);
```

#### Find

```typescript
const find = (x) => {
  if (parent[x] !== x) {
    parent[x] = find(parent[x]);
  }
  return parent[x];
};
```

#### Union

```typescript
const union = (x, y) => {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX === rootY) {
    return;
  }

  if (rank[rootX] < rank[rootY]) {
    parent[rootX] = rootY;
  } else if (rank[rootX] > rank[rootY]) {
    parent[rootY] = rootX;
  } else {
    parent[rootY] = rootX;
    rank[rootX]++;
  }
};
```

## Examples

<a href="https://www.acmicpc.net/problem/1717" target="_blank">1717번: 집합의 표현</a>

```typescript
const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

// n: 집합의 수, 1 <= n <= 1_000_000
// m: 연산의 개수, 1 <= m <= 100_000
const [n, m] = input[0].split(" ").map(Number);
const parent = Array.from({ length: n + 1 }, (_value, index) => index);
const rank = Array(n + 1).fill(0);
let answer = "";

const find = (x) => {
  if (parent[x] !== x) {
    parent[x] = find(parent[x]);
  }
  return parent[x];
};

const union = (x, y) => {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX === rootY) {
    return;
  }

  if (rank[rootX] < rank[rootY]) {
    parent[rootX] = rootY;
  } else if (rank[rootX] > rank[rootY]) {
    parent[rootY] = rootX;
  } else {
    parent[rootY] = rootX;
    rank[rootX]++;
  }
};

for (let i = 1; i <= m; i++) {
  const [num, a, b] = input[i].split(" ").map(Number);

  if (num === 0) {
    union(a, b);
  } else {
    // num === 1
    if (find(a) === find(b)) {
      answer += "YES\n";
    } else {
      answer += "NO\n";
    }
  }
}

console.log(answer.trimEnd());
```

## 참고 자료
