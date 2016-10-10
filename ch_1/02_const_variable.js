"use strict";

// const 키워드
// 값을 다시 할당할 수 없는 상수를 선언

// ES6 이전에는 변수명 앞에 어떤 문자열을 붙여 상수처럼 보이게 했다.
// var const_pi = 3.14;
// var r = 2;
// console.log(const_pi * r * r);
// 하지만 이러한 변수는 고칠 수 없게 막을 수 없으므로 완전한 상수가 아니다.

// 다음과 같이 코딩하여 상수를 선언할 수 있다.
// const pi = 3.141;
// var r = 2;
// console.log(pi * r * r);

// pi = 12; // 읽기 전용 예외 발생 => TypeError: Assignment to constant variable.

/******
// 1.
// 상수는 블록 스코프 변수라 let으로 선언한 변수와 스코프 규칙은 같다.
const a = 12;	// 전역 접근 가능

function myFunction() {
	console.log(a);

	const b = 13;	// 함수 안에서 접근 가능
	
	if (true) {
		const c = 14;	// 'if' 문 안에서 접근 가능
		console.log(b);
	}

	console.log(c); // Error => ReferenceError: c is not defined
}
*****/

// 2.
// 상수를 통한 객체 참조
// 변수에 객체를 할당하면 객체 자신이 아닌, 참조값(reference)이  저장되므로 상수에 객체를 할당하면 이객체의 참조값은 객체가 아닌, 상수에 대해 고정된다.
// 객체는 가변(mutable) 상태다.
const a = {
	'name': '민호'
};

console.log(a.name);

a.name = '수지';

console.log(a.name);

a = {}; // 읽기 전용 예외 발생 => TypeError: Assignment to constant variable.
// 변수 a는 객체의 주소, 즉 참조값을 담고 있으므로 불변값이지만 객체 자신은 얼마든지 변경할 수 있다.
// 다른 객체를 a에 할당하면 a값을 바꾸려는 시도라 예외가 발생한다.

// exec.
// myFunction();