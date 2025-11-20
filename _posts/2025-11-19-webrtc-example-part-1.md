---
title: WebRTC 사용법 - Part 1
description: WebRTC (Web Real-Time Communication) 사용법에 대해 정리한 페이지입니다.
date: 2025-11-09 00:00:00 +/-TTTT
categories: [Computer Science]
tags: [webrtc]
math: true
toc: true
pin: false
image:
  path: /assets/img/cs/cs.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br />
WebRTC</p></blockquote>

## 개요

`WebRTC(Web Real-Time Communication)`를 사용해 브라우저끼리 직접 연결(P2P)하여 <b>Mesh 방식으로 1:1 화상 회의</b>를 구현하는 방법을 정리한 페이지입니다.

WebRTC로 화상 회의를 구현할 수 있는 방식에는 크게 다음 3가지가 있습니다.

| 방식                            | 특징                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| Mesh                            | 브라우저끼리 직접 연결(P2P)                                  |
| SFU (Selective Forwarding Unit) | 중앙 서버가 여러 Peer의 영상을 받아서 필요한 Peer에게만 전달 |
| MCU (Multipoint Control Unit)   | 중앙 서버가 모든 스트림을 혼합해 단일 스트림으로 제공        |

이번 글에서는 WebRTC의 가장 기본 구조이자 가장 단순한 방식인 <b>Mesh</b> 방식으로 구현합니다.

## Mesh 방식

Mesh 방식은 WebRTC의 가장 기본 구조이자 가장 단순한 방식으로, 브라우저끼리 직접 연결(P2P)을 맺게 됩니다. Peer 수가 늘어날 수록 각 연결에 대한 리소스 소모가 커지며, 특히 대역폭과 CPU에 부담이 생길 수 있습니다. 또한 서버 비용이 거의 없다는 특징이 있습니다.

Mesh 방식은 구현이 간단하고 서버 비용이 적게 든다는 장점이 있지만, 연결이 늘어날 수록 네트워크 및 CPU 부담이 커지기 때문에, 여러 명의 참가자가 존재하는 경우에는 성능 저하가 발생할 수 있다는 단점이 있습니다. 따라서 Mesh 방식은 비교적 소규모 화상 회의(2 ~ 4명)나 간단한 P2P 파일 공유에 적합한 방식입니다.

따라서 이번 글에서는 소규모 화상 회의에 해당하는 1:1 화상 회의를 Mesh 방식으로 구현합니다. Mesh 방식 이외에 SFU 방식과 MCU 방식에 대해선 다음 링크를 참고하시길 바랍니다.

<a href="../webrtc/#webrtc-접근-방식">WebRTC 접근 방식</a>

## 구현 구조 (Mesh 방식 흐름)

Mesh 방식은 다음 흐름으로 동작합니다.

## WebRTC로 1:1 화상 회의 구현하기

### Front-end

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>WebRTC Example</title>
  </head>
  <body>
    <h1>WebRTC Example</h1>

    <video id="localVideo" autoplay></video>
    <video id="remoteVideo" autoplay></video>

    <button id="startButton">Start</button>
    <button id="callButton">Call</button>

    <script src="https://cdn.socket.io/4.8.1/socket.io.min.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
```

```css
video {
  border: 1px solid black;
  width: 320px;
  height: 180px;
}

button:active {
  background: #000;
}
```

```javascript
/**
 * 이 코드는 다음 순서로 동작합니다.
 *
 * 1. Socket.io 서버에 연결합니다.
 * 2. Start 버튼을 누르면 카메라/마이크 스트림을 가져와 화면에 보여줍니다.
 * 3. Call 버튼을 누르면 PeerConnection을 만들고 offer를 생성해 상대에게 전송합니다.
 * 4. 상대는 offer를 받아 PeerConnection을 만들고 Answer로 응답합니다.
 * 5. 두 브라우저는 서로의 ICE 후보를 주고받아 P2P 연결을 완성합니다.
 * 6. 연결되면 각자의 영상이 상대 화면에 표시됩니다.
 */

// socket.io 인스턴스를 생성합니다.
// 백엔드 시그널링 서버에 연결합니다.
// 여기서는 localtunnel 도메인을 사용합니다.
const socket = io("https://wet-cases-roll.loca.lt");

// DOM 요소를 가져옵니다.
// 내 영상/상대 영상을 표시할 HTML <video> 요소를 가져옵니다.
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");

/**
 * @description 사용자 카메라/마이크 스트림을 담을 변수
 * @type {MediaStream}
 */
let localStream;

/**
 * @description P2P 연결을 관리한 RTCPeerConnection 객체를 담을 변수
 * @type {RTCPeerConnection}
 */
let peerConnection;

// "Start" 버튼 클릭 시 카메라 & 마이크 권한을 요청한 후 스트림을 가져옵니다.
// 내 화면(localVideo)에 미리보기를 출력하며, 아직 WebRTC 연결을 시작하지 않습니다.
document.getElementById("startButton").addEventListener("click", async () => {
  // 브라우저에 카메라/마이크 사용 권한을 요청하고 스트림을 얻습니다.
  localStream = await navigator.mediaDevices.getUserMedia({
    video: true, // 카메라
    audio: true // 마이크
  });

  // 얻은 로컬 미디어 스트림을 로컬 <video> 요소의 srcObject로 설정해 화면에 보여줍니다.
  localVideo.srcObject = localStream;
});

// "Call" 버튼 클릭 시 PeerConnection 생성 및 offer SDP (Session Description Protocol) 생성 후 전달합니다.
document.getElementById("callButton").addEventListener("click", async () => {
  createPeerConnection();

  // 내 미디어를 PeerConnection에 추가하여 상대에게 전송 가능하게 합니다.
  localStream.getTracks().forEach((track) => {
    peerConnection.addTrack(track, localStream);
  });

  // 로컬 SDP offer를 생성하고 저장합니다.
  const offer = await peerConnection.createOffer();

  // 생성한 offer를 로컬 설명으로 설정(로컬 상태에 반영)합니다.
  await peerConnection.setLocalDescription(offer);

  // offer를 시그널링 서버를 통해 상대에게 전달합니다.
  socket.emit("offer", offer);
});

/**
 * @description PeerConnection 생성 함수
 */
function createPeerConnection() {
  peerConnection = new RTCPeerConnection({
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }] // Google의 공용 STUN 서버
  });

  // 원격 트랙이 수신되면 원격 비디오에 연결합니다.
  // 상대 영상이 들어오면 remoteVideo에 표시합니다.
  peerConnection.addEventListener("track", (event) => {
    remoteVideo.srcObject = event.streams[0];
  });

  // ICE Candidate 발생 시 전송
  peerConnection.addEventListener("icecandidate", (event) => {
    if (event.candidate) {
      // 생성된 ICE 후보를 시그널링 서버로 전송해 다른 피어가 네트워크 연결을 시도할 수 있게 합니다.
      socket.emit("candidate", event.candidate);
    }
  });
}

// ---- Socket.io 이벤트 처리 ----

// offer 수신 시 answer를 생성해 전송합니다.
socket.on("offer", async (offer) => {
  createPeerConnection();

  await peerConnection.setRemoteDescription(offer);

  // 내 미디어를 PeerConnection에 추가합니다.
  localStream.getTracks().forEach((track) => {
    peerConnection.addTrack(track, localStream);
  });

  // 수신한 offer에 대한 SDP answer를 생성합니다.
  const answer = await peerConnection.createAnswer();

  // 생성한 answer를 로컬 설명으로 설정합니다.
  await peerConnection.setLocalDescription(answer);

  // 생성한 answer를 시그널링 서버로 전송해 offer를 전송한 쪽이 이를 수신하도록 합니다.
  socket.emit("answer", answer);
});

// answer 수신 시
socket.on("answer", async (answer) => {
  // 수신한 answer를 원격 설명으로 설정해 양쪽의 SDP 교환을 완료합니다.
  await peerConnection.setRemoteDescription(answer);
});

// ICE Candidate 수신 시
socket.on("candidate", async (candidate) => {
  try {
    await peerConnection.addIceCandidate(candidate);
  } catch (error) {
    console.error(`Error adding ICE candidate: ${error}`);
  }
});
```

### Back-end (시그널링 서버)

```typescript
/**
 * offer/answer/candidate를 교환하는 역할만 수행하는 서버(시그널링)
 */

import express, {
  type NextFunction,
  type Request,
  type Response
} from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});
const port = 4000;

io.on("connection", async (socket) => {
  console.log(`A user connected: ${socket.id}`);

  socket.on("offer", (data: RTCSessionDescriptionInit) => {
    console.log(`Received offer from: ${socket.id}`);
    socket.broadcast.emit("offer", data);
  });

  socket.on("answer", (data: RTCSessionDescriptionInit) => {
    console.log(`Received answer from: ${socket.id}`);
    socket.broadcast.emit("answer", data);
  });

  socket.on("candidate", (data: RTCIceCandidate) => {
    console.log(`Received candidate from: ${socket.id}`);
    socket.broadcast.emit("candidate", data);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Express with TypeScript");
});

server.listen(port, () => {
  console.log();
  console.log(`  [Local] http://localhost:${port}`);
  console.log();
});
```

## 정리

TODO

## 참고 자료

- <a href="https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API" target="_blank">WebRTC API</a>
- <a href="https://hwanheejung.tistory.com/47" target="_blank">[WebRTC] 화상 회의를 구현하는 방법 (1:1)</a>
