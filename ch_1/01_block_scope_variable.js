'use strict';
// Block-scoped declarations (let, const, function, class)
// not yet supported outside strict mode
// JSLint : 좀 더 엄격한 문법 검사를 시행? ... let, const 를 쓰려면 strict 모드를 선언해 주어야한다.
// 파일 전체에서 하거나, 특정 함수 안에서만 활성화 시킬 수도 있다.

// ES6 에서 let은 블록 스코프 변수를 선언하는 키워드, 선언과 동시에 값을 할당할 수 있다.

// 함수 스코프 변수 선언
// var => function scoped variable
// var 키워드로 선언한 변수는 함수 밖에서 선언 시, 전역 범위로, 함수 안에서 선언 시 함수 밖을 제외한 내부 어디서건 접근 가능.

/**
// 1.
var a = 12; // 전역 접근 가능

function myFunction() {
	console.log(a);

	var b = 13; // 함수 안에서 접근 가능

	if (true) {
		var c = 14; // 함수 안에서 접근 가능
		console.log(b);
	}

	console.log(c);
}
**/

/**
// 2.
// var 를 let 으로 바꾸면,
let a = 12; // 전역 접근 가능

function myFunction() {
	console.log(a);

	let b = 13; // 함수 안에서 접근 가능

	if (true) {
		let c = 14; // 'if' 문 안에서 접근 가능
		console.log(b);
	}

	console.log(c); // ERROR => ReferenceError: c is not defined
}
**/

/**
// 3.
// 변수 재선언
// 같은 스코프에서 이미 var로 선언한 변수를 다시 var로 선언하면 덮어쓴다.
var a = 0;
var a = 1;

console.log(a);

function myFunction() {
	var b = 2;
	var b = 3;

	console.log(b);
}
**/

/**
// 4.
// 변수 재선언
// let으로 선언한 변수를 다시 let으로 선언하면 TypeError 예외가 발생.
// SyntaxError: Identifier 'a' has already been declared
let a = 0;
let a = 1;	// TypeError

function myFunction() {
	let b = 2;
	let b = 3;	// TypeError

	if (true) {
		let c = 4;
		let c = 5;	// TypeError
	}
}
**/

// 5.
// 함수 안에서 접근 가능한 변수명과 동일한 이름을 가진 변수를 선언하면, 사용한 키워드에 따라 가리키는 대상이 달리진다.
var a = 1;
let b = 2;

/**
 * run function
 */
function myFunction() {
	var a = 3;	// 전역의 a 와 다른 변수
	let b = 4;	// 전역의 b 와 다른 변수

	if (true) {
		var a = 5;	// 함수 안의 a 에 덮어쓴다.
		let b = 6;	// 함수 안의 b 와 다른 변수.

		console.log(a);	// 함수 안의 a 출력 : 5
		console.log(b);	// if 안의 b 출력 : 6
	}

	console.log(a);	// 함수 안의 a 출력 : 5
	console.log(b);	// 함수 안의 b 출력 : 4
}

console.log(a);	// 전역의 a 출력 : 1
console.log(b);	// 전역의 b 출력 : 2

// exec.
myFunction();


/**
 * 결론
 * var 키워드와 let 키워드 중 어느 것을 사용해야 하는가...?
 * ES6 코드라면 let을 쓴다.
 * 버그의 확률도 낮추고 스코프를 착각할 일이 줄어든다.
 **/
