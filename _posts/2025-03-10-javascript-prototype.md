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

자바스크립트는 `프로토타입(Prototype)` 기반 언어입니다. C++, Java와 같은 클래스 기반 언어에서는 <b>"상속"</b>을 사용하지만, 프로토타입 기반 언어에서는 어떤 객체를 <b>원형(Prototype)</b>으로 삼고 이를 복제(참조)함으로써 상속과 비슷한 효과를 얻습니다.

자바스크립트의 모든 객체는 자신의 원형(Prototype)이 되는 객체를 가지며 이를 `프로토타입(Prototype)`이라고 합니다. 자바스크립트의 모든 객체에 자동으로 객체인 `prototype` 프로퍼티를 생성합니다. 만약 함수를 생성자 함수로 사용하는 경우(즉, new 키워드를 사용하는 경우), 생성자 함수로부터 생성된 인스턴스에는 숨겨진 프로퍼티인 `[[prototype]]`가 부여됩니다. 해당 프로퍼티는 `__proto__`로 확인할 수 있으며, 생성자 함수의 `prototype`을 참조하게 됩니다.

<blockquote class="prompt-tip"><p><strong><u>Tips</u></strong><br>
instance.__proto__와 같이 참조할 수도 있고, Object.getPrototypeOf(instance), Reflect.getPrototypeOf(instance)를 통해서도 접근할 수 있습니다.</p></blockquote>

```javascript
const Person = function (name) {
  this._name = name;
};

Person.prototype.getName = function () {
  return this._name;
};

const person = new Person("사람");

console.log(Object.getPrototypeOf(person)); // { getName: [Function (anonymous)] }
console.log(Reflect.getPrototypeOf(person)); // { getName: [Function (anonymous)] }
console.log(Person.prototype); // { getName: [Function (anonymous)] }
console.log(person.__proto__); // { getName: [Function (anonymous)] }
console.log(Person.prototype === person.__proto__); // true
```

### prototype 프로퍼티와 \_\_proto\_\_ 프로퍼티

`prototype` 프로퍼티는 모든 함수 객체에 존재하는 속성으로, 해당 함수가 생성자 함수로 사용될 때 생성되는 인스턴스들이 상속받을 속성과 메서드를 저장합니다. 그리고 인스턴스의 `__proto__` 프로퍼티는 생성자 함수의 `prototype` 프로퍼티를 참조합니다. 다음 사진을 보면 알 수 있듯이, 내용물이 동일하고 일치 연산자(===)를 사용하여 비교했을 때 true가 반환되는 것을 확인할 수 있습니다.

<img src="/assets/img/cs/prototype/pic1.avif" alt="인스턴스의 __proto__ 프로퍼티는 생성자 함수의 prototype을 참조합니다." />

그러므로 다음과 같이 `__proto__` 프로퍼티를 사용해서 생성자 함수의 `prototype`에 정의된 getName 메서드를 호출할 수 있습니다.

```javascript
const Person = function (name) {
  this._name = name;
};

Person.prototype.getName = function () {
  return this._name;
};

const person = new Person("사람");
console.log(person.__proto__.getName()); // undefined
console.log(person.getName()); // "사람"
```

<b>`__proto__` 프로퍼티는 생략 가능한 프로퍼티입니다.</b> 따라서 위의 코드처럼 `__proto__` 프로퍼티를 생략하면, 생성자 함수의 `prototype`에 어떤 메서드나 프로퍼티가 있다면 인스턴스에서도 자신의 메서드나 프로퍼티인 것처럼 사용할 수 있습니다.

위의 코드에서 `person.__proto__.getName()`는 undefined가 반환되지만, `__proto__`를 생략하여 `person.getName()`로 호출한 경우 <b>"사람"</b>이 반환됩니다. 이는 어떤 함수를 객체의 메서드로서 호출할 때는 메서드를 호출한 객체가 this에 바인딩되기 때문입니다. 즉, 전자는 `person.__proto__`가 this에 바인딩되고, 후자는 `person`이 this에 바인딩됩니다. 따라서 인스턴스를 this에 바인딩하기 위해선 `__proto__`를 생략하고 인스턴스에서 곧바로 메서드를 호출하면 됩니다.

this 바인딩에 대해선 다음 링크에서 확인하실 수 있습니다.

<a href="../javascript-this" target="_blank">자바스크립트 this | 노현진's Blog</a>

### constructor 프로퍼티

생성자 함수의 프로퍼티인 `prototype` 객체 내부에는 `constructor`라는 프로퍼티가 있습니다. 해당 프로퍼티는 생성자 함수 자신을 가리킵니다. `constructor` 프로퍼티는 인스턴스가 자신의 생성자 함수가 무엇인지를 알고자 할 때 필요한 수단입니다.

<img src="/assets/img/cs/prototype/pic3.avif" alt="prototype 객체 내부에는 constructor라는 프로퍼티가 존재합니다." />

인스턴스의 `__proto__`가 생성자 함수의 `prototype` 프로퍼티를 참조하므로 위의 코드와 같이 `[인스턴스].constructor`로도 직접 `constructor`에 접근할 수 있습니다.

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

또한 `constructor`는 읽기 전용 속성이 부여된 예외적인 경우(number, string, boolean)를 제외하고는 값을 바꿀 수 있습니다. 이 때 constructor를 변경하더라도 참조하는 대상이 변경될 뿐 이미 만들어진 인스턴스의 원형이 바뀌거나 데이터 타입이 변경되지는 않습니다.

<img src="/assets/img/cs/prototype/pic2.avif" alt="constructor를 변경하더라도 참조하는 대상이 변경될 뿐 이미 만들어진 인스턴스의 원형이 바뀌거나 데이터 타입이 변경되지는 않습니다." />

### 메서드 오버라이드

자바스크립트 엔진은 메서드를 찾을 때 가장 가까운 대상인 자신의 프로퍼티를 탐색하고, 없으면 그 다음으로 가까운 대상인 `__proto__`를 검색하는 순서로 진행합니다. 이런 특징을 활용한다면 다음과 같이 `prototype`에 정의된 메서드를 오버라이드할 수 있습니다.

```javascript
function Person(name) {
  this._name = name;
}

Person.prototype.getName = function () {
  return this._name;
};

const person = new Person("사람1");

console.log(person.getName()); // "사람1"

person.getName = function () {
  return `이름: ${this._name}`;
};

console.log(person.getName()); // "이름: 사람1"
```

만약 메서드 오버라이딩이 이뤄진 상황에서 prototype에 있는 메서드에 접근하려면 다음과 같이 `__proto__` 프로퍼티와 `call` 또는 `apply` 메서드를 사용하면 됩니다.

```javascript
/* ... */

console.log(person.__proto__.getName.call(person)); // "사람1"
```

### 프로토타입 체인 (Prototype Chain)

어떤 데이터의 `__proto__` 프로퍼티 내부에 다시 `__proto__` 프로퍼티가 연쇄적으로 이어진 것을 `프로토타입 체인(Prototype Chain)`이라고 합니다. 또한 이 체인을 따라가며 검색하는 것을 `프로토타입 체이닝(Prototype Chaining)`이라고 합니다. 어떤 메서드를 호출하면 자바스크립트 엔진은 데이터 자신의 프로퍼티들을 검색해서 원하는 메서드가 있으면 그 메서드를 실행하고, 없으면 `__proto__`를 검색해서 있으면 그 메서드를 실행하고, 없으면 다시 `__proto__`를 검색해서 실행합니다. 자바스크립트 데이터는 모두 프로토타입 체인 구조를 갖습니다.

아래 코드에서 arr 변수는 배열이므로 `arr.__proto__`는 `Array.prototype`을 참조하고, `Array.prototype`은 객체이므로 `arr.__proto.__proto__`은 `Object.prototype`을 참조합니다. 그러므로 toString 메서드를 호출하더라도 `arr._proto__.toString()`은 `Array.prototype`의 toString 메서드를 호출하고, `arr.__proto__.__proto__.toString()`은 `Object.prototype`의 toString 메서드를 호출합니다.

```javascript
const arr = [1, 2, 3];

console.log(arr.toString()); // 1,2,3
console.log(arr.__proto__.toString.call(arr)); // 1,2,3
console.log(Array.prototype.toString.call(arr)); // 1,2,3

console.log(arr.__proto__.__proto__.toString.call(arr)); // [object Array]
console.log(Object.prototype.toString.call(arr)); // [object Array]
```

어떤 생성자 함수이든 `prototype`은 반드시 객체이기 때문에 `Object.prototype`이 항상 프로토타입 체인의 최상단에 위치합니다. 즉, 다음과 같이 `Object.prototype`에 getFirst 메서드를 정의하는 경우 여러 타입의 변수에서 getFirst 메서드를 호출할 수 있습니다.

```javascript
Object.prototype.getFirst = function () {
  return this[0];
};

console.log(Object.prototype.__proto__); // null
console.log("123".getFirst()); // "1"
console.log([2, 3, 4].getFirst()); // 2
```

<blockquote class="prompt-info"><p><strong><u>Info.</u></strong><br>
string, number, boolean과 같은 원시값은 평소에는 객체가 아니지만, 프로퍼티나 메서드에 접근할 때 일시적으로 관련 래퍼 객체(String, Number, Boolean)으로 변환되어 프로토타입에 정의된 메서드를 사용할 수 있습니다.</p></blockquote>

## 참고 자료

- <a href="https://www.yes24.com/Product/Goods/78586788" target="_blank">코어 자바스크립트 - 예스 24</a>
- <a href="https://poiemaweb.com/js-prototype" target="_blank">Prototype | PoiemaWeb</a>
- <a href="https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Prototype-%EC%99%84%EC%A0%84-%EC%A0%95%EB%B3%B5-%E2%9D%97" target="_blank">[JS] 📚 프로토타입(Prototype) 개념 완전 정복 ❗</a>
