"use strict";

/**
 * Collection
 * 
 * 콜렉션은 원소 여러 개를 모아놓은 객체로, ES6에서 데이터를 저장/조직하는 더욱 개선된 다수의 콜렉션 객체가 새로 추가됐다.
 * 예전엔 배열이 유일한 콜렉션 객체였지만, 배열 버퍼, 타입화 배열, 세트, 맵 등 가짓수가 늘었다.
 */


/**
 * Set 세트
 * 
 * 세트는 타입에 상관없이 '유일한' 값을 담은 콜렉션으로 원소들은 삽입한 순서대로 정렬된다.
 * 다음과 같이 Set 생성자로 만든다.
 */
console.log('-------------------- Set');
let set1 = new Set();
let set2 = new Set("Hello");
/**
 * set1 은 빈 세트지만 set2는 이터러블 객체의 값, 즉 비어 잇지 않은 문자열의 문자로 생성했으므로 빈 세트가 아니다.
 * 세트로 할 수 있는 일
 */
set2.add(12);
console.log(set2.has("e"));	// 값이 존재하는지 확인
console.log(set2.size);

set2.delete(12);	// 12를 삭제

console.log(...set2);	// H e l o --> 중복되는 값을 삭제해버린다.

set2.clear();	// 모든 값을 삭제
/**
 * 세트에서 중복값은 자동 삭제된다. (생성 시)
 * 세트도 이터러블 규약을 따르므로 이터러블 객체로 사용할 수 있다.
 * 
 * 세트는 어떤 값을 조회하는 용도보다는 조재 여부를 확인하기 위해 값을 묶어둘 때 사용한다.
 * 어떤 값이 있는지 알아보려고 indexOf() 메소드를 사용하는 경우라면 배열보다는 세트가 더 적합하다.
 */


/**
 * WeakSet 위크 세트
 * 
 * 세트와 위크세트의 차이점
 * 
 * - 세트는 원시 타입(privitive type)과 객체 참조값 모두를 담을 수 있지만, 위크세트는 객체 참조값만 저장할 수 있다.
 * - 가장 주목할 만한 위크세트 객체의 특성은 내부에 저장된 객체를 참조하는 값이 없을 땐 가비지 콜렉션 대상이 된다는 점이다.
 * - 위크세트 객체는 열거할 수 없어서 크기를 알 수 없고 이터러블 규약을 따르지 않는다.
 */
console.log('-------------------- WeakSet');
let weakset = new WeakSet();

(function() {
	let a = {};
	weakset.add(a);
})()
//'a'는 위크세트에서 가비지 콜렉션 대상이다.
console.log(weakset.size);		// undefined
// console.log(...weakset);			// exception





/**
 * Map 맵
 * 
 * 맵은 키/값 쌍을 모아놓은 콜렉션으로 키/값의 타입은 제약이 없다.
 * 삽입한 순서대로 정렬되며 맵 객체는 Map생성자로 만든다.
 */
console.log('-------------------- Map');
let map = new Map();
let o = {};

map.set(o, 'A');
map.set("2", 9);

console.log(map.has("2"));
console.log(map.get(o));
console.log(...map);

map.delete("2");
map.clear();

// 이터러블 객체로부터 맵 생성
let map_1 = new Map([[1,2], [4,5]]);
console.log(map_1.size);
/**
 * 이터러블 객체에서 맵을 생성한 수, 이터러블 객체가 반환한 값이 배열인지, length가 2인지(즉, 인덱스 0은 키, 인덱스 1은 값인지) 확인한다.
 * 
 * 이미 존재하는 키를 추가하면 덮어쓴다.
 * 이터러블 규약을 따른다.
 * 맵을 순회하면 키/값 쌍을 가진 배열을 반환한다.
 */


/**
 * WeakMap 위크맵
 * 
 * 맵과 위크맵의 차이점
 * - 맵의 키는 원시 타입, 객체 참조값 모두 가능하지만 위크맵 키는 오직 객체 참조값만 가능하다.
 * - 가장 주요한 위크맵 객체의 특성은 내부에 저장된 객체를 참조하는 값이 없을 경우 가비지 콜렉션 대상이 된다는 사실.
 * - 위크맵 객체는 이터러블 규약ㅇ르 따르지 않는다. 크기를 알 수 없다.
 */
console.log('-------------------- WeakMap');
let weakmap = new WeakMap();

(function() {
	let o = {};
	weakmap.set(o, 'A');
})()
// 키 'o'는 가비지 콜렉션 대상이다.
console.log(weakmap.get(o));

let s = {m: 1};

weakmap.set(s, "B");

console.log(weakmap.get(s));
// console.log(...weakmap);	// exception

weakmap.delete(s);
// weakmap.clear();		// exception, weakmap에 이런 함수는 없다.

let weakmap_1 = new WeakMap([[{}, 2], [{}, 5]]);
console.log(weakmap_1.size); 	// undefined