"use strict";

/**
 * Math
 * 
 * Math 객체에도 삼각, 산술 등의 연산 메소드가 대거 추가됐다.
 * 덕분에 외부 라이브러리를 쓰지 않아도 정확도가 높고 성능 면에서도 최적화된 내장 메소드를 사용할 수 있게 됏다.
 */


/**
 * 삼각 연산
 * sinh, cosh, tanh, asinh, acosh, atanh, hypot
 */
console.log('------------------------ 삼각 연산');
console.log(Math.sinh(0));					// 하이퍼볼릭 사인 값
console.log(Math.cosh(0));					// 하이퍼볼릭 코사인 값
console.log(Math.tanh(0));					// 하이퍼볼릭 탄젠트 값
console.log(Math.asinh(0));					// 역 하이퍼볼릭 사인 값
console.log(Math.acosh(1));					// 역 하이퍼볼릭 코사인 값
console.log(Math.atanh(0));					// 역 하이퍼볼릭 탄젠트 값
console.log(Math.hypot(2, 2, 1));		// 피타고라스 정리
console.log('------------------------ 삼각 연산');


/**
 * 산술 연산
 * log2, log10, log1p, expm1, cbrt
 */
console.log('------------------------ 산술 연산');
console.log(Math.log2(16));			// 2를 밑으로 한 로그
console.log(Math.log10(1000));	// 10을 밑으로 한 로그
console.log(Math.log1p(0));			// log(1 + value)와 동일
console.log(Math.expm1(0));			// Math.log1p(0)의 역
console.log(Math.cbrt(8));			// 세제곱근 값
console.log('------------------------ 산술 연산');


/**
 * 기타 메소드
 */

/**
 * Math.imul(number1, number2)
 * 
 * Math.imul() 함수는 32비트 정수 2개를 받아 곱한 결괏값의 하위 32비트를 반환한다.
 * 자바스크립트에서 32비트 정수 곱셈을 할 수 있는 유일한 방법.
 */
console.log('------------------------ Math.imul');
console.log(Math.imul(590, 5000000));		// 32비트 정수 곱셈
console.log(590 * 5000000);							// 64비트 부동 소수점 곰셈
console.log('------------------------ Math.imul');
// 곰셈 결과 큰 수치는 32비트로 저장할 수 없으므로 하위 비트느 소실된다.

/**
 * Math.clz32(number)
 * 
 * 32비트 숫자의 전치 제로 비트(leading zero bit)를 반환한다.
 */
console.log('------------------------ Math.clz32');
console.log(Math.clz32(7));
console.log(Math.clz32(1000));
console.log(Math.clz32(295000000));
console.log('------------------------ Math.clz32');

/**
 * Math.sign(number)
 * 
 * 주어진 숫자가 음수, 양수, 9인지 반환
 */
console.log('------------------------ Math.sign');
console.log(Math.sign(11));
console.log(Math.sign(-11));
console.log(Math.sign(0));
console.log('------------------------ Math.sign');

/**
 * Math.trunc(number)
 * 
 * 가수부를 덜어낸 정수부 숫자만 반환한다.
 */
console.log('------------------------ Math.trunc');
console.log(Math.trunc(11.17));
console.log(Math.trunc(-1.112));
console.log('------------------------ Math.trunc');

/**
 * Math.fround(number)
 * 
 * 32비트 부동 소수점 값으로 반올림하는 함수
 */
console.log('------------------------ Math.fround');
console.log(Math.fround(0));
console.log(Math.fround(1));
console.log(Math.fround(1.137));
console.log(Math.fround(1.5));
console.log('------------------------ Math.fround');