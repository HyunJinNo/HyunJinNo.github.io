---
layout: post
title: React Native CLI 시작하기
description: >
  React Native CLI 시작 방법에 대해 설명하는 페이지입니다.
image:
  path: /assets/img/front-end/react-native-basic/react-native-logo.png
  srcset:
    1060w: /assets/img/front-end/react-native-basic/react-native-logo.png
    530w: /assets/img/front-end/react-native-basic/react-native-logo.png
    265w: /assets/img/front-end/react-native-basic/react-native-logo.png
related_posts:
  - None
sitemap: true
comments: false
---

<i>Environment</i>

- <i>OS: Windows 11</i>
- <i>node v20.11.1</i>
- <i>openjdk 17</i>
- <i>VSCode v1.96.0</i>
- <i>Android Studio Ladybug | 2024.2.1 Patch 3</i>
- <i>react-native v0.76.5</i>

<h2>목차</h2>

- [개요](#개요)
- [Step 1 - 개발 환경 준비하기](#step-1---개발-환경-준비하기)
  - [Node.js 설치하기](#nodejs-설치하기)
  - [JDK 설치하기](#jdk-설치하기)
  - [VSCode 설치하기](#vscode-설치하기)
  - [Android Studio 설치하기](#android-studio-설치하기)
- [Step 2 - 애플리케이션 생성하기](#step-2---애플리케이션-생성하기)
- [참고 자료](#참고-자료)
- [Comments](#comments)

## 개요

이번 글에서는 `React Native CLI`를 사용하여 리액트 네이티브(React Native) 개발 환경 설정 및 애플리케이션 실행 방법에 대해 설명하겠습니다.

## Step 1 - 개발 환경 준비하기

<b>iOS 앱을 빌드하기 위해선 `macOS`와 `Xcode`가 필요합니다. 저의 운영체제는 `Windows 11`이므로 iOS 앱을 빌드할 수 없습니다. 따라서 이번 글에서는 Android 플랫폼을 대상으로 React Native 개발 환경을 구축하는 방법을 설명하겠습니다.</b>

### Node.js 설치하기

다음 링크에 접속하여 `Node.js`를 설치합니다. 18 버전 이상의 Node.js를 설치하면 됩니다.

<a href="https://nodejs.org/ko/" target="_blank">Node.js — 어디서든 JavaScript를 실행하세요</a>

설치한 후 Node.js가 잘 설치되었는지 확인하기 위해 다음 명령어를 입력하여 Node.js 버전을 확인합니다.

```bash
node -v
npm -v
```

<img src="/assets/img/front-end/react-native-basic/pic1.png" alt="pic1" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

### JDK 설치하기

Android를 대상으로 `React Native` 개발 환경을 설정하기 위해선 `Java SE Development Kit (JDK)`가 필요합니다. Android 개발을 하려면 `JDK 11` 이상이 필요합니다. 공식 문서에서는 높은 버전의 JDK를 사용하면 문제가 발생할 수 있으므로 `JDK 17`을 권장하고 있습니다.

<img src="/assets/img/front-end/react-native-basic/pic2.png" alt="pic2" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

공식 문서에서 권장하는 대로 `JDK 17`을 설치하겠습니다. 다음 링크에 접속하여 `openJDK 17` 압축 파일을 다운로드합니다.

<a href="https://jdk.java.net/java-se-ri/17" target="_blank">Java Platform, Standard Edition 17 Reference
Implementations</a>

<img src="/assets/img/front-end/react-native-basic/pic3.png" alt="pic3" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<br/>

다운로드한 파일을 다음과 같이 압축 해제합니다.

<img src="/assets/img/front-end/react-native-basic/pic4.png" alt="pic4" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<br/>

이후 `시스템 환경 변수 편집 > 환경 변수`으로 이동한 후 다음과 같이 변수 이름에 `JAVA_HOME`을, 변수 값에 방금 설치한 `openJDK 17`의 경로를 지정하여 새로운 시스템 변수를 생성합니다.

<img src="/assets/img/front-end/react-native-basic/pic5.png" alt="pic5" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<br/>

이후 시스템 변수 path의 편집 버튼을 누른 뒤 다음과 같이 `%JAVA_HOME%\bin`을 추가합니다.

<img src="/assets/img/front-end/react-native-basic/pic6.png" alt="pic6" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<br/>

환경 변수 설정이 끝나면 JDK가 잘 설치되었는지 확인하기 위해 터미널을 열고 다음 명령어를 입력하여 Java 버전을 확인합니다.

```bash
java --version
```

<img src="/assets/img/front-end/react-native-basic/pic7.png" alt="pic7" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

### VSCode 설치하기

다음 링크에 접속하여 `VSCode`를 설치합니다.

<a href="https://code.visualstudio.com/download" target="_blank">Download Visual Studio Code - Mac, Linux, Windows</a>

### Android Studio 설치하기

다음 링크에 접속하여 `Android Studio`를 설치합니다. 설치할 때 `Android SDK`,
`Android Virtual Device` 항목을 체크합니다.

<a href="https://developer.android.com/studio?hl=ko" target="_blank">Android 스튜디오 및 앱 도구 다운로드 - Android 개발자 &nbsp;|&nbsp; Android Studio &nbsp;|&nbsp; Android Developers</a>

`Android Studio`를 설치한 후 SDK Manager 항목을 클릭합니다. 이후 `SDK Platforms`에서 `Show Package Details`을 체크한 후 `Android SDK Platform 35`와
`Intel x86 Atom_64 System Image` 항목을 체크합니다.

<img src="/assets/img/front-end/react-native-basic/pic8.png" alt="pic8" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<br/>

그 후 `SDK Tools` 탭에서 `Show Package Details`을 체크한 후 `Android SDK Build-Tools`의 `35.0.0` 항목을 체크한 후 Apply 버튼을 클릭하여 Android SDK와 관련된 빌드 도구들을 설치합니다.

<img src="/assets/img/front-end/react-native-basic/pic9.png" alt="pic9" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<br/>

이후 `시스템 환경 변수 편집 > 환경 변수`으로 이동한 후 다음과 같이 변수 이름에 `ANDROID_HOME`을, 변수 값에 방금 설치한 `Android SDK`의 경로를 지정하여 새로운 사용자 변수를 생성합니다.

<img src="/assets/img/front-end/react-native-basic/pic10.png" alt="pic10" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<br/>

이후 사용자 변수 path의 편집 버튼을 누른 뒤 다음과 같이 `platform-tools` 경로를 추가합니다.

<img src="/assets/img/front-end/react-native-basic/pic11.png" alt="pic11" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<br/>

터미널을 열고 다음 명령어를 입력하여 환경 변수가 잘 설정되었는지 확인합니다.

```bash
Get-ChildItem -Path Env:\
```

<img src="/assets/img/front-end/react-native-basic/pic12.png" alt="pic12" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

## Step 2 - 애플리케이션 생성하기

## 참고 자료

- <a href="https://reactnative.dev/" target="_blank">React Native · Learn once, write anywhere</a>

## Comments

<hr />
<script
  src="https://utteranc.es/client.js"
  repo="HyunJinNo/HyunJinNo.github.io"
  issue-term="pathname"
  theme="github-light"
  crossorigin="anonymous"
  async
></script>
