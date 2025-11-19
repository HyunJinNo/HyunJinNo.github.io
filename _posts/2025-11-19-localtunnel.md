---
title: localtunnel 사용법
description: localtunnel 설치 방법 및 사용법에 대해 정리한 페이지입니다.
date: 2025-11-19 16:43:00 +/-TTTT
categories: [기타]
tags: [localtunnel]
math: true
toc: true
pin: false
image:
  path: /assets/img/etc/localtunnel/localtunnel-logo.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br />
localtunnel</p></blockquote>

## 개요

`localtunnel` 설치 방법 및 사용법에 대해 정리한 페이지입니다.

## localtunnel

### 개념

`localtunnel`은 로컬에서 실행 중인 서버를 외부에서 접근할 수 있는 임시 URL로 만들어주는 서비스입니다. 즉, `localtunnel`을 사용하면 로컬에서 개발 중인 서버(Ex. localhost:3000)를 외부에서 접속할 수 있습니다.

### 특징

`localtunnel`의 특징은 다음과 같습니다.

- `무료 서비스`

  `localtunnel`은 무료로 사용할 수 있으며, 별도의 회원가입은 필요하지 않습니다.

- `개발 및 테스트용`

  로컬에서 개발 중인 서버가 외부에서 잘 동작하는지 개발/테스트용으로 사용할 수 있습니다.

- `포트 지정 가능`

  로컬 서버의 포트를 그대로 외부에 노출하는 것이 가능합니다.

- `커스텀 서브도메인`

  원하는 이름으로 URL을 설정할 수 있습니다. (Ex. yourname.loca.lt)

### 설치 방법

#### npm

`node.js`가 설치되어 있는 경우, `npm`으로 간단히 설치할 수 있습니다. `-g` 옵션을 사용하여 글로벌로 설치하면 됩니다.

```bash
npm install -g localtunnel
```

#### Homebrew

`Homebrew`가 설치되어 있는 경우, 다음 명령어를 입력하여 간단히 설치할 수 있습니다.

```bash
brew install localtunnel
```

### 사용 방법

먼저 로컬 서버를 실행해야 합니다. 다음과 같은 HTML에 대해 `localhost:5500`에서 실행한다고 가정합니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>localtunnel Example</title>
  </head>
  <body>
    <h1>localtunnel Example</h1>
  </body>
</html>
```

<img src="/assets/img/etc/localtunnel/pic1.avif" alt="Live Server로 실행한 로컬 서버" />

<img src="/assets/img/etc/localtunnel/pic2.avif" alt="localhost:5500에서 실행 중인 로컬 서버" />

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br />
VSCode에서 <b>Live Server</b>라는 Extension을 설치하여 실행하였습니다.</p></blockquote>

로컬 서버가 실행되었으면 다음 명령어를 입력하여 localtunnel을 실행합니다.

```bash
lt --port <포트 번호>
```

또는

```bash
lt --port <포트 번호> --subdomain <서브도메인>
```

<img src="/assets/img/etc/localtunnel/pic3.avif" alt="localtunnel 실행" />

표시된 URL로 접속하면 다음과 같은 페이지가 나타납니다. 해당 페이지에는 `Tunnel Password`를 입력하는 부분이 있는데, 웹 페이지 하단에 표시된 링크(<a href="https://loca.lt/mytunnelpassword" target="_blank">https://loca.lt/mytunnelpassword</a>)에 접속하여 확인할 수 있는 공인 IP 주소를 입력한 후 Click to Submit 버튼을 누르면 됩니다.

<img src="/assets/img/etc/localtunnel/pic4.avif" alt="Tunnel Password에는 공인 IP 주소를 입력하면 됩니다." />

Click to Submit 버튼을 클릭하면 다음과 같이 외부에서 로컬 서버에 접근할 수 있게 됩니다.

<img src="/assets/img/etc/localtunnel/pic5.avif" alt="맥북에서 접속한 모습" />

<img src="/assets/img/etc/localtunnel/pic6.avif" alt="모바일에서 접속한 모습" />

## 참고 자료

- <a href="https://theboroer.github.io/localtunnel-www/" target="_blank">Localtunnel ~ Expose yourself to the world</a>
- <a href="https://velog.io/@bbaa3218/로컬-호스트-서버-배포하기-ngrok-localtunnel" target="_blank">로컬 호스트 서버 배포하기 (ngrok, localtunnel)</a>
- <a href="https://kibua20.tistory.com/151" target="_blank">외부 망에서 Localhost를 접속하기: localtunnel (무료, domain제공)<a>
