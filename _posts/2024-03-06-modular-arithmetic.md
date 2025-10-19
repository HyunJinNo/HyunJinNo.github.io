---
title: 모듈러 연산 (Modular Arithmetic)
description: 모듈러 연산 (Modular Arithmetic)에 대해 정리한 페이지입니다.
date: 2024-03-06 00:00:00 +/-TTTT
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

`모듈러 연산(Modular Arithmetic)`에 대해 정리한 페이지입니다.

## 모듈러 연산 (Modular Arithmetic)

### 개념

`모듈러 연산` 또는 `모듈러 산술`은 수학에서 나머지를 다루는 산술 체계를 의미합니다. 정수 `a`를 정수 `m`으로 나눈 나머지를 `a mod m`으로 표현합니다.

### 모듈러 연산의 성질

모듈러 연산의 주요 성질들은 다음과 같습니다.

#### 덧셈

$(a+b)\,mod\;m=[(a\,mod\;m)+(b\,mod\;m)]\,mod\;m$

#### 뺄셈

$(a−b)\,mod\;m=[(a\,mod\;m)−(b\,mod\;m)]\,mod\;m$

#### 곱셈

$(a \times b)\,mod\;m=[(a\,mod\;m)\times(b\,mod\;m)]\,mod\;m$

#### 거듭제곱

$(aᵇ)\,mod\;m=((a\,mod\;m)ᵇ)\,mod\;m$

#### 모듈러 역원을 이용한 나눗셈

모듈러 연산에서는 $(a/b)\,mod\;m$을 직접 구할 수 없습니다. 대신 b의 `모듈러 역원(Modular inverse)`를 곱하는 방식으로 계산할 수 있습니다.

$(a/b)\,mod\;m=(a\times b⁻¹)\,mod\;m$

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong> <br />
<b>모듈러 역원(Modular inverse)</b>: 정수 a와 m에 대해 <b>(a * x) mod m = 1</b>을 만족하는 정수 x를 a의 모듈러 역원이라고 합니다. 예를 들어 정수 a가 3이고 m이 11일 때 (3 × 4) mod 11 = 1이므로 3의 모듈러 역원은 4입니다. <br />
</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong> <br />
b의 곱셈 역원은 항상 존재하는 것이 아니라, <b>b와 m이 서로소</b>일 때만 존재합니다. 다만 출제되는 대부분의 알고리즘 문제에서는 m이 <b>소수</b>인 경우가 많습니다.</p></blockquote>

모듈러 역원을 구하는 방법으로는 여러 가지가 있습니다.

<br />

<b>1. 페르마의 소정리</b>

만약 m이 소수인 경우, 아래의 `페르마의 소정리`를 활용하여 모듈러 역원을 쉽게 구할 수 있습니다.

$(a⁻¹)\,mod\;m = (aᵐ⁻²)\,mod\;m$

숫자 3의 모듈러 역원을 구하면 다음과 같이 4임을 확인할 수 있습니다.

$3⁻¹\,mod\;11 = 3¹¹⁻²\,mod\;11=3⁹\,mod\;11=19683\,mod\;11=4$

<br />

<b>2. 확장 유클리드 알고리즘(Extended Euclidean Algorithm)</b>

확장 유클리드 알고리즘(Extended Euclidean Algorithm)을 활용하여 모듈러 역원을 구할 수 있습니다.

$a\times x+m\times y=gcd(a,m)$ 에서 <b>gcd가 1일 때(=a와 m이 서로소)의 x 값이 a의 역원</b>입니다.

$3x+11y=1$

$x=-7,\,y=2$

$x=4,\,y=-1$

$(-7)\,mod\;11=4\,mod\;11=4$

```javascript
const extendedGCD = (a, b) => {
  if (b === 0) {
    return { gcd: a, x: 1, y: 0 };
  } else {
    const { gcd, x: x1, y: y1 } = extendedGCD(b, a % b);

    const x = y1;
    const y = x1 - Math.floor(a / b) * y1;

    return { gcd, x, y };
  }
};

const modInverse = (a, m) => {
  const { gcd, x } = extendedGCD(a, m);

  // 모듈러 역원이 존재하지 않는 경우 -1 리턴.
  if (gcd !== 1) {
    return -1;
  }

  // 음수인 경우 양수로 조정.
  return ((x % m) + m) % m;
};
```

## Example

- <a href="https://www.acmicpc.net/problem/16134" target="_blank">16134번: 조합 (Combination)</a>

  ```kotlin
  import java.io.*

  const val p = 1000000007

  fun main() {
      val br = BufferedReader(InputStreamReader(System.`in`))
      val bw = BufferedWriter(OutputStreamWriter(System.out))

      // 0 <= r <= n <= 1,000,000
      val (n, r) = br.readLine().split(" ").map { it.toInt() }
      br.close()

      val factorial = LongArray(n + 1) { 0 }
      factorial[0] = 1L
      factorial[1] = 1L
      for (i in 2..n) {
          factorial[i] = (i * factorial[i - 1]) % p
      }

      val result = factorial[n] * expdiv(factorial[r] * factorial[n - r] % p, p - 2) % p

      bw.write("$result")
      bw.flush()
      bw.close()
  }

  fun expdiv(n: Long, e: Int): Long {
      return when (e) {
          0 -> 1
          1 -> n
          else -> {
              val temp = expdiv(n, e / 2)
              if (e % 2 == 0) (temp * temp) % p else (((n * temp) % p) * temp) % p
          }
      }
  }
  ```

- <a href="https://www.acmicpc.net/problem/14565" target="_blank">14565번: 역원(Inverse) 구하기</a>

  ```javascript
  const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
  const input = require("fs").readFileSync(path).toString();

  // 2 <= N <= 10^12
  // 1 <= A < N
  const [N, A] = input.split(" ").map(Number);

  const extendedGCD = (a, b) => {
    if (b === 0) {
      return { gcd: a, x: 1, y: 0 };
    } else {
      const { gcd, x: x1, y: y1 } = extendedGCD(b, a % b);

      const x = y1;
      const y = x1 - Math.floor(a / b) * y1;

      return { gcd, x, y };
    }
  };

  const modInverse = (a, m) => {
    const { gcd, x } = extendedGCD(a, m);

    // 모듈러 역원이 존재하지 않는 경우 -1 리턴.
    if (gcd !== 1) {
      return -1;
    }

    // 음수인 경우 양수로 조정.
    return ((x % m) + m) % m;
  };

  console.log(N - A, extendedGCD(A, N).gcd === 1 ? modInverse(A, N) : -1);
  ```

## 참고 자료

- <a href="https://ko.wikipedia.org/wiki/모듈러_산술" target="_blank">모듈러 산술 - 위키백과, 우리 모두의 백과사전</a>
- <a href="https://namu.wiki/w/합동식" target="_blank">합동식 - 나무위키</a>
- <a href="https://developer-mac.tistory.com/84" target="_blank">모듈러 연산 (Modular arithmetic)</a>
- <a href="https://namu.wiki/w/모듈러%20역원" target="_blank">모듈러 역원 - 나무위키</a>
