---
layout: post
title: VSCode에서 Prettier와 ESLint 설정 방법
description: >
  VSCode에서 Prettier와 ESLint 설정 방법에 대해 설명하는 페이지입니다.
image:
  path: /assets/img/front-end/front-end.jpg
  srcset:
    1060w: /assets/img/front-end/front-end.jpg
    530w: /assets/img/front-end/front-end.jpg
    265w: /assets/img/front-end/front-end.jpg
related_posts:
  - None
sitemap: true
comments: false
---

<i>Environment</i>

- <i>eslint v9.11.0</i>

<h2>목차</h2>

- [개요](#개요)
- [Prettier란?](#prettier란)
- [ESLint란?](#eslint란)
- [Step 1 - VSCode Extensions](#step-1---vscode-extensions)
- [Step 2 - Prettier 설정하기](#step-2---prettier-설정하기)
  - [.prettierrc 파일 생성하기](#prettierrc-파일-생성하기)
  - [Editor: Format On Save](#editor-format-on-save)
- [Step 3 - ESLint 설정하기](#step-3---eslint-설정하기)
  - [.eslint.config.mjs 파일 생성하기](#eslintconfigmjs-파일-생성하기)
- [참고 자료](#참고-자료)
- [Comments](#comments)

## 개요

이번 글에서는 VSCode에서 Prettier와 ESLint 설정 방법에 대해 설명하겠습니다.

## Prettier란?

`Prettier`란 코드의 포맷을 자동으로 정리해주는 `코드 포맷터(Code Formatter)`입니다. JavaScript, TypeScript, HTML 등 다양한 프로그래밍 언어를 지원하며, Prettier를 사용하면 일관된 코드 스타일을 유지할 수 있습니다. 이를 통해 팀으로 협업하는 데 있어서 코드 스타일을 통일할 수 있다는 장점이 있습니다.

## ESLint란?

`ESLint`란 JavaScript와 TypeScript 코드에서 문법 오류나 잠재적 문제를 식별하거나, 코드 스타일 규칙을 통일하는데 사용하는 도구입니다. ESLint를 사용하면 코드 품질을 높이고 일관된 코드 스타일을 유지할 수 있습니다. 주로 버그를 예방하거나, 유지 보수를 쉽게 하기 위해 사용합니다.

## Step 1 - VSCode Extensions

먼저 다음과 같이 VSCode에서 Extensions 탭을 클릭하여 `Prettier - Code formatter`와 `ESLint`를 검색하여 설치합니다.

<img src="/assets/img/front-end/prettier-eslint/pic1.png" alt="pic1" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<img src="/assets/img/front-end/prettier-eslint/pic2.png" alt="pic2" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

## Step 2 - Prettier 설정하기

VSCode에서 `Prettier - Code formatter`를 설치하고 설정 파일을 따로 생성하지 않으면 Prettier의 디폴트 규칙이 적용됩니다. Prettier의 디폴트 규칙 예시는 다음과 같습니다.

- `따옴표`: 작은 따옴표 대신 큰 따옴표를 사용합니다.
- `세미콜론`: 문장(statement)의 끝에 세미콜론을 사용합니다.
- `탭 너비`: 2칸
- `줄바꿈`: 80자 기준으로 자동으로 줄바꿈합니다.
- `탭 사용 여부`: 탭 대신 스페이스로 들여쓰기합니다.

### .prettierrc 파일 생성하기

Prettier 규칙을 설정하려면 다음과 같이 `.prettierrc` 설정 파일을 생성해야 합니다. **자주 사용되는 Prettier 옵션**을 기반으로 설정 파일을 생성한 예시는 다음과 같습니다.

```json
{
  "semi": true,
  "singleQuote": false,
  "printWidth": 80,
  "trailingComma": "all",
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "jsxSingleQuote": false,
  "arrowParens": "always",
  "endOfLine": "auto"
}
```

위의 옵션들에 대해 설명하자면 다음과 같습니다.

- `semi`

  각 문장의 끝에 자동으로 세미콜론을 추가할지 여부를 설정합니다. 디폴트 값은 `true`입니다.

- `singleQuote`

  문자열에 작은 따옴표를 사용할지 여부를 설정합니다. 디폴트 값은 `큰 따옴표`입니다.

- `printWidth`

  한 줄에서 허용하는 최대 글자 수를 설정합니다. 최대 글자 수 이후에는 자동으로 줄바꿈 처리됩니다. 디폴트 값은 `80자`입니다.

- `trailingComma`

  콤마로 나열된 여러 줄에 걸친 객체나 배열의 마지막 항목 뒤에 콤마를 추가할지 여부를 설정합니다. 디폴트 값은 `es5`입니다.

  - `none`

    콤마를 설정하지 않습니다.

  - `es5`

    ES5에 해당하는 경우에만 콤마를 설정합니다.

  - `all`

    가능한 모든 곳에 콤마를 설정합니다.

- `tabWidth`

  들여쓰기에 사용할 공백(스페이스)의 수를 설정합니다. 디폴트 값은 `2칸`입니다.

- `useTabs`

  들여쓰기에 탭을 사용할지 여부를 설정합니다. 디폴트 값은 `false`입니다.

- `bracketSpacing`

  객체 리터럴에서 중괄호 내부에 스페이스를 추가할지 여부를 설정합니다. 디폴트 값은 `true`입니다.

- `jsxSingleQuote`

  JSX에서 작은 따옴표를 사용할지 여부를 설정합니다. 디폴트 값은 `false`입니다.

- `arrowParens`

  화살표 함수에서 파라미터 개수가 오직 한 개일 때 괄호를 사용할지 여부를 설정합니다. 디폴트 값은 `always`입니다.

  - `always`

    항상 괄호를 사용합니다.

  - `avoid`

    파라미터 개수가 오직 한 개일 때 괄호를 생략합니다.

- `endOfLine`

  파일 끝에 사용할 줄바꿈 문자를 설정합니다. 디폴트 값은 `lf`입니다.

  - `lf`

    `Line Feed`의 약자로, 유닉스 스타일(`\n`)을 적용합니다.

  - `crlf`

    `Carriage Return + Line Feed`의 약자로, 윈도우 스타일(`\r\n`)을 적용합니다.

  - `cr`

    `Carriage Return`의 약자로, 오직 `\r`을 사용합니다. 매우 드물게 사용되는 옵션입니다.

  - `auto`

    시스템에 맞게 자동 설정합니다.

위에서 설명한 것 외에 프로젝트에 따라 사용할 수 있는 옵션들이 여러 가지가 존재합니다. Prettier에서 사용할 수 있는 모든 옵션들은 다음 링크에서 참고하실 수 있습니다.

<a href="https://prettier.io/docs/en/options" target="_blank">https://prettier.io/docs/en/options</a>

### Editor: Format On Save

파일을 저장할 떄마다 자동으로 코드 포맷팅을 적용하려면 VSCode 설정에서 다음과 같이 `Editor: Format On Save` 항목을 체크하면 됩니다.

<img src="/assets/img/front-end/prettier-eslint/pic3.png" alt="pic3" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<img src="/assets/img/front-end/prettier-eslint/pic4.png" alt="pic4" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<br />

이후 `Default Formatter`를 `Prettier - Code formatter`로 변경합니다.

<img src="/assets/img/front-end/prettier-eslint/pic5.png" alt="pic5" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<br />

마지막으로 `settings.json` 파일을 확인하여 `"editor.formatOnSave": true`로 설정되어 있는지 확인합니다.

<img src="/assets/img/front-end/prettier-eslint/pic6.png" alt="pic6" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

<img src="/assets/img/front-end/prettier-eslint/pic7.png" alt="pic7" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 0.5rem"/>

## Step 3 - ESLint 설정하기

작성 예정

### .eslint.config.mjs 파일 생성하기

## 참고 자료

- <a href="https://prettier.io/" target="_blank">Prettier · Opinionated Code Formatter</a>

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
