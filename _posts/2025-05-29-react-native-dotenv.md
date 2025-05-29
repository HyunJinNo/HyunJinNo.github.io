---
title: React Native + env 설정 방법
description: React Native + env 설정 방법에 대해 정리한 페이지입니다.
date: 2025-05-29 15:44:00 +/-TTTT
categories: [Front-end]
tags: [mobile, react-native, typescript]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/react-native-logo.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br /> Mobile, React Native, TypeScript</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong> <br />
OS: Windows 11 <br />
react v19.0.0 <br />
react-native v0.79.2 <br />
react-native-dotenv v3.4.11</p></blockquote>

## 개요

React Native + env 설정 방법에 대해 정리한 페이지입니다.

## Step 1 - react-native-dotenv 패키지 설치

먼저 다음 명령어를 입력하여 `react-native-dotenv` 패키지를 설치합니다.

```bash
npm install -D react-native-dotenv
```

## Step 2 - babel 설정하기

패키지 설치 이후에는 React Native 프로젝트에서 환경 변수를 사용할 수 있도록 `babel.config.js` 파일을 열고 다음 설정을 추가합니다.

<img src="/assets/img/front-end/react-native-dotenv/pic1.avif" alt="babel 설정하기" />

```javascript
module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: false,
        verbose: false
      }
    ]
  ]
};
```

- `moduleName`: 모듈 이름을 지정합니다.
- `path`: .env 파일 경로를 지정합니다.
- `allowUndefined`: true일 경우, 정의하지 않은 환경 변수를 사용하려고 할 때 `undefined`가 반환됩니다. false일 경우, 에러가 발생합니다.

## Step 3 - .env 파일 생성하기

먼저 `.gitignore` 파일을 열고 `.env` 파일을 목록에 추가합니다. 이는 Git 관리 대상에서 `.env` 파일을 제외시켜서 원격 저장소에 중요한 정보가 공개되지 않도록 방지하기 위함입니다.

<img src="/assets/img/front-end/react-native-dotenv/pic2.avif" alt=".gitignore 수정하기" />

```
# env
.env
```

이후 `.env` 파일을 생성한 후 다음과 같이 환경 변수 값을 정의합니다.

<img src="/assets/img/front-end/react-native-dotenv/pic3.avif" alt=".env 파일 생성하기" />

```
BACKEND_URL=http://localhost:8080
```

## Step 4 - env.d.ts 파일 생성하기

TypeScript에서 환경 변수를 사용하려고 하면 다음과 같이 에러 메시지가 출력됩니다.

<img src="/assets/img/front-end/react-native-dotenv/pic4.avif" alt="TypeScript에서 환경 변수를 사용하려고 할 경우 에러 메시지가 출력됩니다." />

이 문제를 해결하기 위해선 모듈에 대한 타입을 명시해야 합니다. 다음과 같이 `env.d.ts` 파일을 생성한 후 `.env` 파일에 정의한 환경 변수 목록을 작성합니다.

<img src="/assets/img/front-end/react-native-dotenv/pic5.avif" alt="TypeScript에서 환경 변수를 사용할 수 있도록 env.d.ts 파일을 생성합니다." />

```typescript
/* env.d.ts */

declare module "@env" {
  export const BACKEND_URL: string;
}
```

이후 다음과 같이 에러 메시지가 없어진 것을 확인할 수 있습니다.

<img src="/assets/img/front-end/react-native-dotenv/pic6.avif" alt="import" />

<img src="/assets/img/front-end/react-native-dotenv/pic7.avif" alt="더 이상 에러 메시지가 표시되지 않습니다." />

## Step 5 - 사용 예시

환경 변수를 사용한 예시는 다음과 같습니다.

```tsx
import { BACKEND_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Text>{BACKEND_URL}</Text>
      <Button
        title="설정화면으로"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
};
```

<img src="/assets/img/front-end/react-native-dotenv/pic8.avif" alt="env 설정 예시" />

## 참고 자료

- <a href="https://github.com/goatandsheep/react-native-dotenv" target="_blank">goatandsheep/react-native-dotenv: Load react native environment variables using import statements for multiple env files.</a>
- <a href="https://adjh54.tistory.com/230" target="_blank">[RN] React Native dotenv 이해하고 설정하기 : Typescript와 함께 사용</a>
