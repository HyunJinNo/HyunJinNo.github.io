---
title: 이미지 지연 로딩 (Image Lazy Loading)
description: 이미지 지연 로딩 방법에 대해 정리한 페이지입니다.
date: 2025-12-05 00:00:00 +/-TTTT
categories: [Front-end]
tags: [react]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br />
React</p></blockquote>

## 개요

이미지 지연 로딩 방법에 대해 정리한 페이지입니다.

## 이미지 지연 로딩 (Image Lazy Loading)

### 개념

`이미지 지연 로딩(Image Lazy Loading)`은 웹 페이지 성능을 최적화하는 기술 중 하나로, 사용자가 실제로 볼 수 있는 영역(뷰포트)에 들어올 때까지 이미지 로딩을 지연시키는 방법입니다.

### 구현

#### loading="lazy"

img 태그에 `loading="lazy"` 속성만 추가하면 간단하게 이미지 지연 로딩을 구현할 수 있습니다.

```html
<img src="image.jpg" alt="이미지 설명" loading="lazy" />
```

React에서 `loading="lazy"` 속성을 활용한 이미지 지연 로딩 예시는 다음과 같습니다.

```tsx
import pic1 from "@/shared/assets/pic1.jpg";
import pic2 from "@/shared/assets/pic2.jpg";
import pic3 from "@/shared/assets/pic3.jpg";
import pic4 from "@/shared/assets/pic4.jpg";

export const LoadingAttributePage = () => {
  return (
    <div className="flex flex-col items-center gap-80">
      <img
        className="aspect-video w-160"
        src={pic1}
        alt="pic1"
        loading="lazy"
      />
      <img
        className="aspect-video w-160"
        src={pic2}
        alt="pic2"
        loading="lazy"
      />
      <img
        className="aspect-video w-160"
        src={pic3}
        alt="pic3"
        loading="lazy"
      />
      <img
        className="aspect-video w-160"
        src={pic4}
        alt="pic4"
        loading="lazy"
      />
    </div>
  );
};
```

<img src="/assets/img/front-end/image-lazy-loading/pic1.webp" alt="이미지 지연 로딩 (loading='lazy')" />

#### Intersection Observer API

<b>Intersection Observer API</b>를 활용하여 뷰포트에 들어오는 이미지만 로드하도록 구현할 수 있습니다.

```tsx
import pic1 from "@/shared/assets/pic1.jpg";
import pic2 from "@/shared/assets/pic2.jpg";
import pic3 from "@/shared/assets/pic3.jpg";
import pic4 from "@/shared/assets/pic4.jpg";
import { useEffect, useRef } from "react";

export const IntersectionObserverPage = () => {
  const imgRef1 = useRef<HTMLImageElement>(null);
  const imgRef2 = useRef<HTMLImageElement>(null);
  const imgRef3 = useRef<HTMLImageElement>(null);
  const imgRef4 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLImageElement).src = (
            entry.target as HTMLImageElement
          ).dataset.src!;
          observer.unobserve(entry.target);
        }
      }, {});
    });

    observer.observe(imgRef1.current!);
    observer.observe(imgRef2.current!);
    observer.observe(imgRef3.current!);
    observer.observe(imgRef4.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-80">
      <img
        className="aspect-video w-160"
        data-src={pic1}
        alt="pic1"
        ref={imgRef1}
      />
      <img
        className="aspect-video w-160"
        data-src={pic2}
        alt="pic2"
        ref={imgRef2}
      />
      <img
        className="aspect-video w-160"
        data-src={pic3}
        alt="pic3"
        ref={imgRef3}
      />
      <img
        className="aspect-video w-160"
        data-src={pic4}
        alt="pic4"
        ref={imgRef4}
      />
    </div>
  );
};
```

<img src="/assets/img/front-end/image-lazy-loading/pic2.webp" alt="이미지 지연 로딩 (Intersection Observer)" />

## 참고 자료

- <a href="https://developer.chrome.com/docs/lighthouse/overview?hl=ko" target="_blank">Lighthouse 소개 &nbsp;|&nbsp; Chrome for Developers</a>
- <a href="https://developer.mozilla.org/ko/docs/Web/Performance/Guides/Lazy_loading" target="_blank">지연 로딩 - 웹 성능 | MDN</a>
