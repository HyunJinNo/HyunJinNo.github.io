---
title: Decorator Pattern
description: Decorator Pattern에 대해 설명하는 페이지입니다.
date: 2023-10-18 00:00:00 +/-TTTT
categories: [Design Patterns]
tags: [design-pattern, java]
math: true
toc: true
pin: false
image:
  path: /assets/img/design-patterns/laptop.jpg
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong> <br />
Design Pattern, Java</p></blockquote>

## Introduction

<hr />

- **Purpose**
  - Allows for the **dynamic wrapping** of objects in order to **modify their existing responsibilities** and behaviors.
- **Use When**
  - Object responsibilities and behaviors should be dynamically modifiable.
  - Concrete implementions should be decoupled from responsibilities and behaviors.
  - Subclassing to achieve modification is impratical or impossible.
  - Specific functionality should not reside high in the object hierarchy.
  - A lot of little objects surrounding a concrete implementation is acceptable.
- **Characteristics**
  - We can use one or more decorators to wrap an object.
  - **Decorators have the same super type as the objects they decorate.**
  - We can decorate objects **dynamically** at runtime with as many decorators as we want.
- **Design Principle**
  - Open-Closed Principle (OCP)
- **Mechanisms**
  - Uses object composition and delegation
  - Decorator class mirrors the type of components they are decorating.
    - We can wrap a component with any number of decorators
- **Advantages**
  - attaches **additional responsibilities** to an object **dynamically**
  - **flexible alternative** to **subclassing for extending functionality**
- **Disadvantages**
  - can generate a lot of small classes (ex. Java I/O)
  - hard to understand if not familiar with the pattern

## How to Use (Example)

<hr />

- **Decorated Class**

  ```java
  public abstract class Beverage {
      protected String description = "Unknown Beverage";

      public String getDescription() {
          return description;
      }

      public abstract double cost();
  }

  public class Espresso extends Beverage {
      public Espresso() {
          description = "Espresso";
      }

      public double cost() {
          return 1.99;
      }
  }
  ```

- **Decorator Class**

  ```java
  public abstract class CondimentDecorator extends Beverage {
      protected Beverage beverage;

      public abstract String getDescription();
  }

  public class Mocha extends CondimentDecorator {
      public Mocha(Beverage beverage) {
          this.beverage = beverage;
      }

      public String getDescription() {
          return beverage.getDescription() + ", Mocha";
      }

      public double cost() {
          return 0.2 + beverage.cost();
      }
  }

  public class Whip extends CondimentDecorator {
      public Mocha(Beverage beverage) {
          this.beverage = beverage;
      }

      public String getDescription() {
          return beverage.getDescription() + ", Whip";
      }

      public double cost() {
          return 0.3 + beverage.cost();
      }
  }
  ```

- **Main**
  ```java
  public class Main {
      public static void main(String args[]) {
          Beverage beverage = new Espresso();
          beverage = new Mocha(beverage);
          beverage = new Mocha(beverage);
          beverage = new Whip(beverage);
          System.out.println(beverage.getDescription() + " $" + beverage.cost());
      }
  }
  ```
