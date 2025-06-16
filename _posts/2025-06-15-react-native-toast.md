---
title: React Native 프로젝트에서 토스트 메시지 직접 구현하기
description: React Native 프로젝트에서 토스트 메시지 기능을 직접 구현한 방법에 대해 정리한 페이지입니다.
date: 2025-06-15 21:56:00 +/-TTTT
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
react-native v0.79.2 </p></blockquote>

## 개요

React Native 프로젝트에서 토스트 메시지 기능을 직접 구현한 방법에 대해 정리한 페이지입니다.

## 토스트 메시지 기능을 사용하는 방법

React Native에서 토스트 메시지를 구현하는 방법은 여러 가지가 있습니다.

<b>1. 기본 Android Toast 사용 (Android only)</b>

React Native에서 `ToastAndroid` 모듈을 제공합니다. 모듈 이름을 보면 알 수 있듯이 <b>Android 플랫폼 내에서만 사용할 수 있다는 단점</b>이 있습니다.

```tsx
import { ToastAndroid } from "react-native";

ToastAndroid.showWithGravity(
  "토스트 메시지",
  ToastAndroid.SHORT,
  ToastAndroid.BOTTOM
);
```

<b>2. 외부 라이브러리 사용</b>

`react-native-toast-message` 라이브러리와 같이 외부 라이브러리를 사용하는 방법이 있습니다.

```bash
npm install react-native-toast-message
```

```tsx

```

## 토스트 메시지 기능 구현하기

### Step 1 - Context 생성하기

```typescript
import { createContext } from "react";

export const ToastDispatcherContext = createContext({
  setToastMessage: (_toastMessage: string) => {}
});
```

### Step 2 - ToastProvider 컴포넌트 구현하기

```tsx
import { tw } from "@src/shared/lib/utils";
import { ToastDispatcherContext } from "@src/shared/model";
import { useCallback, useMemo, useState } from "react";
import { Animated, useAnimatedValue, View } from "react-native";

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [message, setMessage] = useState("");
  const opacity = useAnimatedValue(0);

  const setToastMessage = useCallback(
    (toastMessage: string) => {
      setMessage(toastMessage);

      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start(() => {
        setTimeout(() => {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
          }).start();
        }, 2000);
      });
    },
    [opacity]
  );

  const memoizedDispatcher = useMemo(
    () => ({ setToastMessage }),
    [setToastMessage]
  );

  return (
    <ToastDispatcherContext value={memoizedDispatcher}>
      {children}
      <View
        style={tw`absolute bottom-8 left-4 right-4 flex items-center justify-center px-4`}
      >
        <Animated.Text
          style={tw.style(
            "min-w-40 rounded-lg bg-black px-4 py-2 text-sm text-white",
            { opacity }
          )}
        >
          {message}
        </Animated.Text>
      </View>
    </ToastDispatcherContext>
  );
};
```

### Step 3 - React.memo

```tsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigationTypes";
import { BottomTabs } from "./BottomTabs";
import { tw } from "@src/shared/lib/utils";
import { HangulImageTranslationScreen } from "@src/pages/hangulImageTranslation";
import { BrailleImageTranslationScreen } from "@src/pages/brailleImageTranslation";
import { HangulCameraTranslationScreen } from "@src/pages/hangulCameraTranslation";
import { BrailleCameraTranslationScreen } from "@src/pages/brailleCameraTranslation";
import { memo } from "react";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs">
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BrailleCameraTranslation"
          component={BrailleCameraTranslationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BrailleImageTranslation"
          component={BrailleImageTranslationScreen}
          options={{
            title: "점자 이미지 번역",
            headerTitleStyle: tw`text-lg`,
            headerTransparent: true
          }}
        />
        <Stack.Screen
          name="HangulCameraTranslation"
          component={HangulCameraTranslationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HangulImageTranslation"
          component={HangulImageTranslationScreen}
          options={{
            title: "한글 이미지 번역",
            headerTitleStyle: tw`text-lg`,
            headerTransparent: true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const Navigation = memo(NavigationComponent);
```

### Step 4 - 설정

```tsx
import { useEffect } from "react";
import { Navigation } from "./routes";
import SplashScreen from "react-native-splash-screen";
import { ToastProvider } from "@src/shared/ui/toast";

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ToastProvider>
      <Navigation />
    </ToastProvider>
  );
};
```

### Step 5 - 구현 예시

구현한 토스트 메시지 기능을 사용한 예시는 다음과 같습니다.

```typescript
import { useContext } from "react";
import { ToastDispatcherContext } from "@src/shared/model";

const { setToastMessage } = useContext(ToastDispatcherContext);

const handleSaveButtonPress = () => {
  saveHangulToBrailleHistory(state.recognizedText, state.translatedText);
  setToastMessage("번역 기록을 저장하였습니다.");
};
```

## 참고 자료

- <a href="https://www.winterlood.com/qna/React%20Context%EB%A5%BC%20%EC%9D%B4%EC%A4%91%EC%9C%BC%EB%A1%9C%20%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%20%EC%9D%B4%EC%9C%A0" target="_blank">Q. React Context를 이중으로 사용하는 이유가 무엇인가요? (최적화 관련) - Winterlood</a>
- <a href="https://reactnative.dev/docs/animations" target="_blank">Animations · React Native</a>
- <a href="https://ko.react.dev/reference/react/useContext" target="_blank">useContext – React</a>
- <a href="https://ko.react.dev/learn/passing-data-deeply-with-context" target="_blank">Context를 사용해 데이터를 깊게 전달하기 – React</a>
- <a href="https://reactnative.dev/docs/toastandroid" target="_blank">ToastAndroid · React Native</a>
