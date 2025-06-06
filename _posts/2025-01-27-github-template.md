---
title: GitHub PR & Issue Template 생성 방법
description: GitHub에서 PR & Issue Template 생성 방법에 대해 설명하는 페이지입니다.
date: 2025-01-27 00:00:00 +/-TTTT
categories: [기타]
tags: [git, github]
math: true
toc: true
pin: false
image:
  path: /assets/img/etc/github-template/github-log.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br> Git, GitHub</p></blockquote>

## 개요

이번 글에서는 GitHub에서 PR & Issue Template을 생성하는 방법에 대해 설명하겠습니다.

## GitHub Label 설정하기

Template을 생성하기 전에 먼저 다음과 같이 GitHub Repository에서 Label을 설정하기를 권장합니다. Label은 PR과 Issue에서 카테고리를 분류하기 위해 사용합니다.

<img src="/assets/img/etc/github-template/pic2.avif" alt="pic2" >

제가 주로 사용하는 Label 종류에 대한 설명은 다음과 같습니다. 참고로 저는 커밋 메세지에서는 첫 글자를 소문자로, PR이나 Issue 작성 시에는 첫 글자를 대문자로 작성하는 것을 선호합니다.

| Label name | Description                                                       | Color   |
| ---------- | ----------------------------------------------------------------- | ------- |
| bug        | 버그가 발생한 경우                                                | #d73a4a |
| chore      | 빌드 설정, 의존성 업데이트 등의 사소한 작업을 수행한 경우         | #79FA9D |
| comment    | 주석을 작성하거나 변경한 경우                                     | #0E8A16 |
| design     | UI 관련 작업을 수행한 경우                                        | #5319E7 |
| docs       | 문서를 추가하거나, 삭제, 또는 변경한 경우                         | #0052CC |
| feat       | 새로운 기능을 추가한 경우                                         | #1D76DB |
| fix        | 버그를 고친 경우                                                  | #D93F0B |
| refactor   | 기능 변경 없이 코드 리팩토링을 수행한 경우                        | #07F680 |
| release    | 배포를 수행한 경우                                                | #0585B7 |
| remove     | 파일 또는 폴더를 삭제한 경우                                      | #3F0517 |
| rename     | 파일 또는 폴더 명을 수정하거나 파일을 옮기는 작업만을 수행한 경우 | #940658 |
| test       | 테스트를 추가하거나 테스트 리팩토링을 수행한 경우                 | #FBCA04 |

## PR Template 생성하기

먼저 다음과 같이 프로젝트 최상위 폴더에서 `.github` 폴더를 생성한 후 해당 폴더에서 `pull_request_template.md` 파일을 생성합니다.

<img src="/assets/img/etc/github-template/pic1.avif" alt="pic1" >

`pull_request_template.md` 파일을 생성한 후 PR Template을 작성하면 됩니다. 다음은 제가 사용한 PR Template 예시입니다.

```md
- 제목: Feat: 기능명
  Ex. Feat: pull request template 작성

-- 절취선 위 부분의 내용은 모두 삭제하고 PR을 작성해 주세요. --

---- 절취선 ----

## ☑️ 개발 유형

- [ ] Front-end
- [ ] Back-end

## ✔️ PR 유형

- [ ] Chore: 빌드 설정, 의존성 업데이트 등의 사소한 작업을 수행한 경우
- [ ] Comment: 주석을 작성하거나 변경한 경우
- [ ] Design: UI 관련 작업을 수행한 경우
- [ ] Docs: 문서를 추가하거나, 삭제, 또는 변경한 경우
- [ ] Feat: 새로운 기능을 추가한 경우
- [ ] Fix: 버그를 고친 경우
- [ ] Refactor: 기능 변경 없이 코드 리팩토링을 수행한 경우
- [ ] Release: 배포를 수행한 경우
- [ ] Remove: 파일 또는 폴더를 삭제한 경우
- [ ] Rename: 파일 또는 폴더 명을 수정하거나 파일을 옮기는 작업을 수행한 경우
- [ ] Test: 테스트를 추가하거나 테스트 리팩토링을 수행한 경우

## 📝 작업 내용

이번 PR에서 작업한 내용을 간략히 설명해 주세요.

- [x] 구현한 기능 1
- [x] 구현한 기능 2

## #️⃣ Related Issue

해당 Pull Request과 관련된 Issue Link를 작성해 주세요.

Ex. close #123
```

해당 Template 구조에 대해 설명하자면 다음과 같습니다.

- ☑️ 개발 유형

  개발 유형이 `Front-end`인지, 아니면 `Back-end`인지를 명시하는 부분입니다.

- ✔️ PR 유형

  해당 PR이 어떤 작업 유형인지를 명시하는 부분입니다. 미리 정해둔 Label 목록 중에서 선택하면 됩니다.

- 📝 작업 내용

  해당 PR에서 작업한 내용을 간단하게 작성하는 부분입니다.

- #️⃣ Related Issue

  해당 PR과 관련된 Issue Link를 작성하는 부분입니다. 해당 PR이 default branch에 merge될 때 자동으로 닫을 Issue 목록을 작성하면 됩니다.

PR Template을 사용하여 생성한 PR 예시는 다음과 같습니다.

<img src="/assets/img/etc/github-template/pic3.avif" alt="PR 예시 1" >

<img src="/assets/img/etc/github-template/pic13.avif" alt="PR 예시 2" >

<img src="/assets/img/etc/github-template/pic14.avif" alt="PR 예시 3" >

## Issue Template 생성하기

Issue Template은 GitHub Repository에서 직접 만들어도 되고, 아니면 VSCode에서 만들 수 있습니다.

### GitHub Repository에서 생성하기

먼저 GitHub Repository에서 `Setting` 탭을 클릭합니다.

<img src="/assets/img/etc/github-template/pic4.avif" alt="pic4" >

이후 `Features` 항목에서 `Issues` 부분의 `Set up templates` 버튼을 클릭합니다.

<img src="/assets/img/etc/github-template/pic5.avif" alt="pic5" >

`Add template: select` 버튼을 클릭하여 생성하고자 하는 Issue Template을 선택하면 됩니다.

<img src="/assets/img/etc/github-template/pic6.avif" alt="pic6" >

#### Bug Report 생성하기

다음은 `Bug Report`를 생성한 예시입니다. 코드는 [아래](#bug-report-생성하기-1)에서 확인하실 수 있습니다.

<img src="/assets/img/etc/github-template/pic8.avif" alt="pic8" >

<img src="/assets/img/etc/github-template/pic7.avif" alt="pic7" >

#### Feature Request 생성하기

다음은 `Feature Request`를 생성한 예시입니다. 코드는 [아래](#feature-request-생성하기-1)에서 확인하실 수 있습니다.

<img src="/assets/img/etc/github-template/pic9.avif" alt="pic9" >

<img src="/assets/img/etc/github-template/pic10.avif" alt="pic10" >

### VSCode에서 생성하기

먼저 다음과 같이 프로젝트 최상위 폴더에서 `.github` 폴더를 생성한 후 해당 폴더 내에 `ISSUE_TEMPLATE` 폴더를 생성한 후 `bug_report.md`, `feature_request.md` 파일을 생성합니다.

<img src="/assets/img/etc/github-template/pic11.avif" alt="pic11" >

#### Bug Report 생성하기

`bug_report.md` 파일을 열고 다음과 같이 작성할 수 있습니다.

```md
---
name: Bug Report
about: 어떤 버그인지 설명해 주세요.
title: "Bug: 버그 설명"
labels: Bug
assignees: ""
---

## ❓ 어떤 버그인가요?

- 어떤 버그인지 설명해 주세요.

## 🖥️ 발생 환경

- OS: (Ex. Windows, macOS, Ubuntu)
- 브라우저: (Ex. Chrome, Firefox)
- 버전: (Ex. v1.0.3)

## 🕘 발생 일시

- 버그가 발생한 날짜와 시간을 입력해 주세요. (Ex. 2024년 10월 1일, 오후 3시 30분)

## 📝 예상 결과

- 예상했던 정상적인 결과가 어떤 것이었는지 설명해 주세요.

## 📚 참고할만한 자료(선택)

- 추가적으로 참고할 만한 사항이 있으면 적어 주세요.
- 없는 경우 해당 단락을 삭제해 주세요.
```

#### Feature Request 생성하기

`feature_request.md` 파일을 열고 다음과 같이 작성할 수 있습니다.

```md
---
name: Feature Request
about: 새로운 기능 추가 요청을 작성해 주세요.
title: "Feat: 기능 설명"
labels: Feat
assignees: ""
---

## ❓ 어떤 기능인가요?

- 추가 요청하려는 기능에 대해 설명해 주세요.

## 📝 기능 설명

- 추가하려는 기능의 세부 설명 및 목적을 작성해 주세요.

## ✅ TODO

구현해야 하는 기능에 대해 체크리스트를 작성해 주세요.

- [ ] TODO 1
- [ ] TODO 2

## 📚 참고할만한 자료(선택)

- 추가적으로 참고할 만한 사항이 있으면 적어 주세요.
- 없는 경우 해당 단락을 삭제해 주세요.
```

### 생성 결과

Issue Template을 생성한 후 GitHub Repository의 `Issues` 탭을 클릭한 후 `New issue` 버튼을 클릭하면 다음과 같이 Template이 표시됩니다.

<img src="/assets/img/etc/github-template/pic12.avif" alt="pic12" >
