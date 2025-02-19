---
title: 챌린지 2일차 학습 정리
description: 네이버 부스트캠프 9기 챌린지 2일차 학습 정리 페이지입니다.
date: 2024-07-16 00:00:00 +/-TTTT
categories: [네이버 부스트캠프 웹・모바일 9기]
tags: [naver-boostcamp-9th, shell, linux]
math: true
toc: true
pin: false
image:
  path: /assets/img/naver-boostcamp-9th/naver-boostcamp-9th.webp
comments: true
---

<blockquote class="prompt-tip"><p><strong><u>Tips</u></strong> <br />
누군가 작성한 것을 그대로 쓰는 것이 아니라 <b>나만의 언어로 재구조화하여 작성</b>해야 합니다. <br />
기술 키워드에 대한 상세 내용도 좋고, 미션 해결 과정에서 기능 구현을 성공한 사례도, 트러블 슈팅 경험도 좋습니다.</p></blockquote>

## 학습한 내용

<hr />

이번 미션을 수행하면서 리눅스 기초에 대해 학습할 수 있었습니다. 시간대 확인, 시간대 변경, 계정 생성 등 평소에 자주 사용하지 않았던 리눅스 명령어에 대해 알게되어 좋은 기회였다고 생각합니다. 또한 쉘 스크립트를 처음 사용해보면서 기초적인 쉘 스크립트 지식을 쌓을 수 있었습니다.

### 리눅스 기초 명령어

#### 계정 생성

```bash
sudo adduser [new_account]
```

#### 현재 시간대 확인

```bash
timedatectl
```

#### 변경 가능한 시간대 확인

```bash
timedatectl list-timezones | grep [지역]
```

#### 시간대 변경

```bash
sudo timedatectl set-timezone [지역]
```

#### 새로운 디렉토리 생성

```bash
mkdir [new_directory]
```

### 쉘 스크립트 사용법

#### 변수 선언

다음과 같이 변수를 선언할 때 공백없이 `=`를 이용하여 값을 할당합니다.

```bash
num=100000
str="Hello, World!"
```

#### 반복문 사용

```bash
for i in {1..100}
do
  echo "Hello"
done
```

#### 조건문 사용하기

```bash
if [ $num -ge 100 ]
then
  echo "num >= 100"
fi
```

#### 현재 시간 출력하기

```bash
echo $(date '+%Y-%m-%d %H:%M:%S')
```

#### 일정 시간 코드 정지

```bash
# 15초 정지
sleep 15
```
