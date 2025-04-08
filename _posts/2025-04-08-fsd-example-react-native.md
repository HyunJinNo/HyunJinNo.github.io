---
title: "[개발 기록] React Native 프로젝트에 FSD 아키텍처 적용하기"
description: React Native 프로젝트에서 FSD 아키텍처를 적용하면서 경험한 내용에 대해 정리한 페이지입니다.
date: 2025-04-08 16:28:00 +/-TTTT
categories: [Front-end]
tags: [react-native, fsd, development-history, typescript, mobile]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/react-native-logo.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br>
React Native, FSD, Development History, TypeScript, mobile</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong> <br />
react-native v0.76.5 </p></blockquote>

## 개요

React Native 프로젝트에서 FSD 아키텍처를 적용하면서 경험한 내용에 대해 정리한 페이지입니다. FSD 아키텍처의 개념에 대해선 다음 링크를 참고하시길 바랍니다.

<a href="../fsd">FSD 아키텍처</a>

## FSD 아키텍처 적용 전

FSD 아키텍처 적용 전에는 다음과 같은 폴더 구조를 채택하였습니다.

<img src="/assets/img/front-end/fsd-example-react-native/pic1.jpg" alt="FSD 아키텍처 적용 전 폴더 구조" />

위의 아키텍처 구조는 Screen 단위로 구분한 것으로 특정 Screen에서 사용하는 컴포넌트를 빠르게 찾을 수 있었습니다. 하지만 해당 폴더 구조는 특정 기능과 관련된 코드들이 너무 광범위하게 흩어져 있어서 기능을 수정하는 등 코드를 유지보수하기가 어려웠습니다. 따라서 기존의 아키텍처 구조를 변경하여 코드를 유지보수하기 쉽도록 개선할 필요성을 느꼈습니다. 이와 같은 상황에서 FSD 아키텍처를 적용하여 애플리케이션을 독립적인 비즈니스 기능 단위로 분할하면 유지보수하기 쉽다고 판단하여 아래와 같이 FSD 아키텍처를 적용하기로 결정하였습니다.

## FSD 아키텍처 적용하기

FSD 아키텍처는 다음과 같은 계층 구조를 갖습니다.

<img src="/assets/img/front-end/fsd-example-react-native/pic2.avif" alt="FSD 아키텍처의 계층 구조" />

React Native에서는 하나의 화면 단위를 `Screen`이라고 표현합니다. 이에 따라 `pages` 레이어 이름을 `screens`로 변경할지 고민하였지만, FSD 아키텍처에서 레이어는 표준화되어 있기 때문에 최종적으로는 `pages` 이름을 사용하기로 결정하였습니다.

따라서 다음과 같은 폴더 구조를 채택하였습니다.

<img src="/assets/img/front-end/fsd-example-react-native/pic3.jpg" alt="FSD 아키텍처 적용 후 폴더 구조" />

```text
src
├── app       # 애플리케이션 초기화, 라우팅, 전역 상태 관리 등을 담당하는 레이어입니다.
├── pages     # Screen 컴포넌트를 관리하는 레이어입니다.
├── widgets   # 여러 Screen에서 공용으로 사용하는 독립적인 UI 컴포넌트를 관리하는 레이어입니다. (Ex. Header, Searchbar, Sidebar 등)
├── features  # 특정 기능의 로직, UI, API 호출을 포함한 독립 모듈입니다. (Ex. 좋아요 버튼, 글 작성 버튼, 정렬 기능 등)
├── entities  # 도메인 모델과 관련된 데이터 처리를 담당하는 레이어입니다. (Ex. user, post 등)
└── shared    # 애플리케이션 전반에 걸쳐 재사용되는 유틸리티, UI 컴포넌트 등을 포함하는 레이어입니다. (Ex. 버튼, 헤더, HTTP 클라이언트 등)
```

각 레이어 구현 방식에 대해 설명하자면 아래와 같습니다.

### shared

<img src="/assets/img/front-end/fsd-example-react-native/pic4.jpg" alt="shared 레이어" />

`shared` 레이어는 <b>어떤 기능에도 속하지 않는, 애플리케이션 전반에 걸쳐 재사용되는 요소를 관리하는 레이어</b>입니다. `app` 레이어와 마찬가지로 슬라이스를 포함하지 않으며, 직접 세그먼트로 구성됩니다. 해당 레이어에는 공통적으로 사용되는 유틸리티 함수, 공통 UI 컴포넌트, 커스텀 훅, 상수 등을 포함합니다.

저는 다음과 같이 세그먼트 역할을 정의하였습니다.

```text
shared
├── api     # 프로젝트 전반에 걸쳐 사용되는 API 관련 파일
├── config  # 프로젝트 전반에 걸쳐 사용되는 상수 파일
├── lib     # 프로젝트 전반에 걸쳐 사용되는 유틸리티 함수 및 커스텀 훅
├── model   # 프로젝트 전반에 걸쳐 사용되는 스키마, 인터페이스, 스토어, 비즈니스 로직 등 데이터 모델
└── ui      # 프로젝트 전반에 걸쳐 재사용할 수 있는 UI 컴포넌트
```

#### api

<img src="/assets/img/front-end/fsd-example-react-native/pic5.jpg" alt="shared 레이어의 api 세그먼트" />

`api` 세그먼트에는 API 요청과 관련된 코드를 모아두었습니다. 프로젝트 전반에 걸쳐 사용되는 새로운 액세스 토큰을 받아오는 API 요청, 이미지 업로드 API 요청 파일 등을 모아두었습니다.

```typescript
/* @src/shared/api/getNewAccessToken.ts */

import { BACKEND_URL } from "@env";
import EncryptedStorage from "react-native-encrypted-storage";

export const getNewAccessToken = async () => {
  const refreshToken = await EncryptedStorage.getItem("refresh_token");

  const response = await fetch(`${BACKEND_URL}/api/auth/oauth2/token/refresh`, {
    method: "POST",
    headers: { Cookie: `refresh_token=${refreshToken}` }
  });

  const cookie = response.headers.get("set-cookie");

  if (cookie) {
    const [key, value] = cookie
      ?.split(";")[0]
      .split("=")
      .map((str) => str.trim());
    await EncryptedStorage.setItem(key, value);
  }
};
```

#### config

<img src="/assets/img/front-end/fsd-example-react-native/pic6.jpg" alt="shared 레이어의 config 세그먼트" />

`config` 세그먼트에는 프로젝트 전반에 걸쳐 사용되는 상수 파일을 모아두었습니다. 예를 들어, 다음과 같이 프로젝트 전반에 걸쳐 사용되는 색상 정보 상수 파일을 정의하였습니다.

```typescript
/* @src/shared/config/color.ts */

export const COLOR = {
  PRIMARY_GREEN: "#26B888",
  PRIMARY_GREEN_RIPPLE: "#069868",
  PRIMARY_RED: "#DA1E28",
  GRAY: "#F0F0F0",
  GRAY_RIPPLE: "#f1f5f9",
  GREEN: "#ECF4E2",
  GREEN_RIPPLE: "#dcfce7",
  BLUE: "#3B82F6",
  LIGHTGREEN: "#F2F6EC",
  LIGHTGRAY: "#F8F8F8",
  WHITE: "#FFFFFF",
  PURPLE: "#7C25ED"
} as const;
```

#### lib

<img src="/assets/img/front-end/fsd-example-react-native/pic7.jpg" alt="shared 레이어의 lib 세그먼트" />

`lib` 세그먼트에는 프로젝트 전반에 걸쳐 사용되는 유틸리티 함수나 커스텀 훅을 정의하였습니다. 유틸리티 함수와 커스텀 훅을 구분하기 위해 다음과 같이 `lib` 세그먼트 내에 `hooks` 폴더를 생성하여 커스텀 훅들을 모아두었고, `utils` 폴더를 생성하여 유틸리티 함수들을 모아두었습니다.

#### model

`model` 세그먼트는 프로젝트 전반에 걸쳐 사용되는 전역 상태나 비즈니스 로직을 관리하는 역할을 수행하는 세그먼트로 정의하였습니다. 제가 진행한 React Native 프로젝트에서는 해당 세그먼트를 사용하지 않았습니다.

#### ui

<img src="/assets/img/front-end/fsd-example-react-native/pic8.jpg" alt="shared 레이어의 ui 세그먼트" />

`ui` 세그먼트에는 프로젝트 전반에 걸쳐 재사용할 수 있는 UI 컴포넌트를 정의하였습니다. 예를 들어, 다음과 같이 여러 Screen에서 사용할 수 있는 BottomSheetModalTemplate 컴포넌트를 정의하였습니다.

```tsx
/* @src/shared/ui/bottomSheetModal/BottomSheetModalTemplate.tsx */

import { useBackHandler } from "@src/shared/lib/hooks";
import React, { forwardRef, useCallback } from "react";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { tw } from "@src/shared/lib/utils";

interface BottomSheetModalTemplateProps {
  children: React.ReactNode;
  snapPoints: number[];
  closeBottomSheetModal: () => void;
}

export const BottomSheetModalTemplate = forwardRef<
  BottomSheetModal,
  BottomSheetModalTemplateProps
>(({ children, snapPoints, closeBottomSheetModal }, bottomSheetModalRef) => {
  const { addBackPressEventListener, removeBackPressEventListener } =
    useBackHandler(closeBottomSheetModal);
  const renderBackdrop = useCallback(
    (props: any) => {
      addBackPressEventListener();
      return (
        <BottomSheetBackdrop
          {...props}
          pressBehavior="none"
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      );
    },
    [addBackPressEventListener]
  );

  return (
    <BottomSheetModal
      style={tw`rounded-2xl`}
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      onDismiss={removeBackPressEventListener}
    >
      {children}
    </BottomSheetModal>
  );
});
```

### entities

### features

### widgets

### pages

###

## FSD 아키텍처 적용 후기

## 참고 자료

- <a href="https://github.com/TripInfoWeb/solitour-mobile" target="_blank">https://github.com/TripInfoWeb/solitour-mobile</a>
- <a href="https://feature-sliced.github.io/documentation/kr/docs/reference/layers" target="_blank">Layers | Feature-Sliced Design</a>
- <a href="https://github.com/penteleichuk/Moke-Smoke" target="_blank">penteleichuk/Moke-Smoke: The application is developed following the Feature-Sliced Design (FSD) methodology.</a>
