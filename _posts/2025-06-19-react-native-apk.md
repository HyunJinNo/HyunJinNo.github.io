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

먼저 프로젝트 루트에서 `android` 폴더로 이동합니다.

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
<b>./gradlew</b><br />
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

### Step 1 - 배포용 키 생성하기

먼저 프로젝트 루트에서 `android/app` 폴더로 이동합니다.

```bash
cd android/app
```

이후 다음 명령어를 입력하여 배포용 키를 생성합니다.

```bash
keytool -genkeypair -v -keystore release.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br />
<b>keytool</b><br />
- Java JDK에 포함된 도구로, 안드로이드 앱 출시용 서명에 사용할 keystore와 키를 생성할 때 사용합니다.<br />
- keytool -help로 전체 옵션을 확인할 수 있습니다.<br />
<br />
<b>-genkey 또는 -genkeypair</b><br />
- 공개키와 개인키를 생성합니다.<br />
<br />
<b>-v</b><br />
- verbose라는 의미로, 생성 과정을 상세히 출력합니다.<br />
<br />
<b>-keystore release.keystore</b><br />
- 생성할 keystore 파일의 이름과 경로를 지정합니다.<br />
- 보통 android/app 폴더에 복사해 두고, Gradle 설정에서 참조합니다.<br />
<br />
<b>-alias my-key-alias</b><br />
- keystore 안에 저장될 키에 붙일 별칭을 지정합니다.<br />
- 하나의 keystore에 여러 키를 보관할 수 있으므로, 별칭을 사용하여 구분합니다.<br />
- Ex. app-release, upload-key 등으로 직관적으로 짓는 것이 좋습니다.<br />
<br />
<b>-keyalg RSA</b><br />
- 키 생성 알고리즘을 지정합니다.<br />
<br />
<b>-keysize 2048</b><br />
- 키의 비트 길이를 지정합니다.<br />
- 2048 비트는 현재 널리 권장되는 보안 수준이며, 배포 환경에서는 최소 2048 비트 이상을 사용하는 것이 권장됩니다.<br />
<br />
<b>-validity 10000</b><br />
- 키의 유효 기간을 일(day) 단위로 지정합니다.<br />
- 10000일이면 약 27년 동안 유효합니다.
</p></blockquote>

명령어 입력 이후 다음과 같이 <b>비밀번호</b>와 이름, 조직 등 문항을 입력하면 keystore 파일이 생성됩니다.

<img src="/assets/img/front-end/react-native-apk/pic3.jpg" alt="android.app 폴더에 keystore를 생성합니다." />

### Step 2 - Gradle에 서명 정보 추가하기

`android/gradle.properties` 파일에 다음 내용을 추가합니다.

```properties
MYAPP_UPLOAD_STORE_FILE=[keystore 파일의 이름]
MYAPP_UPLOAD_KEY_ALIAS=[keystore를 생성할 때 설정한 별칭]
MYAPP_UPLOAD_STORE_PASSWORD=[keystore 파일의 비밀번호]
MYAPP_UPLOAD_KEY_PASSWORD=[keystore 안에 생성된 개별 키(alias)의 비밀번호]
```

예를 들어 [step 1 - 배포용 키 생성하기](#step-1---배포용-키-생성하기)에서 생성한 keystore를 기준으로 설정한다면 다음과 같이 입력하면 됩니다.

```properties
MYAPP_UPLOAD_STORE_FILE=release.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=my-password
MYAPP_UPLOAD_KEY_PASSWORD=my-password
```

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br />
위의 예시에서 개별 키에 대한 비밀번호를 설정하지 않았으므로 <b>MYAPP_UPLOAD_KEY_PASSWORD</b>에는 keystore 비밀번호와 동일하게 설정되었습니다. 즉, <b>MYAPP_UPLOAD_STORE_PASSWORD</b>와 동일한 값을 설정하면 됩니다.</p></blockquote>

이후 `android/app/build.gradle` 파일을 열어서, `android { }` 블록 안에 `signingConfigs`와 `buildTypes`를 설정합니다.

```gradle
/* ... */

android {
    /* ... */

    signingConfigs {
        /* ... */

        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }

    buildTypes {
        release {
            // Caution! In production, you need to generate your own keystore file.
            // see https://reactnative.dev/docs/signed-apk-android.
            signingConfig signingConfigs.release
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }
}

/* ... */
```

<img src="/assets/img/front-end/react-native-apk/pic4.jpg" alt="build.gradle 파일을 열고 수정한 내용"/>

### Step 3 - Release APK 생성하기

먼저 프로젝트 루트에서 `android` 폴더로 이동합니다.

```bash
cd android
```

이후 다음 명령어를 입력하여 `Release APK`를 빌드할 수 있습니다.

```bash
./gradlew assembleRelease
```

```text
PS C:\Users\user\vscode\braille-translator> cd android
PS C:\Users\user\vscode\braille-translator\android> ./gradlew assembleRelease
Starting a Gradle Daemon, 1 incompatible and 1 stopped Daemons could not be reused, use --status for details

/* ... */

> Task :react-native-vision-camera:configureCMakeRelWithDebInfo[x86_64]
C/C++: VisionCamera: Frame Processors: OFF!

[Incubating] Problems report is available at: file:///C:/Users/user/vscode/braille-translator/android/build/reports/problems/problems-report.html

Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.13/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 18m 6s
471 actionable tasks: 435 executed, 36 up-to-date
PS C:\Users\user\vscode\braille-translator\android>
```

빌드 완료 후 다음 경로에서 빌드된 APK를 확인할 수 있습니다.

```text
android/app/build/outputs/apk/release/app-release.apk
```

<img src="/assets/img/front-end/react-native-apk/pic5.jpg" alt="android/app/build/outputs/apk/release 디렉토리에서 app-release.apk를 확인할 수 있습니다." />

## 참고 자료

- <a href="https://adjh54.tistory.com/252" target="_blank">[RN] React Native APK 파일 이해 및 구성, 실행 방법 : Keystore — Contributor</a>
- <a href="https://reactnative.dev/docs/signed-apk-android" target="_blank">Publishing to Google Play Store · React Native</a>
