---
title: 좌우 드래그 스크롤 구현 방법
description: 좌우 드래그 스크롤 구현 방법에 대해 설명하는 페이지입니다.
date: 2024-08-04 00:00:00 +/-TTTT
categories: [Front-end]
tags: [typescript, nextjs]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.jpg
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br />
TypeScript, Next.js</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong> <br />
Next.js v14.2.3 </p></blockquote>

## 개요

<hr />

이번 글에서는 `React/Next.js`에서 마우스 또는 터치로 좌우 드래그 스크롤을 구현하는 방법을 설명합니다. 스크롤 기능을 추가할 HTML 태그 요소로 `div`를 선택하였습니다.

## Step 1 - useDragScrollType 정의

<hr />

먼저 다음과 같이 추후 구현할 `useDragScroll` 커스텀 훅의 반환 타입을 정의합니다.

```typescript
export type useDragScrollType = {
  listRef: RefObject<HTMLDivElement>;
  onDragStart: (e: MouseEvent<HTMLDivElement>) => void;
  onDragMove: (e: MouseEvent<HTMLDivElement>) => void;
  onDragEnd: (e: MouseEvent<HTMLDivElement>) => void;
  onTouchStart: (e: TouchEvent<HTMLDivElement>) => void;
  onTouchMove: (e: TouchEvent<HTMLDivElement>) => void;
  onTouchEnd: (e: TouchEvent<HTMLDivElement>) => void;
};
```

각 요소에 대해 설명하자면 다음과 같습니다.

- `listRef`
  - 드래그 스크롤 기능을 추가하기 위해선 해당 DOM의 `scrollLeft` 값을 참조해야 합니다.
  - 해당 DOM의 scrollLeft를 얻기 위해 `useRef`를 사용하여 DOM에 접근합니다.
- `onDragStart`
  - 마우스 드래그가 시작되었을 때 호출되는 이벤트입니다.
- `onDragMove`
  - 마우스 드래그가 진행 중일 때 호출되는 이벤트입니다.
- `onDragEnd`
  - 마우스 드래그가 종료되었을 때 호출되는 이벤트입니다.
- `onTouchStart`
  - 터치 드래그가 시작되었을 때 호출되는 이벤트입니다.
- `onTouchMove`
  - 터치 드래그가 진행 중일 때 호출되는 이벤트입니다.
- `onTouchEnd`
  - 터치 드래그가 종료되었을 때 호출되는 이벤트입니다.

## Step 2 - useDragScroll 커스텀 훅 생성

<hr />

다음과 같이 좌우 드래그 스크롤 기능을 제공하는 `useDragScroll.ts` 파일을 생성하고 상태를 관리하는 변수를 선언합니다.

```typescript

import { MouseEvent, RefObject, TouchEvent, useRef, useState } from "react";

(...)

export default function useDragScroll(): useDragScrollType {
  const listRef = useRef<HTMLDivElement>(null);

  // element를 드래그하고 있는지 여부
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // 드래그 시작 시점의 스크롤 포지션이 포함된 x축 좌표값
  const [totalX, setTotalX] = useState<number>(0);

  (...)
}
```

각 변수에 대해 설명하자면 다음과 같습니다.

- `listRef`: 좌우 드래그 스크롤을 적용할 DOM에 접근하기 위한 Ref 객체입니다.
- `[isDragging, setIsDragging]`: 드래그하고 있는지 여부를 추적합니다.
- `[totalX, setTotalX]`: 드래그 시작 시점의 x축 좌표 값을 추적합니다.

## Step 3 - 마우스 드래그 이벤트 정의하기

<hr />

다음과 같이 마우스 드래그 이벤트를 정의합니다.

```typescript
// 마우스 드래그 시작
const onDragStart = (e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  setIsDragging(true);

  const x = e.clientX;
  if (listRef.current && "scrollLeft" in listRef.current) {
    setTotalX(x + listRef.current.scrollLeft);
  }
};

// 마우스 드래그 동작 중
const onDragMove = (e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  if (!isDragging) {
    return;
  }

  const scrollLeft = totalX - e.clientX;
  if (listRef.current && "scrollLeft" in listRef.current) {
    // 스크롤 발생
    listRef.current.scrollLeft = scrollLeft;
  }
};

// 마우스 드래그 종료
const onDragEnd = (e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  if (!isDragging) {
    return;
  }

  if (!listRef.current) {
    return;
  }

  setIsDragging(false);
};
```

## Step 4 - 터치 드래그 이벤트 정의하기

<hr />

다음과 같이 터치 드래그 이벤트를 정의합니다.

```typescript
// 터치 드래그 시작
const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
  setIsDragging(true);

  const x = e.touches[0].pageX;
  if (listRef.current && "scrollLeft" in listRef.current) {
    setTotalX(x + listRef.current.scrollLeft);
  }
};

// 터치 드래그 동작 중
const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
  if (!isDragging) {
    return;
  }

  const scrollLeft = totalX - e.touches[0].pageX;
  if (listRef.current && "scrollLeft" in listRef.current) {
    // 스크롤 발생
    listRef.current.scrollLeft = scrollLeft;
  }
};

// 터치 드래그 종료
const onTouchEnd = () => {
  if (!isDragging) {
    return;
  }

  if (!listRef.current) {
    return;
  }

  setIsDragging(false);
};
```

터치 드래그 이벤트의 경우 마우스 드래그 이벤트를 정의할 때 사용한 `e.preventDefault()`를 호출하지 않습니다. `e.preventDefault()`를 호출하면 Link나 버튼 등을 터치할 때 정상적으로 동작하지 않게 됩니다.

## Step 5 - 최종 코드

<hr />

위에서 구현한 `useDragScroll` 커스텀 훅의 최종 코드는 다음과 같습니다.

```typescript
// useDragScroll.ts

import { MouseEvent, RefObject, TouchEvent, useRef, useState } from "react";

export type useDragScrollType = {
  listRef: RefObject<HTMLDivElement>;
  onDragStart: (e: MouseEvent<HTMLDivElement>) => void;
  onDragMove: (e: MouseEvent<HTMLDivElement>) => void;
  onDragEnd: (e: MouseEvent<HTMLDivElement>) => void;
  onTouchStart: (e: TouchEvent<HTMLDivElement>) => void;
  onTouchMove: (e: TouchEvent<HTMLDivElement>) => void;
  onTouchEnd: (e: TouchEvent<HTMLDivElement>) => void;
};

export default function useDragScroll(): useDragScrollType {
  const listRef = useRef<HTMLDivElement>(null);

  // element를 드래그하고 있는지 여부
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // 드래그 시작 시점의 스크롤 포지션이 포함된 x축 좌표값
  const [totalX, setTotalX] = useState<number>(0);

  // 마우스 드래그 시작
  const onDragStart = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);

    const x = e.clientX;
    if (listRef.current && "scrollLeft" in listRef.current) {
      setTotalX(x + listRef.current.scrollLeft);
    }
  };

  // 마우스 드래그 동작 중
  const onDragMove = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isDragging) {
      return;
    }

    const scrollLeft = totalX - e.clientX;
    if (listRef.current && "scrollLeft" in listRef.current) {
      // 스크롤 발생
      listRef.current.scrollLeft = scrollLeft;
    }
  };

  // 마우스 드래그 종료
  const onDragEnd = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isDragging) {
      return;
    }

    if (!listRef.current) {
      return;
    }

    setIsDragging(false);
  };

  // 터치 드래그 시작
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);

    const x = e.touches[0].pageX;
    if (listRef.current && "scrollLeft" in listRef.current) {
      setTotalX(x + listRef.current.scrollLeft);
    }
  };

  // 터치 드래그 동작 중
  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }

    const scrollLeft = totalX - e.touches[0].pageX;
    if (listRef.current && "scrollLeft" in listRef.current) {
      // 스크롤 발생
      listRef.current.scrollLeft = scrollLeft;
    }
  };

  // 터치 드래그 종료
  const onTouchEnd = () => {
    if (!isDragging) {
      return;
    }

    if (!listRef.current) {
      return;
    }

    setIsDragging(false);
  };

  return {
    listRef,
    onDragStart,
    onDragMove,
    onDragEnd,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
}
```

## Step 6 - 좌우 드래그 스크롤 적용하기

<hr />

다음과 같이 좌우 드래그 스크롤을 적용할 HTML 태그 요소에 이벤트를 등록합니다.

```typescript
const scrollHook = useDragScroll();
```

```typescript
<div
  className="overflow-x-auto"
  ref={scrollHook.listRef}
  onMouseDown={scrollHook.onDragStart}
  onMouseMove={scrollHook.onDragMove}
  onMouseUp={scrollHook.onDragEnd}
  onMouseLeave={scrollHook.onDragEnd}
  onTouchStart={scrollHook.onTouchStart}
  onTouchMove={scrollHook.onTouchMove}
  onTouchEnd={scrollHook.onTouchEnd}
>
  {children}
</div>
```

## Step 7 - 테스트 결과

<hr />

좌우 드래그 스크롤을 적용한 테스트 결과는 다음과 같습니다.

<video width="480" controls> 
<source src="/assets/video/front-end/drag-scroll/video1.webm" type="video/webm" />
Your browser does not support the video format. Please try a different browser.
</video>

## 참고 자료

<hr />

- <a href="https://jihyundev.tistory.com/33" target="_blank">리액트로 만들어보는 마우스 드래그 좌우스크롤 컴포넌트</a>
