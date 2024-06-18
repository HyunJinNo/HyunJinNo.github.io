---
layout: post
title: MySQL WHERE절
description: >
  MySQL WHERE절에 대해 설명하는 페이지입니다.
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

# MySQL WHERE절
## MySQL WHERE절

#### 설명
WHERE절은 데이터를 필터링할 때 사용합니다. 특정 조건을 제시하여 해당 조건에 맞는 데이터만을 필터링할 수 있습니다. WHERE절을 사용하여 특정 데이터만을 조회하거나, 수정 및 삭제 등을 할 수 있습니다.

#### 문법
```sql
select column1, column2, ... from table_name where condition;
```

#### WHERE절에서 사용 가능한 연산자
WHERE절에서 사용 가능한 연산자 목록은 다음과 같습니다.

| Operator | Description                                      | Example                          |
|----------|--------------------------------------------------|----------------------------------|
| =        | Equal                                            | where id = 10                    |
| >        | Greater than                                     | where id > 10                    |
| <        | Less than                                        | where id < 10                    |
| >=       | Greater than or equal                            | where id >= 10                   |
| <=       | Less than or equal                               | where id <= 10                   |
| != or <> | Not equal                                        | where id != 10                   |
| BETWEEN  | Between a certain range                          | where id between 10 and 20       |
| LIKE     | search for a pattern                             | where city like "s%"             |
| IN       | To specify multiple possible values for a column | where city in ("seoul", "busan") |

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