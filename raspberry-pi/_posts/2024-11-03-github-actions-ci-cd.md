---
layout: post
title: GitHub Actions로 CI/CD 구축 방법
description: >
  GitHub Actions로 CI/CD 구축 방법에 대해 설명하는 페이지입니다.
image:
  path: /assets/img/raspberry-pi/raspberry-pi.jpg
  srcset:
    1060w: /assets/img/raspberry-pi/raspberry-pi.jpg
    530w: /assets/img/raspberry-pi/raspberry-pi.jpg
    265w: /assets/img/raspberry-pi/raspberry-pi.jpg
related_posts:
  - None
sitemap: true
comments: false
---

<i>Environment</i>

- <i>OS: Raspberry Pi OS (64 bit)</i>

<h2>목차</h2>

- [개요](#개요)
- [CI/CD란?](#cicd란)
  - [CI (Continous Integration)](#ci-continous-integration)
  - [CD (Continuous Deployment)](#cd-continuous-deployment)
- [GitHub Actions란?](#github-actions란)
  - [GitHub Actions 구성 요소](#github-actions-구성-요소)
- [Step 1 - GitHub Actions 시작하기](#step-1---github-actions-시작하기)
  - [GitHub Repository에서 만들기](#github-repository에서-만들기)
  - [VSCode에서 만들기](#vscode에서-만들기)
- [Step 2 - Workflow 작성하기](#step-2---workflow-작성하기)
- [참고 자료](#참고-자료)
- [Comments](#comments)

## 개요

이번 글에서는 `GitHub Actions`로 CI/CD 구축 방법에 대해 설명하겠습니다.

## CI/CD란?

CI/CD는 소프트웨어 개발 및 배포 프로세스를 자동화하고 호율화하는 방법론으로, `Continuous Integration(지속적 통합)`과 `Continuous Deployment(지속적 배포)`를 의미합니다.

### CI (Continous Integration)

CI는 새로운 코드 변경 사항을 정기적으로 빌드 및 테스트되어 공유 Repository에 통합되는 것을 의미합니다. CI의 주요 목표는 코드 변경 사항을 빠르게 병합하고, 자동화된 빌드 및 테스트를 통해 코드 품질을 보장하는 것입니다. CI를 활용하면 코트 품질이 높아지고, 버그가 조기에 발견되므로 코드의 안정성이 증가한다는 장점이 있습니다. 또한 변경 사항이 작아 충돌이 적고, 개발자 간 협업이 원활해진다는 장점도 있습니다.

### CD (Continuous Deployment)

CD는 코드가 통합된 후 프로덕션 환경에 배포하는 것을 자동화하는 것을 의미합니다. CD를 활용하면 개발자가 코드를 푸시할 때마다 자동으로 프로덕션에 배포되어, 사용자가 변경 사항을 바로 확인할 수 있습니다. 또한 배포 과정의 오류가 줄어들고, 배포 속도가 빨라진다는 장점이 있습니다.

## GitHub Actions란?

`GitHub Actions`란 GitHub에서 제공하는 `CI/CD(Continuous Integration/Continuous Deployment)` 서비스로, 프로젝트 내의 workflow를 자동화할 수 있게 도와줍니다. 이를 통해 코드 빌드, 테스트, 배포 등의 작업을 GitHub Repository 내에서 직접 설정하고 실행할 수 있습니다. GitHub Actions는 GitHub의 YAML 기반 설정 파일을 통해 다양한 이벤트(Ex. Push, Pull Request 등)에 따라 실행되도록 workflow를 구성할 수 있습니다.

### GitHub Actions 구성 요소

GitHub Actions 구성 요소는 다음과 같습니다.

- `Workflow`

  자동화된 작업의 집합입니다. `.github/workflows/` 디렉토리 아래에 YAML 파일로 설정하며, 여러 개의 작업(Ex. 빌드, 테스트, 배포 등)을 단계별로 정의할 수 있습니다.

- `Event`

  `workflow`를 트리거하는 이벤트로, 주로 코드 푸시(Push), PR 생성(Pull Request), release, issue 생성 등의 GitHub 활동이 있습니다. 특정 이벤트가 발생할 때 workflow가 자동으로 실행됩니다.

- `Job`

  `workflow` 안에서 병렬로 실행할 수 있는 작업 단위입니다. 각 job은 여러 단계로 구성되어 있고, 서로 다른 환경에서 병렬 실행이 가능합니다.

- `Step`

  `job` 내부에서 순차적으로 실행되는 개별 작업입니다. Shell 명령어를 실행하거나, GitHub에서 제공하는 액션(Action)을 사용하여 설정할 수 있습니다.

- `Action`

  GitHub Actions에서 제공하는 재사용 가능한 작업 단위입니다. Node.js 설치, AWS S3에 파일 업로드 등을 액션으로 사용할 수 있습니다.

## Step 1 - GitHub Actions 시작하기

GitHub Actions을 사용하려면 먼저 yml 설정 파일을 생성해야 합니다. yml 설정 파일은 GitHub Repository에서 직접 만들어도 되고, 아니면 VSCode에서 만들어도 됩니다.

### GitHub Repository에서 만들기

먼저 다음과 같이 GitHub Repository의 Actions 탭을 클릭합니다.

<img src="/assets/img/raspberry-pi/github-actions-ci-cd/pic1.png" alt="pic1" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

해당 페이지로 들어가면 위와 같이 GitHub에서 여러 가지 템플릿을 제공해 줍니다. 원하는 템플릿을 검색하여 configure 버튼을 클릭하거나, 템플릿 없이 진행하려면 `set up a workflow yourself`를 클릭합니다.

<img src="/assets/img/raspberry-pi/github-actions-ci-cd/pic3.png" alt="pic3" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

### VSCode에서 만들기

먼저 다음과 같이 VSCode에서 `GitHub Actions` Extensions을 설치합니다.

<img src="/assets/img/raspberry-pi/github-actions-ci-cd/pic2.png" alt="pic2" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

이후 프로젝트 최상단 디렉토리에서 `.github` 폴더를 생성하고 그 안에 `workflows`라는 폴더를 생성한 후 yml 설정 파일을 생성합니다. 파일명은 원하는 대로 지으면 됩니다. 예를 들어 배포 관련 workflow 설정 파일을 생성한다면 `.github/workflows/deploy.yml` 구조가 될 수 있습니다.

## Step 2 - Workflow 작성하기

다음 예시는 Next.js 애플리케이션을 Raspberry Pi에 배포하고자 CI/CD를 구축한 예시입니다.

```yml
# workflow 이름 설정
name: GitHub Actions로 Next.js 앱 CI/CD 구축 예시

# workflow를 트리거하는 이벤트 설정
on:
  push:
    # main 브랜치에 푸시할 때 실행
    branches: ["main"]

# 실행할 jobs 설정
jobs:
  # job 이름 설정
  build-and-deploy:
    # Ubuntu 환경에서 실행
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          # Node.js 버전 설정
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build Next.js Project
        run: npm run build

      - name: Copy file via ssh password
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          password: ${{ secrets.PASSWORD }}
          port: ${{ secrets.PORT }}
          source: "./.next"
          target: ${{ secrets.TARGET }}

      - name: Executing remote ssh commands using password
        uses: appleboy/ssh-action@v1.1.0
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          password: ${{ secrets.PASSWORD }}
          port: ${{ secrets.PORT }}
          script: |
            whoami
            cd
            cd projects/github-actions-tutorial
            npm install
            pm2 kill
            pm2 start --name FE npm -- run start
```

## 참고 자료

- <a href="https://docs.github.com/ko/actions" target="_blank">GitHub Actions 설명서</a>
- <a href="https://velog.io/@sgwon1996/GitHub-Action%EC%9C%BC%EB%A1%9C-CICD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0" target="_blank">GitHub Action으로 CI/CD 구축하기</a>
- <a href="https://supersfel.tistory.com/entry/%EB%9D%BC%EC%A6%88%EB%B2%A0%EB%A6%ACgitHub-Action-%EC%9E%90%EB%8F%99%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-CICD" target="_blank">[라즈베리]gitHub Action 자동배포하기 (CI/CD)</a>
- <a href="https://velog.io/@sangwoong/CICD-GitHub-Action%EC%9C%BC%EB%A1%9C-CICD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0" target="_blank">[CICD] GitHub Action으로 CI/CD 구축하기</a>
- <a href="https://github.com/appleboy/scp-action" target="_blank">scp-action</a>
- <a href="https://github.com/appleboy/ssh-action" target="_blank">ssh-action</a>

## Comments

<hr />
<script
  src="https://utteranc.es/client.js"
  repo="HyunJinNo/HyunJinNo.github.io"
  issue-term="pathname"
  theme="github-light"
  crossorigin="anonymous"
  async
></script>
