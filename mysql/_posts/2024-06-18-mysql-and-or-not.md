---
layout: post
title: MySQL AND, OR, NOT 연산자
description: >
  MySQL AND, OR, NOT 연산자에 대해 설명하는 페이지입니다.
image: 
  path: /assets/img/mysql/harddisk.jpg
  srcset:
    1060w: /assets/img/mysql/harddisk.jpg
    530w:  /assets/img/mysql/harddisk.jpg
    265w:  /assets/img/mysql/harddisk.jpg
related_posts:
  - None
sitemap: false
comments: false
---

# MySQL AND, OR, NOT 연산자
## MySQL AND, OR, NOT 연산자

#### 설명
`AND`, `OR`, `NOT` 연산자는 `WHERE`절에서 여러 개의 조건을 사용하거나, 조건이 false일 때 데이터를 필터링하고 싶을 때 사용한다.

#### 문법
- AND
  ```sql
  select column1, column2, ... from table_name where condition1 and condition2 and condition3 ...;
  ```
- OR
  ```sql
  select column1, column2, ... from table_name where condition1 or condition2 ...;
  ```
- NOT
  ```sql
  select column1, column2, ... from table_name where not condition;
  ```

## Comments
<hr />
<script
  src="https://utteranc.es/client.js"
  repo="HyunJinNo/HyunJinNo.github.io"
  issue-term="pathname"
  theme="github-light"
  crossorigin="anonymous"
  async
></script>