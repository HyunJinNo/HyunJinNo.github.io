---
layout: post
title: MySQL SELECT 명령어
description: >
  MySQL SELECT 명령어에 대해 설명하는 페이지입니다.
image: 
  path: /assets/img/mysql/harddisk.jpg
  srcset:
    1060w: /assets/img/mysql/harddisk.jpg
    530w:  /assets/img/mysql/harddisk.jpg
    265w:  /assets/img/mysql/harddisk.jpg
related_posts:
  - None
sitemap: true
comments: false
---      

# MySQL SELECT 명령어
## MySQL SELECT 명령어

#### 설명
SELECT 명령어는 데이터베이스에서 데이터를 조회할 때 사용하는 명령어입니다.

#### 문법
```sql
select column1, column2, ... from table_name;
```
위의 문법에서 `column1`, `column2`, `...` 는 조회하고자 하는 테이블의 속성 이름을 나타내며, `table_name`은 데이터를 조회하려고 하는 테이블의 이름을 나타냅니다.

#### 모든 속성 조회
만약 속성 이름을 지정하지 않고, 모든 테이블 속성을 조회하려면 다음과 같이 `SELECT *` 명령어를 사용합니다.
```sql
select * from table_name;
```

#### SELECT DISTINCT
`SELECT DISTINCT` 명령어는 중복되는 데이터를 제거하고 조회하고 싶을 때 사용합니다. 문법은 다음과 같습니다.
```sql
select distinct column1, column2, ... from table_name;
```
`SELECT DISTINCT` 명령어를 사용하는 예로 테이블 내의 특정 속성이 갖는 값의 종류를 조회할 때 사용할 수 있습니다.
```sql
select count(distinct column1) from table_name;
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