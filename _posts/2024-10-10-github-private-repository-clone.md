---
title: GitHub Private Repository Clone 방법
description: GitHub Private Repository Clone 방법에 대해 설명하는 페이지입니다.
date: 2024-10-10 00:00:00 +/-TTTT
categories: [Raspberry Pi]
tags: [raspberry-pi, linux, github]
math: true
toc: true
pin: false
image:
  path: /assets/img/raspberry-pi/raspberry-pi.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br />
Raspberry Pi, Linux, GitHub</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong> <br />
OS: Raspberry Pi OS (64 bit) </p></blockquote>

## 개요

이번 글에서는 깃허브(GitHub)에서 Private Repository를 clone하는 방법에 대해 설명하겠습니다.

## Step 0 - Private Repository Clone 시도하기

먼저 다음과 같이 Private Repository를 그대로 clone하려고 하면 다음과 같은 오류가 발생합니다.

<img src="/assets/img/raspberry-pi/github-private-repository-clone/pic1.avif" alt="pic1" />

이는 2021년 8월 13일 이후로 비밀번호 인증을 통해 git clone하는 방식이 더 이상 지원되지 않기 때문입니다. 따라서 GitHub에서 Private Repository를 clone하기 위해선 다음과 같은 과정을 거쳐야 합니다.

## Step 1 - Personal Access Token 발급받기

Private Repository를 clone하기 위해선 먼저 Personal Access Token을 발급 받아야 합니다.

먼저 GitHub에서 로그인 한 후, 본인의 프로필을 클릭해 `Settings > Developer settings` 로 이동합니다.

<img src="/assets/img/raspberry-pi/github-private-repository-clone/pic2.avif" alt="pic2" />

<img src="/assets/img/raspberry-pi/github-private-repository-clone/pic3.avif" alt="pic3" />

<br />

다음으로 `Personal access tokens > Tokens (classic) > Generator new token > Generate new token (classic)` 을 순서대로 클릭합니다.

<img src="/assets/img/raspberry-pi/github-private-repository-clone/pic4.avif" alt="pic4" />

<img src="/assets/img/raspberry-pi/github-private-repository-clone/pic5.avif" alt="pic5" />

<br />

아래와 같은 페이지에서 `Personal Access Token`을 발급 받을 수 있습니다. `Note`에는 토큰을 사용하려는 목적을 간단하게 작성하면 됩니다. `Expiration`에는 토큰의 유효 기간을 지정합니다. 마지막으로 `select scopes`에는 해당 토큰을 가지고 접근할 수 있는 권한을 설정하면 됩니다. Private Repository에 대한 권한이 필요하기 때문에 `repo` 항목을 체크하면 됩니다.

<img src="/assets/img/raspberry-pi/github-private-repository-clone/pic6.avif" alt="pic6" />

<br />

토큰을 발급 받으면 다음과 같은 페이지가 표시됩니다. <b>주의할 점은 해당 페이지에서 보이는 토큰은 다시 볼 수 없으므로 토큰을 복사하여 보관해야 합니다.</b>

<img src="/assets/img/raspberry-pi/github-private-repository-clone/pic7.avif" alt="pic7" />

<img src="/assets/img/raspberry-pi/github-private-repository-clone/pic8.avif" alt="pic8" />

<br />

## Step 2 - Private Repository clone하기

이후에 발급 받은 토큰을 활용하여 다음과 같이 Private Repository를 clone할 수 있습니다.

```bash
git clone https://{GitHub 닉네임}:{토큰}@github.com/{GitHub 닉네임}/{clone하려는 Private Repository}.git
```

<img src="/assets/img/raspberry-pi/github-private-repository-clone/pic9.avif" alt="pic9" />
