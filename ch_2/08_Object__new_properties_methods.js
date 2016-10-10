"use strict";
// TODO: 나중에 다시 보기
/**
 * Object 	new properties, methods
 */


/**
 * __proto__ property
 * 
 * 자바스크립트 객체는 프로토타입(prototype), 즉 자신이 상속한 객체를 참조하기 위해 내부에
 * prototype 프로퍼티를 둔다. prototype 은 직접 읽거나 수정 할 수 없는 이유로
 * 이 값을 읽으러면 Object.getPrototypeOf() 메소드를 이용하고
 * 동일한 prototype 새 객체를 생성하려면 Object.create() 메소드를 이용해야만 했다.
 * 
 * prototype 은 다루기 까다로운 프로퍼티라서 일부 브라우저는
 * __proto__ 라는 특별한 프로퍼티를 객체에 두어 밖에서도 접근할 수 있게 했고
 * 덕분에 한결 프로토타입을 다루기가 수월해졌다.
 * ES6에서 표준으로 채택.
 */

// ES5 이전 prototype 예제
console.log('----------------------- __proto__');
var x = {x: 12};
var y = Object.create(x, {y: {value: 13}});
// var y = {x: x.x, y:13}

console.log(y.x);
console.log(y.y);

console.log(Object.getPrototypeOf(y));
console.log(y.__proto__);

// ES6 이후
let a = {a: 12, __proto__: {b: 13}};
console.log(a.a);
console.log(a.b);
console.log(a.__proto__);
console.log(Object.getPrototypeOf(a));


/**
 * Objext.is(value1, value2) methods
 * 
 * 두 값의 동등 여부를 판단한다.
 * === 연산자와 비슷하지만 그렇지 않은 경우도 있다.
 */
console.log('----------------------- Object.is');
console.log(Object.is(0, -0));
console.log(0 === -0);
console.log(Object.is(NaN, 0/0));
console.log(NaN === 0/0);
console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);


/**
 * Object.setPrototypeOf(object, prototype) method
 */
console.log('----------------------- Object.setPrototypeOf');
let t = {t: 12};
let r = {r: 13};

Object.setPrototypeOf(r, t);

console.log(r);
console.log(r.t);
console.log(r.r);


/**
 * Object.assign(targetObj, sourceObjs...) method
 * 
 * 하나, 또는 그 이상의 소스 객체에서 모든 열거 가능한 자기 프로퍼티들을 타깃 객체로 복하사고 이 타깃 객체를 반환한다.
 */
console.log('----------------------- Object.assign');
let l = {l: 12};
let m = {m: 13, __proto__: l};
let n = {n: 14, get b() {return 2;}, p: {}};

Object.defineProperty(n, 'n', {enumerable: false});

let o = {};

Object.assign(o, m, n);

// console.log(l, m, n, o);
console.log(o.m);
console.log(o.n);
console.log(o.b);
console.log(o.l);
console.log(o.p == n.p);

/**
 * Object.assign() 사용 시 유의사항.
 * 
 * - 소스의 게터 (getter), 타깃의 세터 (setter)를 호출한다.
 * - 소스 프로퍼티 값을 타깃 객체의 새로운, 또는 이미 존재하는 프로퍼티에 할당하는 기능이 전부다.
 * - 소스의 prototype 프로퍼티는 복사하지 않는다.
 * - 자바스크립트에서 프로퍼티명은 문자열 아니면 심볼인데 Object.assign()은 둘 다 복사한다.
 * - 소스의 프로퍼티 정의부는 복사되지 않으므로 필요 시 Object.getOwnPropertyDescriptor(), Object.defineProperty()를 대신 사용한다.
 * - null 또는 undefined 값인 키는 복사하지 않고 건너뛴다.
 */