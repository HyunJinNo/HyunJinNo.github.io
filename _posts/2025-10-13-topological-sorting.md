---
title: 위상 정렬 (Topological Sorting) 알고리즘
description: 위상 정렬 (Topological Sorting) 알고리즘에 대해 정리한 페이지입니다.
date: 2025-10-13 13:29:00 +/-TTTT
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

`위상 정렬(Topological Sorting)` 알고리즘에 대해 정리한 페이지입니다.

## 위상 정렬 (Topological Sorting)

### 개념

`위상 정렬(Topological Sorting)` 알고리즘은 방향 그래프(Directed Graph)에서 정점들의 방문 순서를 정하는 알고리즘입니다. <b>유향 비순환 그래프(Directed acyclic graph, DAG)에서 특정 정점을 다른 정점보다 먼저 방문해야 할 때 정점들의 방문 순서를 결정</b>하기 위해 위상 정렬 알고리즘을 사용합니다.

### 특징

위상 정렬 알고리즘의 특징은 다음과 같습니다.

- `유향 비순환 그래프(Directed acyclic graph, DAG)`

  위상 정렬이 가능하려면 해당 그래프는 사이클이 없는 방향 그래프여야 합니다. 만약 사이클이 존재한다면 선행 관계가 꼬여버려 정렬이 불가능하기 때문입니다.

- `시간 복잡도(Time Complexity)`

  정점의 개수가 V이고, 간선의 개수가 E일 때, 위상 정렬 알고리즘의 시간 복잡도는 `O(V + E)`입니다.

### 구현

위상 정렬을 구현하는 알고리즘은 크게 Kahn 알고리즘과 DFS 방법이 있으며, 두 방법 모두 시간 복잡도는 `O(V + E)`입니다. 이번 글에서는 Kahn 알고리즘만 설명합니다.

#### Kahn 알고리즘

Kahn 알고리즘은 `진입 차수(Indegree)`를 기반으로 하는 알고리즘으로 다음과 같은 절차로 진행됩니다.

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br />
<b>진입 차수(Indegree)</b>: 어떤 정점으로 들어오는 간선의 개수</p></blockquote>

1. 모든 정점의 진입 차수를 계산합니다.
2. 진입 차수가 0인 정점을 큐에 추가합니다.
3. 큐에서 정점을 하나 꺼내 위상 정렬 결과에 추가합니다.
4. 그 정점에서 나가는 간선을 제거하고, 연결된 정점의 진입 차수를 1 줄입니다.
5. 이 과정에서 진입 차수가 0이 된 정점을 큐에 추가합니다.
6. 큐가 빌 때까지 반복합니다.

예를 들어 다음과 같은 그래프가 있다고 가정합니다.

```text
1 → 2 → 4
↓    ↑
3 ----
```

위의 그래프에서 얻을 수 있는 정보는 다음과 같습니다.

```javascript
const edges = [
  [1, 2],
  [1, 3],
  [3, 2],
  [2, 4]
]; // [[from, to]]
```

- 1번 노드를 2번 노드보다 먼저 방문해야 합니다.
- 1번 노드를 3번 노드보다 먼저 방문해야 합니다.
- 3번 노드를 2번 노드보다 먼저 방문해야 합니다.
- 2번 노드를 4번 노드보다 먼저 방문해야 합니다.

위의 조건에서 Kahn 알고리즘 구현 방법은 다음과 같습니다.

<b>1. 모든 정점의 진입 차수를 계산합니다.</b>

```javascript
/* ... */

const n = 4; // 노드의 개수
const graph = Array.from({ length: n + 1 }, () => []); // graph[<from>] = <to>
const inDegree = Array(n + 1).fill(0);

// 1. 모든 정점의 진입 차수를 계산합니다.
for (const [from, to] of edges) {
  graph[from].push(to);
  inDegree[to]++;
}

console.log(graph); // [[], [2, 3], [4], [2], []]
console.log(inDegree); // [0, 0, 2, 1, 1]
```

<b>2. 진입 차수가 0인 정점을 큐에 추가합니다.</b>

```javascript
/* ... */

const queue = [];
let peekIndex = 0;

for (let i = 1; i <= n; i++) {
  // 2. 진입 차수가 0인 정점을 큐에 추가합니다.
  if (inDegree[i] === 0) {
    queue.push(i);
  }
}
```

<b>3 ~ 6. 큐에서 정점을 하나 꺼내 위상 정렬 결과에 추가합니다. 그 정점에서 나가는 간선을 제거하고, 연결된 정점의 진입 차수를 1 줄입니다. 이 과정에서 진입 차수가 0이 된 정점을 큐에 추가합니다. 큐가 빌 때까지 반복합니다.</b>

```javascript
/* ... */

let answer = "";

// 6. 큐가 빌 때까지 반복합니다.
while (peekIndex < queue.length) {
  // 3. 큐에서 정점을 하나 꺼내 위상 정렬 결과에 추가합니다.
  const node = queue[peekIndex++];
  answer += `${node} `;

  graph[node].forEach((nextNode) => {
    // 4. 그 정점에서 나가는 간선을 제거하고, 연결된 정점의 진입 차수를 1 줄입니다.
    inDegree[nextNode]--;

    // 5. 이 과정에서 진입 차수가 0이 된 정점을 큐에 추가합니다.
    if (inDegree[nextNode] === 0) {
      queue.push(nextNode);
    }
  });
}

console.log(answer.trim()); // "1 3 2 4"
```

최종 구현 결과는 다음과 같습니다.

```javascript
const n = 4; // 노드의 개수
const edges = [
  [1, 2],
  [1, 3],
  [3, 2],
  [2, 4]
]; // [[from, to]]
const graph = Array.from({ length: n + 1 }, () => []); // graph[<from>] = <to>
const inDegree = Array(n + 1).fill(0);

// 1. 모든 정점의 진입 차수를 계산합니다.
for (const [from, to] of edges) {
  graph[from].push(to);
  inDegree[to]++;
}

const queue = [];
let peekIndex = 0;

for (let i = 1; i <= n; i++) {
  // 2. 진입 차수가 0인 정점을 큐에 추가합니다.
  if (inDegree[i] === 0) {
    queue.push(i);
  }
}

let answer = "";

// 6. 큐가 빌 때까지 반복합니다.
while (peekIndex < queue.length) {
  // 3. 큐에서 정점을 하나 꺼내 위상 정렬 결과에 추가합니다.
  const node = queue[peekIndex++];
  answer += `${node} `;

  graph[node].forEach((nextNode) => {
    // 4. 그 정점에서 나가는 간선을 제거하고, 연결된 정점의 진입 차수를 1 줄입니다.
    inDegree[nextNode]--;

    // 5. 이 과정에서 진입 차수가 0이 된 정점을 큐에 추가합니다.
    if (inDegree[nextNode] === 0) {
      queue.push(nextNode);
    }
  });
}

console.log(answer.trim()); // "1 3 2 4"
```

## Example

- <a href="https://www.acmicpc.net/problem/2056" target="_blank">2056번: 작업</a>

  ```javascript
  const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = require("fs").readFileSync(path).toString().split("\n");
  const N = Number(input[0]); // 수행해야 할 작업의 수, 3 <= N <= 10_000

  const graph = Array.from({ length: N + 1 }, () => []);
  const inDegree = Array(N + 1).fill(0);
  const cost = Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    const arr = input[i].split(" ").map(Number);
    const time = arr[0]; // 각각의 작업마다 걸리는 시간, 1 <= time <= 100
    const count = arr[1]; // 선행 관계에 있는 작업들의 개수, 0 <= count <= 100

    cost[i] = time;

    for (let j = 2; j < 2 + count; j++) {
      graph[arr[j]].push(i);
      inDegree[i]++;
    }
  }

  const answer = Array(N + 1).fill(0);
  const queue = [];
  let peekIndex = 0;

  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) {
      answer[i] = cost[i];
      queue.push([i, cost[i]]); // [node, totalTime]
    }
  }

  while (peekIndex < queue.length) {
    const [node, totalTime] = queue[peekIndex++];

    graph[node].forEach((nextNode) => {
      inDegree[nextNode]--;
      answer[nextNode] = Math.max(answer[nextNode], totalTime + cost[nextNode]);

      if (inDegree[nextNode] === 0) {
        queue.push([nextNode, answer[nextNode]]);
      }
    });
  }

  console.log(Math.max(...answer));
  ```

## 참고 자료

- <a href="https://namu.wiki/w/위상%20정렬" target="_blank">위상 정렬 - 나무위키</a>
