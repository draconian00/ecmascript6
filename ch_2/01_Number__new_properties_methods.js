"use strict";

/**
 * Number
 * 
 * ES6부터 새로운 숫자 생성 방식과 Number 객체의 새 프로퍼티 덕부넹 더 쉽게 숫자를 다룰 수 있게 됐다.
 * 강화된 Number 객체를 이용하여 수학 계산 위주의 애플리케이션을 쉽게 작성하고 에러를 유발하던 헷갈리는 부분을 바로 잡을 수 있다. 
 */



/**
 * Number.inInteger(number) method
 * 
 * 자바스크립트는 모든 숫자를 64비트 부동 소수점 형태로 저장, 정수는 소수점이 없는, 즉 소수점이 0인 부동 소수점 숫자다.
 * ES6부터 Number.isInteger() 라는 새 메소드로 인자의 정수여부를 true / false 로 반환받는다.
 */
// let a = 17.0;
// let b = 1.2;
// console.log(Number.isInteger(a));	// true
// console.log(Number.isInteger(b));	// false


/**
 * Number.isNaN(value) method
 * 
 * 어떤 변수가 NaN인지 판단하는 일은 지금가지 불가능했다.
 * 전역 isNaN() 함수는 숫자 여부를 판별한다. 숫자 아닌 값은 true, 그 외엔 false 를 반환
 */
// let a = "NaN";
// let b = NaN;
// let c = "Hello";
// let d = 12;

// console.log(Number.isNaN(a));	// false
// console.log(Number.isNaN(b));	// true
// console.log(Number.isNaN(c));	// false
// console.log(Number.isNaN(d));	// false
// console.log('--------------------------------------------');
// console.log(isNaN(a));	// true
// console.log(isNaN(b));	// true
// console.log(isNaN(c));	// true
// console.log(isNaN(d));	// false
/**
 * Number.isNaN() 메소드는 정확이 NaN일 경우에만 true 를 반환한다.
 * **
 * NaN는 자기 자신과도 동등하지 않은 유일무이한 값
 * NaN == NaN, NaN === NaN 은 모두 false 다.
 * **
 */



/**
 * Number.isFinite(number) method
 * 
 * 전역 isFinite() 함소는 유한 숫자 여부를 체크하지만 Number 타입으로 변환된 값들까지 true 를 반환한다.
 */
// console.log(isFinite(10));		// true
// console.log(isFinite(NaN));		// false
// console.log(isFinite(null));	// true --> null Number type?
// console.log(isFinite([]));		// true --> [] Number 타입?
// console.log(typeof([]), typeof(null));	// object, object....?
// console.log('--------------------------------------------');
// console.log(Number.isFinite(10));		// true
// console.log(Number.isFinite(NaN));	// false	
// console.log(Number.isFinite(null));	// false
// console.log(Number.isFinite([]));		// false



/**
 * Number.isSafeInteger(number) method
 * 
 * 자바스크립트 숫자는 IEEE 754 국제 표준에 따라 64비트 부동 소수점 숫자로 저장.
 * 숫자(가수부 fraction)는 0~51비트, 지수부(exponent)는 52~62비트, 그리고 부호는 마지막 비트에 위치한다.
 * 
 * 자바스크립트에서 안전정수(safe integer)란 IEEE 754 규격에 맞게 다른 정수로 반올림하지 않아도 되는 숫자로,
 * 수학적으로는 -(2^53 - 1) ~ (2^53 - 1) 범위의 숫자다.
 */
// console.log(Number.isSafeInteger(156));													// true
// console.log(Number.isSafeInteger('1212'));											// false
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));			// true		-->	(2^53 - 1)
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));	// false
// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));			// true		-->	-(2^53 - 1)
// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));	// false



/**
 * Number.EPSILON property
 * 
 * 자바스크립트는 컴퓨터가 정확히 나타낼 수 없는 0.1, 0.2 같은 숫자를 이진부동 소수점 방식으로 표현한다.
 * 0.1 같은 숫자는 가장 근사한 숫자로 반올림되는 탓에 결괏값은 미세한 반올림 오차만큼 차이가 날 수밖에 없다.
 */
console.log(0.1 + 0.2 == 0.3);	// false
console.log(0.9 - 0.8 == 0.1);	// false
console.log(0.1 + 0.2);					// 0.30000000000000004
console.log(0.9 - 0.8);					// 0.09999999999999998
// ES6의 Number.EPSILON 프로퍼티는 약 2^-52로, 부동 소수점 숫자와 비교 시 이치에 맞는 에러 한계치(margin of error)를 나타낸다.
// 이 숫자 이내의 미새한 반올림 오차는 무시하고 부동 소수점 숫자를 비교하는 함수를 만들어 쓸 수 있다.
function epsilonEqual(a, b) {	//두 값의 동등 여부를 비교하는 함수.
	return Math.abs(a - b) < Number.EPSILON;
}
console.log(epsilonEqual(0.1 + 0.2, 0.3));	// true
console.log(epsilonEqual(0.9 - 0.8, 0.1));	// true