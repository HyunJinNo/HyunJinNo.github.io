---
title: createPortal로 Modal 구현 방법
description: createPortal에 Modal 구현 방법에 대해 정리한 페이지입니다.
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

React의 `createPortal`을 사용하면 컴포넌트 트리 구조와 상관없이, 지정된 DOM의 자식 컴포넌트로 렌더링할 수 있습니다. 주로 Modal, Tooltip, Dropdown 등 부모 컴포넌트의 레이아웃이나 스타일링 제약을 벗어나 독립적으로 렌더링되어야 하는 UI 요소들을 구현할 때 사용합니다.

### 특징

- `DOM 계층 구조 분리`

  컴포넌트를 실제 DOM 트리의 다른 위치에 렌더링할 수 있습니다. 이를 통해 <b>부모 컴포넌트의 CSS 스타일이나 `z-index` 문제로부터 벗어날 수 있습니다.</b>

- `이벤트 전파 유지`

  `portal`로 렌더링된 요소도 React의 컴포넌트 트리에 포함되기 때문에 부모 컴포넌트의 이벤트 버블링을 그대로 따릅니다.

## Modal 구현하기

### Step 1 - portal 추가하기

먼저 다음과 같이 id 값이 `modal-root`인 `portal` 하나를 추가합니다.

```tsx
/* @/app/layout.tsx */

(...생략)

export default function RootLayout({
  children,
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
    closeModal,
  };
};
```

### Step 3 - useModalBackHandler 커스텀 훅 생성하기

<a href="../modal-back-button">모달 창(Modal Window) 뒤로가기 이벤트 처리 방법</a>

```typescript
/* @/shared/lib/hooks/useModalBackHandler.ts */

"use client"

import { useEffect } from "react";

export const useModalBackHandler = (
  isOpen: boolean,
  closeModal: () => void,
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

### Step 4 - usePreventBodyScroll 커스텀 훅 생성하기

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

### Step 5 - Modal 컴포넌트 생성하기

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
    document.getElementById("modal-root")!,
  );
};
```

### Step 6 - ModalTemplate 컴포넌트 생성하기

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
  closeModal,
}: ModalTemplateProps) => {
  return (
    <section
      className={[
        "scrollbar-hide relative flex max-h-[calc(100vh-1rem)] flex-col items-center overflow-y-scroll rounded-2xl bg-white pt-16",
        className,
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
  closeModal,
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


## 참고 자료

- <a href="https://ko.react.dev/reference/react-dom/createPortal" target="_blank">createPortal – React</a>