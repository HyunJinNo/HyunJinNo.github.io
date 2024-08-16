---
layout: post
title: Nest.js socket.io 사용 방법
description: >
  Nest.js에서 socket.io 사용 방법을 설명하는 페이지입니다.
image:
  path: /assets/img/back-end/back-end.jpg
related_posts:
  - None
sitemap: true
comments: false
---

<i>Environment</i>

- <i>Node.js v20.11.1</i>

<h2> 목차 </h2>

- [개요](#개요)
- [socket.io란?](#socketio란)
- [socket.io의 특징](#socketio의-특징)
- [Step 1 - 패키지 설치하기](#step-1---패키지-설치하기)
- [Step 2 - 정적 파일 서비스하기](#step-2---정적-파일-서비스하기)
- [Step 3 - 게이트웨이 생성하기](#step-3---게이트웨이-생성하기)
- [Step 4 - ?](#step-4---)
- [참고 자료](#참고-자료)
- [Comments](#comments)

## 개요

이번 글에서는 `NestJS`에서 `socket.io`를 활용하여 채팅 애플리케이션을 만드는 방법을 설명하겠습니다. 웹소켓에 대한 개념의 경우 다음 링크에 작성하였으니 참고하시길 바랍니다.

<a href="../../cs/2024-08-16-websocket">웹소켓 (WebSocket)</a>

## socket.io란?

`socket.io`란 웹소켓을 기반으로 서버와 클라이언트의 양방향 통신을 지원하는 라이브러리입니다. 주로 실시간 웹 애플리케이션을 개발할 때 자주 사용되는 JavaScript 라이브러리입니다. 기본적으로 웹소켓을 지원하며, 웹소켓을 지원하지 않는 브라우저에서는 롱폴링 방식을 사용한 통신을 지원합니다. 또한 재접속, 브로드캐스트, 멀티플렉싱(채팅방) 기능도 제공합니다.

## socket.io의 특징

`socket.io`의 특징은 다음과 같습니다.

- **브라우저 호환성(Brower Compatibility)**

  `socket.io`는 다양한 브라우저 환경에서 호환성을 보장합니다. 웹소켓을 지원하지 않는 브라우저에서는 `롱폴링(Long Polling)`과 같은 다른 대체 통신 방식을 사용하여 연결을 유지합니다.

- **자동 재연결(Automatic Reconnection)**

  클라이언트와 서버 간의 연결이 끊어지면, `socket.io`는 자동으로 재연결을 시도합니다. 이를 통해 네트워크 상태가 불안정한 환경에서도 안정적인 통신이 가능합니다.

- **이벤트 기반 통신(Event-based Communication)**

  `socket.io`는 이벤트 기반 모델을 사용하여 데이터를 주고받습니다. 개발자는 특정 이벤트를 정의하고, 그 이벤트가 발생할 때 실행한 콜백 함수를 지정할 수 있습니다. 이를 통해 데이터 전송 및 처리 로직을 단순하고 직관적으로 만들 수 있습니다.

- **실시간 채팅, 알림, 스트리밍에 최적화**

  `socket.io`는 실시간 채팅 애플리케이션, 알림 시스템, 스트리밍 애플리케이션 등에 최적화되어 있어, 실시간 웹 애플리케이션을 개발할 때 널리 사용됩니다.

- **네임스페이스(Namespaces)**

  `socket.io`는 네임스페이스를 지원하여 동일한 서버에서 여러 개의 독립적인 통신 채널을 관리할 수 있습니다. 이를 통해 다양한 유형의 통신을 분리하고 관리할 수 있습니다.

- **룸(Rooms)**

  네임스페이스 내에서 클라이언트를 그룹으로 묶어 특정 그룹(룸)으로 메세지를 보낼 수 있습니다. 예를 들어, 같은 채팅방에 있는 사용자들에게만 메세지를 전송할 때 유용합니다.

## Step 1 - 패키지 설치하기

먼저 다음 명령어를 입력하여 필요한 패키지를 설치합니다.

```bash
npm install @nestjs/websockets @nestjs/platform-socket.io
```

```bash
npm install --save-dev @types/socket.io
```

각 패키지를 설명하자면 다음과 같습니다.

- `@nestjs/websockets`

  웹소켓 프로토콜 기반의 애플리케이션 구현 시 필요한 패키지입니다.

- `@nestjs/platform-socket.io`

  `NestJS`에서 `socket.io`을 사용할 때 설치하는 패키지입니다. `socket.io`가 아닌 웹소켓을 사용하기 위해 `@nestjs/platform-ws` 패키지를 대신 설치할 수 있습니다.

- `@types/socket.io`

  `socket.io`를 TypeScript 파일에서 사용할 수 있도록 설치하는 패키지입니다.

## Step 2 - 정적 파일 서비스하기

이번 글에서는 별도의 프론트엔드 프레임워크를 사용하지 않고 html 파일을 직접 작성하여 테스트할 예정입니다. `NestJS`에서 정적 파일을 서비스하는 방법은 [serve-static 패키지를 설치해서 서비스하는 방법](../2024-08-12-nestjs-file-upload/#step-4---정적-파일-서비스하기)도 있지만, 이번 글에서는 설정이 간단하므로 `Express.js`를 사용하여 `static asset`을 설정하는 방법을 선택하겠습니다. 다음과 같이 `main.ts` 파일에 정적 파일 경로를 지정하면 됩니다.

```typescript
(...)

import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

// NestJS를 실행시키는 함수
// NestJS에서는 진입점을 bootstrap()으로 이름 짓는 것이 관례이다.
async function bootstrap() {
  // NestFactory를 사용해서 NestApplication 객체 생성
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  (...)

  // 정적 파일 경로 지정
  app.useStaticAssets(join(__dirname, "..", "static"));

  (...)
}

bootstrap();
```

위의 코드에서 `useStaticAssets()` 메서드에 경로만 지정하면 `NestJS`에세 정적 파일을 서비스할 수 있습니다. 또한 기존의 `main.ts` 파일과 달리 `NestFactory.create()` 메서드에 `NestExpressApplication`으로 반환값의 타입을 지정하였습니다. 이는 `useStaticAssets()` 미들웨어는 `Express.js`에 있기 때문에 `Express.js`의 미들웨어를 사용하기 위해 app 인스턴스를 만들 때 제네릭 타입으로 `NestExpressApplication`을 선언해야하기 때문입니다.

## Step 3 - 게이트웨이 생성하기

`NestJS`에서 웹소켓을 사용한 통신을 받아주는 클래스를 `게이트웨이(Gateways)`라고 부릅니다. HTTP 프로토콜을 컨트롤러가 받는다면, ws 프로토콜은 게이트웨이가 받습니다. 게이트웨이를 사용하면 의존성 주입, 데코레이터, 필터, 가드 등의 `NestJS` 기능을 사용할 수 있습니다.

**작성 중...**

## Step 4 - ?

## 참고 자료

- <a href="https://docs.nestjs.com/websockets/gateways" target="_blank">Gateways | NestJS - A progressive Node.js framework</a>

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
