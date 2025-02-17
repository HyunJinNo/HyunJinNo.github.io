---
title: Prototype Pattern
description: Prototype Pattern에 대해 설명하는 페이지입니다.
date: 2023-12-14 00:00:00 +/-TTTT
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
  - Create objects based upon a template of **an existing objects through cloning.**
- **Use When**
  - Composition, creation, and representation of objects should be decoupled from a system
  - **Classes to be created are specified at runtime.**
  - **Objects or object structures are required that are identical or closely resemble other existing objects or object structures.**
  - **The initial creation of each object is an expensive operation.**
  - **When to avoid building a class hierarchy of factories that parallels the class hierarchy of products**

## Characteristics

<hr />

- **Advantage**
  - **Hides concrete product classes from clients**
  - **Decouples the clients from the creational process**
- Prototypes can be **supplied and changed at runtime**
- The client asks the prototype to clone itself for a new object of the prototype.
- It provides **great flexibility** in configuring and changing a program at runtime
  - Adding and removing products at run-time
  - Reduced subclassing
  - Configuring an application with classes **dynamically**
    - Loading the classes dynamically

## Participants

<hr />

- **Prototype**
  - Defines the interface (an operation) of cloning itself.
- **ConcreteProducts**
  - Concrete objects that can clone themselves.
- **Client**
  - Obtain more objects by asking them to clone themselves.

## How to Use (Example)

<hr />

- **Java's Cloneable**

  ```java
  class Stack implements Cloneable {
      private final int maxSize;
      private int top;
      private Object[] store;

      public Stack (int size) {
          maxSize = size;
          store = new Object[size];
          top = -1;
      }

      public Object clone() throws CloneNotSupportedException {
          Stack result;
          try {
              result = (Stack) super.clone();
              result.store = (Object[]) store.clone();
              return result;
          } catch (CloneNotSupportedException e) {
              return null;
          }
      }
  }
  ```
