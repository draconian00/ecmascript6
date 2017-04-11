'use strict';

/**
 * 해체 할당 destructing assignment
 *
 * 이터러블이나 객체의 값/프로퍼티를 각각 배열이나 객체 생성자 리러털과 비슷한 구문으로 변수에 할당하는 표현식
 * 단축 구문을 사용해서 이터러블/객체로부터 데이터를 추출할 수 있다.
 *
 * 배열 해체 할당과 객체 해체 할당 두가지 유형이 있다.
 */

/**
 * 배열 해체 할당 array destructing assignment
 * 이터러블 객체에서 값을 추출하여 변수에 할당한다. 배열 생성 리터럴과 닮은꼴
 */
// var myArray = [1, 2, 3];
// ES5
// var a = myArray[0];
// var b = myArray[1];
// var c = myArray[2];
// 단순히 배열 값을 한식 뽑아 a, b, c에 할당

// ES6
// let a, b, c;
// [a, b, c] = myArray; // array destructing assignment
												// [a, b, c] 가 배열 해체 표현식
// let [a, b, c] = [1, 2, 3];
// let [a, b, c] = myArray;
// console.log(a, b, c);
// 변수가 배열 원소보다 적을 경우 뒷부분 변수는 무시한다.
// 해체 할당문 우변에 이터러블 아닌 객체가 오면 TypeError 예외가 발생

/**
 * 이터러블 값에서 할당 없이 건너뛰어야 할 때
 */
// let [a, , b] = [1, 2, 3];
// console.log(a);	// 1
// console.log(b);	// 3


/**
 * 배열 해체 할당에 나머지 연산자(rest operator)를 사용
 */
// let [a, ...b] = [1,2,3,4,5,6];
// console.log(a);	// 1
// console.log(Array.isArray(b));	// true
// console.log(b);	// [2,3,4,5,6]

/**
 * 나머지 연산자를 쓰면서 이터러블 값을 건너뛴 예제
 */
// let [a, , , ...b] = [1,2,3,4,5,6];
// console.log(a);	// 1;
// console.log(b);	// [4,5,6]

/**
 * 변수의 기본값
 *
 * 해체 할당이 안 된 변수의 기본값을 undefined 이외의 값으로 지정할 수 있다.
 */
// let [a, b, c = 3] = [1, 2];
// console.log(c);	// 3;

/**
 * 중첩 배열 해체
 *
 * 다차원 배열에서 값을 꺼내어 해체 할당하는 예제이다.
 */
// let [a, b, [c, d]] = [1, 2, [3, 4]];
// console.log(a, b, c, d);

/**
 * 파라미터로 배열 해체 할당 사용
 *
 * 해체 할당 표현식을 함수 파라미터 자리에 넣으면 함수에 넘긴 이터러블 객체 값을 추출할 수 있다.
 */
// function myFunction([a, b, c = 3]) {
// 	console.log(a, b, c);
// }
// myFunction([1, 2]);	// 1 2 3;

// 인자가 undefined 일 때  다음고 ㅏ같이 기본 배열을 지정할 수 있다.
// function myFunction([a, b, c = 3] = [1, 2, 3]) {
// 	console.log(a, b, c);
// }
// myFunction(undefined);


/**
 * 객체 해체 할당
 *
 * 객체 프로퍼티 값을 추출해서 변수에 할당한다.
 */
// ES5
// var object = {"name": "민호", "age": 23};
// var name = object.name;
// var age = object.age;

// ES6
// let object = {"name":"민호", "age":23};
// let name, age;
// ({name, age} = object);	// 배열 해체 할당
												// 객체 해체 할당문 좌변에 객체 리터럴 형식으로 할당할 변수를 열거하고\
												// 우변에 프로퍼티를 추출할 객체를 놓은 다음 전체 문을 ()로 감싼다.
												// 객체 프로퍼티명과 변수명은 반드시 같아야 한다.
// 변수명을 달리 하고 싶을 땐 다음처럼 한다.
// let object = {"name":"민호", "age":23};
// let x, y;
// ({name: x, age:y} = object);
// console.log(x, y);

// 더 짧게 줄이면
// let {name: x, age: y} = {"name": "민호", "age": 23};

/**
 * 변수의 기본값
 * 객체 프로퍼티가 undefined 일 경우에는 변수에 기본값을 준다.
 */
// let {a, b, c = 3} = {a: 1, b: 2};
// console.log(c);	// 3;

/**
 * 조합 프로퍼티명을 해체
 * 프로퍼티명을 동적으로 조합할 경우 표현식을 []로 감싼다.
 */
// let {["first"+"Name"]: x} = {firstName: "수지"};
// console.log(x);

/**
 * 중첩 객체를 해체
 * 객체 속 객체의 프로퍼티는 다음과 같이 추출
 */
// var {name, otherInfo: {age}} = {name: '수지', otherInfo: {age: 23}};
// console.log(name, age);

/**
 * 파라미터로 객체 해체 할당 사용
 */
function myFunction({name='수지', age=23, profession='연예인'} = {}) {
	console.log(name, age, profession);
}
myFunction({name:'민호', age:23});
// myFunction에 undefined를 넘겨 호출하면 기본 객체로 지정한 빈 객체를 인자값으로 사용한다.