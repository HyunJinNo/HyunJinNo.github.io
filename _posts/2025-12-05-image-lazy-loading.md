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

`이미지 지연 로딩(Image Lazy Loading)`은 웹 페이지 성능을 최적화하는 기술 중 하나로, 사용자가 실제로 볼 수 있는 영역(뷰포트)에 들어올 때까지 이미지 로딩을 지연시키는 방법입니다. 이미지 지연 로딩은 페이지 로드 시 모든 이미지를 한꺼번에 불러오지 않고 필요한 이미지만 로드함으로써 초기 로딩 시간을 개선합니다.

### 구현

이미지 지연 로딩을 구현하는 방법은 여러 방법이 존재합니다.

#### loading="lazy"

img 태그에 `loading="lazy"` 속성만 추가하면 간단하게 이미지 지연 로딩을 구현할 수 있습니다. 이 방식은 <b>구현이 매우 쉽다는 장점</b>이 있지만, <b>스크롤 근처까지 와야 이미지가 로딩되며 세밀한 제어가 어렵다는 단점</b>이 있습니다.

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

위의 사진을 보면 알 수 있듯이, `loading="lazy"`는 이미지가 뷰포트에 보일 때부터 로딩되지 않고, 뷰포트의 일정 거리 안으로 들어올 때 미리 로딩합니다. 이 일정 거리는 브라우저에서 정의하며, 개발자가 직접 수정할 수 없습니다. 따라서 로딩 타이밍을 세밀하게 제어하고 싶다면 아래의 `Intersection Observer API`를 사용하는 것이 좋습니다.

#### Intersection Observer API

`Intersection Observer`는 브라우저에서 제공하는 API로, 웹 페이지의 특정 요소를 관찰(observe)하면 페이지 스크롤 시 해당 요소가 화면에 들어왔는지 아닌지를 알려 줍니다. 이 `Intersection Observer`를 활용하여 뷰포트에 들어오는 이미지만 로드하도록 구현할 수 있습니다. <b>이미지 로딩은 img 태그의 src가 할당되는 순간 일어나므로, 최초에는 img 태그의 src 속성 대신 다른 속성에다가 이미지 URL을 할당하다가, Intersection Observer의 콜백이 실행되는 순간 src를 할당하는 식</b>으로 이미지 지연 로딩을 구현할 수 있습니다. 이 방식은 주로 <b>사용자의 스크롤 위치에 따라 이미지 로딩을 세밀하게 제어하고 싶을 때 사용</b>합니다.

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

위의 코드를 설명하자면 다음과 같습니다.

<b>1. data-src 속성 사용하기</b>

```tsx
<img className="aspect-video w-160" data-src={pic1} alt="pic1" ref={imgRef1} />
```

이미지 로딩은 img 태그의 src가 할당되는 순간 일어나므로, 최초에는 img 태그의 src 속성 대신 data-src 속성에 할당합니다.

<b>2. Intersection Observer 생성하기</b>

```tsx
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

  /* ... */
}, []);
```

`isIntersecting`은 해당 요소가 뷰포트 내에 들어왔는지를 나타내는 값입니다. 이 값을 통해 해당 요소가 화면에 들어오면 data-src에 있는 값을 src로 옮겨 이미지를 로드하게 됩니다. 또한 `observer.unobserve(entry.target)` 코드는 해당 요소의 observe를 해제하는 코드로, 한 번 이미지를 로드한 후에는 다시 호출할 필요가 없으므로 해제합니다.

<b>3. img 컴포넌트 관찰하기</b>

```tsx
useEffect(() => {
  /* ... */

  observer.observe(imgRef1.current!);
  observer.observe(imgRef2.current!);
  observer.observe(imgRef3.current!);
  observer.observe(imgRef4.current!);

  return () => {
    observer.disconnect();
  };
}, []);
```

`Intersection Observer`를 생성한 이후에는 관찰하고자 하는 img 요소를 등록합니다. 마지막으로 생성된 인스턴스는 정리(Clean-up) 함수에서 `observer.disconnect` 함수를 호출함으로써 리소스가 낭비되지 않도록 합니다.

#### Next.js의 Image 컴포넌트

Next.js 프레임워크를 사용하는 경우 Image 컴포넌트는 <b>기본적으로 지연 로딩을 자동으로 적용</b>하기 때문에 `loading="lazy"`를 넣을 필요가 없습니다.

```tsx
import Image from "next/image";

export default function Page() {
  return (
    <Image
      src="/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
}
```

## 참고 자료

- <a href="https://www.yes24.com/Product/Goods/115209526" target="_blank">프론트엔드 성능 최적화 가이드 | 유동균 | 인사이트(insight) - 예스24</a>
- <a href="https://developer.mozilla.org/ko/docs/Web/Performance/Guides/Lazy_loading" target="_blank">지연 로딩 - 웹 성능 | MDN</a>
- <a href="https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/img#loading" target="_blank">\<img\>: 이미지 삽입 요소 - HTML: Hypertext Markup Language | MDN</a>
- <a href="https://nextjs.org/docs/app/getting-started/images" target="_blank">Getting Started: Image Optimization | Next.js</a>
- <a href="https://helloinyong.tistory.com/297" target="_blank">웹 성능 최적화를 위한 Image Lazy Loading 기법 :: 이뇽의세상</a>
