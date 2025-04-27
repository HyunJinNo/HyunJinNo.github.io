---
title: Next.js 프로젝트에 Docker 적용하기
description: Next.js 프로젝트에 Docker를 적용하는 방법에 대해 정리한 페이지입니다.
date: 2025-04-27 20:31:00 +/-TTTT
categories: [Front-end]
tags: [docker, nextjs]
math: true
toc: true
pin: false
image:
  path: /assets/img/front-end/front-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br>
Docker, Next.js</p></blockquote>

## 개요

Next.js 프로젝트에 Docker를 적용하는 방법에 대해 정리한 페이지입니다.

## Docker 이미지 빌드하기

Docker 이미지를 빌드하기 위해선 먼저 `Dockerfile`을 작성해야 합니다. 저는 제가 현재 진행하고 있는 Next.js 애플리케이션을 기준으로 Docker 이미지를 생성하겠습니다.

### Step 1 - Next.js standalone 설정하기

`Next.js` 애플리케이션에서 어떠한 설정을 하지 않고 Docker 이미지를 빌드하는 경우 다음과 같이 Docker 이미지 용량이 매우 커집니다.

<img src="/assets/img/front-end/nextjs-docker/pic1.avif" alt="최적화 전 Docker 이미지 용량: 1.87GB" />

`Next.js`에서는 프로덕션 배포에 필요한 파일만 포함해 Docker를 활용한 배포에 유용한 빌드 방식인 `standalone`을 지원합니다. 다음 사진과 같이 `next.config.mjs` 파일에서 `output: "standalone"`을 설정합니다.

<img src="/assets/img/front-end/nextjs-docker/pic2.avif" alt="standalone" />

### Step 2 - .dockerignore 생성하기

`.dockerignore` 파일은 Docker가 이미지를 빌드할 때 복사하지 말아야 할 파일이나 디렉토리를 지정하는 파일입니다. 이 파일은 Docker Context 내에 불필요한 파일들이 빌드 이미지에 포함되는 것을 방지하여, 빌드 속도를 높이고 이미지 크기를 줄이는 데 중요한 역할을 합니다.

`Dockerfile`을 작성하기 전에 프로젝트 최상단 디렉토리에서 `.dockerignore` 파일을 생성하고 다음과 같이 작성합니다.

```bash
# 의존성 파일
node_modules

# Git 관련 파일
.git
.gitignore
.github

# Next.js 빌드 결과물
.next

# 기타
.eslintrc.json
.prettierrc.json
LICENSE
README.md
build.sh
Dockerfile
.dockerignore
```

위의 내용을 설명하자면 다음과 같습니다.

- `node_modules`

  Node.js의 의존성 파일이 저장된 디렉토리로, 보통 컨테이너 안에서 생성하므로 복사할 필요가 없습니다.

- `.github`, `.git`, `.gitignore`

  Git 관련 파일을 컨테이너 안에 포함할 필요가 없습니다.

- `빌드 결과물`

  빌드 후 생성되는 파일이 저장된 디렉토리로, 보통 컨테이너 안에서 빌드 과정이 필요한 경우 컨테이너 안에서 생성하므로 복사할 필요가 없습니다.

- `기타`

  애플리케이션 실행에 필요하지 않은 파일을 제외합니다.

`.dockerignore` 파일을 사용했을 때의 장점은 다음과 같습니다.

- `속도 향상`

  불필요한 파일을 제외함으로써 Docker 빌드 Context 크기가 작아져 빌드 속도가 빨라집니다.

- `이미지 최적화`

  불필요한 파일을 제외함으로써 이미지 크기를 줄일 수 있습니다.

- `보안 강화`

  민감한 정보를 포함하는 파일을 이미지에서 제외함으로써 보안을 강화할 수 있습니다.

### Step 3 - Dockerfile 작성하기

Docker 이미지를 생성하기 위해선 먼저 `Dockerfile`을 작성해야 합니다. VSCode에서 Dockerfile을 쉽게 작성하기 위해 다음과 같이 VSCode에서 `Docker` extensions를 설치합니다.

<img src="/assets/img/front-end/nextjs-docker/pic3.avif" alt="Docker extensions" />

이후 프로젝트 최상단 디렉토리에서 `Dockerfile` 파일을 생성합니다. 다음은 Next.js 애플리케이션을 빌드하고 실행하는 Dockerfile 예시입니다.

```docker
###############################################################################################################
#                                                                                                             #
# Notice: 해당 Dockerfile을 사용하기 위해선 먼저 next.config.mjs 파일에서 output이 "standalone"으로 설정되어야 합니다. #
#                                                                                                             #
###############################################################################################################

# 1. 빌드 단계
# 생성할 Docker 이미지의 베이스가 되는 이미지를 지정합니다.
FROM node:20-alpine AS build

# 1-1. 작업 디렉토리 설정
# 애플리케이션 파일을 저장하고 실행할 기본 작업 디렉토리를 지정합니다.
# /app 디렉토리가 자동으로 생성되며, 이후의 모든 명령어가 이 디렉토리에서 실행됩니다.
WORKDIR /app

# 1-2. 의존성 파일 복사
COPY package.json package-lock.json ./

# 1-3. 의존성 설치
# 컨테이너 안에서 명령어를 실행하고 이미지를 빌드합니다.
RUN npm install

# 1-4. 애플리케이션 코드 복사
# 현재 디렉토리의 모든 파일을 /app 디렉토리로 복사합니다.
COPY . .

# 1-5. 애플리케이션 빌드
RUN npm run build

# 2. 런타임 단계
FROM node:20-alpine

# 2-1. 빌드 결과물과 필요한 파일만 복사
WORKDIR /app
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# 2-2. 포트 설정
# 컨테이너가 사용하는 포트를 명시적으로 지정하는 명령어로, 호스트와 통신할 포트를 설정합니다.
EXPOSE 3000

# 2-3. 애플리케이션 실행
# 컨테이너가 시작될 때 실행할 기본 명령어를 지정합니다.
# CMD는 Dockerfile에서 한 번만 사용할 수 있습니다.
CMD [ "node", "server.js" ]
```

`Dockerfile`을 작성한 후 다음 명령어를 입력하여 Docker 이미지를 빌드합니다.

```bash
docker build -t solitour-frontend:v1.1.0 .
```

각 단계를 자세히 설명하자면 다음과 같습니다.

#### 1. 빌드 단계

```docker
# 1. 빌드 단계
# 생성할 Docker 이미지의 베이스가 되는 이미지를 지정합니다.
FROM node:20-alpine AS build
```

먼저 Docker의 `멀티 스테이지 빌드` 방식을 적용하기 위해 `AS build`로 이 이미지 단계를 `build`라는 이름으로 별칭을 지정하고, 나중에 다른 단계에서 이 단계의 결과물을 참조할 수 있도록 설정하였습니다. 여기서 `멀티 스테이지 빌드`란 여러 단계에서 빌드 작업을 진행하고, 최종 이미지에는 필요한 파일만 포함하여 이미지 크기를 최적화하는 방법을 의미합니다. 특히 빌드가 완료된 파일만 최종 프로덕션 이미지에 포함하고, 불필요한 빌드 도구나 라이브러리를 제외하여 이미지 크기를 줄일 수 있습니다.

다음으로 `FROM` 명령어는 생성할 Docker 이미지의 베이스가 되는 이미지를 지정합니다. Next.js 애플리케이션은 Node.js 상에서 실행되므로 node.js 20 버전을 사용하기 위해 `node:20-alpine` 이미지를 사용하여 가벼운 Node.js 환경을 설정합니다.

참고로 `node` 이미지는 개발 편의성 및 다양한 도구가 포함된 이미지로, 개발 환경이나 복잡한 빌드 작업에 적합합니다. 반면에 `node:alpine` 이미지는 크기가 작고 가벼운 이미지로, 프로덕션 환경이나 리소스가 제한된 환경에 적합합니다. 따라서 이미지 크기를 최소화해야 하기 위해 `node:alpine` 이미지를 선택하였습니다.

#### 1-1. 작업 디렉토리 설정

```docker
# 1-1. 작업 디렉토리 설정
# 애플리케이션 파일을 저장하고 실행할 기본 작업 디렉토리를 지정합니다.
# /app 디렉토리가 자동으로 생성되며, 이후의 모든 명령어가 이 디렉토리에서 실행됩니다.
WORKDIR /app
```

`WORKDIR`는 애플리케이션 파일을 저장하고 실행할 작업 디렉토리를 지정하는 명령어입니다.

#### 1-2. 의존성 파일 복사

```docker
# 1-2. 의존성 파일 복사
COPY package.json package-lock.json ./
```

`COPY`는 `COPY [source] [dest]` 형식으로 사용하며, 호스트 파일 시스템의 파일이나 폴더를 컨테이너의 파일 시스템으로 복사하는 명령어입니다. 위의 예시에서는 `package.json`과 `package-lock.json` 파일을 먼저 복사하여 의존성 설치 준비를 마칩니다.

#### 1-3. 의존성 설치

```docker
# 1-3. 의존성 설치
# 컨테이너 안에서 명령어를 실행하고 이미지를 빌드합니다.
RUN npm install
```

`RUN`은 컨테이너 안에서 명령어를 실행할 때 사용하는 명령어입니다. 위의 예시에서는 `npm install` 명령어로 `package.json`에 지정된 의존성을 설치합니다.

#### 1-4. 애플리케이션 코드 복사

```docker
# 1-4. 애플리케이션 코드 복사
# 현재 디렉토리의 모든 파일을 /app 디렉토리로 복사합니다.
COPY . .
```

애플리케이션의 소스 코드를 모두 복사하는 부분입니다.

#### 1-5. 애플리케이션 빌드

```docker
# 1-5. 애플리케이션 빌드
RUN npm run build
```

애플리케이션을 빌드하는 부분입니다.

#### 2. 런타임 단계

```docker
# 2. 런타임 단계
FROM node:20-alpine
```

빌드가 완료된 후 불필요한 빌드 도구를 제외하고 필요한 파일만 이미지에 포함시킬 수 있도록 별칭을 사용하지 않는 새로운 `node:20-alpine` 이미지를 기반으로 런타임 단계를 시작합니다.

#### 2-1. 빌드 결과물과 필요한 파일만 복사

```docker
# 2-1. 빌드 결과물과 필요한 파일만 복사
WORKDIR /app
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
```

`--from=build`라는 옵션을 사용하여 `build` 단계에서 생성된 파일 중에서 애플리케이션을 실행하는 데 필요한 파일들만 복사합니다.

#### 2-2. 포트 설정

```docker
# 2-2. 포트 설정
# 컨테이너가 사용하는 포트를 명시적으로 지정하는 명령어로, 호스트와 통신할 포트를 설정합니다.
EXPOSE 3000
```

`EXPOSE`는 컨테이너가 사용하는 포트를 명시적으로 지정하는 명령어로, 호스트와 통신할 포트를 설정합니다. 위의 예시에서는 3000 포트를 노출하여 외부에서 애플리케이션에 접근 가능하도록 설정합니다.

#### 2-3. 애플리케이션 실행

```docker
# 2-3. 애플리케이션 실행
# 컨테이너가 시작될 때 실행할 기본 명령어를 지정합니다.
# CMD는 Dockerfile에서 한 번만 사용할 수 있습니다.
CMD [ "node", "server.js" ]
```

`CMD`는 컨테이너가 시작될 때 실행할 명령어를 지정하는 명령어입니다. `CMD`는 하나의 Dockerfile 안에서 한 번만 사용할 수 있습니다. 위의 예시에서는 `node server.js` 명령어를 실행하여 Next.js 애플리케이션을 실행합니다.

### Step 4 - 이미지 빌드하기

Dockerfile이 있는 디렉토리에서 터미널을 열고 다음 명령어를 입력하여 Docker 이미지를 빌드합니다.

```bash
docker build -t solitour-frontend:v1.1.0 .
```

아래 결과는 위의 `Dockerfile`을 기반으로 Docker 이미지를 빌드한 결과 예시입니다.

```bash
PS C:\Users\user\vscode\solitour-frontend> docker build -t solitour-frontend:v1.1.0 .
[+] Building 130.2s (14/14) FINISHED                                                                                                  docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                  0.1s
 => => transferring dockerfile: 2.07kB                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                     2.0s
 => [internal] load .dockerignore                                                                                                                     0.0s
 => => transferring context: 256B                                                                                                                     0.0s
 => [internal] load build context                                                                                                                     0.2s
 => => transferring context: 37.71kB                                                                                                                  0.2s
 => [build 1/6] FROM docker.io/library/node:20-alpine@sha256:053c1d99e608fe9fa0db6821edd84276277c0a663cd181f4a3e59ee20f5f07ea                         0.0s
 => => resolve docker.io/library/node:20-alpine@sha256:053c1d99e608fe9fa0db6821edd84276277c0a663cd181f4a3e59ee20f5f07ea                               0.0s
 => CACHED [build 2/6] WORKDIR /app                                                                                                                   0.0s
 => CACHED [build 3/6] COPY package.json package-lock.json ./                                                                                         0.0s
 => CACHED [build 4/6] RUN npm install                                                                                                                0.0s
 => [build 5/6] COPY . .                                                                                                                              1.5s
 => [build 6/6] RUN npm run build                                                                                                                   114.9s
 => [stage-1 3/5] COPY --from=build /app/.next/standalone ./                                                                                          0.8s
 => [stage-1 4/5] COPY --from=build /app/.next/static ./.next/static                                                                                  0.2s
 => [stage-1 5/5] COPY --from=build /app/public ./public                                                                                              0.2s
 => exporting to image                                                                                                                                5.4s
 => => exporting layers                                                                                                                               3.5s
 => => exporting manifest sha256:343b66796797d47af85f9439352ac3970a45f0ab0c09061ee1884c6b0be46ed0                                                     0.0s
 => => exporting config sha256:0fba297b2ce1a37d4b3752a1f0d08eec1421da635cc1a4e73c486ca2a763eef6                                                       0.0s
 => => exporting attestation manifest sha256:2b1c02b349dc52fecd6a415c50aa0fb34d9fa3dc61291cc46631e479fe7cf225                                         0.0s
 => => exporting manifest list sha256:fdb0336a57551b95032c4dc8cc4485e33d0369b4fa8c7ec9b6d5ca81b5f323f3                                                0.0s
 => => naming to docker.io/library/solitour-frontend:v1.1.0                                                                                           0.0s
 => => unpacking to docker.io/library/solitour-frontend:v1.1.0                                                                                        1.7s
```

<img src="/assets/img/front-end/nextjs-docker/pic4.avif" alt="Docker 이미지 빌드 결과" />

## 컨테이너 실행하기

Docker 이미지가 빌드된 후 다음 명령어를 입력하여 컨테이너를 실행합니다.

```bash
docker run -p 3000:3000 --rm solitour-frontend:v1.1.0
```

컨테이너를 실행한 결과는 다음과 같습니다.

<img src="/assets/img/front-end/nextjs-docker/pic5.avif" alt="컨테이너 실행 결과" />

## 참고 자료

- <a href="https://docs.docker.com/" target="_blank">Docker Docs</a>
