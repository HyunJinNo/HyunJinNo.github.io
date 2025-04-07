---
title: "[개발 기록] Next.js 프로젝트에 FSD 아키텍처 적용하기"
description: Next.js 프로젝트에서 FSD 아키텍처를 적용하면서 경험한 내용에 대해 정리한 페이지입니다.
date: 2025-04-07 10:19:00 +/-TTTT
categories: [Front-end]
tags: [react, nextjs, fsd, development-history, typescript]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br>
React, Next.js, FSD, Development History, TypeScript</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong><br />
Next.js v15.2.2</p></blockquote>

<h2>목차 - TODO </h2>

- [개요](#개요)
- [FSD 아키텍처 적용 전](#fsd-아키텍처-적용-전)
- [FSD 아키텍처 적용하기](#fsd-아키텍처-적용하기)
  - [shared](#shared)
    - [api](#api)
    - [config](#config)
    - [lib](#lib)
    - [model](#model)
    - [ui](#ui)
  - [entities](#entities)
    - [api](#api-1)
    - [config](#config-1)
    - [model](#model-1)
    - [ui](#ui-1)
  - [features](#features)
  - [widgets](#widgets)
  - [app](#app)
- [FSD 아키텍처 적용 후](#fsd-아키텍처-적용-후)
- [참고 자료](#참고-자료)

## 개요

Next.js 프로젝트에서 FSD 아키텍처를 적용하면서 경험한 내용에 대해 정리한 페이지입니다. FSD 아키텍처의 개념에 대해선 다음 링크를 참고하시길 바랍니다.

<a href="../fsd">FSD 아키텍처</a>

## FSD 아키텍처 적용 전

FSD 아키텍처 적용 전에는 다음과 같은 프론트엔드 아키텍처 구조를 채택하였습니다.

<img src="/assets/img/front-end/fsd-example-nextjs/pic1.jpg" alt="FSD 아키텍처 적용 전 폴더 구조" />

위의 아키텍처 구조는 page 단위로 구분한 것으로 특정 페이지에서 사용하는 컴포넌트를 빠르게 찾을 수 있었습니다. 하지만 해당 폴더 구조는 특정 기능과 관련된 코드들이 너무 광범위하게 흩어져 있어서 기능을 수정하는 등 코드를 유지보수하기가 어려웠습니다. 특히 프로젝트 규모가 커지면서 공통 컴포넌트가 많아지다 보니 공통 컴포넌트를 관리하는 데 어려움을 겪었습니다. 따라서 기존의 아키텍처 구조를 변경하여 코드를 유지보수하기 쉽도록 개선할 필요성을 느꼈습니다. 이와 같은 상황에서 FSD 아키텍처를 적용하여 애플리케이션을 독립적인 비즈니스 기능 단위로 분할하면 유지보수하기 쉽다고 판단하여 아래와 같이 FSD 아키텍처를 적용하기로 결정하였습니다.

## FSD 아키텍처 적용하기

FSD 아키텍처는 다음과 같은 계층 구조를 갖습니다.

<img src="/assets/img/front-end/fsd-example-nextjs/pic2.avif" alt="FSD 아키텍처의 계층 구조" />

`Next.js(App Router)`에서 FSD 아키텍처를 적용하려고 할 때 발생할 수 있는 문제점으로 FSD 아키텍처의 `app` 레이어와 Next.js의 `app` 폴더와의 충돌 문제가 있습니다. `Next.js(App Router)`에서는 `app` 폴더를 통해 라우팅을 처리하지만, FSD 아키텍처에서 `app` 레이어는 애플리케이션 초기화, 라우팅, 전역 상태 관리 등을 담당하는 레이어입니다. 또한 `App Router`를 사용하더라도 `src` 폴더 내에 `pages` 폴더는 `Pages Router`를 사용하는 것으로 처리됩니다. 따라서 FSD 아키텍처에서 `pages` 폴더를 사용할 수 없습니다.

이 문제를 해결하기 위해 다음 2가지 해결 방법을 생각하였습니다.

1. FSD 아키텍처에서 사용하는 `pages` 레이어 이름을 `views`로 변경하는 것
2. Next.js의 app 폴더가 라우팅을 처리하므로 `pages` 레이어를 사용하지 않고 `app` 레이어가 `pages` 레이어의 역할까지 처리하도록 맡기는 것

위의 2가지 해결 방법 중에서 저는 2번을 선택하였습니다. `Next.js(App Router)`에서 app 폴더 내에 `page.tsx` 파일을 생성하여 페이지를 생성하므로 FSD 아키텍처에서 URL 경로에 매핑되는 페이지 컴포넌트를 관리하는 레이어인 `pages` 레이어를 사용할 필요가 없다고 생각하였습니다.

따라서 다음과 같은 폴더 구조를 채택하였습니다.

<img src="/assets/img/front-end/fsd-example-nextjs/pic3.jpg" alt="FSD 아키텍처 적용 후 폴더 구조" />

```text
src
├── app       # 애플리케이션 초기화, 라우팅, 전역 상태 관리 등을 담당하는 레이어입니다. + URL 경로에 매핑되는 페이지 컴포넌트를 관리하는 레이어입니다.
├── widgets   # 여러 페이지에서 공용으로 사용하는 독립적인 UI 컴포넌트를 관리하는 레이어입니다. (Ex. Header, Searchbar, Sidebar 등)
├── features  # 특정 기능의 로직, UI, API 호출을 포함한 독립 모듈입니다. (Ex. 좋아요 버튼, 글 작성 버튼, 정렬 기능 등)
├── entities  # 도메인 모델과 관련된 데이터 처리를 담당하는 레이어입니다. (Ex. user, post 등)
└── shared    # 애플리케이션 전반에 걸쳐 재사용되는 유틸리티, UI 컴포넌트 등을 포함하는 레이어입니다. (Ex. 버튼, 헤더, HTTP 클라이언트 등)
```

각 레이어 구현 방식에 대해 설명하자면 아래와 같습니다.

### shared

<img src="/assets/img/front-end/fsd-example-nextjs/pic4.jpg" alt="shared 레이어" />

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

<img src="/assets/img/front-end/fsd-example-nextjs/pic5.jpg" alt="shared 레이어의 api 세그먼트" />

`api` 세그먼트에는 API 요청과 관련된 코드를 모아두었습니다. 프로젝트 전반에 걸쳐 사용되는 fetch 함수, 새로운 액세스 토큰을 받아오는 API 요청, 이미지 업로드 API 요청 파일 등을 모아두었습니다.

```typescript
/* fetchWithAuth.ts */

import { getNewAccessToken } from "./getNewAccessToken";

export async function fetchWithAuth(
  input: string | URL | globalThis.Request,
  init?: RequestInit
) {
  const response = await fetch(input, init);

  if (response.status === 401) {
    const accessToken = await getNewAccessToken();

    if (!accessToken) {
      return response;
    }

    return await fetch(input, {
      ...init,
      headers: { Cookie: `access_token=${accessToken}` }
    });
  }

  return response;
}
```

```typescript
/* getNewAccessToken.ts */

"use server";

import { cookies } from "next/headers";

export async function getNewAccessToken() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refresh_token");

  if (!refreshToken) {
    return null;
  }

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/auth/oauth2/token/refresh`,
    {
      method: "POST",
      headers: { Cookie: `${refreshToken?.name}=${refreshToken?.value}` },
      cache: "no-store"
    }
  );

  const accessToken = response.headers.get("set-cookie")!.slice(13);
  return accessToken;
}
```

#### config

<img src="/assets/img/front-end/fsd-example-nextjs/pic6.jpg" alt="shared 레이어의 config 세그먼트" />

`config` 세그먼트에는 프로젝트 전반에 걸쳐 사용되는 상수 파일을 모아두었습니다. 예를 들어, 다음과 같이 여러 페이지에서 사용되는 지역 정보 관련 상수 파일을 정의하였습니다.

```typescript
/* location.ts */

export const LOCATION = [
  "강원",
  "경기",
  "경남",
  "경북",
  "광주",
  "대구",
  "대전",
  "부산",
  "서울",
  "세종",
  "울산",
  "인천",
  "전남",
  "전북",
  "제주",
  "충남",
  "충북"
] as const;

(...생략)
```

#### lib

<img src="/assets/img/front-end/fsd-example-nextjs/pic7.jpg" alt="shared 레이어의 lib 세그먼트" />

`lib` 세그먼트에는 프로젝트 전반에 걸쳐 사용되는 유틸리티 함수나 커스텀 훅을 정의하였습니다. 유틸리티 함수와 커스텀 훅을 구분하기 위해 다음과 같이 `lib` 세그먼트 내에 `hooks` 폴더를 생성하여 커스텀 훅들을 모아두었고, `utils` 폴더를 생성하여 유틸리티 함수들을 모아두었습니다.

#### model

<img src="/assets/img/front-end/fsd-example-nextjs/pic8.jpg" alt="shared 레이어의 model 세그먼트" />

`model` 세그먼트에는 프로젝트 전반에 걸쳐 사용되는 전역 상태나 비즈니스 로직을 정의하였습니다. 예를 들어, 다음과 같이 Toast 메시지를 관리하는 스토어를 생성하였습니다.

```typescript
/* toastifyStore.ts */

import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

// 1. 상태 인터페이스 정의
interface ToastifyState {
  type: "success" | "error" | "warning" | "info" | "default";
  message: string;
  count: number; // count 값을 증가시킴으로써 토스트 메세지를 출력합니다.
}

// 2. 액션 인터페이스 정의
interface ToastifyAction {
  initialize: () => void;
  setToastifyState: (data: Pick<ToastifyState, "type" | "message">) => void;
}

// 3. 초기 상태 정의
const initialState: ToastifyState = { type: "default", message: "", count: 0 };

type ToastifyStoreType = ToastifyState & ToastifyAction;

// 4. 상태 및 액션 생성
const toastifyStore: StateCreator<ToastifyStoreType> = (set) => ({
  ...initialState,
  initialize: () => set({ ...initialState }),
  setToastifyState: (data) =>
    set((value) => ({ ...data, count: value.count + 1 }))
});

export const useToastifyStore = create<ToastifyStoreType>(
  process.env.NODE_ENV === "development"
    ? (devtools(toastifyStore) as StateCreator<ToastifyStoreType>)
    : toastifyStore
);
```

#### ui

<img src="/assets/img/front-end/fsd-example-nextjs/pic9.jpg" alt="shared 레이어의 ui 세그먼트" />

`ui` 세그먼트에는 프로젝트 전반에 걸쳐 재사용할 수 있는 UI 컴포넌트를 정의하였습니다. 예를 들어, 다음과 같이 여러 페이지에서 사용되는 Breadcrumb 컴포넌트를 생성하였습니다.

```tsx
/* Breadcrumb.tsx */

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface BreadcrumbProps {
  categoryList: { label: string; href: string }[];
}

export const Breadcrumb = ({ categoryList: categories }: BreadcrumbProps) => {
  return (
    <nav className="text-gray2 flex w-full items-center gap-1 py-10 text-xs">
      <div className="text-gray1">
        <Link href="/">
          <Image
            src="/icons/home-gray-icon.svg"
            alt="home-gray-icon"
            width={12}
            height={12}
          />
        </Link>
      </div>
      {categories.map((i, index) => (
        <div key={index} className="flex flex-row items-center gap-1">
          <IoIosArrowForward />
          {categories.length == index + 1 ? (
            <span className="text-gray1 font-semibold">{i.label}</span>
          ) : (
            <Link href={i.href}> {i.label} </Link>
          )}
        </div>
      ))}
    </nav>
  );
};
```

### entities

<img src="/assets/img/front-end/fsd-example-nextjs/pic10.jpg" alt="entities 레이어" />

<img src="/assets/img/front-end/fsd-example-nextjs/pic11.jpg" alt="애플리케이션의 핵심 도메인(데이터 모델)" />

`entities` 레이어는 <b>애플리케이션의 핵심 도메인(데이터 모델)과 관련된 로직을 관리하는 레이어</b>입니다. 일반적으로 API 호출, 상태 관리, 데이터 모델을 담당합니다.

저는 다음과 같이 세그먼트 역할을 정의하였습니다.

```text
entities
├── user
|   ├── api    # user 관련 API
|   ├── lib    # user 관련 유틸리티 함수
|   ├── model  # user 관련 상태 (Ex. userStore)
|   ├── ui     # user 관련 UI 컴포넌트
|   └── index.ts
├── post
└── comment
```

#### api

#### config

#### model

#### ui

### features

`features` 레이어는 <b>사용자의 특정 행동과 상호작용과 관련된 기능을 포함하는 레이어</b>입니다. 하나의 기능에 필요한 모든 요소를 그룹화합니다.

```text
features
├── auth
|   ├── api    # 로그인/로그아웃 API
|   ├── lib    # 인증 관련 유틸리티 함수
|   ├── model  # auth 관련 상태 (Ex. authStore)
|   ├── ui     # 로그인 폼, OAuth 버튼 등 UI 컴포넌트
|   └── index.ts
├── search
├── (...)
```

### widgets

`widgets` 레이어는 <b>여러 개의 기능들을 조합하여 특정 화면의 일부를 구성하는 역할을 맡은 레이어</b>입니다. 일반적으로 하나의 큰 독립적인 컴포넌트를 정의하는 곳입니다.

```text
widgets
├── sidebar
|   ├── api    # API 관련 파일
|   ├── lib    # 유틸리티 함수
|   ├── model  # 커스텀 훅, 스키마, 타입, 인터페이스, 스토어, 비즈니스 로직 등 데이터 모델
|   ├── ui     # 사이드바 UI 컴포넌트
|   └── index.ts
├── searchbar
├── (...)
```

### app

`app` 레이어는 <b>애플리케이션의 진입점에 해당하며, 애플리케이션 초기화, 라우팅 설정, 전역 상태 관리, 전역 스타일 설정 등을 담당하는 레이어</b>입니다. `app` 레이어는 `shared`와 마찬가지로 슬라이스를 포함하지 않으며 세그먼트만 포함합니다.

```text

```

## FSD 아키텍처 적용 후

TODO

## 참고 자료

- <a href="https://github.com/TripInfoWeb/solitour-frontend" target="_blank">https://github.com/TripInfoWeb/solitour-frontend</a>
- <a href="https://nextjs.org/docs#app-router-vs-pages-router" target="_blank">Introduction | Next.js</a>
- <a href="https://feature-sliced.github.io/documentation/kr/docs/guides/tech/with-nextjs" target="_blank">NextJS와 함께 사용하기 | Feature-Sliced Design</a>
- <a href="https://23life.tistory.com/entry/nextjs%EC%97%90-FSD-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0-%ED%8C%A8%ED%84%B4-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0" target="_blank">next.js에 FSD 폴더 구조 패턴 적용하기</a>
