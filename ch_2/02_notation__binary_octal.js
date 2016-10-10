"use strict";

/**
 * Binary 2진수
 * 
 * 자바스크립트만으로 숫자 상수를 2진수로 나타낼 방법은 없었다.
 * ES6부터는 숫자 상수앞에 0b 를 붙이면 자바스크립트 엔진이 2진수로 처리한다.
 */
// let a = 0b00001111;	// 15(2)
// let b = 15;

// console.log(a === b);
// console.log(a);

/** 
 * Octal 8진수
 * 
 * ES5 이전엔 숫자 상수를 앞에 0을 붙여 8진수로 표기했었다.
 * 
// var a = 017;	// 15(8)
// var b = 15;
// console.log(a === b);
// console.log(a);
 */

// ES6 --> 0o 로 8진수 표기
// let a = 0o17;	// 15(8)
// let b = 15;
// console.log(a === b);
// console.log(a);