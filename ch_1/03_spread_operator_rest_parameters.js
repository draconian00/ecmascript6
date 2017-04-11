'use strict';

/**
 * 파라미터 기본값
 */

// 기존엔 파라미터 값이 undefined이면 기본값을 할당하는 식으로 코딩...
// function myFunction(x, y, z) {
// 	x = x === undefined ? 1 : x;
// 	y = y === undefined ? 2 : y;
// 	z = z === undefined ? 3 : x;
// 	console.log(x, y, z);
// }
// myFunction(6, 7); // 실행 결과 6 7 3

// ES6 부터는 함수 선언시 파리미터의 기본값을 선언할 수 있다.
// node 5.11.1 에서는 error 6.0 이상으로 업그레이드 필요
// brew node -> uninstall / nvm node -> 6.7.0 install 완료
// function myFunction(x=1, y=2, z=3) {
// 	console.log(x, y, z);
// }
// myFunction(6, 7);

/**
 * 펼침 연산자
 *
 * spread operator => ...
 * 이터러블(iterable)은 ES6 이커러블 규약(iterable protocol)에 따라
 * 값을 여럿 가지며 개별 값을 순회 가능한 객체다. 대표적으로 배열.
 * */

/**
// ES5 이전에는 배역 값을 함수 인자로 넘기려면 함수의 apply() 내장 메소드를 이용할 수 밖에 없었다.
function myFunction(a, b) {
	return a + b;
}
var data = [1, 4];
var result = myFunction.apply(null, data);
console.log(result);
// apply()는 배열 값을 하나하나 꺼낸 다음 개별적인 함수 인자로 만들어 호출한다.
*/


/**
// ES6 펼침 연산자를 이용하면
function myFunction(a, b) {
	return a + b;
}
let data = [1, 4];
let result = myFunction(...data);
console.log(result);
// JavaScript 해석기는  ...data 를 먼저 1, 4로 치환한 다음 myFunction 함수를 호출한다.
// let result = myFunction(...data); -> let result = myFunction(1, 4);
// 펼침 연산자는 apply()메소드를 호출하지 않는다.
// 자바스크립트 실행 엔진이 이터레이션 규약에 따라 배열을 펼치는 것일 뿐, apply()와는 아무런 관련이 없다.
*/

/**
 * 펼침 연산자는 원소가 많이 나오는 곳이면 어디라도 활용할 수 있다.
 */

/*
// 배열 값을 다른 배열의 일부로 만듦.
let array1 = [2, 3, 4];
let array2 = [1, ...array1, 5, 6, 7];
// --> let array2 = [1,2,3,4,5,6,7];
console.log(array2);
*/

// 배열 값을 다른 배열에 밀어 넣기
/*
// ES5
var array1 = [2,3,4];
var array2 = [1];

Array.prototype.push.apply(array2, array1);

console.log(array2);
*/

/*
// ES6
let array1 = [2,3,4];
let array2 = [1];

array2.push(...array1);
// array2.push(2, 3, 4);
console.log(array2);
*/

/*
// 여러 배열 펼침
let array1 = [1],
		array2 = [2],
		array3 = [...array1, ...array2, ...[3, 4]],
		array4 = [5];

function myFunction(a, b, c, d, e) {
	return a + b + c + d + e;
}

let result = myFunction(...array3, ...array4);
console.log(result);
*/

/**
 * 나머지 파라미터
 *
 * 나머지 파라미터는 함수의 마지막 파라미터 앞에 ... 를 붙인 것으로 ,
 * 이름 붙은 파라미터 보다 함수 파라미터를 더 만힝 포함한 배열이다.
 *
 * 개수가 가변적인 함수 인자를 포착하는 용도로 쓴다.
 *
 * ES5 이전엔 arguments객체로 전달된 함수 인자를 꺼내 썼다. 이 객체는 배열은 아니지만 배열과 유사한 인터페이스를 제공한다.
 */

// ES5
// function myFunction(a, b) {
// 	// 함수가 받는 a, b 를 제외한 나머지 arguments들을 args 변수에 저장
// 	var args = Array.prototype.slice.call(arguments, myFunction.length);
// 	console.log(arguments);
// 	console.log(args);
// }
// myFunction(1,2,3,4,5);
// --> arguments = {'0':1, '1':2, '2':3, '3':4', '4':5}
// arguments 는 배열 객체가 아니라서 일단 배열로 바꾼 다음에야 배열 기능을 이용할 수 있지만

// ES6
/**
 *
 */
function myFunction(a, b, ...args) {
	console.log(args);
}
myFunction(1,2,3,4,5);
// ES6 나머지 파라미터는 그 자체가 배열이라 쉽고 편하게 사용할 수 있다.

