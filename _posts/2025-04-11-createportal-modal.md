---
title: createPortal로 Modal 구현 방법
description: createPortal로 Modal 구현 방법에 대해 정리한 페이지입니다.
date: 2025-04-11 10:49:00 +/-TTTT
categories: [Front-end]
tags: [createportal, modal, nextjs, react, typescript]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br>
createPortal, Modal, Next.js, React, TypeScript</p></blockquote>

## 개요

React의 `createPortal`로 모달 창(Modal Window)을 구현하는 방법에 대해 정리한 페이지입니다.

## createPortal이란?

### 개념

React의 `createPortal`을 사용하면 컴포넌트 트리 구조와 상관없이, 지정된 DOM의 자식 컴포넌트로 렌더링할 수 있습니다. 주로 Modal, Tooltip, Dropdown, Toast 메시지 등 부모 컴포넌트의 레이아웃이나 스타일링 제약을 벗어나 독립적으로 렌더링되어야 하는 UI 요소들을 구현할 때 사용합니다.

### 주요 특징

`createPortal`의 주요 특징은 다음과 같습니다.

- `DOM 계층 구조 분리`

  컴포넌트를 실제 DOM 트리의 다른 위치에 렌더링할 수 있습니다. 이를 통해 <b>부모 컴포넌트의 CSS 스타일 제약으로부터 벗어날 수 있습니다. 특히 `z-index` 문제를 방지할 수 있습니다.</b>

- `이벤트 전파 유지`

  `portal`로 렌더링된 요소도 React의 컴포넌트 트리에 포함되기 때문에 부모 컴포넌트의 이벤트 버블링을 그대로 따릅니다.

## Modal 구현하기

### Step 1 - Portal 추가하기

먼저 다음과 같이 id 값이 `modal-root`인 `Portal` 하나를 추가합니다.

```tsx
/* @/app/layout.tsx */

/* ... */

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="flex h-full flex-col">
        <ToastifyComponent />
        <Header />
        <div className="flex w-full items-center justify-center">
          <div className="flex w-240 flex-col items-center max-[1024px]:w-full max-[1024px]:px-13.5 max-[744px]:px-6">
            {children}
          </div>
        </div>
        <Footer />
        <FloatingButton />
        <div id="modal-root" />
      </body>
    </html>
  );
}
```

### Step 2 - useModal 커스텀 훅 생성하기

모달 창의 상태를 관리하기 위해 다음 커스텀 훅을 생성합니다.

```typescript
/* @/shared/lib/hooks/useModal.ts */

"use client";

import { useCallback, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal
  };
};
```

### Step 3 - useModalBackHandler 커스텀 훅 생성하기

모바일 UX를 고려하여 모바일에서 모달 창(Modal Window)이 열린 상태에서 뒤로가기 버튼을 눌렀을 때 모달 창을 닫을 수 있도록 다음 커스텀 훅을 생성합니다.

```typescript
/* @/shared/lib/hooks/useModalBackHandler.ts */

"use client";

import { useEffect } from "react";

export const useModalBackHandler = (
  isOpen: boolean,
  closeModal: () => void
) => {
  useEffect(() => {
    if (isOpen) {
      // 모달창이 열릴 때 history에 새로운 상태 추가
      window.history.pushState(null, "");
    }

    const handlePopState = () => {
      if (isOpen) {
        closeModal(); // 모달창 닫기
      }
    };

    // popstate 이벤트 리스너 추가
    window.addEventListener("popstate", handlePopState);

    return () => {
      // 컴포넌트가 언마운트되거나 모달창이 닫힐 때 이벤트 리스너 제거
      window.removeEventListener("popstate", handlePopState);
    };
  }, [closeModal, isOpen]);
};
```

<img src="/assets/img/front-end/createportal-modal/pic1.webp" alt="뒤로가기 버튼을 클릭하여 모달 창 닫기" />

해당 커스텀 훅에 대한 설명은 다음 링크를 참고하시길 바랍니다.

<a href="../modal-back-button">모달 창(Modal Window) 뒤로가기 이벤트 처리 방법</a>

### Step 4 - usePreventBodyScroll 커스텀 훅 생성하기

모달 창이 열렸을 때 모달 창 외부의 스크롤을 막기 위해 다음 커스텀 훅을 생성합니다.

```typescript
/* @/shared/lib/hooks/usePreventBodyScroll.ts */

"use client";

import { useEffect } from "react";

export const usePreventBodyScroll = (dependency: boolean) => {
  useEffect(() => {
    if (!dependency) return;

    const body = document.getElementsByTagName("body")[0];
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = "auto";
      body.style.paddingRight = "0px";
    };
  }, [dependency]);
};
```

<img src="/assets/img/front-end/createportal-modal/pic2.webp" alt="모달 창이 열렸을 때 스크롤 막기" />

### Step 5 - Modal 컴포넌트 생성하기

먼저 다음과 같이 Modal 컴포넌트를 생성합니다.

```tsx
/* @/shared/ui/modal/Modal.tsx */

"use client";

import { useModalBackHandler, usePreventBodyScroll } from "@/shared/lib/hooks";
import React, { useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal = ({ children, isOpen, closeModal }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useModalBackHandler(isOpen, closeModal);
  usePreventBodyScroll(isOpen);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="fixed top-0 left-0 z-100 flex h-full w-full items-center justify-center bg-black/30"
      ref={ref}
      onClick={(e) => {
        if (e.target === ref.current) {
          window.history.back();
          closeModal();
        }
      }}
    >
      {children}
    </div>,
    document.getElementById("modal-root")!
  );
};
```

위의 코드를 설명하자면 다음과 같습니다.

**1. ref 생성**

```typescript
const ref = useRef<HTMLDivElement>(null);
```

모달 창이 열린 상태에서 모달 창이 아닌 배경 클릭을 감지하기 위해 `ref`를 생성합니다.

<br />

**2. 뒤로가기 이벤트 처리하기**

```typescript
useModalBackHandler(isOpen, closeModal);
```

[Step 3 - useModalBackHandler 커스텀 훅 생성하기](#step-3---usemodalbackhandler-커스텀-훅-생성하기)에서 생성한 useModalBackHandler 커스텀 훅을 사용하여 뒤로가기 이벤트를 처리합니다.

<br />

**3. 스크롤 막기**

```typescript
usePreventBodyScroll(isOpen);
```

[Step 4 - usePreventBodyScroll 커스텀 훅 생성하기](#step-4---usepreventbodyscroll-커스텀-훅-생성하기)에서 생성한 usePreventBodyScroll 커스텀 훅을 사용하여 모달 창이 열렸을 때의 외부 스크롤을 방지합니다.

<br />

**4. 모달 창이 닫힌 상태 처리하기**

```typescript
if (!isOpen) {
  return null;
}
```

모달 창이 닫힌 상태일 때 아무 것도 표시하지 않습니다.

<br />

**5. 모달 창이 열린 상태 처리하기**

```tsx
return createPortal(
  <div
    className="fixed top-0 left-0 z-100 flex h-full w-full items-center justify-center bg-black/30"
    ref={ref}
    onClick={(e) => {
      if (e.target === ref.current) {
        window.history.back();
        closeModal();
      }
    }}
  >
    {children}
  </div>,
  document.getElementById("modal-root")!
);
```

[Step 1 - Portal 추가하기](#step-1---portal-추가하기)에서 추가한 `Portal`에 모달 창을 표시합니다. 이 때 `e.target`과 `ref.current`를 비교하여 모달 창의 배경을 클릭했을 때 모달 창을 닫을 수 있도록 구현합니다. 또한 배경을 클릭했을 때, 모달 창을 열면서 추가한 history를 제거할 수 있도록 `window.history.back();`을 추가합니다.

위와 같이 구현할 경우 아래 이미지에서 검은 부분, 즉 배경을 클릭하면 모달 창이 닫히게 됩니다.

<img src="/assets/img/front-end/createportal-modal/pic3.avif" alt="배경 클릭 시 모달 창이 닫힙니다.">

<br />

### Step 6 - ModalTemplate 컴포넌트 생성하기

<img src="/assets/img/front-end/createportal-modal/pic4.avif" alt="ModalTemplate.tsx">

제가 진행한 프로젝트에서는 모달 창을 닫기 위해 X 버튼이 반복적으로 사용되며, 모달 창의 스타일 역시 재사용됩니다. 따라서 다음과 같이 재사용할 수 있는 ModalTemplate 컴포넌트를 구현하였습니다. X 버튼을 클릭했을 때 history를 제거할 수 있도록 `window.history.back();`을 추가하였습니다.

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br>
X 모양의 아이콘을 사용하기 위해 <a href="https://react-icons.github.io/react-icons/" target="_blank">react-icons</a> 라이브러리를 사용하였습니다.</p></blockquote>

```tsx
/* @/shared/ui/modal/ModalTemplate.tsx */

"use client";

import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface ModalTemplateProps {
  className?: string;
  children?: ReactNode;
  closeModal: () => void;
}

export const ModalTemplate = ({
  className,
  children,
  closeModal
}: ModalTemplateProps) => {
  return (
    <section
      className={[
        "scrollbar-hide relative flex max-h-[calc(100vh-1rem)] flex-col items-center overflow-y-scroll rounded-2xl bg-white pt-16",
        className
      ].join(" ")}
    >
      <MdClose
        className="text-gray2 hover:text-main absolute top-6 right-6 cursor-pointer"
        size="2rem"
        onClick={() => {
          window.history.back();
          closeModal();
        }}
      />
      {children}
    </section>
  );
};
```

### Step 7 - Modal 사용하기

지금까지 구현한 커스텀 훅과 컴포넌트를 사용하여 다음과 같이 Modal을 사용할 수 있습니다.

먼저 아래와 같이 [Step 6 - ModalTemplate 컴포넌트 생성하기](#step-6---modaltemplate-컴포넌트-생성하기)에서 구현한 ModalTemplate 컴포넌트를 사용하여 모달 UI를 구현합니다. 이 때, 모달 창을 닫는 `closeModal` 메서드를 부모 컴포넌트로부터 전달 받습니다.

```tsx
/* @/features/deleteAccount/ui/MyPageAccountDeleteModal.tsx */

"use client";

import { User } from "@/entities/user";
import { useMyPageAccountDeleteModal } from "../model/useMyPageAccountDeleteModal";
import { ModalTemplate } from "@/shared/ui/modal";

interface MyPageAccountDeleteModalProps {
  userInfo: User;
  closeModal: () => void;
}

export const MyPageAccountDeleteModal = ({
  userInfo,
  closeModal
}: MyPageAccountDeleteModalProps) => {
  const { userDeleteText, handleUserDeleteTextChange, handleDeleteClick } =
    useMyPageAccountDeleteModal(userInfo, closeModal);

  return (
    <ModalTemplate
      className="max-h-96 max-w-160 flex-col gap-y-4 p-6"
      closeModal={closeModal}
    >
      <div className="flex flex-col gap-y-2">
        <p>
          1. 회원 탈퇴 후에는 복구가 불가능하며, 현재 진행 중인 모임 서비스나
          여행일기 서비스 이용 내역이 있을 경우, 관련 정보도 함께 삭제됩니다.
        </p>
        <p>
          2. 정보 게시글은 삭제되지 않지만 사용자와 관련된 내용은 전부 비공개
          처리되고 이후에는 수정이나 삭제는 불가능해집니다.
        </p>
        <p>3. 필요한 정보는 회원 탈퇴하기전에 따로 보관해주시기 바랍니다.</p>
      </div>
      <div className="flex items-end gap-x-1 select-none">
        <span className="text-main text-lg">회원 탈퇴를 하겠습니다.</span>
        <span>라고 입력해주세요.</span>
      </div>
      <input
        className="w-full rounded-2xl px-4 py-4 outline -outline-offset-1 outline-[#E3E3E3]"
        placeholder="텍스트를 입력해주세요."
        onChange={(e) => handleUserDeleteTextChange(e.target.value)}
      />
      <button
        className="bg-main disabled:bg-gray2 h-12 w-full shrink-0 rounded-full text-white"
        disabled={userDeleteText !== "회원 탈퇴를 하겠습니다."}
        onClick={handleDeleteClick}
      >
        회원 탈퇴
      </button>
    </ModalTemplate>
  );
};
```

위와 같이 모달 UI를 구현한 후 아래와 같이 Modal을 사용할 수 있습니다.

```tsx
/* @/features/deleteAccount/ui/DeleteAccount.tsx */

"use client";

import { MyPageAccountDeleteModal } from "./MyPageAccountDeleteModal";
import { User } from "@/entities/user";
import { useModal } from "@/shared/lib/hooks";
import { Modal } from "@/shared/ui/modal";

interface DeleteAccountProps {
  userInfo: User;
}

export const DeleteAccount = ({ userInfo }: DeleteAccountProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <div className="text-gray2 flex w-full justify-end pt-12">
        <button className="hover:text-main hover:font-bold" onClick={openModal}>
          회원 탈퇴
        </button>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <MyPageAccountDeleteModal userInfo={userInfo} closeModal={closeModal} />
      </Modal>
    </div>
  );
};
```

<img src="/assets/img/front-end/createportal-modal/pic5.webp" alt="Modal 사용하기" />

## 참고 자료

- <a href="https://ko.react.dev/reference/react-dom/createPortal" target="_blank">createPortal – React</a>
