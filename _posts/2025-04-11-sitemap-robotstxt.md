---
title: sitemap.xml과 robots.txt
description: sitemap.xml과 robots.txt에 대해 정리한 페이지입니다.
date: 2025-04-11 21:09:00 +/-TTTT
categories: [Front-end]
tags: [sitemap, robots.txt]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br>
sitemap, robots.txt</p></blockquote>

## 개요

`sitemap.xml`과 `robots.txt`에 대해 정리한 페이지입니다.

## sitemap.xml

### 개념

`sitemap.xml`은 웹 사이트의 모든 중요 페이지들의 URL 목록을 XML 형식으로 작성한 파일입니다. 이는 <b>검색 엔진 크롤러에게 사이트 내 페이지들의 구조와 업데이트 정보를 제공하여 검색 엔진 크롤러가 사이트를 효율적으로 크롤링하고 인덱싱할 수 있도록 돕습니다.</b>

### 주요 특징

`sitemap.xml`의 주요 특징은 다음과 같습니다.

- `검색 엔진 최적화(SEO)`

  검색 엔진이 사이트의 구조를 더 잘 이해할 수 있도록 하여 새로운 내용이나 갱신된 페이지가 빠르게 인덱싱되도록 지원합니다.

- `사이트 구조 노출`

  페이지 간의 계층 구조, 우선순위(Priority), 변경 빈도(Change Frequency) 등의 정보를 제공하여 검색 엔진이 중요 페이지를 더 잘 파악할 수 있게 합니다.

### 구성 요소

`sitemap.xml`의 구성 요소는 다음과 같습니다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
  <loc>https://hyunjinno.github.io/</loc>
  <lastmod>2025-04-08</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
<url>
  <loc>https://hyunjinno.github.io/categories/</loc>
  <lastmod>2025-04-08</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
</url>
</urlset>
```

| 태그           | 설명                                        | 예시                                                          |
| -------------- | ------------------------------------------- | ------------------------------------------------------------- |
| `<urlset>`     | 여러 개의 `<url>` 요소를 감싸는 최상위 요소 |                                                               |
| `<url>`        | 각각의 페이지 정보를 담는 요소              |                                                               |
| `<loc>`        | 페이지의 절대 URL                           | https://www.example.com/                                      |
| `<lastmod>`    | 마지막 수정 날짜 (형식: YYYY-MM-DD)         | 2025-04-11                                                    |
| `<changefreq>` | 변경 빈도                                   | `always` `hourly` `daily` `weekly` `monthly` `yearly` `never` |
| `<priority>`   | 우선순위                                    | 0.0 ~ 1.0 (기본값: 0.5)                                       |

<blockquote class="prompt-warning"><p><strong><u>Caution</u></strong><br>
<b>changefreq</b>와 <b>priority</b>는 필수가 아니며, 검색 엔진이 이를 반드시 따르지는 않습니다.</p></blockquote>

 
## robots.txt

### 개념

`robots.txt`은 웹 사이트의 최상위 경로(Ex. https://www.example.com/robots.txt)에 위치시키는 텍스트 파일로, 검색 엔진 크롤러에게 `sitemap.xml` 파일의 위치를 알려주고, 어떤 페이지나 섹션을 크롤링해도 되는지, 또는 크롤링하지 말아야 하는지를 지시하는 역할을 합니다.

### 주요 특징

`robots.txt`의 주요 특징은 다음과 같습니다.

- `크롤링 제어`

  민감 정보가 포함된 영역이나, 중복 컨텐츠, 또는 낮은 가치의 페이지 등을 검색 엔진이 크롤링하지 않도록 차단할 수 있습니다.

- `크롤링 허용/차단`

  특정 크롤러에 대해 크롤링을 허용할지, 또는 차단할지 제한할 수 있습니다.

### 구성 요소

`robots.txt`의 구성 요소는 다음과 같습니다.

```text
User-agent: *
Disallow: /assets/
Allow: /

Sitemap: https://hyunjinno.github.io/sitemap.xml
```

| 요소         | 설명                           | 예시                                                                          |
| ------------ | ------------------------------ | ----------------------------------------------------------------------------- |
| `User-agent` | 크롤링을 허용할 검색 엔진 설정 | User-agent: * (모든 검색 엔진에 대해 크롤링 허용)                             |
| `Disallow`   | 크롤링 대상에서 제외할 경로    | Disallow: /assets/ (/assets 경로에 속하는 모든 페이지를 크롤링 대상에서 제외) |
| `Allow`      | 크롤링 대상에 포함할 경로      | Allow: / (모든 페이지를 크롤링 대상으로 설정)                                 |
| `Sitemap`    | `sitemap.xml` 파일의 위치 지정 | Sitemap: https://hyunjinno.github.io/sitemap.xml                              |

<blockquote class="prompt-warning"><p><strong><u>Caution</u></strong><br>
<b>robots.txt</b>은 크롤러에 대한 접근 지침일 뿐이므로, 검색 엔진이 이를 반드시 따르지는 않습니다.</p></blockquote>

## 참고 자료

- <a href="https://velog.io/@ahn-sujin/SEO-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%82%AC%EC%9D%B4%ED%8A%B8%EB%A7%B5-%EB%A7%8C%EB%93%A4%EA%B8%B0" target="_blank">SEO 최적화 - 사이트맵 만들기</a>
- <a href="https://namu.wiki/w/robots.txt" target="_blank">robots.txt - 나무위키</a>
- <a href="https://fourward.co.kr/blog/what-is-robots-txt-and-sitemap-xml" target="_blank">Robots.txt와 Sitemap.xml 개념 이해 및 활용 방법</a>