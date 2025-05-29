---
title: React Navigation 설정 방법
description: React Native 프로젝트에서 React Navigation 설정 방법에 대해 정리한 페이지입니다.
date: 2025-05-29 10:30:00 +/-TTTT
categories: [Front-end]
tags: [mobile, react-native, react-navigation, typescript]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/react-native-logo.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br />
Mobile, React Native, React Navigation, TypeScript</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong> <br />
OS: Windows 11 <br />
@react-navigation/native v7.1.9 <br />
@react-navigation/native-stack v7.3.13 <br />
react v19.0.0 <br />
react-native v0.79.2 <br />
react-native-safe-area-context v5.4.1 <br />
react-native-screens v4.11.0 <br />
</p></blockquote>

## 개요

React Native 프로젝트에서 React Navigation 설정 방법에 대해 정리한 페이지입니다. <b>`React Native CLI`로 프로젝트를 생성하였으며 Android 플랫폼을 기준으로 설명합니다.</b>

## Step 1 - 패키지 설치하기

먼저 다음 명령어를 입력하여 React Navigation 관련 패키지들을 설치합니다.

```bash
npm install @react-navigation/native react-native-screens react-native-safe-area-context
```

## Step 2 - MainActivity.kt 설정하기

`android/app/src/main/java/[프로젝트 명]/MainActivity.kt` 파일을 열고 다음 코드를 추가합니다.

```kotlin
import android.os.Bundle
```

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(null)
}
```

즉, 다음과 같이 작성되어야 합니다.

```kotlin
package com.example

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "example"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
    DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
}
```

## Step 3 - @react-navigation/native-stack 패키지 설치하기

다음 명렁어를 입력하여 `@react-navigation/native-stack` 패키지를 설치합니다.

```bash
npm install @react-navigation/native-stack
```

## Step 4 - 타입 정의하기

React Navigation을 TypeScript로 사용할 때, 안전한 내비게이션과 라우팅을 위해 타입을 정의해야 합니다.

```typescript
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Setting: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }

  interface RootStackScreenProps<T extends keyof RootStackParamList> {
    navigation: NativeStackNavigationProp<RootStackParamList, T>;
    route: RouteProp<RootStackParamList, T>;
  }
}
```

위의 코드를 설명하자면 다음과 같습니다.

### 스택 내비게이션의 화면 목록 정의

```typescript
export type RootStackParamList = {
  Home: undefined;
  Setting: undefined;
};
```

`RootStackParamList`는 스택 내비게이션에 포함된 화면들을 정의한 타입입니다. 위의 코드에서는 `Home`과 `Setting`이라는 두 개의 화면이 존재하며, 둘 다 매개변수를 받지 않기 때문에 `undefined`로 설정되어 있습니다. 만약 어떤 화면이 매개변수를 받는다면, `Profile: { userId: string }`과 같이 명시하면 됩니다.

### 전역 타입 확장

```typescript
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
```

`ReactNavigation.RootParamList`를 확장하여 `RootStackParamList`와 연결합니다. 이렇게 하면 `useNavigation` 같은 훅을 사용할 때 자동으로 타입을 인식할 수 있습니다.

### 화면 컴포넌트용 Props 타입

```typescript
declare global {
  interface RootStackScreenProps<T extends keyof RootStackParamList> {
    navigation: NativeStackNavigationProp<RootStackParamList, T>;
    route: RouteProp<RootStackParamList, T>;
  }
}
```

스택 내비게이션의 각 화면 컴포넌트의 props 타입을 정의할 때 사용할 인터페이스를 선언합니다. 선언 전에는 다음과 같이 props 타입을 지정해야 합니다.

```tsx
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/app/routes/navigationTypes";
import { DiaryUpdateEditor } from "@src/widgets/diaryUpdateEditor";
import React from "react";

export const DiaryUpdateScreen = ({
  route
}: NativeStackScreenProps<RootStackParamList, "DiaryUpdate">) => {
  return <DiaryUpdateEditor diary={route.params.diary} />;
};
```

반면에, `RootStackScreenProps` 타입을 사용하면 다음과 같이 props 타입을 지정할 수 있습니다.

```tsx
import { DiaryUpdateEditor } from "@src/widgets/diaryUpdateEditor";
import React from "react";

export const DiaryUpdateScreen = ({
  route
}: RootStackScreenProps<"DiaryUpdate">) => {
  return <DiaryUpdateEditor diary={route.params.diary} />;
};
```

## Step 5 - 화면 컴포넌트 생성하기

다음과 같이 간단한 화면 컴포넌트를 정의합니다.

```tsx
import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="설정화면으로"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
};
```

```tsx
import { Text, View } from "react-native";

export const SettingScreen = () => {
  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};
```

## Step 6 - 내비게이션 설정하기

다음과 같이 `createNativeStackNavigator` 함수를 통해 Stack을 생성한 후 내비게이션을 설정합니다.

```tsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigationTypes";
import { HomeScreen } from "../../pages/home";
import { SettingScreen } from "../../pages/setting";

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

```tsx
import { Navigation } from "./routes";

export const App = () => {
  return <Navigation />;
};
```

## Step 7 - React Navigation 설정 예시

React Navigation을 설정한 예시는 다음과 같습니다.

<img src="/assets/img/front-end/react-navigation/pic1.webp" alt="React Navigation 설정 예시" />

## 참고 자료

- <a href="https://reactnavigation.org/" target="_blank">React Navigation | React Navigation</a>
