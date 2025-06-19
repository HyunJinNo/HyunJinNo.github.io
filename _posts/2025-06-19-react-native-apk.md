---
title: React Native APK 빌드 방법
description: React Native APK 빌드 방법에 대해 정리한 페이지입니다.
date: 2025-06-19 16:02:00 +/-TTTT
categories: [Front-end]
tags: [apk, mobile, react-native, typescript]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/react-native-logo.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br />
APK, Mobile, React Native, TypeScript</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong> <br />
OS: Windows 11 <br />
react v19.0.0 <br />
react-native v0.79.2 </p></blockquote>

## 개요

React Native 프로젝트에서 APK 빌드 방법에 대해 정리한 페이지입니다. `Debug APK (테스트용 APK)` 빌드 방법과 `Release APK (배포용 APK)` 빌드 방법을 각각 정리하였습니다.

## Debug APK vs Release APK

| 항목        | Debug APK                                      | Release APK                                 |
| ----------- | ---------------------------------------------- | ------------------------------------------- |
| 목적        | 개발/테스트용                                  | 배포용                                      |
| 최적화      | X                                              | O                                           |
| Metro 서버  | 필요함 (기본 설정상 JS 코드가 서버에서 로드됨) | 불필요함 (JS 코드가 앱에 내장되어 번들링됨) |
| 디버그 도구 | 로그, DevTools 등 사용 가능                    | 사용 불가능                                 |
| 서명        | 디버그 키로 자동 서명됨                        | 배포용 키로 수동 서명 필요                  |
| 명령어      | `assembleDebug`                                | `assembleRelease`                           |

## Debug APK 빌드하기

먼저 프로젝트 루트에서 android 폴더로 이동합니다.

```bash
cd android
```

이후 다음 명령어를 입력하여 `Debug APK`를 빌드할 수 있습니다.

```bash
./gradlew assembleDebug
```

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br />
<b>./gradlew assembleDebug</b> 명령어는 React Native 앱의 Debug APK 파일을 생성할 때 사용하는 명령어입니다. <br />
<br />
<b>.gradlew</b><br />
- 프로젝트 내에 있는 Gradle Wrapper 실행 파일 <br />
- Gradle이 시스템에 설치되어 있지 않아도 빌드할 수 있게 해줌. <br />
- <b>./gradlew</b>는 Linux/Mac, <b>gradlew.bat</b>은 Windows용 <br />
<br />
<b>assembleDebug</b><br />
- <b>Debug 빌드 변형(variant)</b>을 만들어주는 Gradle task<br />
- 단어 그대로 <b>디버깅용 APK</b>를 만드는 명령어<br />
- 실제 생성 파일: android/app/build/outputs/apk/debug/app-debug.apk</p></blockquote>

<img src="/assets/img/front-end/react-native-apk/pic1.jpg" alt="Debug APK 빌드 결과" />

빌드 완료 후 다음 경로에서 빌드된 APK를 확인할 수 있습니다.

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

<img src="/assets/img/front-end/react-native-apk/pic2.jpg" alt="android/app/build/outputs/apk/debug 디렉토리에서 app-debug.apk를 확인할 수 있습니다." />

## Release APK 빌드하기

## 참고 자료
