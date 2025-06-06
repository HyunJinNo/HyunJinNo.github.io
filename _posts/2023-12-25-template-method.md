---
title: Template Method Pattern
description: Template Method Pattern에 대해 설명하는 페이지입니다.
date: 2023-12-25 00:00:00 +/-TTTT
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
  - Identifies the **framework of an algorithm**, allowing implementing classes to define the actual behavior.
- **Use When**
  - A single abstract implementation of an algorithm is needed.
  - Common behavior among subclasses should be localized to a common class.
  - Parent classes should be able to **uniformly invoke behavior in their subclasses**.
  - Most or all subclasses need to implement the behavior.

## Characteristics

- The template pattern **defines the steps of an algorithm** and **allows the subclasses to implement one or more of the steps**.
- Encapsulates an algorithm by creating a template for it.
- Defines the **skeleton of an algorithm** as a **set of steps**.
- Some methods of the algorithm have to be implemented by the subclasses– these are abstract methods in the super class.
- The subclasses can **redefine certain steps** of the algorithm without changing the algorithm’s structure.
- Some steps of the algorithm are concrete methods defined in the super class.
- Advantages
  - The superclass facilitates reuse of methods.
  - Code changes will occur in only one place.

## Hook Method

- A **hook** is a method that is declared in the abstract class, but only given an empty or default implementation.

## How to Use (Example)

- **Superclass**

  ```java
  public abstract class CaffeineBeverage {
      public void final prepareRecipe() {
          boilWater();
          brew();
          pourInCup();
          if (customerWantsCondiments()) {
              addCondiments();
          }
      }

      public void boilWater() {
          // implementation
      }

      public abstract void brew();

      public void pourInCup() {
          // implementation
      }

      public abstract void addCondiments();

      // hook
      public boolean customerWantsCondiments() {
          return true;
      }
  }
  ```

- **Subclass**

  ```java
  public class Coffee extends CaffeineBeverage {
      @Override
      public void brew() {
          // implementation
      }

      @Override
      public void addCondiments() {
          // implementation
      }

      @Override
      public boolean customerWantsCondiments(char c) {
          if (c == 'y') {
              return true;
          } else {
              return false;
          }
      }
  }
  ```
