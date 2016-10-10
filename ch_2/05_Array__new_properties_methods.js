"use strict";

/**
 * Array 새로운 프로퍼티, 메소드
 */

/**
 * Array.from(iterable, mapFunc, this) method
 * 
 * 이터러블 객체에서 새 배열 인스턴스를 생성하는 메소드.
 * 첫 번째 인자는 이터러블 객체,
 * 두 번째 선택 인자는 이터러블 객체의 각 원소를 상대로 호출할 콜백(map function).
 * 세 번째 선택 인자는 맵 함수 내부의 this 값을 각각 가리킨다.
 */
// console.log("--------------- Array.from");
// let str = "0123";
// let obj = {number: 1};
// let arr = Array.from(str, function(value) {
// 	return parseInt(value) + this.number;
// }, obj);
// console.log(arr);
// console.log("--------------- Array.from");


/**
 * Array.of(values...) method
 * 
 * 배열을 생성하는 Array 생성자의 대체 수단.
 * Array 생성자가 만드는 배열은 하나의 숫자 인자 값이 length 프로퍼티 값이 빈 배열이다.
 * Array.of()는 인자 값을 유일한 원소로 하는 배열을 생성한다.
 */
// console.log("--------------- Array.of");
// let arr1 = new Array(2);
// let arr2 = Array.of(2);
// console.log(arr1[0], "length:", arr1.length);
// console.log(arr2[0], "length:", arr2.length);
// console.log("--------------- Array.of");


/**
 * fill(value, startIndex, endIndex) method
 * 
 * startIndex 부터 endIndex 까지 (endIndex는 포함되지 않음) 주어진 값으로 배열 원소를 채운다.
 * startIndex, endIndex는 선택 인자로 비워두면 배열 전체를 가득 채운다.
 * startIndex만 넣으면 endIndex의 기본값은 배열 길이-1 이다.
 * startIndex가 음수이면 배열 길리 + startIndex로,
 * endIndex가 음수면 배열 길이 + endIndex로 간주한다.
 */
// console.log("--------------- fill");
// let arr1 = [1,2,3,4];
// let arr2 = [1,2,3,4];
// let arr3 = [1,2,3,4];
// let arr4 = [1,2,3,4];
// let arr5 = [1,2,3,4];

// arr1.fill(5);
// arr2.fill(5, 1, 2);
// arr3.fill(5, 1, 3);
// arr4.fill(5, -3, 2);
// arr5.fill(5, 0 ,-2);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);
// console.log("--------------- fill");


/**
 * find(testingFunc, this) method
 * 
 * 테스트 함수를 만족하는 배열 원소를 반환하며 만족하지 않을 땐 undefined를 내놓는다.
 * 
 * 첫 번째 인자는 테스트 함수,
 * 두 번째 선택 인자는 테스트 함수 내부의 this 값이다.
 * 
 * 테스트 함수의 첫 번째 파라미터는 대상 배열 원소,
 * 두 번째 파라미터는 처리 중인 현재 원소의 인덱스,
 * 세 번째 파라미터는 find()를 호출한 배열이다.
 * 
 * 체스트 함수를 만족하면 true를 반환하며, find() 메소드는 이 함수를 만족하는 첫 번째 원소를 찾는다.
 */
// console.log("--------------- find");
// var x = 12;
// var arr = [11, 12, 13];
// var result = arr.find(function(value, index, array) {
// 	if (value == this) {
// 		return true;
// 	}
// }, x);
// console.log(result);
// console.log("--------------- find");


/**
 * findIndex(testingFunc, this) method
 * 
 * find()와 비슷한 메소드로, 조건에 맞는 원소 대신 그 인덱스를 반환한다.
 */
// console.log("--------------- findIndex");
// let x = 12;
// let arr = [11,12,13];
// let result = arr.findIndex(function(value, index, array) {
// 	if (value == this) {
// 		return true;
// 	}
// }, x);
// console.log(result);
// console.log("--------------- findIndex");


/**
 * copyWithin(targetIndex, startIndex, endIndex) function
 * 
 * 배열값 무리를 다른 위치에 복사해 넣는다.
 * 
 * 첫 번째 인자는 원소를 복사할 타깃 인덱스,
 * 두 번째 인자는 복사를 시작할 인덱스,
 * 세 번째 선택 인자는 원소 복사가 끝나는 인덱스다.
 * 
 * 세 번째 인자를 비워두면 기본값은 lenght - 1 이다.
 * startIndex 가 음수면 length + startIndex, endIndex 가 음수면 length + endIndex 로 계산한다.
 */
console.log("--------------- copyWithin");
let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];
let arr3 = [1,2,3,4,5];
let arr4 = [1,2,3,4,5];

arr1.copyWithin(1, 2, 4);
arr2.copyWithin(0, 1);
arr3.copyWithin(1, -2);
arr4.copyWithin(1, -2, -1);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log("--------------- copyWithin");


/**
 * entries(), keys(), and values() method
 * 
 * entries() --> 배열 각 인덱스의 키/값 쌍을 가진 이터러블 객체를 반환 --> 배열 형태로 키/값 쌍을 갖고 있다.
 * keys() --> 각 인덱스 키를 담은 이터러블 객체를 반환
 * values() --> 각 값을 포함한 이터러블 객체를 반환 // node 6.7.0 not yet supported (11, Oct, 2016)
 */
console.log("--------------- entries(), keys(), values()");
let arr = ['a', 'b', 'c'];
let entries = arr.entries();
let keys = arr.keys();
// let values = arr.values();

console.log(...entries);
console.log(...keys);
// console.log(...values);
console.log("--------------- entries(), keys(), values()");