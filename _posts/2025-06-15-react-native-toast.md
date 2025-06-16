---
title: React Native 프로젝트에서 토스트 메시지 직접 구현하기
description: React Native 프로젝트에서 토스트 메시지 기능을 직접 구현하는 방법에 대해 정리한 페이지입니다.
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

React Native 프로젝트에서 토스트 메시지 기능을 직접 구현하는 방법에 대해 정리한 페이지입니다.

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
import Toast from "react-native-toast-message";

export const App = () => {
  return (
    <>
      <YourComponent>
      <Toast />
    </>
  );
};
```

```typescript
import Toast from "react-native-toast-message";

Toast.show({
  type: "success", // 'success' | 'error' | 'info'
  text1: "성공!",
  text2: "저장에 성공했습니다."
});
```

<b>3. 커스텀 토스트 컴포넌트 사용</b>

외부 라이브러리를 사용하기 않고 간단한 커스텀 토스트 컴포넌트를 구현하여 원하는 위치와 스타일로 토스트 메시지를 출력할 수 있습니다.

## 토스트 메시지 기능 구현하기

이 문단에서는 간단한 커스텀 토스트 컴포넌트를 구현하는 방식을 설명합니다.

### Step 1 - Context 생성하기

토스트 메시지를 앱 어디서든 쉽게 사용할 수 있도록 하려면, 토스트 컴포넌트를 루트에 두고 전역 상태(Context)를 통해 제어하는 방식이 좋습니다. 따라서 먼저 다음과 같이 토스트 메시지 설정을 담당하는 Context를 생성합니다.

```typescript
import { createContext } from "react";

export const ToastDispatcherContext = createContext({
  setToastMessage: (_toastMessage: string) => {}
});
```

### Step 2 - ToastProvider 컴포넌트 구현하기

생성된 Context를 이용하여 다음과 같이 ToastProvider 컴포넌트를 구현합니다. 해당 컴포넌트는 토스트 메시지 기능을 사용할 수 있는 컴포넌트들을 children으로 전달받습니다.

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

위의 코드를 설명하자면 다음과 같습니다.

#### setToastMessage 함수

```typescript
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
```

토스트 메시지를 애니메이션을 활용하여 출력할 예정이므로 다음과 같이 토스트 메시지의 opacity를 `useAnimatedValue` 훅을 사용하여 설정합니다. 토스트 메시지를 출력할 때 처음에는 보이지 않다가 시간이 흐르면서 화면에 출력되어야 하므로 초깃값은 0(={ opacity: 0 })으로 설정합니다. 이후 setToastMessage 함수를 구현합니다. 해당 함수는 토스트 메시지를 출력하는 함수로, <b>토스트 메시지가 화면에 출력된 후 약 2초 동안 보이다가, 이후에 사라지도록 구현</b>되었습니다. 또한 `useState`로 선언한 message 상태가 변경되면 ToastProvider 컴포넌트가 리렌더링되고 setToastMessage 함수도 새로 생성됩니다. <b>setToastMessage 함수는 props로 전달하므로, 불필요한 리렌더링 유발을 방지하기 위해 `useCallback`을 사용</b>하였습니다.

#### memoizedDispatcher 함수

```typescript
const memoizedDispatcher = useMemo(
  () => ({ setToastMessage }),
  [setToastMessage]
);
```

구현한 ToastProvider 컴포넌트에서 Context의 value에 setToastMessage 함수를 넘길 때 객체 형태(`{ setToastMessage: setToastMessage }`)로 넘기고 있습니다. <b>ToastProvider 컴포넌트가 리렌더링될 떄마다 value에 지정한 객체도 새로 생성되므로 해당 Context를 구독하고 있는 모든 컴포넌트에 불필요한 리렌더링을 유발</b>하게 됩니다. 따라서 이를 방지하기 위해 <b>`useMemo`를 사용하여 Context의 value에 넘길 객체가 새로 생성되는 것을 방지</b>하였습니다.

#### return

```tsx
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
```

토스트 메시지를 사용할 컴포넌트를 children으로 감싸는 부분입니다. 토스트 메시지는 화면 하단에 표시되도록 구현하였습니다.

### Step 3 - React.memo 사용하기

위에서 언급한 ToastProvider 컴포넌트는 토스트 메시지를 사용할 컴포넌트들을 children으로 전달받습니다. setToastMessage 함수를 사용하면 ToastProvider 컴포넌트가 리렌더링되고, 자식 컴포넌트에 해당하는 children도 리렌더링됩니다. 따라서 <b>토스트 메시지를 출력할 때 불필요한 리렌더링을 방지하기 위해 다음과 같이 children에 해당하는 컴포넌트를 `React.memo`로 감쌉니다.</b>

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

### Step 4 - app.tsx 설정

다음과 같이 토스트 메시지를 사용할 컴포넌트를, 위에서 구현한 ToastProvider 컴포넌트로 감쌉니다. 이렇게 하면 Navigation 컴포넌트를 포함한 자식 컴포넌트들은 `useContext` 훅을 사용하여 토스트 메시지를 출력할 수 있게 됩니다.

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

/* ... */

const { setToastMessage } = useContext(ToastDispatcherContext);

const handleSaveButtonPress = () => {
  saveHangulToBrailleHistory(state.recognizedText, state.translatedText);
  setToastMessage("번역 기록을 저장하였습니다.");
};

/* ... */
```

<img src="/assets/img/front-end/react-native-toast/pic1.webp" alt="토스트 메시지 출력 예시" />

## 참고 자료

- <a href="https://www.winterlood.com/qna/React%20Context%EB%A5%BC%20%EC%9D%B4%EC%A4%91%EC%9C%BC%EB%A1%9C%20%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%20%EC%9D%B4%EC%9C%A0" target="_blank">Q. React Context를 이중으로 사용하는 이유가 무엇인가요? (최적화 관련) - Winterlood</a>
- <a href="https://reactnative.dev/docs/animations" target="_blank">Animations · React Native</a>
- <a href="https://ko.react.dev/reference/react/memo" target="_blank">memo – React</a>
- <a href="https://ko.react.dev/reference/react/useContext" target="_blank">useContext – React</a>
- <a href="https://ko.react.dev/learn/passing-data-deeply-with-context" target="_blank">Context를 사용해 데이터를 깊게 전달하기 – React</a>
- <a href="https://reactnative.dev/docs/toastandroid" target="_blank">ToastAndroid · React Native</a>
