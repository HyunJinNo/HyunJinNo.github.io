---
title: 프로토타입 (Prototype)
description: 자바스크립트 프로토타입에 대해 정리한 페이지입니다.
date: 2025-03-10 13:50:00 +/-TTTT
categories: [Computer Science]
tags: [javascript, prototype]
math: true
toc: true
pin: false
image:
  path: /assets/img/cs/study.avif
comments: true
---

<blockquote class="prompt-info"><p><strong><u>Tags</u></strong><br>
JavaScript, Prototype</p></blockquote>

## 개요

자바스크립트 프로토타입에 대해 정리한 페이지입니다.

## 프로토타입 (Prototype)

### 프로토타입의 개념

자바스크립트 `프로토타입(Prototype)`은

```javascript
const Person = function (name) {
  this._name = name;
};

Person.prototype.getName = function () {
  return this._name;
};

const person = new Person("HyunJinNo");

console.log(Object.getPrototypeOf(person)); // { getName: [Function (anonymous)] }
console.log(Reflect.getPrototypeOf(person)); // { getName: [Function (anonymous)] }
console.log(person.__proto__); // { getName: [Function (anonymous)] }
```

### \_\_proto\_\_: 생략 가능한 프로퍼티

```javascript
const Person = function (name) {
  this._name = name;
};

Person.prototype.getName = function () {
  return this._name;
};

const person = new Person("HyunJinNo");
console.log(person.__proto__.getName()); // undefined
console.log(person.getName()); // HyunJinNo
```

### constructor 프로퍼티

```javascript
const arr = [1, 2];
console.log(Array.prototype.constructor === Array); // true
console.log(arr.__proto__.constructor === Array); // true
console.log(arr.constructor === Array); // true

const arr2 = new arr.constructor(3, 4);
console.log(arr2); // [3, 4]
```

```javascript
const Person = function (name) {
  this._name = name;
};

Person.prototype.getName = function () {
  return this._name;
};

const p1 = new Person("사람1"); // Person { _name: '사람1' } true
const p1Proto = Object.getPrototypeOf(p1);
const p2 = new Person.prototype.constructor("사람2"); // Person { _name: '사람2' } true
const p3 = new p1Proto.constructor("사람3"); // Person { _name: '사람3' } true
const p4 = new p1.__proto__.constructor("사람4"); // Person { _name: '사람4' } true
const p5 = new p1.constructor("사람5"); // Person { _name: '사람5' } true

[p1, p2, p3, p4, p5].forEach((person) => {
  console.log(person, person instanceof Person);
});
```

### 프로토타입 체인

#### 메서드 오버라이드

```javascript
function Person(name) {
  this._name = name;
}

Person.prototype.getName = function () {
  return this._name;
};

Person.prototype._name = "사람2";

const person = new Person("사람1");
person.getName = function () {
  return `이름: ${this._name}`;
};

console.log(person.getName()); // "이름: 사람1"
console.log(person.__proto__.getName()); // "사람2"
```

## 참고 자료

- <a href="https://www.yes24.com/Product/Goods/78586788" target="_blank">코어 자바스크립트 - 예스 24</a>
- <a href="https://poiemaweb.com/js-prototype" target="_blank">Prototype | PoiemaWeb</a>
- <a href="https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Prototype-%EC%99%84%EC%A0%84-%EC%A0%95%EB%B3%B5-%E2%9D%97" target="_blank">[JS] 📚 프로토타입(Prototype) 개념 완전 정복 ❗</a>
