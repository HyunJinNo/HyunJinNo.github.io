---
title: Eclipse IDE에서 Lombok 적용 방법
description: Eclipse IDE에서 Lombok을 설치하고 적용하는 방법에 대해 정리한 페이지입니다.
date: 2025-08-03 09:11:00 +/-TTTT
categories: [Back-end]
tags: [java, lombok, spring-boot]
math: true
toc: true
pin: false
image:
  path: /assets/img/back-end/back-end.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br />
Java, Lombok, Spring Boot</p></blockquote>

## 개요

Eclipse IDE에서 Lombok을 설치하고 적용하는 방법에 대해 정리한 페이지입니다.

<blockquote class="prompt-info"><p><strong><u>Tips</u></strong> <br />
Lombok 최신 버전 정보는 <a href="https://projectlombok.org/download" target="_blank">https://projectlombok.org/download</a>에서 확인하실 수 있습니다.</p></blockquote>

## Lombok이란?

### 개념

`Lombok`은 Java의 데이터(모델) 클래스를 생성할 때 반복적으로 사용해야 하는 Getter/Setter와 같은 메서드를 자동으로 생성해주는 라이브러리입니다. `Lombok`을 사용하면 애너테이션만 붙이면 컴파일 시점에 필요한 코드가 자동으로 생성되어 소스 코드가 훨씬 깔끔해지고 가독성이 좋아지며 유지보수도 쉬워집니다.

### 장점

`Lombok`을 사용할 때의 장점은 다음과 같습니다.

- 애너테이션 기반으로 코드를 자동 생성하므로 생산성이 높아집니다.
- 반복되는 코드를 생략할 수 있어 가독성이 좋아집니다.
- Lombok을 안다면 간단하게 코드를 유추할 수 있어 유지보수에 용이합니다.

### 주요 Lombok 애너테이션

Lombok의 주요 애너테이션은 다음과 같습니다.

| 애너테이션                 | 기능                                                                                      |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| `@Getter`, `@Setter`       | 클래스에 선언되어 있는 모든 필드에 대한 Getter, Setter 메서드를 자동 생성합니다.          |
| `@NoArgsConstructor`       | 매개변수가 없는 생성자를 자동 생성합니다.                                                 |
| `@AllArgsConstructor`      | 모든 필드를 매개변수로 갖는 생성자를 자동 생성합니다.                                     |
| `@RequiredArgsConstructor` | 필드 중 `final`이나 `@NotNull`이 설정된 변수를 매개변수로 갖는 생성자를 자동 생성합니다.  |
| `@ToString`                | `toString()` 메서드를 자동 생성합니다.                                                    |
| `@EqualsAndHashCode`       | `equals()`, `hashCode()` 메서드를 자동 생성합니다.                                        |
| `@Data`                    | `@Getter`, `@Setter`, `@ToString`, `@EqualsAndHashCode`를 모두 포괄하는 애너테이션입니다. |
| `@Builder`                 | 빌더 패턴을 적용한 객체 생성자를 자동 생성합니다.                                         |
| `@Slf4j`                   | `private static final Logger log = LoggerFactory.getLogger(...);` 코드를 자동 생성합니다. |

Lombok 애너테이션에 대해선 다음 링크에서 자세하게 확인하실 수 있습니다.

<a href="https://projectlombok.org/features/" target="_blank">https://projectlombok.org/features/</a>

## Lombok 적용하기

### Step 1 - Lombok 의존성 추가하가

먼저 다음과 같이 프로젝트에 Lombok 의존성을 추가합니다.

#### Maven

Maven 프로젝트의 경우 `pom.xml`에 Lombok 의존성을 추가합니다.

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.38</version>
    <optional>true</optional>
</dependency>
```

#### Gradle

Gradle 프로젝트의 경우 `build.gradle` Lombok 의존성을 추가합니다.

```gradle
dependencies {
    compileOnly 'org.projectlombok:lombok:1.18.32'
    annotationProcessor 'org.projectlombok:lombok:1.18.38'
}
```

### Step 2 - lombok.jar 설치하기

다음 링크에 접속하여 `lombok.jar` 파일을 다운로드합니다.

<a href="https://projectlombok.org/download" target="_blank">https://projectlombok.org/download</a>

<img src="/assets/img/back-end/eclipse-lombok/pic1.avif" alt="lombok.jar 파일 다운로드" />

다운로드 이후에는 `lombok.jar` 파일이 있는 경로에서 터미널을 열고 다음 명령어를 입력하여 파일을 실행합니다.

```bash
java -jar lombok.jar
```

<img src="/assets/img/back-end/eclipse-lombok/pic2.avif" alt="lombok.jar 파일 실행하기" />

파일을 실행하면 `Lombok`을 설치할 수 있습니다.

<img src="/assets/img/back-end/eclipse-lombok/pic3.avif" alt="Lombok 설치하기" />

### Step 3 - Lombok 적용하기

`Lombok` 설치 이후에는 `Eclipse IDE`에서 `Project > Clean`을 클릭하면 `Lombok`을 적용할 수 있습니다.

<img src="/assets/img/back-end/eclipse-lombok/pic4.avif" alt="Lombok 적용하기" />

## 참고 자료

- <a href="https://projectlombok.org/setup/maven" target="_blank">https://projectlombok.org/setup/maven</a>
- <a href="https://projectlombok.org/setup/gradle" target="_blank">https://projectlombok.org/setup/gradle</a>
- <a href="https://projectlombok.org/features/" target="_blank">https://projectlombok.org/features/</a>
