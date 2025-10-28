---
title: 세그먼트 트리 (Segment Tree)
description: 세그먼트 트리 (Segment Tree)에 대해 정리한 페이지입니다.
date: 2024-05-21 00:00:00 +/-TTTT
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

`세그먼트 트리(Segment Tree)`에 대해 정리한 페이지입니다.

## 세그먼트 트리 (Segment Tree)

### 개념

`세그먼트 트리(Segment Tree)`는 저장된 자료들을 적절히 전처리해 그들에 대한 질의들을 빠르게 대답할 수 있게 구현한 이진 트리 기반 자료 구조입니다. 즉, 세그머트 트리는 배열의 구간 정보를 트리 형태로 저장하는 자료 구조로, 주로 구간 합, 구간 최솟값, 구간 최댓값 등 1차원 배열의 특정 구간에 대한 질문을 빠르게 대답하는 데 사용됩니다.

### 특징

세그먼트 트리의 특징은 다음과 같습니다.

- `완전 이진 트리`

  세그먼트 트리는 <b>배열 기반 이진 트리</b>로 구현됩니다.

- `구간 정보 저장`

  세그먼트 트리는 배열의 특정 구간 정보를 트리 형태로 저장합니다. 각 노드는 배열의 특정 구간을 나타내며, 루트는 전체 구간을, 리프 노드는 단일 원소를 나타냅니다.

- `다양한 연산`

  세그먼트 트리는 구간 합 뿐만 아니라, 구간 곱, 구간 최댓값, 구간 최솟값, 구간 XOR 등 `결합 법칙(Associative Property)`이 성립하는 연산이라면 세그먼트 트리로 처리할 수 있습니다.

- `시간 복잡도(Time Complexity)`

  단순 배열과 누적 합, 그리고 세그먼트 트리 간 시간 복잡도를 비교하면 다음과 같습니다.

  | 연산         | 단순 배열 | 누적 합 | 세그먼트 트리 |
  | ------------ | --------- | ------- | ------------- |
  | 전처리       | `O(N)`    | `O(N)`  | `O(N)`        |
  | 질의(Query)  | `O(N)`    | `O(1)`  | `O(log N)`    |
  | 갱신(Update) | `O(1)`    | `O(N)`  | `O(log N)`    |

  위의 표를 보면 알 수 있듯이, 배열 원소 갱신이 없는 경우라면 누적 합을 사용하는 것이 더 효율적입니다. 하지만 값이 변경되는 경우라면, 누적 합은 매번 다시 계산해야 하므로 비효율적이지만, 세그먼트 트리는 `O(log N)`의 시간 복잡도로 갱신을 처리할 수 있습니다. 따라서 <b>세그먼트 트리는 배열 값이 자주 변경되는 상황에서 구간 합, 구간 최댓값 등을 자주 계산해야 할 때 사용</b>하면 좋습니다.

### 세그먼트 트리 구조

`[1, 3, 5, 7, 9, 11]`라는 배열이 있을 때, 부분 구간에 대한 정보를 세그먼트 트리로 나타내면 다음과 같이 표현할 수 있습니다.

```text
                [0~5]  → 36
             /                \
         [0~2]=9           [3~5]=27
        /      \           /       \
    [0~1]=4  [2~2]=5   [3~4]=16  [5~5]=11
   /     \
[0~0]=1 [1~1]=3
```

위의 트리 구조에서 루트 노드는 전체 구간에 대한 정보를 저장하고, 왼쪽 자식은 구간의 왼쪽 절반 정보를, 오른쪽 자식은 구간의 오른쪽 절반 정보를 저장합니다.

### 구현

이번 글에서는 구간 합을 처리하는 세그먼트 트리를 구현하는 방법에 대해서 설명하겠습니다.

#### 전처리: O(N)

```javascript
const arr = [1, 3, 5, 7, 9, 11];
const tree = Array(arr.length * 4);

/**
 * node 노드가 arr[left...right] 배열을 표현할 때
 * node를 루트로 하는 서브 트리를 초기화하는 함수
 *
 * @param {number} left 시작 인덱스
 * @param {number} right 끝 인덱스
 * @param {number} node 루트
 */
const init = (left, right, node) => {
  if (left === right) {
    tree[node] = arr[left];
    return;
  }

  const mid = Math.floor((left + right) / 2);
  init(left, mid, node * 2); // 왼쪽 자식
  init(mid + 1, right, node * 2 + 1); // 오른쪽 자식
  tree[node] = tree[node * 2] + tree[node * 2 + 1];
};
```

#### 질의 (Query): O(log N)

```javascript
/**
 * node가 표현하는 범위 arr[nodeLeft...nodeRight]가 주어질 때,
 * 이 범위와 arr[left...right]의 교집합의 구간 합을 구합니다.
 *
 * @param {number} left
 * @param {number} right
 * @param {number} node
 * @param {number} nodeLeft
 * @param {number} nodeRight
 * @returns 구간 합
 */
const query = (left, right, node, nodeLeft, nodeRight) => {
  // 두 구간이 겹치지 않는 경우
  if (right < nodeLeft || nodeRight < left) {
    return 0;
  }

  // node가 표현하는 범위가 arr[left...right]에 완전히 포함되는 경우
  if (left <= nodeLeft && nodeRight <= right) {
    return tree[node];
  }

  // 양쪽 구간을 나눠서 푼 뒤 결과를 합칩니다.
  const mid = Math.floor((nodeLeft + nodeRight) / 2);
  const leftSum = query(left, right, node * 2, nodeLeft, mid);
  const rightSum = query(left, right, node * 2 + 1, mid + 1, nodeRight);
  return leftSum + rightSum;
};
```

#### 갱신 (Update): O(log N)

```javascript
/**
 * arr[index] = newValue로 바뀌었을 때
 * node를 루트로 하는 세그먼트 트리를 갱신합니다.
 *
 * @param {number} index
 * @param {number} newValue
 * @param {number} node
 * @param {number} nodeLeft
 * @param {number} nodeRight
 */
const update = (index, newValue, node, nodeLeft, nodeRight) => {
  // index가 노드가 표현하는 구간과 상관없는 경우에는 무시합니다.
  if (index < nodeLeft || nodeRight < index) {
    return;
  }

  // 트리의 리프까지 내려온 경우
  if (nodeLeft === nodeRight) {
    tree[node] = newValue;
    return;
  }

  const mid = Math.floor((nodeLeft + nodeRight) / 2);
  update(index, newValue, node * 2, nodeLeft, mid);
  update(index, newValue, node * 2 + 1, mid + 1, nodeRight);
  tree[node] = tree[node * 2] + tree[node * 2 + 1];
};
```

#### 최종 구현

최종 구현 결과는 다음과 같습니다.

```javascript
const arr = [1, 3, 5, 7, 9, 11];
const tree = Array(arr.length * 4);

/**
 * node 노드가 arr[left...right] 배열을 표현할 때
 * node를 루트로 하는 서브 트리를 초기화하는 함수
 *
 * @param {number} left 시작 인덱스
 * @param {number} right 끝 인덱스
 * @param {number} node 루트
 */
const init = (left, right, node) => {
  if (left === right) {
    tree[node] = arr[left];
    return;
  }

  const mid = Math.floor((left + right) / 2);
  init(left, mid, node * 2); // 왼쪽 자식
  init(mid + 1, right, node * 2 + 1); // 오른쪽 자식
  tree[node] = tree[node * 2] + tree[node * 2 + 1];
};

/**
 * node가 표현하는 범위 arr[nodeLeft...nodeRight]가 주어질 때,
 * 이 범위와 arr[left...right]의 교집합의 구간 합을 구합니다.
 *
 * @param {number} left
 * @param {number} right
 * @param {number} node
 * @param {number} nodeLeft
 * @param {number} nodeRight
 * @returns 구간 합
 */
const query = (left, right, node, nodeLeft, nodeRight) => {
  // 두 구간이 겹치지 않는 경우
  if (right < nodeLeft || nodeRight < left) {
    return 0;
  }

  // node가 표현하는 범위가 arr[left...right]에 완전히 포함되는 경우
  if (left <= nodeLeft && nodeRight <= right) {
    return tree[node];
  }

  // 양쪽 구간을 나눠서 푼 뒤 결과를 합칩니다.
  const mid = Math.floor((nodeLeft + nodeRight) / 2);
  const leftSum = query(left, right, node * 2, nodeLeft, mid);
  const rightSum = query(left, right, node * 2 + 1, mid + 1, nodeRight);
  return leftSum + rightSum;
};

/**
 * arr[index] = newValue로 바뀌었을 때
 * node를 루트로 하는 세그먼트 트리를 갱신합니다.
 *
 * @param {number} index
 * @param {number} newValue
 * @param {number} node
 * @param {number} nodeLeft
 * @param {number} nodeRight
 */
const update = (index, newValue, node, nodeLeft, nodeRight) => {
  // index가 노드가 표현하는 구간과 상관없는 경우에는 무시합니다.
  if (index < nodeLeft || nodeRight < index) {
    return;
  }

  // 트리의 리프까지 내려온 경우
  if (nodeLeft === nodeRight) {
    tree[node] = newValue;
    return;
  }

  const mid = Math.floor((nodeLeft + nodeRight) / 2);
  update(index, newValue, node * 2, nodeLeft, mid);
  update(index, newValue, node * 2 + 1, mid + 1, nodeRight);
  tree[node] = tree[node * 2] + tree[node * 2 + 1];
};

init(0, arr.length - 1, 1);
console.log(query(0, 2, 1, 0, arr.length - 1)); // 1 + 3 + 5 = 9
update(0, 2, 1, 0, arr.length - 1);
console.log(query(0, 2, 1, 0, arr.length - 1)); // 2 + 3 + 5 = 10
console.log(query(0, 3, 1, 0, arr.length - 1)); // 2 + 3 + 5 + 7 = 17
update(3, 8, 1, 0, arr.length - 1);
console.log(query(0, 3, 1, 0, arr.length - 1)); // 2 + 3 + 5 + 8 = 18
console.log(query(3, 5, 1, 0, arr.length - 1)); // 8 + 9 + 11 = 28
```

## Example

## 참고 자료

- <a href="https://www.yes24.com/product/goods/8006522" target="_blank">알고리즘 문제 해결 전략 세트 | 구종만 | 인사이트(insight) - 예스24</a>
- <a href="https://namu.wiki/w/세그먼트%20트리" target="_blank">세그먼트 트리 - 나무위키</a>
- <a href="https://book.acmicpc.net/ds/segment-tree" target="_blank">세그먼트 트리</a>
