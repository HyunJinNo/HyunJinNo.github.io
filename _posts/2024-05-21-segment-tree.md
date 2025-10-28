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

`세그먼트 트리(Segment Tree)`는 저장된 자료들을 적절히 전처리해 그들에 대한 질의들을 빠르게 대답할 수 있게 구현한 이진 트리 기반 자료 구조입니다. 즉, 세그먼트 트리는 배열의 구간 정보를 트리 형태로 저장하는 자료 구조로, 주로 구간 합, 구간 최솟값, 구간 최댓값 등 1차원 배열의 특정 구간에 대한 질문을 빠르게 대답하는 데 사용됩니다.

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

### 구간 합을 처리하는 세그먼트 트리 구현

이번 글에서는 <b>구간 합을 처리하는 세그먼트 트리</b>를 구현하는 방법에 대해서 설명하겠습니다.

#### 전처리: O(N)

먼저 배열 arr이 주어질 때 세그먼트 트리를 나타낼 배열(tree) 하나를 선언합니다. 세그먼트 트리는 `완전 이진 트리` 형태로 구성되기 때문에 리프의 개수가 N 개 일 때, 전체 노드는 대략 2N ~ 4N 개가 필요합니다. 따라서 인덱스 초과를 방지하기 위해 tree 배열을 초기화할 때 배열의 길이를 `arr.length * 4`로 설정합니다.

```javascript
const arr = [1, 3, 5, 7, 9, 11];
const tree = Array(arr.length * 4);
```

트리 선언 이후에는 다음과 같이 재귀 방식을 활용하여 세그먼트 트리를 생성할 수 있습니다. 루트 노드는 전체 구간에 대한 정보를 저장하고, 왼쪽 자식은 구간의 왼쪽 절반 정보를, 오른쪽 자식은 구간의 오른쪽 절반 정보를 저장하므로 `node`가 루트일 때, 왼쪽 구간 정보와 오른쪽 구간 정보를 활용하여 부모 노드에 값을 저장합니다.

```javascript
/**
 * node 노드가 arr[left...right] 배열을 표현할 때
 * node를 루트로 하는 서브 트리를 초기화하는 함수
 *
 * @param {number} left 현재 노드가 표현하는 구간의 시작 인덱스
 * @param {number} right 현재 노드가 표현하는 구간의 끝 인덱스
 * @param {number} node 루트 (현재 구간을 표현하는 트리의 노드 번호)
 */
const init = (left, right, node) => {
  // 세그먼트 트리의 리프 노드인 경우
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

실제로 세그먼트 트리를 초기화하면 트리 구조는 다음과 같이 구성됩니다.

```text
               tree[1] = 36  (전체 합)
             /                      \
    tree[2] = 9                 tree[3] = 27
        /     \                   /        \
   tree[4]=4  tree[5]=5     tree[6]=16  tree[7]=11
   /     \
tree[8]=1 tree[9]=3
```

#### 질의 (Query): O(log N)

다음으로 `arr[nodeLeft...nodeRight]`에 대한 구간 합 연산 결과를 반환하는 query 함수를 구현합니다. 탐색 중인 구간 `[left, right]`가 `[nodeLeft, nodeRight]` 구간에 완전히 포함되는 경우 그 노드의 값을 반환하면 됩니다. 반대로 구간이 겹치지 않는 경우 0를 리턴하여 무시하도록 구현하며, 일부만 겹치는 경우 왼쪽 자식과 오른쪽 자식을 탐색하여 구간 합을 계산하면 됩니다.

```javascript
/**
 * node가 표현하는 범위 arr[nodeLeft...nodeRight]가 주어질 때,
 * 이 범위와 arr[left...right]의 교집합의 구간 합을 구합니다.
 *
 * @param {number} left 구하고자 하는 구간 합의 시작 인덱스
 * @param {number} right 구하고자 하는 구간 합의 끝 인덱스
 * @param {number} node 현재 탐색 중인 세그먼트 트리의 노드 번호
 * @param {number} nodeLeft 현재 노드가 표현하는 구간의 시작 인덱스
 * @param {number} nodeRight 현재 노드가 표현하는 구간의 끝 인덱스
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

마지막으로 배열의 값이 변경되었을 때, 해당 구간을 포함하는 노드들을 갱신하는 update 함수를 구현합니다. `arr[index]`의 값이 `newValue`로 바뀌었을 때 세그먼트 트리의 관련된 노드들을 모두 재계산하여 반영합니다.

```javascript
/**
 * arr[index] = newValue로 바뀌었을 때
 * node를 루트로 하는 세그먼트 트리를 갱신합니다.
 *
 * @param {number} index 값이 바뀐 배열의 인덱스
 * @param {number} newValue 새로운 값
 * @param {number} node 현재 탐색 중인 세그먼트 트리의 노드 번호
 * @param {number} nodeLeft 현재 노드가 표현하는 구간의 시작 인덱스
 * @param {number} nodeRight 현재 노드가 표현하는 구간의 끝 인덱스
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
 * @param {number} left 현재 노드가 표현하는 구간의 시작 인덱스
 * @param {number} right 현재 노드가 표현하는 구간의 끝 인덱스
 * @param {number} node 루트 (현재 구간을 표현하는 트리의 노드 번호)
 */
const init = (left, right, node) => {
  // 세그먼트 트리의 리프 노드인 경우
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
 * @param {number} left 구하고자 하는 구간 합의 시작 인덱스
 * @param {number} right 구하고자 하는 구간 합의 끝 인덱스
 * @param {number} node 현재 탐색 중인 세그먼트 트리의 노드 번호
 * @param {number} nodeLeft 현재 노드가 표현하는 구간의 시작 인덱스
 * @param {number} nodeRight 현재 노드가 표현하는 구간의 끝 인덱스
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
 * @param {number} index 값이 바뀐 배열의 인덱스
 * @param {number} newValue 새로운 값
 * @param {number} node 현재 탐색 중인 세그먼트 트리의 노드 번호
 * @param {number} nodeLeft 현재 노드가 표현하는 구간의 시작 인덱스
 * @param {number} nodeRight 현재 노드가 표현하는 구간의 끝 인덱스
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

- <a href="" target="_blank">TODO</a>

## 참고 자료

- <a href="https://www.yes24.com/product/goods/8006522" target="_blank">알고리즘 문제 해결 전략 세트 | 구종만 | 인사이트(insight) - 예스24</a>
- <a href="https://namu.wiki/w/세그먼트%20트리" target="_blank">세그먼트 트리 - 나무위키</a>
- <a href="https://book.acmicpc.net/ds/segment-tree" target="_blank">세그먼트 트리</a>
