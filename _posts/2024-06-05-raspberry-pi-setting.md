---
title: 라즈베리파이 초기 설정 방법
description: 라즈베리파이 초기 설정 방법에 대해 설명하는 페이지입니다.
date: 2024-06-05 00:00:00 +/-TTTT
categories: [Raspberry Pi]
tags: [raspberry-pi, linux]
math: true
toc: true
pin: false
image:
  path: /assets/img/raspberry-pi/raspberry-pi.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br />
Raspberry Pi, Linux</p></blockquote>

<blockquote class="prompt-info"><p><strong><u>Environment</u></strong> <br />
OS: Raspberry Pi OS (64 bit) </p></blockquote>

## 개요

라즈베리파이 초기 설정 방법에 대해 정리한 페이지입니다.

## Step 1 - Raspberry Pi Imager 설치

### Raspberry Pi Imager 설치 파일 다운로드

아래 사이트에 접속하여 Raspberry Pi Imager 설치 파일을 다운로드합니다.
이 때 자신의 PC에 맞는 OS를 선택합니다. 저는 Windows를 선택하였습니다.

<a href="https://www.raspberrypi.com/software/" target="_blank">Raspberry Pi OS</a>

### Raspberry Pi Imager 설치하기

<img src="/assets/img/raspberry-pi/raspberry-pi-setting/pic1.avif" alt="pic1"  />

Install 버튼을 눌러 Raspberry Pi Imager를 설치합니다.

## Step 2 - 운영체제 설치

먼저 자신의 PC에 SD카드를 삽입합니다. 그리고 방금 설치한 Raspberry Pi Imager를 실행합니다.

<img src="/assets/img/raspberry-pi/raspberry-pi-setting/pic2.avif" alt="pic2" />

### 디바이스 선택

**장치 선택**을 클릭하여 자신의 라즈베리파이 버전을 선택합니다. 저는 **Raspberry Pi 4**를 선택하였습니다.

### 운영체제 선택

**운영체제 선택**을 클릭하여 설치하고자 하는 OS를 선택합니다. 저는 **Raspberry Pi OS (64-bit)**를 선택하였습니다.

### 저장소 선택

**저장소 선택**을 클릭하여 OS를 설치하려는 SD카드를 선택합니다.

<img src="/assets/img/raspberry-pi/raspberry-pi-setting/pic3.avif" alt="pic3" />

### 다음

디바이스, 운영체제, 저장소를 모두 선택한 후 `다음`버튼을 클릭합니다.

### OS 커스터마이징

<img src="/assets/img/raspberry-pi/raspberry-pi-setting/pic4.avif" alt="pic4" />

이미지 설치에 앞서 os 커스터마이징을 진행합니다. 추후 PuTTY를 사용하여 원격 접속을 위해 필요합니다.

<br />
<img src="/assets/img/raspberry-pi/raspberry-pi-setting/pic5.avif" alt="pic5" />

위와 같이 <b>사용자 이름 및 비밀번호 설정</b>, <b>무선 LAN 설정</b> 등이 가능합니다. 무선 LAN 설정의 경우, 원격 접속하려는 PC와 동일한 WI-FI를 선택하면 됩니다.

<br />
<img src="/assets/img/raspberry-pi/raspberry-pi-setting/pic6.avif" alt="pic6"  />

추후 원격접속을 통해 Raspberry Pi를 사용할 수 있도록 <b>SSH 사용</b>을 선택합니다.

### 설치

<img src="/assets/img/raspberry-pi/raspberry-pi-setting/pic7.avif" alt="pic7" />

설치가 완료될 때까지 대기합니다.

<br />
<img src="/assets/img/raspberry-pi/raspberry-pi-setting/pic8.avif" alt="pic8" />

설치가 완료되면 SD카드를 PC에서 제거한 뒤 Raspberry Pi에 삽입합니다.

## Step 3 - Raspberry Pi 실행 및 접속

### 실행

라즈베리파이에 SD카드를 삽입한 후 전원을 연결합니다. 초기 설정이 완료될 때까지 다소 시간이 걸리는 편입니다.

### IP 주소 확인하기

라즈베리파이의 Terminal을 열어서 `ifconfig` 명령어를 입력하여 현재 IP 주소를 확인합니다. 무선 네트워크에 연결된 경우 wlan0 부분에서 <b>inet 192.xxx.xx.xxx</b> 부분을 확인하면 됩니다.

### PuTTY 설치하기

Putty는 윈도우 환경에서 리눅스 서버나 다른 원격 시스템에 SSH (Secure Shell), Telnet, Rlogin 등을 사용하여 접속할 수 있는 클라이언트입니다. PuTTY가 설치되어 있지 않을 경우 아래 사이트에 접속하여 설치합니다.

<a href="https://www.putty.org/" target="_blank">PuTTY 설치</a>

### PuTTY로 원격 접속하기

설치한 PuTTY를 실행합니다.

<img src="/assets/img/raspberry-pi/raspberry-pi-setting/pic9.avif" alt="pic9" />

Home Name (or IP address) 부분에 위에서 확인한 IP 주소를 입력합니다. 그리고 Port 부분에는 `22`를 입력합니다.

Open 버튼을 누르면 아래와 같은 화면이 나타난다면 접속에 성공한 것입니다.

<img src="/assets/img/raspberry-pi/raspberry-pi-setting/pic10.avif" alt="pic10" />

<br />

OS 커스터마이징 부분에서 설정한 아이디와 비밀번호를 순서대로 입력합니다.
아래와 같은 화면이 나타난다면 원격 접속이 완료된 것입니다.

<img src="/assets/img/raspberry-pi/raspberry-pi-setting/pic11.avif" alt="pic11" />
