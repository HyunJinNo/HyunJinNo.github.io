---
title: 웹소켓 (WebSocket)
description: 웹소켓(WebSocket)에 대해 설명하는 페이지입니다.
date: 2024-08-16 00:00:00 +/-TTTT
categories: [Computer Science]
tags: [socket]
math: true
toc: true
pin: false
image:
  path: /assets/img/cs/cs.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br />
Socket</p></blockquote>

## 개요

웹소켓(WebSocket)에 대해 정리한 페이지입니다.

## 폴링과 롱폴링

웹소켓 이전에는 사용자가 직접 화면을 갱신하지 않고 자동으로 화면을 갱신하는 방법으로 `폴링(Polling)` 또는 `롱폴링(Long Polling)` 방법을 사용했습니다. **폴링은 주기적으로 요청을 보내는 방식을 의미하며, 롱폴링은 클라이언트와 서버 간의 커넥션을 유지한 상태로 응답을 주고 받는 방식을 의미합니다.** 하지만 폴링과 롱폴링 방식의 경우 주기적으로 서버에 데이터를 요청하므로 서버에 부담을 주는 문제점이 있습니다.

## 웹소켓이란?

`웹소켓(WebSocket)`이란 하나의 TCP 커넥션으로 서버와 클라이언트 간에 양방향 통신을 할 수 있게 만든 프로토콜을 의미합니다. 웹소켓은 HTTP와 달리 지속적인 연결을 유지하면서 양방향으로 데이터를 주고받을 수 있는 특징이 있습니다. 웹소켓을 사용하면 서버와 클라이언트 사이에서 데이터를 빠르게 주고받을 수 있습니다. HTTP 메서드 중에서 `POST`보다 빠르다는 장점이 있기 때문에 여러 API 또는 여러 게임 멀티플레이에도 사용됩니다. 또한 클라이언트와 서버 간의 실시간 통신이 필요한 채팅 애플리케이션, 실시간 데이터 스트리밍, 주식 애플리케이션, 온라인 게임 등에 사용됩니다.

## 웹소켓의 특징

웹소켓의 주요 특징은 다음과 같습니다.

- `양방향 통신(Full-Duplex Communication)`
  - 웹소켓을 사용하면 데이터의 송수신을 동시에 처리하므로 클라이언트와 서버가 서로 데이터를 자유롭게 주고받을 수 있습니다. 클라이언트가 요청을 보낼 때만 서버가 응답을 보내는 단방향 통신인 HTTP 통신과 달리, 양방향 통신을 지원하므로 클라이언트와 서버가 원하는 때 언제든지 데이터를 주고받을 수 있습니다.
- `지속적인 연결(Persistent Connection)`
  - 웹소켓은 한 번 연결이 맺어지면 지속적인 연결을 유지합니다.
  - 실시간 네트워킹을 구현하는 데 용이합니다.
  - 여러 번의 요청/응답 주기를 거치지 않고도 데이터를 주고받을 수 있어 효율적입니다.
  - 브로드캐스팅을 지원하므로 여러 클라이언트와 빠르게 데이터를 교환할 수 있습니다.
- `낮은 오버헤드(Low Overhead)`
  - HTTP 프로토콜과 달리 웹소켓은 연결 후에는 헤더 정보를 최소화하여 데이터를 전송하므로 데이터 전송 시 오버헤드가 적고 더 빠른 실시간 통신이 가능합니다.
- `표준 프로토콜(Standard Protocol)`
  - 웹소켓은 RFC 6455로 표준화된 프로토콜이므로 대부분의 현대 웹브라우저에서 웹소켓을 지원합니다.
  - IE9 등 오래된 웹브라우저는 지원하지 않습니다.

## 웹소켓의 동작 방식

웹소켓 프로토콜은 크게 `핸드셰이크`와 `데이터 전송`으로 구분할 수 있습니다. 웹소켓의 동작 방식을 설명하자면 다음과 같습니다.

<img src="/assets/img/cs/websocket/pic1.webp" alt="pic1" />

1. `핸드셰이크(Handshake)`

   핸드셰이크는 서버와 클라이언트가 커넥션을 맺는 과정을 의미하며 최초 한 번만 실행됩니다. 웹소켓 연결은 HTTP를 통해 초기화됩니다. HTTP 메서드 중 GET으로 보내야 하며, HTTP 1.1 이상이 필수입니다. 클라이언트가 서버에 웹소켓 연결을 요청하면 서버는 이를 수락하고 HTTP 연결이 웹소켓 연결로 업그레이드됩니다. 핸드셰이크가 완료되면 프로토콜이 HTTP에서 ws로, HTTPS라면 wss로 변경됩니다.

2. `데이터 전송`

   핸드셰이크가 완료되면, 클라이언트와 서버가 서로 데이터를 실시간으로 전송할 수 있게 됩니다. 데이터를 프레임이라는 작은 단위로 전송되며, 각 프레임에는 텍스트, 바이너리 데이터 등이 포함될 수 있습니다.

3. `연결 종료(Close)`

   클라이언트 또는 서버가 연결을 종료할 때, 웹소켓 연결이 히며 핸드셰이크와 유사하게 종료 신호가 교환됩니다.

## 웹소켓의 활용 사례

웹소켓을 활용한 사례는 다음과 같습니다.

- <b>실시간 채팅 애플리케이션</b>

  메세지가 거의 즉시 전달되기 때문에 채팅 애플리케이션에서 널리 사용됩니다.

- <b>실시간 금융 데이터 스트리밍</b>

  주식 가격, 환율 등의 실시간 데이터를 제공하는 서비스에서 사용됩니다.

- <b>온라인 게임</b>

  플레이어 간의 빠르고 실시간으로 데이터를 주고받아야 하는 게임에서 널리 사용됩니다.

- <b>실시간 알림 시스템</b>

  알림을 실시간으로 사용자에게 전달할 수 있습니다.
