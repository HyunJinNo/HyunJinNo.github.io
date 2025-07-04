---
title: React Native + Splash Screen 적용 방법
description: React Native + Splash Screen 적용 방법에 대해 설명하는 페이지입니다.
date: 2024-12-28 00:00:00 +/-TTTT
categories: [Front-end]
tags: [typescript, react-native, mobile, android-studio]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/react-native-logo.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br> TypeScript, React Native, Mobile, Android Studio</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong> <br>
OS: Windows 11 <br>
react-native v0.76.5 <br>
react-native-splash-screen v3.3.0 </p></blockquote>

## 개요

이번 글에서는 `Android` 플랫폼을 대상으로 한 React Native 프로젝트에서 `스플래시 화면(Splash Screen)`을 구현하는 방법에 대해 설명하겠습니다.

## Step 1 - react-native-splash-screen 패키지 설치하기

먼저 다음 명령어를 입력하여 `react-native-splash-screen` 패키지를 설치합니다.

```bash
npm install react-native-splash-screen
```

## Step 2 - 이미지 추가하기

다음과 같이 `android/app/src/main/res/drawable` 폴더에 스플래시 화면에 표시할 이미지를 추가합니다.

<img src="/assets/img/front-end/react-native-splash-screen/pic1.avif" alt="pic1" />

## Step 3 - 스플래시 화면 생성하기

이미지를 추가한 후 `android/app/src/main/res` 폴더에 `layout 폴더`를 생성한 후 해당 폴더에 `launch_screen.xml` 파일을 생성한 후 다음과 같이 작성합니다. `android:background="#00B488"`처럼 원하는 배경색을 지정하는 등 커스텀하면 됩니다. 또한 `android:src="@drawable/solitour_logo"`처럼 `drawable` 폴더에 추가한 이미지를 등록하면 됩니다. 예를 들어 `splash_logo.png`를 추가하였을 경우 `@drawable/splash_logo`처럼 지정하면 됩니다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#00B488">
    <ImageView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:src="@drawable/solitour_logo"
        android:scaleType="centerCrop"
        android:layout_centerInParent="true" />
</RelativeLayout>
```

## Step 4 - MainActivity.kt 설정하기

스플래시 화면을 생성한 후 `android/app/src/main/java/com/[프로젝트 명]/MainActivity.kt`을 열고 다음 코드를 추가합니다.

```kotlin
/* ... */

import android.os.Bundle
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity() {
  /* ... */

  override fun onCreate(savedInstanceState: Bundle?) {
    SplashScreen.show(this)
    super.onCreate(null)
  }
}

```

## Step 5 - App.tsx 설정하기

`App.tsx` 파일을 열고 다음 코드를 추가합니다. 해당 코드는 스플래시 화면이 표시된 후 앱이 준비되었을 때 스플래시 화면을 닫는 코드입니다.

```typescript
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

/* ... */

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  /* ... */
};
```

## Step 6 - gradle.properties 설정하기

마지막으로 `android/gradle.properties` 파일을 열고 다음 코드를 추가합니다.

```properties
android.enableJetifier=true
```

## 구현 예시

스플래시 화면을 구현한 예시는 다음과 같습니다.

<br/>

<video width="360" controls> 
<source src="/assets/video/front-end/react-native-splash-screen/video1.webm" type="video/webm" />
Your browser does not support the video format. Please try a different browser.
</video>

## 참고 자료

- <a href="https://github.com/crazycodeboy/react-native-splash-screen" target="_blank">react-native-splash-screen</a>
- <a href="https://blog.logrocket.com/building-splash-screens-react-native/#building-splash-screen-android" target="_blank">Building splash screens in React Native</a>
