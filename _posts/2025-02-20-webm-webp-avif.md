---
title: WebM과 WebP, AVIF로 웹 성능 개선하기
description: WebM과 WebP, AVIF로 웹 성능을 개선한 방법에 대해 정리한 페이지입니다.
date: 2025-02-20 14:06:00 +0900
categories: [Front-end]
tags: [video, image, webm, webp, avif]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br>
Video, Image, WebM, WebP, AVIF</p></blockquote>

## 개요

이번 글에서는 `WebM`, `WebP`, `AVIF`에 대해 정리하고, `WebM`과 `WebP`, `AVIF`을 사용해서 <b>지금 보고 있는 블로그의 성능을 개선한 방법</b>에 대해 설명하겠습니다.

## WebM

### WebM의 개념

`WebM`이란 HTML5 환경에서 동영상과 오디오 콘텐츠를 재생하기 위해 설계된 오픈 소스 비디오 포맷으로 구글이 2010년에 개발하였습니다. 주로 HTML5 video 태그와 함께 사용되며, <b>VP8/VP9/AV1 비디오 코덱</b>과 <b>Vorbis/Opus 오디오 코덱</b>을 결합한 컨테이너 형식입니다.

### WebM의 특징

`WebM`의 특징은 다음과 같습니다.

- `오픈 소스 및 라이선스 무료`

  `WebM`은 BSD 라이선스로 배포되며, 개발자와 사용자가 라이선스 비용 없이 자유롭게 사용 또는 배포할 수 있습니다. 특히 `WebM`이 지원하는 비디오 코덱과 오디오 코덱은 전부 오픈 소스로, 특허 관련 로열티가 없는 무료 코덱입니다.

- `효율성`

  `WebM`이 지원하는 VP8/VP9/AV1 비디오 코덱은 동영상 파일 크기를 크게 줄이면서도 고화질을 유지하고, 오디오의 경우 Vorbis/Opus 코덱을 사용하여 오디오 데이터를 효율적으로 압축합니다. 압축률이 높아 `WebM`은 낮은 비트레이트에서도 우수한 영상 품질을 제공하며, 파일 크기가 작아 웹 페이지의 로딩 속도를 향상시킵니다.

- `스트리밍에 최적화`

  `WebM`은 웹 스트리밍에 최적화되어 있어, 모바일 기기나 저전력 기기에서도 부드럽게 재생됩니다. 이에 대한 예시로, `YouTube`에서 고화질 비디오를 시청할 때 `WebM` 포맷이 사용됩니다.

- `HTML5 및 웹 브라우저 지원`

  Chrome, Firefox, Opera 등 주요 브라우저에서 네이티브로 지원합니다.

  <img src="/assets/img/front-end/webm-webp-avif/pic1.avif" alt="pic1" />

### MP4 vs WebM

웹 브라우저에서 자주 사용하는 비디오 포맷인 `MP4`와 `WebM`을 비교하여 표로 정리하면 다음과 같습니다.

|             | MP4                                                                           | WebM                                                                           |
| ----------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 코덱        | 비디오: H.264, H.265/HEVC, MPEG-4 등, 오디오: AAC, MP3, AC3 등                | 비디오: VP8/VP9/AV1, 오디오: Vorbis, Opus                                      |
| 호환성      | 가장 널리 사용되는 포맷으로, 거의 모든 브라우저와 모바일 기기에서 지원합니다. | 주요 브라우저에서 지원하지만, 일부 구형 브라우저와 기기에서 지원하지 않습니다. |
| 파일 크기   | WebM에 비해 상대적으로 큽니다.                                                | MP4에 비해 훨씬 작습니다.                                                      |
| 파일 확장자 | .mp4                                                                          | .webm                                                                          |
| 품질        | 높은 품질의 비디오                                                            | VP8/VP9 코덱은 H.265에 비해 압축률이 떨어져서 화질이 소폭 떨어집니다.          |

## WebP와 AVIF

### WebP의 개념

`WebP`란 웹 페이지의 로딩 속도와 효율성을 극대화하기 위해 개발된 최신 이미지 파일 포맷으로 구글이 2010년에 개발하였습니다. `WebP`는 `JPEG`, `PNG`, `GIF`와 같은 기존 이미지 포맷을 대체하기 위해 개발되었으며, 더 나은 압축률과 품질을 제공합니다. `WebP`는 손실(Lossy) 및 무손실(Lossless) 압축을 모두 지원하며, 투명도(알파 채널)와 애니메이션도 처리할 수 있습니다.

### WebP의 특징

`WebP`의 특징은 다음과 같습니다.

- `손실 및 무손실 압축 지원`

  `WebP`는 손실 및 무손실 압축을 모두 지원합니다. 손실 압축은 VP8 비디오 코덱에서 동영상의 키 프레임을 압축하는 데 사용하는 것과 동일한 메서드인 예측 코딩을 사용하여 이미지를 인코딩합니다. 무손실 압축은 WebP 팀이 개발한 방식을 사용합니다.

  <blockquote class="prompt-info"><p><strong><u>Info.</u></strong> <br>
  손실 압축: 사진과 같이 복잡한 이미지의 경우, 비슷한 화질을 제공하면서 파일 크기를 크게 줄일 수 있습니다. <br />
  무손실 압축: 이미지의 모든 데이터를 보존하면서도 용량을 줄일 수 있어, 특히 그래픽이나 투명도가 중요한 이미지에 유리합니다.</p></blockquote>

- `투명도(알파 채널)와 애니메이션 지원`

  `WebP`는 `PNG`와 마찬가지로 투명도(알파 채널)을 지원합니다. 또한 `GIF`처럼 움직이는 영상을 지원하며 더 작은 파일 크기로 더 높은 품질의 애니메이션을 지원합니다.

- `효율성`

  동일한 품질의 이미지를 기준으로, `WebP`는 `JPEG`와 `PNG`보다 훨씬 파일 크기가 작습니다. `WebP` 무손실 이미지는 `PNG`보다 크기가 <b>26%</b> 더 작으며, `WebP` 손실 이미지는 `JPEG` 이미지보다 <b>25~34%</b> 더 작습니다. 이로 인해 웹 페이지의 로딩 속도가 빨라지고, 네트워크 트래픽과 저장 공간도 절감할 수 있습니다.

- `웹 브라우저 지원`

  Chrome, Edge, Firefox, Safari 등 주요 브라우저에서 지원합니다. 사실상 인터넷 익스플로러를 제외한 웹 브라우저에서 지원한다고 보면 됩니다.

  <img src="/assets/img/front-end/webm-webp-avif/pic2.avif" alt="pic2" />

### AVIF의 개념

`AVIF(AV1 Image File Format)`은 `Alliance for Open Media(AOMedia)`에서 2019년에 개발한 최신 이미지 파일 포맷입니다. `AVIF`는 AV1 비디오 코덱을 기반으로 하여, 기존의 `JPEG`, `PNG`, `WebP` 등과 비교했을 때 훨씬 뛰어난 압축률과 품질을 제공합니다. `AVIF`는 손실(Lossy) 및 무손실(Lossless) 압축을 모두 지원하며, 투명도(알파 채널)와 애니메이션도 처리할 수 있습니다.

### AVIF의 특징

<b>`AVIF`는 `WebP`와 유사한 특징을 가지고 있습니다.</b> `AVIF`의 특징은 다음과 같습니다.

- `손실 및 무손실 압축 지원`

  `WebP`와 마찬가지로 `AVIF`도 손실 및 무손실 압축을 모두 지원합니다.

- `투명도(알파 채널)와 애니메이션 지원`

  `AVIF`는 `PNG`, `WebP`와 마찬가지로 투명도(알파 채널)을 지원합니다. 또한 `GIF`와 `WebP`처럼 움직이는 영상을 지원하며 더 작은 파일 크기로 더 높은 품질의 애니메이션을 지원합니다. 또한 `AVIF`는 `WebP`와는 다르게 `VP8`가 아니라 `AV1` 기반으로 돌아가기 때문에 `WebP`보다 더 안정적입니다.

  <blockquote class="prompt-warning"><p><strong><u>Caution</u></strong> <br>
  <u>2025년 2월 20일</u> 기준 AVIF가 애니메이션을 지원하긴 하지만 호환성 문제로 Animated AVIF는 잘 사용되지 않습니다.</p></blockquote>

- `효율성`

  동일한 품질의 이미지를 기준으로, `AVIF`는 `JPEG`보다 최대 <b>50%</b>, `WebP`보다 <b>약 20%</b> 파일 크기가 작습니다. 이로 인해 웹 페이지의 로딩 속도가 빨라지고, 네트워크 트래픽과 저장 공간도 절감할 수 있습니다.

- `다양한 색상 지원`

  `AVIF`는 8비트, 10비트, 12비트의 색상 깊이를 지원하며, `HDR(High Dynamic Range)`과 `WCG(Wide Color Gamut)`와 같은 고급 색상 기능을 구현할 수 있습니다. 이와 같은 기능 덕분에 더욱 생생하고 풍부한 색감의 이미지를 제공할 수 있습니다.

  <blockquote class="prompt-info"><p><strong><u>Info.</u></strong> <br>
  HDR(High Dynamic Range): 이미지 내의 밝은 부분과 어두운 부분의 차이를 극대화시킨 영상을 구현하는 포괄적인 기술로, 가장 밝은 곳부터 가장 어두운 곳까지 눈으로 직접 보는 것과 최대한 가깝게 밝기의 범위를 확장하는 기술 <br />
  WCG(Wide Color Gamut): 디스플레이의 색 재현율을 높여 실제 색과 유사하게 재현하는 기술</p></blockquote>

- `지속적인 기술 발전`

  `AVIF`는 2019년에 개발된 최신 이미지 포맷으로서, 범용성이 낮다는 단점이 있지만 점차 개선되고 있습니다. 현재는 Chrome, Firefox, Safari, Edge 등 주요 웹 브라우저에서 지원하고 있으며, 점점 지원 범위가 확장되고 있습니다.

  <img src="/assets/img/front-end/webm-webp-avif/pic3.avif" alt="pic3" />

### JPEG vs PNG vs GIF vs SVG vs WebP vs AVIF

웹 브라우저에서 사용하는 이미지 포맷들을 특징, 장단점 등을 비교하여 표로 정리하면 다음과 같습니다.

|             | JPEG                                                                                                | PNG                                                                                | GIF                                               | SVG                                                                        | WebP                                                                      | AVIF                                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 의미        | Joint Photographic Experts Group                                                                    | Portable Network Graphics                                                          | Graphics Interchange Format                       | Scalable Vector Graphics                                                   | Web Picture Format                                                        | AV1 Image File Format                                                                                               |
| 특징        | 손실 압축을 사용하는 래스터 이미지 포맷으로, 사진 및 복잡한 색상의 이미지를 저장하는 데 적합합니다. | 무손실 압축을 사용하는 이미지 포맷으로 투명도를 지원합니다.                        | 256색 제한이 있으며, 애니메이션을 지원합니다.     | 벡터 그래픽 형식으로, XML 기반으로 구성됩니다.                             | 손실 및 무손실 압축을 지원하며 파일 크기가 작으며 투명도를 지원합니다.    | AV1 코덱을 기반으로 한 최신 이미지 포맷으로, 손실 및 무손실 압축을 지원하며 애니메이션 및 고효율 압축을 지원합니다. |
| 장점        | 높은 압축률을 제공하여 파일 크기를 줄일 수 있습니다.                                                | 투명도를 지원하며 배경이 투명한 아이콘, 로고, UI 요소에 적합합니다.                | 애니메이션을 지원하며 간단한 아이콘에 적합합니다. | 확대해도 품질이 유지되며, CSS 및 JavaScript로 스타일을 변경할 수 있습니다. | JPEG보다 압축률이 높아 파일 크기가 작아지고, PNG처럼 투명도를 지원합니다. | WebP보다 뛰어난 압축률과 품질을 제공하며, HDR을 지원합니다.                                                         |
| 단점        | 손실 압축 방식이라 반복 저장 시 화질이 저하될 수 있습니다. 또한 투명도를 지원하지 않습니다.         | 파일 크기가 크며, 특히 사진과 같은 복잡한 이미지에 사용하면 용량이 클 수 있습니다. | 색상 제한이 있어 고화질 이미지에는 부적합합니다.  | 사진과 같은 복잡한 이미지는 표현하기 어렵습니다.                           | 일부 구형 브라우저에서는 지원하지 않습니다.                               | 지원하는 브라우저가 제한적이며, 변환 속도(인코딩)가 WebP보다 느립니다.                                              |
| 파일 확장자 | .jpg, .jpeg, .jpe 등                                                                                | .png                                                                               | .gif                                              | .svg                                                                       | .webp                                                                     | .avif                                                                                                               |

이미지 파일 크기를 비교하면 다음과 같습니다.

<img src="/assets/img/front-end/webm-webp-avif/pic4.avif" alt="pic4" />

## 웹 성능 개선하기

### Step 1 - 성능 개선 전 (MP4, JPG/PNG)

기존의 블로그는 성능 및 파일 용량 측면에서 개선이 많이 필요하였습니다. 특히 다음 사진과 같이 빌드 결과물의 용량이 `228 MB`가 되는 문제가 있었습니다.

<img src="/assets/img/front-end/webm-webp-avif/pic5.avif" alt="pic5" />

이는 블로그에서 사용하는 비디오와 이미지에 최적화가 적용되지 않았기 때문입니다. 비디오 포맷은 `MP4`였으며, 이미지는 `JPG`와 `PNG`만을 사용하고 있었습니다. 이로 인해 다음 사진을 보면 알 수 있듯이 비디오와 이미지 용량 총합이 `233 MB`나 되었습니다.

<img src="/assets/img/front-end/webm-webp-avif/pic6.avif" alt="pic6" />

이처럼 `MP4`, `JPG`, `PNG`만을 계속 사용하면 블로그 글을 작성할 수록 파일 용량이 점점 더 커지는 것이 문제가 될 것이라고 생각하였습니다. 또한 사용하는 비디오, 이미지 용량이 크기 때문에 로딩 속도도 느리고 네트워크 트래픽도 큰 부분도 고려하였습니다. 이와 같은 점을 고려했을 때 파일 용량을 줄이는 것이 필요하다고 판단하였고, 결과적으로 모든 비디오 파일 포맷을 `WebM`으로, 모든 이미지 포맷을 `WebP`로 변경하기로 결정하였습니다.

### Step 2 - 성능 개선 1 (WebM, WebP)

먼저 블로그에서 사용하는 비디오 포맷을 `WebM`으로 변경하였습니다. 그리고 블로그에서 사용하는 이미지 포맷을 전부 `WebP`로 변경하였습니다.

<img src="/assets/img/front-end/webm-webp-avif/pic7.avif" alt="pic7" />

<img src="/assets/img/front-end/webm-webp-avif/pic8.avif" alt="pic8" />

파일 포맷을 변경한 결과 다음과 같이 비디오와 이미지 용량 총합을 `233 MB`에서 `61.4 MB`로 줄일 수 있었습니다.

<img src="/assets/img/front-end/webm-webp-avif/pic9.avif" alt="pic9" />

이와 같이 비디오/이미지 용량이 크게 줄면서 빌드 결과물의 용량이 `228 MB`에서 `60.8 MB`로 크게 줄게 되었고 웹 성능을 크게 개선할 수 있었습니다.

<img src="/assets/img/front-end/webm-webp-avif/pic10.avif" alt="pic10" />

<img src="/assets/img/front-end/webm-webp-avif/pic11.avif" alt="pic11" />

<img src="/assets/img/front-end/webm-webp-avif/pic12.avif" alt="pic12" />

### Step 3 - 성능 개선 2 (WebM, AVIF)

이미지를 `JPG`와 `PNG`에서 `WebP`로 변환함으로써 성능을 많이 개선시킬 수 있었지만, `AVIF`는 `WebP`보다 압축률이 더 좋기 때문에 `AVIF`를 사용함으로써 이미지 용량을 좀 더 줄일 수 있습니다. 따라서 다음과 같이 일부 이미지를 제외하고 `WebP` 포맷의 이미지를 `AVIF`로 변경하였습니다.

<img src="/assets/img/front-end/webm-webp-avif/pic13.avif" alt="pic13" />

`WebP` 이미지를 `AVIF` 이미지로 변경한 결과 다음과 같이 비디오와 이미지 용량 총합을 `61.4 MB`에서 `41.1 MB`로 줄일 수 있었습니다.

<img src="/assets/img/front-end/webm-webp-avif/pic14.avif" alt="pic14" />

이 결과 빌드 결과물 용량을 `60.8 MB`에서 `40.9 MB`로 줄일 수 있었습니다.

<img src="/assets/img/front-end/webm-webp-avif/pic15.avif" alt="pic15" />

<img src="/assets/img/front-end/webm-webp-avif/pic16.avif" alt="pic16" />

## 참고 자료

- `WebM`
  - <a href="https://namu.wiki/w/WebM" target="_blank">WebM - 나무위키</a>
  - <a href="https://namu.wiki/w/VP9(%EB%B9%84%EB%94%94%EC%98%A4%20%EC%BD%94%EB%8D%B1)" target="_blank">VP9(비디오 코덱) - 나무위키</a>
  - <a href="https://ko.wikipedia.org/wiki/WebM" target="_blank">WebM - 위키백과, 우리 모두의 백과사전</a>
  - <a href="https://www.anyrec.io/ko/webm-vs-mp4/" target="_blank">WebM VS. MP4 – 비디오 품질, 파일 크기, 코덱, 사용 등</a>
- `WebM`
  - <a href="https://namu.wiki/w/WebP" target="_blank">WebP - 나무위키</a>
  - <a href="https://developers.google.com/speed/webp?hl=ko" target="_blank">웹용 이미지 형식 &nbsp;|&nbsp; WebP &nbsp;|&nbsp; Google for Developers</a>
  - <a href="https://developers.google.com/speed/webp/docs/compression?hl=ko" target="_blank">압축 기술 &nbsp;|&nbsp; WebP &nbsp;|&nbsp; Google for Developers</a>
- `AVIF`
  - <a href="https://namu.wiki/w/AVIF" target="_blank">AVIF - 나무위키</a>
  - <a href="https://web.dev/learn/images/avif?hl=ko" target="_blank">이미지 형식: AVIF &nbsp;|&nbsp; web.dev</a>
  - <a href="https://ko.wikipedia.org/wiki/AVIF" target="_blank">AVIF - 위키백과, 우리 모두의 백과사전</a>
