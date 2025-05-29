---
title: React Navigation 설정 방법
description: React Native 프로젝트에 React Navigation 설정 방법에 대해 정리한 페이지입니다.
date: 2024-12-13 00:00:00 +/-TTTT
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

React Native 프로젝트에 React Navigation 설정 방법에 대해 정리한 페이지입니다. <b>`React Native CLI`로 프로젝트를 시작하였으며 Android 플랫폼을 기준으로 설명합니다.</b>

## Step 1 - 패키지 설치하기

먼저 다음 명령어를 입력하여 React Navigation 관련 패키지들을 설치합니다.

```bash
npm install @react-navigation/native react-native-screens react-native-safe-area-context
```

## Step 2 - MainActivity.kt 수정하기

`android/app/src/main/java/<your package name>/MainActivity.kt` 파일을 열고 다음 코드를 추가합니다.

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
package com.real_time_braille_translator

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
  override fun getMainComponentName(): String = "real_time_braille_translator"

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

먼저 다음 명렁어를 입력하여 `@react-navigation/native-stack` 패키지를 설치합니다.

```bash
npm install @react-navigation/native-stack
```

// TODO

## 참고 자료

- <a href="https://reactnavigation.org/" target="_blank">React Navigation | React Navigation</a>
