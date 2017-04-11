"use strict";

/**
 * 화살표 함수
 * 
 * ES6부터 => 연산자로 함수를 생성하는, 화살표 함수 (arrow function) 가 처음 생겼다.
 * 화살표 함수는 보다 간결한 구문을 지닌 익명 함수 (anonymous function) 다. 
 */
// let circleArea = (pi, r) => {
// 	let area = pi * r *r;
// 	return area;
// }
// let result = circleArea(3.14, 3);
// console.log(result);

// 문이 하나밖에 없는 화살표 함수는 {} 기호를 생략할 수 있다.
// let circleArea = (pi, r) => pi * r * r;
// let result = circleArea(3.14, 3);
// console.log(result);
// {} 가 없기 때무에 바디 내부의 문 값을 자동으로 반환한다.

/**
 * 화살표 함수에서의 this 값
 * 
 * 화살표 함수에서 this값은 해당 스코프(화살표 함수를 정의한 지점을 둘러싼 전역/함수의 스코프)의 this값과 같다.
 * 여타 함수에서 this가 콘텍스트 객체(context object, 해당 함수를 내부 프로퍼티로 소유한 객체)를 가리키는 것과는 대조적이다.
 * --> 	스코프(scope)와 콘텍스트(context)의 차이를 명확하게 구분해야한다.
 * 			스코프는 어떤 함수를 호출할 때마다 변수를 접근할 수 있는 범위이고,
 * 			콘텍스트는 현재 실행 중인 코드를 소유한 객체의 참조값, 즉 this 값을 말한다.
 */

// 일반 함수에서의 this
// var object = {
// 	f1: function() {
// 		console.log(this);
// 		var f2 = function() { console.log(this); }
// 		f2();
// 		setTimeout(f2, 1000);
// 	}
// }
// object.f1();

// arrow funtion
var object = {
	f1: () => {
		console.log(this);
		console.log(this === object);
		var f2 = () => { console.log(this); }
		f2();
		setTimeout(f2, 1000);
	}
}
object.f1();

console.log(global);

/**
 * 화살표 함수와 일반 함수의 차이점
 * 
 * 화살표 함수는 객체 생성자로 사용할 수 없다. 즉 new 연산자를 못 쓴다.
 * 화살표 함수는 Function 생성자의 인스턴스로, 구문, this 값, new 연산자를 제외하면 차이점이 없다. 
 */