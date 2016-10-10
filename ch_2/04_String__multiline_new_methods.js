"use strict";
/**
 * String
 * 
 *  ** 자바스크립트 내부 캐릭터 인코딩과 이스케이프 무리
 * 유니코드 캐릭터 세트의 모든 캐릭터는 코드 포인트라는 10진수 숫자로 나타낸다.
 * 코드 유닛은 코드 포인트를 저장할 메모리상의 고정 비트 수를 말하여,
 * 인코딩 스키마에 따라 그 길이가 결정된다.
 * 이를 테면 UTF-8의 코드 유닛은 8비트, UTF-16이라면 16비트다.
 * 코드 유닛과 맞지 않는 코드 포인트는 여러 코드 유닛으로 쪼개진다.
 * 즉, 일련의 여러 캐릭터로 다른 캐릭터를 구성하는 것이다.
 * 
 * 자바스크립트 소스코드는 기본적으로 UTF-16 코드 유닛으로 표현한다.
 * 소스코드의 인코딩 스키마가 UTF-8이면 자바스크립트 엔징니 UTF-8 코드 유닛으로 해석하도록 지시한다.
 * 자바스크립트 문자열은 언제나 UTF-16 코드 포인트로 이루어진다.
 * 
 * 65536 이하 코드 포인트의 유니코드 캐릭터는 자바스크립트 문자열 또는 소스코드에서
 * 모두 해당 포인트 값(16진수) 앞에 \u를 붙여 이스케이프 할 수 있다.
 * 이스케이프 문자열은 6개의 캐릭터고 \u 다음에 반드시 4개의 캐릭터가 온다.
 * 16진수 캐릭터 코드가 하나밖에 없을 땐 두세 개 캐릭터 길이라서 앞에 0으로 패딩을 해야 한다.
 * ex)
 * 	var \u0061 = "\u0061\u0062\u0063";
 * 	console.log(a);	// "abc"
 */

/**
 * 비트가 초과된 코드 포인트를 이스케이프
 * 
 * ES5 이전엔 저장 공간이 16비트 이상인 캐릭터를 이스케이프하려면
 * 유니코드 2개가 필요했다. 예를들어, \u1F691을 문자열에 추가하려면 다음과 같이 이스케이프했었다.
 * console.log("\uD83#\uDE91");
 * 
 * \uD83D 와 \uDE91 처럼 다른 하나의 캐릭터를 ㅠㅛ현하기 위해 나란히 붙인 2개의 유니코드를
 * 서로게이트 페어(surrogate pair)라 한다.
 * 
 * ES6 부터는 서로게이트 페어 없이도 쓸 수 있다.
 */
console.log("\uD83D\uDE91");
console.log("\u{1F691}");
// \u1F691 를  \uD83D\uDE91 로 저장하므로 문자열 길이는 2다.


/**
 * codePointAt(index) method
 * 
 * 주어진 인덱스의 캐릭터에 해당하는 코드 포인트를 음이 아닌 정수로 반환한다.
 */
console.log("--------------- codePointAt");
console.log("\uD83D\uDE91".codePointAt(1));
console.log("\u{1F691}".codePointAt(1));
console.log("hello".codePointAt(2));
console.log("--------------- codePointAt");


/**
 * String.fromCodePoint(number1, ..., number2) method
 * 
 * 코드 포인트 뭉치를 입력받아 해당 문자열을 반환한다.
 */
console.log("--------------- String.fromCodePoint");
console.log(String.fromCodePoint(0x61, 0x62, 0x63));
console.log("\u0061\u0062" == String.fromCodePoint(0x61, 0x62));
console.log("--------------- String.fromCodePoint");


/**
 * repeat(count) method
 * 
 * 문자열을 원하는 개수만큼 복사하여 연결된 문자열을 반환하는 메소드
 */
console.log("--------------- repeat");
console.log("a".repeat(6));
console.log("--------------- repeat");


/**
 * includes(string, index) method
 * 
 * 주어진 문자열이 있는지 찾아보고 그 결과를 true/false 로 반환
 */
// 특정 위치 다음부터 찾고 싶으면 두 번째 선택 파라미터에 인덱스 값을 준다.
// console.log("--------------- includes");
// var str = "Hi, I'm Javascript developer";
// console.log(str.includes("Javascript"));
// console.log(str.includes("Javascript", 13));
// console.log("--------------- includes");

// /**
//  * startsWith(string, index) method
//  * 
//  * 주어진 문자열로 시작하는지 여부를 true/false로 반환
//  */
// // 특정 위치 다음부터 찾고 싶으면 두 번째 선택 파라미터에 인덱스 값을 준다.
// console.log("--------------- startsWith");
// var str = "Hi, I'm Javascript developer";
// console.log(str.startsWith("Hi"));
// console.log(str.startsWith("Javascript", 8));
// console.log("--------------- startsWith");


// /**
//  * endsWith(string, index) function
//  * 
//  * 주어진 문자열로 끝나는지 확인하는 메소드
//  */
// console.log("--------------- endsWith");
// var str = "Hi, I'm Javascript developer";
// console.log(str.endsWith("developer"));
// console.log(str.endsWith("develope", str.length-1));
// console.log("--------------- endsWith");


/**
 * 정규화 normalization
 * 
 * 문자열 의미를 고정한 채 코드 포인트를 검색하고 표준화하는 과장
 * NFC, NFD, NFKC, NFKD 등의 유형이 있다.
 */
// console.log("--------------- normalization");
// // 1.
// // 16비트로 저장하면서 서로게이트 페어로 나타낼 수 있는 유니코드는 상당히 많다.
// // 예컨대, e 캐릭터는 다음 두 가지 방법으로 이스케이프가 가능
// console.log("\u00E9");
// console.log("e\u0301", "\n");
// // 그런데, == 연산자로 비교하거나 length를 참조/순회 시 예기치 않은 결과가 나올 수 있다.
// var a = "\u00E9";
// var b = "e\u0301"; // surrogate pair
// console.log(a == b);
// console.log(a.length);
// console.log(b.length);

// for (let i=0; i<a.length; i++) {
// 	console.log(a[i]);
// }

// for (let i=0; i<b.length; i++) {
// 	console.log(b[i]);
// }
// length 프로퍼티는 서로게이트 페어를 무시하고 무조건 16비트를 하나의 캐릭터로 간주.
// -- 연산자 역시 2진수 단위로 비트수를 대조하므로 서로게이트 페어를 무시한다.
// [] 연산자도 매 16비트가 인덱스여서 마찬가지다.

// 문제를 해결하려면 서로게이트 페어를 16비트 캐릭터로 바꾸어야 하는데,
// 이때 정규화가 필요하다.
// ---> ES6 : normalize() 
// var a = "\u00E9".normalize();
// var b = "e\u0301".normalize();

// console.log(a == b);
// console.log(a.length);
// console.log(b.length);

// for (let i=0; i<a.length; i++) {
// 	console.log(a[i]);
// }

// for (let i=0; i<b.length; i++) {
// 	console.log(b[i]);
// }
// // normalize() 는 정규화한 문자열을 반환하며 NFC 형식을 기본으로 사용한다.
// // 서로게이트 페어는 정규화의 한 방법일 뿐 실제로 많은 다른 용도가 잇다.
// // ** 정규화된 문자열은 일반 사용자에게 보여줄 용도로 만드는게 아니다. 내부적인 문자열 비교/검색에만 쓰인다.
// // 참고 : http://www.unicode.org/reports/tr15/
// console.log("--------------- normalization");


/**
 * 템플릿 문자열
 * 
 * 템플릿 문자열은 문자열을 생성하는 새로운 리터럴.
 * 표현식/문자열 삽입, 여러 줄 문자열, 문자열 형식화, 문자열 태깅 등 다양한 기능을 제공
 * 런타임 시점에 일반 자바스크립트 문자열로 처리/변황되므로 그냥 문자열처럼 사용할 수 있다.
 */
console.log("--------------- template string");
let str1 = `Hello!!!`	// 템플릿 문자열
let str2 = "Hello!!!"
console.log(str1 === str2);
console.log("--------------- template string");

/**
 * 표현식
 * 
 * ES5 이전엔 표현식을 다음과 같이 일반 문자열 안에 집어넣었다.
 * var a = 20;
 * var b = 10;
 * var c = "javascript";
 * var str = "I'm " + (a + b) + "years old and love " + c;
 * console.log(str);
 * 
 * ES6 템플릿 문자열은 자체로 표현식을 가질 수 있기 때문에 문자열에 표현식을 쉽게 끼워 넣을 수 있다.
 * $ 와 {}로 표시한 자리끼움(placeholder) 위치에 표현식을 ${표현식} 형태로 넣는다.
 * 
 * 이 표현식의 귀결값(resolved value)으로 둘러싸인 텍스트는 함수로 전달되어
 * 템플릿 문자열은 일반 문자열로 치환된다.
 * 함수의 기본 기능은 조각들을 이어 붙여 하나의 문자열을 만드는 것이다.
 * 문자열 처리를 전담할 함수를 따로 정의하는 경우, 템플릿 문자열을 태그드 템플릿 문자열(tagged template string)이라고 하고
 * 문자열 처리 함수를 태그 함수(tag function)라고 부른다.
 */
// console.log("--------------- template string - regex");
let a = 20;
let b = 10;
let c = "자바스크립트";
// let str = `나는 ${a+b}살이고 ${c}를 좋아해`;
// console.log(str); 
// console.log("--------------- template string - regex");

/**
 * 태그 함수로 문자열을 처리하는 코드 - 태그드 템플릿 문자열
 */
let tag = function(strings, ...values) {
	console.log(strings);
	console.log(values);
	let result = "";
	for (let i=0; i<strings.length; i++) {
		result += strings[i];
		if (i<values.length) {
			result += values[i];
		}
	}
	return result;
}
// 이 함수는 파라미터 2개(첫 번째는 쳄플릿 문자열의 문자열 배렬 리터럴, 두 번째는 표현식의 귀결값 배열)를 받는다.
// 인자가 여러 개라서 두 번째 파라미터 자리에 나머지 파라미터를 썼다.

console.log("--------------- template string - tag function");
let str = tag `나는 ${a+b}살이고 ${c}를 좋아해`;
console.log(str);
console.log("--------------- template string - tag function");


/**
 * 여러 줄 문자열 multiline string
 * 
 * 여러 줄에 걸친 텍스트를 템플릿 문자열로 생성
 * 
 * ES5 이전엔 개행문자 \n 로 줄바꿈을 했었다.
 * console.log("1\n2\n3");
 */
// ES6 multiline string
console.log("--------------- template string - multiline");
console.log(`1
2
3`);
// 템플릿 문자열이 일반 문자열로 바뀔 때 개행 부분이 \n 으로 바뀐다.
console.log("--------------- template string - multiline");


/**
 * 원래 문자열 raw string
 * 
 * 이스케이프 문자를 해석하지 않은 일반 문자열이다.
 * String.raw 태그 함수를 이용하면 템플릿 문자열의 원래 모습이 나온다.
 */
console.log("--------------- template string - raw string");
let s = String.raw `xy\n${1+1}z`;
console.log(s);
// \n 은 개행 문자가 아닌, \ 과 n 이라는 두 문자로 취급되어 변수 s 의 길이는 6이다.

// 태그 함수를 만들어 원래 문자열을 반환하려면 첫 번째 인자의 raw 프로퍼티를 사용한다.
// 이 프로퍼티는 첫 번째 인자에 해당하는 문자열의 원래 모습을 담고 있는 배열이다.
let raw_tag = function(strings, ...values) {
	return strings.raw[0]
}

let raw_str = raw_tag `안녕 \n 하세요!!!`;
console.log(raw_str);
console.log("--------------- template string - raw string");