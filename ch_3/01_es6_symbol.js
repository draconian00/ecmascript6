'use strict';
/**
 * ES6 Symbol
 * 2017.04.18
 */

function symbolBasic() {
  // 심볼값은 유일하며 변경할 수 없다.
  var s = Symbol();
  // 심볼은 리터럴 형식이 없과 Symbol() 함수로 생성한다. 이 함수는 호출할 때마다 유일한 심볼을 반환.

  let s1 = Symbol("my symbol");
  let s2 = Symbol("my symbol");
  console.log(s1 === s2); // false
  // 심볼에 관한 서술 문자열을 Symbole()에 선택 인자로 줄 수 있다.
  // 심볼 자체에 접근하려는 의도는 아니고 단지 디버깅 용이다.
  // 서술이 동일하다고해서 심볼이 동일한게 아니다.

  // 심볼은 다른 어느 값과도 충돌하지 않는 일종의 문자열 값이다.

  console.log(typeof s);  // symbol

  // Symbol()에 new 연산자는 못 쓴다. 이 함수는 자신이 생성자로 사용된 것을 감지하면 예외를 던진다.
  try {
    let s3 = new Symbol();  // TypeError
  } catch(e) {
    console.log(e.message); // Symbol is not a constructor
    // s3는 정의되지 않았다.
  }
  // 그러나 자바스트립트 엔진은 내부적으로 객체의 심볼을 감싸기 위해 Symbol() 함수를 생성자로 사용한다. 즉 s3 는 Object(s3) 와 같다???
  // TODO: 이해 안됨...ㅠ
  // ** ES6부터는 규정 상 모든 원시 타입 생성자를 임의로 호출할 수 없다.
}
// symbolBasic();

function symbolAsPropertyKey() {
  /**
   * 2017.04.18
   * 심볼을 프로퍼티 키로 사용
   * 자바스트립트에서 객체의 프로퍼티 키는 보통 문자열 타입이었지만, ES6부터는 문자열과 심볼 둘 다 가능하다.
   */

  let obj = null;
  let s1 = null;

  (function() {
    let s2 = Symbol();
    s1 = s2;
    obj = {[s2]: "My Symbol"};
    console.log(obj[s2]);
    console.log(obj[s2] == obj[s1]);
  }) ();

  console.log(obj[s1]);
  // ES6 심볼이 등장한 가장 중요한 이유가 바로 개체 프로퍼티 키로 사용해서 예기치 않게 프로퍼티 키와 충돌하는 일을 방지하는 것이다.
}
// symbolAsPropertyKey();

function getSymbols() {
  // Object.getOwnPropertyNames() 로는 신볼 프로퍼티를 조회할 수 없기 때문에 객체의 심볼 프로퍼티를 배열로 가져오는
  // Object.getOwnPropertySymbols() 메소드가 고안됐다.
  let obj = {a: 12};
  let s1 = Symbol("My Symbol s1");
  let s2 = Symbol("My Symbol s2");

  Object.defineProperty(obj, s1, {
    enumerable: false
  });

  obj[s2] = "";

  console.log(Object.getOwnPropertyNames(obj));
  console.log(Object.getOwnPropertySymbols(obj));

  // for...in 루프, Object.getOwnPropertyNames()로는 하위 호환성 보장 때문에 객체에서 심볼 프로퍼티를 찾을 수 없지만
  // in 연산자로는 가능하다.
  console.log(obj[s1]);
  console.log(obj[s2]);
  console.log(obj);
}
// getSymbols();

function symbolFor() {
  /**
   * Symbol.for(string) method
   * 
   * symbol 객체는 키/값 쌍의 레지스트리를 갖고 있다. (키는 심볼 서술, 값은 심볼이다.)
   * Symbol.for()로 심볼을 찍어낼 때마다 레지스트리에 추가되고 이 메소드는 심볼을 반환한다.
   * 이미 존재하는 서술로 심볼을 생성하면 기존 심볼을 그대로 반환한다.
   * Symbol.for()는 항상 전역 범위의 심볼을 생성하므로 Symbol() 보다 낫다.
   */

  let obj = {};

  (function() {
    let s1 = Symbol("name");
    obj[s1] = "수지";
  })();
  // 여기서 obj[s1]은 접근 불가.
  // console.log(obj[s1]);  // s1 is not defined
  console.log(obj[Symbol("name")]);  // undefined
  console.log(obj[Symbol.for("name")]);  // undefined

  (function() {
    let s2 = Symbol.for("age");
    obj[s2] = 27;
  })();

  console.log(obj[Symbol.for("age")]);  // 27
  // console.log(obj[s2]);  // s2 is not defined
}
// symbolFor();

function wellKnownSymbol() {
  /**
   * ES6 에는 상용 심볼(well-known symbol)이라는 내장 심볼 세트가 준비되어 있어서 꼭 직접 만들어 쓰지 않아도 된다.
   * 
   * 많이 쓰는 사용 심볼
   * Symbol.iterator
   * Symbol.match
   * Symbol.search
   * Symbol.replace
   * Symbol.split
   * Symbol.hasInstance
   * Symbol.species
   * Symbol.unscopables
   * Symbol.isConcatSpreadable
   * Symbol.toPrimitive
   * Symbol.toStringTag
   * 
   * 상용 심볼은 보통 앞에 @@를 붙여 표기한다.(ex. Symbol.iterator --> @@iterator)
   */
  let s1 = Symbol.iterator
  console.log(s1);
}
wellKnownSymbol();