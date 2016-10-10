"use strict";

/**
 * 강화된 객체 리터럴
 * ES6는 객체 리터럴로 프로퍼티를 생성하는 새로운 구문을 제공한다.
 */

/**
 * 프로퍼티 정의
 * ES6부터 변수명과 동일한 이름을 가진 객체 프로퍼티에 간편하게 값을 할당할 수 있게 됐다.
 */
// at ES5
// var x = 1, y = 2;
// var object = {
// 	x: x,
// 	y: y
// };
// console.log(object.x, object.y);

// ES6
// let x = 1, y = 2;
// let object = {x, y};
// console.log(object.x, object.y);


/**
 * 메소드 정의
 */
// let object = {
// 	myFunction() {
// 		console.log("Hello!!");
// 	}
// }
// object.myFunction();
// 간결해진 구문 덕분에 객체 메소드에서 사용할 수 없었던 super를 쓸 수 있게 됐다....?

/**
 * 조합 프로퍼티명
 * computed property name
 * 런타임 시점에 프로퍼티명을 조합한 것으로, 표현식의 동적 계산 결과를 프로퍼티명으로 쓴다.
 */
// ES5 이전 
// var object = {};
// object["first"+"Name"] = "수지";	// firstName 이 프로퍼티명
// console.log(object["first"+"Name"]);
// 객체 생성 후 프로퍼티를 덧붙이는 식

//ES6 : 객체 생성과 동시에 조합한 이름의 프로퍼티를 추가할 수 있다.
let object = {
	["first" + "Name"]: "수지",
};
console.log(object["first"+"Name"]);