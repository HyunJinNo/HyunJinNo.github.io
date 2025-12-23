---
title: React Native 프로젝트에 Path Alias 설정 방법
description: React Native 프로젝트에 Path Alias 설정 방법에 대해 정리한 페이지입니다.
date: 2025-05-30 13:43:00 +/-TTTT
categories: [Front-end]
tags: [mobile, react-native, typescript]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/react-native-logo.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br />
Mobile, React Native, TypeScript</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong> <br />
OS: Windows 11 <br />
react v19.0.0 <br />
react-native v0.79.2 <br />
babel-plugin-module-resolver v5.0.2</p></blockquote>

## 1. 개요

React Native 프로젝트에 Path Alias 설정 방법에 대해 정리한 페이지입니다.

## 2. Step 1 - babel-plugin-module-resolver 패키지 설치하기

먼저 다음 명령어를 입력하여 `babel-plugin-module-resolver` 패키지를 설치합니다.

```bash
npm install --save-dev babel-plugin-module-resolver
```

## 3. Step 2 - babel.config.js 설정하기

다음과 같이 `babel.config.js` 파일을 열고 `root`에는 기준이 되는 폴더 경로를, `alias`에는 root와의 상대 경로를 지정합니다.

<img src="/assets/img/front-end/react-native-path-alias/pic1.avif" alt="babel.config.js 설정" />

```javascript
module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@src": "./src",
          "@assets": "./assets"
        }
      }
    ]
  ]
};
```

## 4. Step 3 - tsconfig.json 설정하기

마지막으로 `babel.config.js`에서 지정한 경로를 `tsconfig.json`에도 작성합니다.

```json
{
  "extends": "@react-native/typescript-config/tsconfig.json",
  "compilerOptions": {
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@src/*": ["./src/*"],
      "@assets/*": ["./assets/*"]
    }
  }
}
```

## 5. Step 4 - Path Alias 사용 예시

Path Alias 사용 예시는 다음과 같습니다.

### 5.1. src 폴더 예시

```tsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigationTypes";
import { HomeScreen } from "@src/pages/home";
import { SettingScreen } from "@src/pages/setting";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setting" children={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

### 5.2. assets 폴더 예시

```tsx
import { BACKEND_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import { tw } from "@src/shared/lib/utils";
import { Button, Image, Text, View } from "react-native";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Text>{BACKEND_URL}</Text>
      <Image
        style={tw`aspect-2/3 h-96`}
        source={require("@assets/background.jpg")}
      />
      <Button
        title="설정화면으로"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
};
```

<img src="/assets/img/front-end/react-native-path-alias/pic2.avif" alt="assets 폴더 예시" />

## 6. 참고 자료

- <a href="https://reactnative.dev/docs/typescript#using-custom-path-aliases-with-typescript" target="_blank">Using TypeScript · React Native</a>
