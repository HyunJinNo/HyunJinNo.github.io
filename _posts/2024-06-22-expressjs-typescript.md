---
title: Express.js에서 TypeScript 설정 방법
description: Express.js에서 TypeScript 설정 방법에 대해 설명하는 페이지입니다.
date: 2024-06-22 00:00:00 +/-TTTT
categories: [Back-end]
tags: [typescript, expressjs, ts-node, nodemon]
math: true
toc: true
pin: false
image:
  path: /assets/img/back-end/back-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br />
TypeScript, Express.js, ts-node, Nodemon</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong> <br />
Node.js v20.11.1 <br />
@types/node v20.14.7 <br />
@types/express v4.17.21 <br />
ts-node v10.9.2 <br />
typescript v5.5.2 <br />
nodemon v3.1.4 </p></blockquote>

## 개요

이번 글에서는 타입스크립트(TypeScript)로 Express.js 애플리케이션 설정 방법에 대해 설명하겠습니다.

## Step 1 - package.json 파일 생성

먼저 다음 명령어를 입력하여 `package.json` 파일을 생성합니다.

```bash
npm init -y
```

## Step 2 - Express, TypeScript 관련 패키지 설치하기

먼저 다음 명령어를 입력하여 Express 패키지를 설치합니다.

```bash
npm install express
```

다음으로 Express 애플리케이션에 TypeScript를 설정하기 위해 다음 패키지들을 설치합니다.

- `@types/node`: Node.js 타입 추가
- `@types/express`: Express 타입 추가
- `ts-node`: TypeScript 코드를 JavaScript 코드로 컴파일하지 않고 TypeScript를 직접 실행할 때 사용합니다. 서버를 `development 모드`로 실행할 때 개발 편의성을 위해 컴파일없이 실행하기 위함입니다.
- `typescript`: TypeScript를 설치할 때 사용합니다.
- `nodemon`: 코드를 변경할 때마다 서버를 자동으로 재시작할 때 사용합니다. `ts-node`와 함께 사용되어, TypeScript 코드를 변경할 때 컴파일없이 서버를 자동으로 재시작할 수 있습니다.

```bash
npm install --save-dev @types/node @types/express ts-node typescript nodemon
```

## Step 3 - package.json 스크립트 설정

### scripts란?

`package.json` 파일의 scripts 항목을 통해 다양한 명령어를 설정할 수 있습니다. 해당 항목을 통해 빌드, 실행 등에 사용되는 명령어를 설정합니다.

### scripts 설정

`package.json` 파일의 scripts 항목에 다음 코드를 입력합니다.

```json
"scripts": {
  "build": "tsc",
  "start": "node ./dist/app.js",
  "dev": "nodemon --watch ./src/**/*.ts --exec ts-node ./src/app.ts"
}
```

위에서 설정한 명령어에 대해 설명하면 다음과 같습니다.

- `build`: TypeScript 코드를 JavaScript 코드로 컴파일할 때 사용합니다.
- `start`: 빌드된 JavaScript 코드를 실행할 때 사용하는 명령어로, `build` 명령어로 컴파일한 후 `production 모드`로 실행할 때 사용합니다.
- `dev`: TypeScript 코드를 컴파일하지 않고 `development 모드`로 실행할 때 사용합니다.

## Step 4 - TypeScript 설정 파일

프로젝트 최상위 디렉토리에 `tsconfig.json` 파일을 생성합니다. `npx tsc --init` 명령어를 통해 `tsconfig.json` 파일을 초기화하여 생성할 수 있습니다.

```bash
npx tsc --init
```

`tsconfig.json` 파일이 생성되면 다음과 같이 해당 파일을 수정합니다.

```json
{
  "compilerOptions": {
    // ...

    "outDir": "./dist"

    // ...
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

`compilerOptions` 항목에서 outDir 부분의 주석을 해제하고 TypeScript 코드가 JavaScript 코드로 컴파일되어 저장될 디렉토리를 `dist`로 설정합니다. 또한 `include` 항목을 생성하여 컴파일될 코드를 `src` 디렉토리로 설정하고, `exclude` 항목을 생성하여 `node_modules` 디렉토리 내의 코드를 컴파일 대상에서 제외합니다.

## Step 5 - TypeScript로 Express 애플리케이션 실행하기

### src 디렉토리 생성

먼저 프로젝트 최상단 디렉토리 내에 `src` 디렉토리를 생성합니다.

### app.ts 파일 생성

방금 생성한 `src` 디렉토리 내에 `app.ts` 파일을 생성하고 해당 파일 내에 다음 코드를 입력합니다.

```ts
// src/app.ts

import express, { NextFunction, Request, Response } from "express";

const app = express();
const port = 4000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Express with TypeScript");
});

app.listen(port, () => {
  console.log();
  console.log(`  [Local] http://localhost:${port}`);
  console.log();
});
```

### 서버 실행 (development 모드)

VSCode의 terminal을 열고 프로젝트 디렉토리로 이동하여 다음 명령어를 입력합니다.

```bash
npm run dev
```

서버가 실행되면 브라우저를 열고 <a href="http://localhost:4000" target="_blank">http://localhost:4000/</a> 으로 접속합니다. 화면에 `Express with TypeScript`가 표시된다면 서버 실행에 성공한 것입니다.

<img src="/assets/img/back-end/expressjs-typescript/pic1.avif" alt="pic1"  />

### 코드 수정 후 서버 재시작하기

위에서 설치한 패키지 중 `nodemon`은 코드 변경 시 서버를 자동으로 재시작하기 위해 사용합니다. `app.ts` 파일 내의 `res.send("Express with TypeScript")` 부분을 수정해보도록 하겠습니다. 문자열 `Express with TypeScript`를 `Express.js with TypeScript`로 수정한 후 파일을 저장합니다. 파일을 저장하면 `nodemon`이 `src` 디렉토리 내의 `app.ts` 파일을 재실행합니다. 서버가 재시작한 후 <a href="http://localhost:4000/" target="_blank">http://localhost:4000/</a>에 다시 접속하면 `Express.js with TypeScript`가 화면에 표시되어 있을 것입니다.

<img src="/assets/img/back-end/expressjs-typescript/pic2.avif" alt="pic2" />

### 서버 실행 (production 모드)

`development 모드`가 잘 실행됐음을 확인했으니 이번에는 서버를 `production 모드` 로 실행해보도록 하겠습니다.
VSCode의 terminal에서 `Ctrl + C`를 눌러 서버를 종료한 후 다음 명령어를 입력합니다.

```bash
npm run build
```

빌드 후 프로젝트 디렉토리를 보면 `dist` 디렉토리가 생성되어 있음을 확인할 수 있습니다. 빌드된 파일을 실행하기 위해 다음 명령어를 입력합니다.

```bash
npm run start
```

<img src="/assets/img/back-end/expressjs-typescript/pic3.avif" alt="pic3" />

<img src="/assets/img/back-end/expressjs-typescript/pic4.avif" alt="pic4" />

`production 모드`로 서버를 성공적으로 실행하였습니다.
