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
  path: /assets/img/front-end/fsd-example-react-native/pic0.webp
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

<img src="/assets/img/front-end/fsd-example-react-native/pic1.avif" alt="FSD 아키텍처 적용 전 폴더 구조" />

위의 아키텍처 구조는 Screen 단위로 구분한 것으로 특정 Screen에서 사용하는 컴포넌트를 빠르게 찾을 수 있었습니다. 하지만 해당 폴더 구조는 특정 기능과 관련된 코드들이 너무 광범위하게 흩어져 있어서 기능을 수정하는 등 코드를 유지보수하기가 어려웠습니다. 따라서 기존의 아키텍처 구조를 변경하여 코드를 유지보수하기 쉽도록 개선할 필요성을 느꼈습니다. 이와 같은 상황에서 FSD 아키텍처를 적용하여 애플리케이션을 독립적인 비즈니스 기능 단위로 분할하면 유지보수하기 쉽다고 판단하여 아래와 같이 FSD 아키텍처를 적용하기로 결정하였습니다.

## FSD 아키텍처 적용하기

FSD 아키텍처는 다음과 같은 계층 구조를 갖습니다.

<img src="/assets/img/front-end/fsd-example-react-native/pic2.avif" alt="FSD 아키텍처의 계층 구조" />

React Native에서는 하나의 화면 단위를 `Screen`이라고 표현합니다. 이에 따라 `pages` 레이어 이름을 `screens`로 변경할지 고민하였지만, FSD 아키텍처에서 레이어는 표준화되어 있기 때문에 최종적으로는 `pages` 이름을 사용하기로 결정하였습니다.

따라서 다음과 같은 폴더 구조를 채택하였습니다.

<img src="/assets/img/front-end/fsd-example-react-native/pic3.avif" alt="FSD 아키텍처 적용 후 폴더 구조" />

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

<img src="/assets/img/front-end/fsd-example-react-native/pic4.avif" alt="shared 레이어" />

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

<img src="/assets/img/front-end/fsd-example-react-native/pic5.avif" alt="shared 레이어의 api 세그먼트" />

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

<img src="/assets/img/front-end/fsd-example-react-native/pic6.avif" alt="shared 레이어의 config 세그먼트" />

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

<img src="/assets/img/front-end/fsd-example-react-native/pic7.avif" alt="shared 레이어의 lib 세그먼트" />

`lib` 세그먼트에는 프로젝트 전반에 걸쳐 사용되는 유틸리티 함수나 커스텀 훅을 정의하였습니다. 유틸리티 함수와 커스텀 훅을 구분하기 위해 다음과 같이 `lib` 세그먼트 내에 `hooks` 폴더를 생성하여 커스텀 훅들을 모아두었고, `utils` 폴더를 생성하여 유틸리티 함수들을 모아두었습니다.

#### model

`model` 세그먼트는 프로젝트 전반에 걸쳐 사용되는 전역 상태나 비즈니스 로직을 관리하는 역할을 수행하는 세그먼트로 정의하였습니다. 제가 진행한 React Native 프로젝트에서는 해당 세그먼트를 사용하지 않았습니다.

#### ui

<img src="/assets/img/front-end/fsd-example-react-native/pic8.avif" alt="shared 레이어의 ui 세그먼트" />

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

<img src="/assets/img/front-end/fsd-example-react-native/pic9.avif" alt="entities 레이어" />

<img src="/assets/img/front-end/fsd-example-react-native/pic10.avif" alt="애플리케이션의 핵심 도메인(데이터 모델)" />

`entities` 레이어는 <b>애플리케이션의 핵심 도메인(데이터 모델)과 관련된 로직을 관리하는 레이어</b>입니다. 일반적으로 API 호출, 상태 관리, 데이터 모델을 담당합니다.

저는 다음과 같이 세그먼트 역할을 정의하였습니다.

```text
entities
├── diary
|   ├── api     # diary 관련 API 요청, DTO 등 API 관련 파일
|   ├── config  # diary 관련 상수 파일
|   ├── model   # diary 관련 커스텀 훅, 스키마, 타입, 인터페이스, 스토어, 비즈니스 로직 등 데이터 모델
|   ├── ui      # diary 관련 UI 컴포넌트
|   └── index.ts
├── gathering
└── (...)
```

#### api

<img src="/assets/img/front-end/fsd-example-react-native/pic11.avif" alt="entities 레이어의 api 세그먼트" />

`api` 세그먼트에는 특정 도메인과 관련된 API 요청, DTO 등 API 관련 파일을 모아두었습니다. 특히 다음과 같이 DTO를 API 요청 함수 내에 정의하였습니다.

```typescript
/* @src/entities/diary/api/diary.ts */

import { BACKEND_URL } from "@env";
import { getNewAccessToken } from "@src/shared/api";
import EncryptedStorage from "react-native-encrypted-storage";

export interface DiaryCreateRequest {
  title: string;
  titleImage: string;
  startDatetime: Date;
  endDatetime: Date;
  diaryDayRequests: {
    content: string;
    feelingStatus: string;
    diaryDayContentImages: string;
    place: string;
  }[];
}

export async function createDiary(data: DiaryCreateRequest) {
  const accessToken = await EncryptedStorage.getItem("access_token");
  const response = await fetch(`${BACKEND_URL}/api/diary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `access_token=${accessToken}`
    },
    body: JSON.stringify(data)
  });

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error("Access token has expired.");
  }

  if (!response.ok) {
    throw new Error("Failed to register.");
  }

  return response.text();
}

(...생략)
```

만약 DTO를 다른 파일에서도 참조하는 경우에는 다음과 같이 `model` 세그먼트에 타입을 정의하고 이를 import하는 방식을 적용하였습니다.

```typescript
/* @src/entities/user/api/userInfo.ts */

import { BACKEND_URL } from "@env";
import { getNewAccessToken } from "@src/shared/api";
import EncryptedStorage from "react-native-encrypted-storage";
import { User } from "../model/user";

export async function getUserInfo() {
  const accessToken = await EncryptedStorage.getItem("access_token");
  const response = await fetch(`${BACKEND_URL}/api/users/info`, {
    method: "GET",
    headers: { Cookie: `access_token=${accessToken}` }
  });

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error("Access token has expired.");
  }

  if (!response.ok) {
    await EncryptedStorage.clear();
  }

  return response.json() as Promise<User>;
}
```

#### config

<img src="/assets/img/front-end/fsd-example-react-native/pic12.avif" alt="entities 레이어의 config 세그먼트" />

`config` 세그먼트에는 특정 도메인과 관련된 상수 파일을 모아두었습니다. 예를 들어, 다음과 같이 diary 슬라이스 내에 기분 이미지 목록 상수 파일을 정의하였습니다.

```typescript
/* @src/entities/diary/config/feelingImage.ts */

type FEELING_IMAGE_TYPE = {
  [feeling: string]: any;
};

export const FEELING_IMAGE: FEELING_IMAGE_TYPE = {
  EXCITED: require("@assets/diary/feeling1.png"),
  NICE: require("@assets/diary/feeling2.png"),
  SOSO: require("@assets/diary/feeling3.png"),
  SAD: require("@assets/diary/feeling4.png"),
  ANGRY: require("@assets/diary/feeling5.png")
} as const;
```

#### model

<img src="/assets/img/front-end/fsd-example-react-native/pic13.avif" alt="entities 레이어의 model 세그먼트" />

`model` 세그먼트에는 특정 도메인과 관련된 커스텀 훅, 스키마, 타입, 인터페이스, 스토어, 비즈니스 로직 등 데이터 모델을 정의하였습니다. 예를 들어, 다음과 같이 User 타입을 정의하거나 API 요청을 커스텀 훅 내의 `useQuery`로 래핑하였습니다.

<img src="/assets/img/front-end/fsd-example-react-native/pic14.avif" alt="user.ts" />

```typescript
/* @src/entities/user/model/useUserInfo.ts */

import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../api/userInfo";

export const useUserInfo = (enabled?: boolean) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => getUserInfo(),
    staleTime: Infinity,
    gcTime: 0,
    retry: 1,
    enabled: enabled
  });

  return { data, isLoading, isError };
};
```

#### ui

<img src="/assets/img/front-end/fsd-example-react-native/pic15.avif" alt="entities 레이어의 ui 세그먼트" />

`ui` 세그먼트에는 특정 도메인과 관련된 UI 컴포넌트를 정의하였습니다. 이 세그먼트는 도메인의 시각적 표현에만 집중합니다. 만약 UI 컴포넌트 내에 사용자의 특정 행동과 상호작용과 관련된 기능이 포함되어야 한다면 이를 `children`으로 분리하여 단방향 의존성을 깨뜨리지 않도록 구현하였습니다. 예를 들어, 다음 코드는 diary 도메인의 시각적 표현을 나타내는 UI 컴포넌트입니다. 수정 및 삭제 기능은 `children`으로 분리하였습니다.

```tsx
/* @src/entities/diary/ui/DiaryCard.tsx */

import React from "react";
import {
  CodeBridge,
  RichText,
  TenTapStartKit,
  useEditorBridge
} from "@10play/tentap-editor";
import LinearGradient from "react-native-linear-gradient";
import { Animated, Image, ImageBackground, Text, View } from "react-native";
import { FEELING_IMAGE } from "../config/feelingImage";
import { DiaryDetail } from "../model/diary";
import { useCardFlipAnimation } from "../model/useCardFlipAnimation";
import { tw } from "@src/shared/lib/utils";

interface DiaryCardProps {
  children: React.ReactNode;
  diary: DiaryDetail;
}

export const DiaryCard = ({ children, diary }: DiaryCardProps) => {
  const { interpolate, isTail, flipCard } = useCardFlipAnimation();
  const editor = useEditorBridge({
    avoidIosKeyboard: true,
    initialContent:
      diary.diaryDayContentResponses.diaryDayContentDetail[0].content,
    editable: false,
    bridgeExtensions: [
      ...TenTapStartKit,
      CodeBridge.configureCSS("p { font-size: 0.875rem; line-height: 0.5rem; }")
    ]
  });

  // 뒷면
  if (isTail) {
    return (
      <View style={tw`px-3 pb-5`}>
        <Animated.View
          style={tw.style(
            "h-[26rem] w-[17.75rem] rounded-xl border border-gray-200 bg-custom-lightGray p-6",
            {
              transform: [{ rotateY: interpolate }, { perspective: 1000 }]
            }
          )}
          onTouchEnd={() => flipCard()}
        >
          <View style={tw`flex flex-row items-center justify-between`}>
            <View style={tw`flex flex-row items-center gap-2`}>
              <Image
                style={tw`h-[1.1875rem] w-4`}
                source={require("@assets/diary/location-active.png")}
              />
              <Text style={tw`text-gray-500`}>
                {diary.diaryDayContentResponses.diaryDayContentDetail[0].place}
              </Text>
            </View>
            {children}
          </View>
          <Image
            style={tw`mt-10 h-[4.375rem] w-14`}
            source={
              FEELING_IMAGE[
                diary.diaryDayContentResponses.diaryDayContentDetail[0]
                  .feelingStatus
              ]
            }
          />
          <Text style={tw`pt-5 text-lg font-bold`}>{diary.title}</Text>
          <Text style={tw`text-gray-500`}>{`${new Date(
            `${diary.startDatetime}.0Z`
          ).toLocaleDateString()} - ${new Date(
            `${diary.endDatetime}.0Z`
          ).toLocaleDateString()}`}</Text>
          <RichText style={tw`mt-2`} editor={editor} />
        </Animated.View>
      </View>
    );
  }

  (...생략)
};
```

### features

<img src="/assets/img/front-end/fsd-example-react-native/pic16.avif" alt="features 레이어" />

`features` 레이어는 <b>사용자의 특정 행동과 상호작용과 관련된 기능을 포함하는 레이어</b>입니다. 하나의 기능에 필요한 모든 요소를 그룹화합니다.

저는 다음과 같이 세그먼트 역할을 정의하였습니다.

```text
features
├── nicknameEditor
|   ├── api     # 닉네임 변경 기능 관련 API 요청, DTO 등 API 관련 파일
|   ├── config  # 닉네임 변경 기능 관련 상수 파일 (실제 코드에서는 없는 부분입니다.)
|   ├── model   # 닉네임 변경 기능 관련 커스텀 훅, 스키마, 타입, 인터페이스, 스토어, 비즈니스 로직 등 데이터 모델
|   ├── ui      # 닉네임 변경 기능 관련 UI 컴포넌트
|   └── index.ts
├── createPlan
├── (...)
```

#### api

<img src="/assets/img/front-end/fsd-example-react-native/pic17.avif" alt="features 레이어의 api 세그먼트" />

`api` 세그먼트에는 특정 기능과 관련된 API 요청, DTO 등 API 관련 파일을 모아두었습니다. 예를 들어, 다음 코드는 닉네임 변경 API 요청 파일입니다.

```typescript
/* @src/features/nicknameEditor/api/nickname.ts */

import { BACKEND_URL } from "@env";
import { getNewAccessToken } from "@src/shared/api";
import EncryptedStorage from "react-native-encrypted-storage";

export async function updateNickname(nickname: string) {
  const accessToken = await EncryptedStorage.getItem("access_token");
  const response = await fetch(`${BACKEND_URL}/api/users/nickname`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: `access_token=${accessToken}`
    },
    body: JSON.stringify({ nickname })
  });

  if (response.status === 401) {
    await getNewAccessToken();
    throw new Error("Access token has expired.");
  }

  if (!response.ok) {
    throw new Error("Failed to update nickname.");
  }

  return true;
}
```

#### config

<img src="/assets/img/front-end/fsd-example-react-native/pic18.avif" alt="features 레이어의 config 세그먼트" />

`config` 세그먼트에는 특정 기능과 관련된 상수 파일을 모아두었습니다. 예를 들어, 다음과 같이 일기 작성 기능과 관련해서 지역 정보를 나타내는 상수를 정의하였습니다.

```typescript
/* @src/features/diaryEditor/config/locationList.ts */

export const LOCATION_LIST = [
  "서울",
  "경기",
  "제주",
  "인천",
  "부산",
  "강원",
  "울산",
  "대구",
  "광주",
  "대전",
  "경남",
  "경북",
  "세종",
  "충청",
  "전라"
] as const;
```

#### model

<img src="/assets/img/front-end/fsd-example-react-native/pic19.avif" alt="features 레이어의 model 세그먼트" />

`model` 세그먼트에는 특정 기능과 관련된 커스텀 훅, 스키마, 타입, 인터페이스, 스토어, 비즈니스 로직 등 데이터 모델을 모아두었습니다. 예를 들어, 다음과 같이 닉네임 변경 기능의 스키마를 정의하거나 닉네임 변경 비즈니스 로직을 작성하였습니다.

```typescript
/* @src/features/nicknameEditor/model/NicknameSchema.ts */

import { z } from "zod";

export const NicknameSchema = z.object({
  nickname: z
    .string({
      required_error: "닉네임을 입력해 주세요.",
      invalid_type_error: "Nickname must be a string."
    })
    .min(1, { message: "닉네임을 입력해 주세요." })
    .max(30, { message: "닉네임은 최대 30자입니다." })
});
```

```typescript
/* @src/features/nicknameEditor/model/useNicknameModal.ts */

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateNickname } from "../api/nickname";
import { NicknameSchema } from "./NicknameSchema";

export const useNicknameModal = (
  nickname: string,
  modalVisible: boolean,
  closeModal: () => void
) => {
  const methods = useForm<{
    nickname: string;
  }>({
    resolver: zodResolver(NicknameSchema),
    defaultValues: { nickname },
    mode: "onChange"
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => updateNickname(methods.getValues("nickname")),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      closeModal();
    },
    retry: 1,
    throwOnError: true
  });

  const handleSubmit = async () => {
    await methods.trigger("nickname");
    if (!methods.formState.isValid) {
      return;
    }

    mutation.mutate();
  };

  useEffect(() => {
    if (modalVisible) {
      methods.setValue("nickname", nickname);
    }
  }, [methods, modalVisible, nickname]);

  return { methods, isPending: mutation.isPending, handleSubmit };
};
```

#### ui

<img src="/assets/img/front-end/fsd-example-react-native/pic20.avif" alt="features 레이어의 ui 세그먼트" />

`ui` 세그먼트에는 사용자의 특정 행동과 상호작용과 관련된 기능을 포함한 UI 컴포넌트를 정의하였습니다. 예를 들어, 다음과 같이 닉네임 변경 기능을 포함한 UI 컴포넌트를 정의하였습니다.

```tsx
/* @src/features/nicknameEditor/ui/NicknameEditor.tsx */

import { useModal } from "@src/shared/lib/hooks";
import { tw } from "@src/shared/lib/utils";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { NicknameModal } from "./NicknameModal";

interface NicknameEditorProps {
  nickname: string;
}

export const NicknameEditor = ({ nickname }: NicknameEditorProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <View>
      <NicknameModal
        nickname={nickname}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <Pressable
        style={({ pressed }) =>
          tw.style(
            pressed && "bg-slate-100",
            "mt-3 flex flex-row items-center gap-1"
          )
        }
        onPress={openModal}
      >
        <Text style={tw`text-2xl font-semibold`}>{`${nickname}님`}</Text>
        <Image
          style={tw`h-5 w-5`}
          source={require("@assets/common/chevronRight.png")}
        />
      </Pressable>
    </View>
  );
};
```

### widgets

<img src="/assets/img/front-end/fsd-example-react-native/pic21.avif" alt="widgets 레이어" />

`widgets` 레이어는 <b>여러 개의 기능들을 조합하여 특정 화면의 일부를 구성하는 역할을 맡은 레이어</b>입니다. 일반적으로 여러 Screen에서 독립적으로 사용될 수 있는 하나의 큰 독립적인 컴포넌트를 정의하는 곳입니다.

저는 다음과 같이 세그먼트 역할을 정의하였습니다.

```text
widgets
├── diaryCreateEditor
|   ├── api     # widget 단위의 API 관련 파일 (실제 코드에서는 없는 부분입니다.)
|   ├── config  # widget 단위의 상수 파일 (실제 코드에서는 없는 부분입니다.)
|   ├── model   # widget 단위의 커스텀 훅, 스키마, 타입, 인터페이스, 스토어, 비즈니스 로직 등 데이터 모델
|   ├── ui      # 독립적으로 사용할 수 있는 UI 컴포넌트
|   └── index.ts
├── diaryCardListWrapper
├── (...)
```

#### api

`api` 세그먼트는 widget 단위의 API 요청, DTO 등 API 관련 파일을 모아두는 역할을 수행하는 세그먼트로 정의하였습니다. 제가 진행한 React Native 프로젝트에서는 해당 세그먼트를 사용하지 않았습니다.

#### config

`config` 세그먼트는 widget 단위의 상수 파일을 모아두는 역할을 수행하는 세그먼트로 정의하였습니다. 제가 진행한 React Native 프로젝트에서는 해당 세그먼트를 사용하지 않았습니다.

#### model

<img src="/assets/img/front-end/fsd-example-react-native/pic22.avif" alt="widgets 레이어의 model 세그먼트" />

`model` 세그먼트에는 widget 단위의 커스텀 훅, 스키마, 타입, 인터페이스, 스토어, 비즈니스 로직 등 데이터 모델을 정의하였습니다. 예를 들어, 다음과 같이 일기 작성 비즈니스 로직을 관리하는 커스텀 훅을 생성하였습니다.

```typescript
/* @src/widgets/diaryCreateEditor/mode/useDiaryCreateButton.ts */

import { useNavigation } from "@react-navigation/native";
import {
  createDiary,
  Diary,
  DiaryCreateRequest,
  FEELING_STATUS
} from "@src/entities/diary";
import { SANITIZE_OPTION } from "@src/shared/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UseFormReturn } from "react-hook-form";
import sanitizeHtml from "sanitize-html";

export const useDiaryCreateButton = (
  methods: UseFormReturn<Diary, any, undefined>,
  content: string
) => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => {
      const data: DiaryCreateRequest = {
        title: methods.getValues("title"),
        titleImage: methods.getValues("image")!,
        startDatetime: methods.getValues("startDate")!,
        endDatetime: methods.getValues("endDate")!,
        diaryDayRequests: [
          {
            content: sanitizeHtml(content, SANITIZE_OPTION),
            feelingStatus: FEELING_STATUS[methods.getValues("feeling")!],
            diaryDayContentImages: "",
            place: methods.getValues("location")!
          }
        ]
      };

      return createDiary(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["diaryList"] });
      navigation.goBack();
    },
    retry: 1,
    throwOnError: true
  });

  const handleSubmit = async () => {
    await methods.trigger();
    if (!methods.formState.isValid) {
      return;
    }

    mutation.mutate();
  };

  return { isPending: mutation.isPending, handleSubmit };
};
```

#### ui

<img src="/assets/img/front-end/fsd-example-react-native/pic23.avif" alt="widgets 레이어의 ui 세그먼트" />

`ui` 세그먼트에는 여러 개의 기능들을 조합하여 특정 화면의 일부를 구성하는 독립적인 UI 컴포넌트를 정의하였습니다. 예를 들어, 다음과 같이 일기를 등록할 수 있는 에디터 컴포넌트를 정의하였습니다.

```tsx
/* @src/widgets/diaryCreateEditor/ui/DiaryCreateEditor.tsx */

import { useNavigation } from "@react-navigation/native";
import { DiaryEditor, useDiaryEditor } from "@src/features/diaryEditor";
import React, { useEffect } from "react";
import { FormProvider } from "react-hook-form";
import { DiaryCreateButton } from "./DiaryCreateButton";

export const DiaryCreateEditor = () => {
  const navigation = useNavigation();
  const { methods, content, editor } = useDiaryEditor();

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <DiaryCreateButton methods={methods} content={content ?? ""} />
      )
    });
  }, [content, methods, navigation]);

  return (
    <FormProvider {...methods}>
      <DiaryEditor editor={editor} />
    </FormProvider>
  );
};
```

### pages

<img src="/assets/img/front-end/fsd-example-react-native/pic24.avif" alt="pages 레이어" />

`pages` 레이어는 <b>애플리케이션의 실제 Screen을 구성하는 레이어</b>입니다. 여러 `shared`, `entities`, `features`, `widgets`를 조합하여 화면을 구성합니다.

저는 다음과 같이 세그먼트 역할을 정의하였습니다.

```text
pages
├── auth
|   ├── ui  # Screen 컴포넌트
|   └── index.ts
├── diary
├── (...)
```

#### ui

<img src="/assets/img/front-end/fsd-example-react-native/pic25.avif" alt="pages 레이어의 ui 세그먼트" />

`ui` 세그먼트에는 Screen 컴포넌트를 정의하였습니다. 예를 들어, 다음과 같이 여러 `shared`, `entities`, `features`, `widgets`를 조합하여 Screen 컴포넌트를 정의하였습니다.

```tsx
/* @src/pages/survey/ui/SurveyContentScreen.tsx */

import { useNavigation } from "@react-navigation/native";
import { BottomNextButton } from "@src/shared/ui/button";
import { tw } from "@src/shared/lib/utils";
import React from "react";
import { Text, View } from "react-native";
import { ProgressBar } from "@src/shared/ui/progressBar";
import { SurveyContentItemListWrapper } from "@src/widgets/surveyContentItemListWrapper";
import { CONTENT_CATEGORY, useSurveyStore } from "@src/entities/survey";

export const SurveyContentScreen = () => {
  const navigation = useNavigation();
  const { contentCategory, contentTitles, setSurveyState } = useSurveyStore();

  return (
    <View style={tw`h-full w-full bg-white px-4 pt-2`}>
      <ProgressBar totalProgress={4} currentProgress={3} />
      <Text style={tw`pt-8 text-2xl font-bold text-custom-01`}>
        {`어떤 ${
          CONTENT_CATEGORY.find((value) => value.category === contentCategory)
            ?.title
        }의`}
      </Text>
      <Text style={tw`text-2xl font-bold text-custom-01`}>
        여행지로 떠나볼까요?
      </Text>
      <Text style={tw`pb-6 pt-1.5 text-custom-03`}>여러 개 선택 가능해요</Text>
      <SurveyContentItemListWrapper />
      <BottomNextButton
        disabled={contentTitles.length === 0}
        onPress={() => {
          setSurveyState({ preferredTrips: [] });
          navigation.navigate("SurveyActivity");
        }}
      />
    </View>
  );
};
```

### app

<img src="/assets/img/front-end/fsd-example-react-native/pic26.avif" alt="app 레이어" />

`app` 레이어는 <b>애플리케이션의 진입점에 해당하며, 애플리케이션 초기화, 라우팅 설정, 전역 상태 관리, 전역 스타일 설정 등을 담당하는 레이어</b>입니다. `app` 레이어는 `shared`와 마찬가지로 슬라이스를 포함하지 않으며 세그먼트만 포함합니다.

저는 다음과 같이 세그먼트 역할을 정의하였습니다.

```text
app
├── providers  # 전역 프로바이더 설정
├── routes     # 라우팅 설정
├── styles     # 전역 스타일 설정
├── app.tsx    # 애플리케이션 진입점
└── index.ts
```

#### providers

<img src="/assets/img/front-end/fsd-example-react-native/pic27.avif" alt="app 레이어의 providers 세그먼트" />

`providers` 세그먼트는 <b>Context API 또는 상태 관리 라이브러리(예: Redux, MobX)와 같은 전역 상태나 기능을 제공하는 프로바이더들을 정의하는 레이어</b>입니다. 예를 들어, 다음과 같이 네트워크 상태에 따른 UI를 표시하는 프로바이더를 정의하였습니다.

```tsx
/* @src/app/providers/NetInfoProvider.tsx */

import { useNetInfo } from "@react-native-community/netinfo";
import { tw } from "@src/shared/lib/utils";
import React from "react";
import { Image, Text, View } from "react-native";

interface NetInfoProviderProps {
  children?: React.ReactNode;
}

export const NetInfoProvider = ({ children }: NetInfoProviderProps) => {
  const { isConnected } = useNetInfo();

  if (isConnected === false) {
    return (
      <View style={tw`flex h-full flex-col items-center justify-center`}>
        <Image
          style={tw`h-40 w-40`}
          source={require("@assets/common/disconnection.png")}
        />
        <Text style={tw`pb-1 pt-4 text-lg font-bold text-custom-01`}>
          인터넷에 연결되어 있지 않습니다.
        </Text>
        <Text style={tw`text-custom-03`}>연결 상태를 다시 확인해 주세요.</Text>
      </View>
    );
  }

  return children;
};
```

#### routes

<img src="/assets/img/front-end/fsd-example-react-native/pic28.avif" alt="app 레이어의 routes 세그먼트" />

`routes` 세그먼트는 라우팅 설정을 담당하는 레이어입니다. 예를 들어, 다음과 같이 React Native 프로젝트에서 사용하는 화면에 대한 parameter 목록을 정의하는 파일을 생성하였습니다.

```typescript
/* @src/app/routes/navigationTypes.ts */

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DiaryDetail } from "@src/entities/diary";
import { DiscoveryRecommendationItem } from "@src/entities/discovery";
import { Plan, SavedPlan } from "@src/entities/plan";

export type RootStackParamList = {
  BottomTabs: undefined;
  Plan: undefined;
  PlanDetail: { savedPlan: SavedPlan };
  Discovery: undefined;
  DiscoveryDetail: {
    name: string;
    recommendation: DiscoveryRecommendationItem;
  };
  Home: undefined;
  Diary: undefined;
  DiaryCreate: undefined;
  DiaryUpdate: { diary: DiaryDetail };
  Mypage: undefined;
  Auth: undefined;
  AuthSignIn: undefined;
  AuthLoading: { code: string };
  SurveyDay: undefined;
  SurveyTheme: undefined;
  SurveyContent: undefined;
  SurveyActivity: undefined;
  SurveyLoading: undefined;
  SurveyResultList: { plans: Plan[] };
  SurveyResultDetail: { index: number; plan: Plan };
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

위의 코드에서 `RootStackScreenProps` 타입은 각 Screen의 props를 쉽게 사용할 수 있도록 정의하였습니다. 또한 FSD 아키텍처의 단방향 의존성 원칙을 깨뜨리지 않기 위해 정의하였습니다.

예를 들어, `RootStackScreenProps` 타입이 존재하지 않는다면 다음과 같이 `widgets` 레이어에서 `app` 레이어의 `RootStackParamsList`를 참조하게 되므로 FSD 아키텍처의 단방향 의존성 원칙이 깨지게 됩니다.

```tsx
/* @src/pages/ui/DiaryUpdateScreen.tsx */

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

반면에, `RootStackScreenProps` 타입을 사용하면 다음과 같이 FSD 아키텍처의 단방향 의존성 원칙을 깨뜨리지 않을 수 있습니다.

```tsx
/* @src/pages/ui/DiaryUpdateScreen.tsx */

import { DiaryUpdateEditor } from "@src/widgets/diaryUpdateEditor";
import React from "react";

export const DiaryUpdateScreen = ({
  route
}: RootStackScreenProps<"DiaryUpdate">) => {
  return <DiaryUpdateEditor diary={route.params.diary} />;
};
```

#### styles

`styles` 세그먼트는 전역 스타일 설정을 담당하는 레이어입니다. 제가 진행한 React Native 프로젝트에서는 `Tailwind CSS`를 사용하여 CSS 파일이 필요하지 않아서 해당 세그먼트를 사용하지 않았습니다.

#### app.tsx

`app.tsx` 파일은 애플리케이션의 진입점에 해당합니다.

```tsx
/* @src/app/app.tsx */

import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NetInfoProvider, QueryProvider } from "./providers";
import { Navigation } from "./routes";

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NetInfoProvider>
      <QueryProvider>
        <GestureHandlerRootView>
          <Navigation />
        </GestureHandlerRootView>
      </QueryProvider>
    </NetInfoProvider>
  );
};
```

## FSD 아키텍처 적용 후기

FSD 아키텍처를 적용하면서 느낀 장점은 레이어별로 기능을 명확히 구분함으로써 코드를 유지보수하기 쉽다는 것이었습니다. 기존의 폴더 구조에서는 기능을 유지보수하고자 할 때 광범위하게 흩어져 있는 코드들을 추적하여야 했기 때문에 가독성이 떨어지고 코드를 이해하고 수정하기 쉽지 않았습니다. 하지만 FSD 아키텍처를 적용함으로써 기능별로 코드가 명확히 분리되어 있기 때문에 특정 기능 수정 시 특정 모듈만 집중해서 수정할 수 있으며 다른 부분에 미치는 영향을 최소화할 수 있어서 유지보수성을 크게 향상시킬 수 있었습니다.

단점으로는 특정 코드를 어떤 레이어에 두어야 하는지 헷갈린다는 점이었습니다. 예를 들어, `plan` 생성 API 요청 파일을 `entities` 레이어에 두어야 하는지, 아니면 `features` 레이어에 두어야 하는지 고민이 많았습니다. 또한 특정 기능이 하나의 widget에서만 사용된다면 해당 기능을 `widgets` 레이어에 두어도 괜찮지 않을까라는 생각도 들었습니다.

<b>이렇듯 FSD 아키텍처는 가이드라인만을 제시할 뿐, 엄격한 기준이 없기 때문에 프로젝트를 진행하면서 팀원들이 혼란을 겪지 않고 일관성을 지킬 수 있도록 명확한 기준을 세우는 것이 좋을 것 같습니다.</b>

## 참고 자료

- <a href="https://github.com/TripInfoWeb/solitour-mobile" target="_blank">https://github.com/TripInfoWeb/solitour-mobile</a>
- <a href="https://feature-sliced.github.io/documentation/kr/docs/reference/layers" target="_blank">Layers | Feature-Sliced Design</a>
- <a href="https://github.com/penteleichuk/Moke-Smoke" target="_blank">penteleichuk/Moke-Smoke: The application is developed following the Feature-Sliced Design (FSD) methodology.</a>
