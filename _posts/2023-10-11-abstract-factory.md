---
title: Abstract Factory
description: Abstract Factory Pattern에 대해 설명하는 페이지입니다.
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
  - Provide an **interface that delegates creation calls** to one or more concrete classes in order to deliver **specific objects.**
- **Use When**
  - The creation of objects should be independent of the system utilizing them.
  - Systems should be capable of using multiple families of objects.
  - Families of objects must be used together.
  - Libraries must be published without exposing implementation details.
  - Concrete classes should be decoupled from clients.
- **Characteristics**
  - Delegates object creation to a factory object.
  - Uses **composition and delegation.**

## Participants

- **AbstractFactory**
  - Declares an interface for operations that create abstract product objects.
- **ConcreteFactory**
  - Implements the operations to create product objects.
- **AbstractProduct**
  - Declares an interface for a type of product object.
- **ConcreteProduct**
  - Defines a product object to be created by the corresponding concrete factory.
  - Implements the AbstractProduct interface.
- **Client**
  - **Uses only interfaces** declared by AbstractFactory and AbstractProduct classes.

## How to Use (Example)

- **Abstract Factory**

  ```java
  public interface IngredientFactory {
      public IngredientA createIngredientA();
      public IngredientB createIngredientB();
      public IngredientC createIngredientC();
  }
  ```

- **Concrete Factory**

  ```java
  public class MyIngredientFactory implements IngredientFactory {
      public IngredientA createIngredientA() {
          return new MyIngredientA();
      }

      public IngredientB createIngredientB() {
          return new MyIngredientB();
      }

      public IngredientC createIngredientC() {
          return new MyIngredientC();
      }
  }
  ```

- **Abstract Product**

  ```java
  public abstract class Product {
      IngredientA ingredientA;
      IngredientB ingredientB;
      IngredientC ingredientC;

      public abstract void prepare();
  }
  ```

- **Concrete Product**

  ```java
  public class MyProduct extends Product {
      MyIngredientFactory myIngredientFactory;

      public MyProduct(MyIngredientFactory myIngredientFactory) {
          this.myIngredientFactory = myIngredientFactory;
      }

      public void prepare() {
          ingredientA = myIngredientFactory.createIngredientA();
          ingredientB = myIngredientFactory.createIngredientB();
          ingredientC = myIngredientFactory.createIngredientC();
      }
  }
  ```
