"use strict";

// TODO: 디버거 돌려볼 것

/**
 * Collection
 * 
 * 콜렉션은 원소 여러 개를 모아놓은 객체로, ES6에서 데이터를 저장/조직하는 더욱 개선된 다수의 콜렉션 객체가 새로 추가됐다.
 * 예전엔 배열이 유일한 콜렉션 객체였지만, 배열 버퍼, 타입화 배열, 세트, 맵 등 가짓수가 늘었다.
 */


/**
 * Array Buffer 배열 버퍼
 * 
 * 배열은 동적으로 계속 커질 수 있지만 실행 시간이 느려지고 메모리 점유율이 높아진다는 점이 문제다.
 * 계산량이 많고 대량 데이터가 오가는 애플리케이션이라면 큰 이슈가 될 수 있다.
 * 이런 까닭으로 배열 퍼퍼가 등장하게 되었다.
 * 
 * 배열 버퍼는 메모리 상의 8비트 블록 콜렉션이고 블록 하나가 배열 버퍼의 원소다.
 * 배열 버퍼의 크기는 생성 시 결정되므로 동적으로 커지지 않으며,
 * 숫자만 저장할 수 있고 처음에 모든 블록이 0으로 초기화된다. 
 * 
 * 배열 버퍼 객체는 ArrayBuffer 생성자로 만든다.
 */
console.log('----------------------- array buffer');
let buffer = new ArrayBuffer(80);
/**
 * 배열 버퍼 객체와 데이터 읽기/쓰기는 DataView 객체의 몫이다.
 * 숫자를 꼭 8비트로만 나타내야 하는 건 아니고 8, 16, 32, 64 비트로도 가능
 * 
 * DataView 객체를 생성해서 ArrayBuffer 객체에 읽기/쓰기 하는 과정
 * */
let view = new DataView(buffer);

view.setInt32(8, 22, false);

var number = view.getInt32(8, false);

console.log(number);		// 22;

/**
 * DataView 객체는 배열 버퍼 숫자를 읽고 배열 버퍼에 숫자를 쓰기 위한 메소드를 여럿 제공한다.
 * 여기서는 setInt32() 메소드로 주어진 숫자를 32비트로 저장했다.
 * 
 * DataView 객체의 메소드는 3개의 인자를 받는다.
 * 첫 번째 인자는 오프셋(offset), 즉 숫자를 써넣을 바이트,
 * 두 번째 인자는 저장할 숫자,
 * 세 번째 인자는 엔디안(endian)을 불린 타입으로 명시한다.(false == big endian)
 * 
 * 배열 버퍼 객체로부터 데이터를 읽는 DataView 객체의 메소드는 2개의 인자를 취한다.
 * 첫 번째는 오프셋,
 * 두 번째는 엔디안이다.
 * 
 * 이외에도 숫자를 쓰는 DataView 객체의 함수는 다음과 같은 것들이 잇다.
 * 
 * setInt8 : 8비트로 숫자를 저장. 부호 있는 정수를 받는다.(signed integer)
 * setUint8 : 8비트로 숫자를 저장. 부호 없는 정수를 받는다.(unsigned integer)
 * setInt16
 * setUint16
 * setInt32
 * setUint32
 * setFloat32 : 부호 있는 소수를 받는다.
 * setFloat64 : 부호 있는 소수를 받는다.
 * 
 * 다음은 숫자를 읽는 DataView 객체의 다른 함수들이다.
 * 
 * getInt8
 * getUint8
 * getInt16
 * getUint16
 * getInt32
 * getUint32
 * getFloat32
 * getFloat64
 */



/**
 * Typed Array 타입화 배열
 * 
 * 배열 버퍼는 쉬찮다. 배번 함수를 호출하서 읽기 쓰기를 해야한다.
 * 타입화 배열은 일반 배열을 다르는 것처럼 배열 버퍼 객체에 읽기/쓰기할 수 있게 해준다.
 * 
 * 배열 버퍼 객체의 wrapper 노릇을 하면서 데이터를 n비트 숫자의 무리처럼 취급한다.
 * (n 값은 타입화 배열 생성 시 결정)
 */
console.log('----------------------- typed array');
// var buffer = new ArrayBuffer(80);
var typed_array = new Float64Array(buffer);		// 64비트 소수 타입화 배열
typed_array[4] = 11;
console.log(typed_array.length);
console.log(typed_array[4]);

/**
 * 타입화 배열의 생성자
 * 
 * Int8Array
 * Uint8Array
 * Int16Array
 * Uint16Array
 * Int32Array
 * Float32Array
 * Float64Array
 * 
 * 타입화 배열은 자바스크립트 일반 배열의 메소드를 모두 갖고 있고 이터러블 객체로도 사용할 수 있다.
 */