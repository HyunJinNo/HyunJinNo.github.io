---
title: Factory Method Pattern
description: Factory Method Pattern에 대해 설명하는 페이지입니다.
date: 2023-10-11 00:00:00 +/-TTTT
categories: [Design Patterns]
tags: [design-pattern, java]
math: true
toc: true
pin: false
image:
  path: /assets/img/design-patterns/laptop.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br />
Design Pattern, Java</p></blockquote>

## Introduction

- **Purpose**
  - Exposes a **method for creating objects, allowing subclasses** to control the actual creation process.
- **Use When**
  - A class will not know what classes it will be required to create.
  - Subclasses may specify what objects should be created.
  - Parent classes wish to defer creation to their subclasses.
- **Characteristics**
  - Uses **inheritance** to decide the object to be instantiated.
  - Defines an interface for creating an object, but lets subclasses decide which class to instantiate.
  - Lets a class defer instantiation to subclasses.

## How to Use (Example)

- **Product**

  ```java
  public abstract class MyProduct {
      String name;

      public String getName() {
          return name;
      }
  }
  ```

- **Concrete Products**

  ```java
  public class ProductA extends MyProduct {
      public ProductA() {
          name = "ProductA";
      }
  }

  public class ProductB extends MyProduct {
      public ProductB() {
          name = "ProductB";
      }
  }

  public class ProductC extends MyProduct {
      public ProductC() {
          name = "ProductC";
      }
  }

  public class ProductD extends MyProduct {
      public ProductD() {
          name = "ProductD";
      }
  }
  ```

- **Creator**

  ```java
  public abstract class MyCreator {
      public MyProduct orderProduct(String type) {
          Product product = createProduct(type);
          return product;
      }

      protected abstract MyProduct createProduct(String type);
  }
  ```

- **Concrete Creators**

  ```java
  public class CreatorAB extends MyCreator {
      public MyProduct createProduct(String type) {
          Product product;
          if (type.equals("A")) {
              product = new ProductA();
          } else if (type.equals("B")) {
              product = new ProductB();
          }
          return product;
      }
  }

  public class CreatorCD extends MyCreator {
      public MyProduct createProduct(String type) {
          Product product;
          if (type.equals("C")) {
              product = new ProductC();
          } else if (type.equals("D")) {
              product = new ProductD();
          }
          return product;
      }
  }
  ```
