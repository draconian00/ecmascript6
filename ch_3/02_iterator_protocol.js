'use strict';
/**
 * 2017.04.25
 * 
 * Iteration Protocol
 *  - Iterable Protocol
 *  - Iterator Protocol
 * 
 * Generator
 */

/**
 * 이터레이터 규약
 * 이터레이터는 이터레이터 규약을 따르는 객체로, 그 다음 요소를 반환하는 next() 메소드를 구현해야 한다.
 */
function iteratorProtocol() {
  let obj = {
    array: [1, 2, 3, 4, 5],
    nextIndex: 0,
    next: function() {
      return this.nextIndex < this.array.length ?
        {value: this.array[this.nextIndex++], done: false} : {done: true};
    }
  };

  let doneFlag = false;
  while (!doneFlag) {
    let nextReturn = obj.next()
    doneFlag = nextReturn.done;
    if (!doneFlag) {
      console.log(nextReturn.value, nextReturn.done);
    }
  }
  console.log(obj.next().done);
}
// iteratorProtocol();

/**
 * 이터러블 규약
 * 이터러블은 이터러블 규약을 구현한 객체로, 반드시 @@iterator 메소드를 제공한다.
 * 즉, Symbol.iterator 심볼을 프로퍼티 키로 갖고 있으며, @@iterator 메소드는 항상 이터레이터 객체를 반환한다.
 */
function iterableProtocol() {
  let obj = {
    array: [1, 2, 3, 4, 5],
    nextIndex: 0,
    [Symbol.iterator]: function() {
      return {
        array: this.array,
        nextIndex: this.nextIndex,
        next: function() {
          return this.nextIndex < this.array.length ? 
            {value: this.array[this.nextIndex++], done: false} : {done: true};
        }
      }
    }
  };

  let iterable = obj[Symbol.iterator]();

  console.log(iterable);
  let doneFlag = false;
  while (!doneFlag) {
    let nextReturn = iterable.next()
    doneFlag = nextReturn.done;
    if (!doneFlag) {
      console.log(nextReturn.value, nextReturn.done);
    }
  }
  console.log(iterable.next().done);
}
// iterableProtocol();

/**
 * 제너레이터
 * 
 * 제너레이터는 한번에 하나씩 여러 값을 반환하는 함수다.
 * 이 함수를 호출하면 즉시 바디를 실행하지 않고 제너레이터 객체(즉, 이터러블 + 이터레이터 프로토콜을 모두 구현한 객체)의 
 * 새 인스턴스를 반환한다.
 * 
 * 제너레이터 객체는 제너레이터 함수의 새로운 실행 콘텍스트를 갖고,
 * next() 메소드를 실행하면 제너레이터 함수 바디를 죽 실행하다가 yield 키워드를 만나면 바로 중지하고
 * yield된 값을 반환. 그리고 다시 next() 메소드를 부르면 멈춘 지점부터 실행이 재개, 그 다음 yield된 값을 낸다.
 * 제너레이터 함수에 더 이상 yield할 값이 남아있지 않을 때 done 프로퍼티는 true가 된다.
 * 
 * 제너레이터 함수는 function*으로 표기한다.
 */
function generatorExample() {
  function* generator_function() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  let generator = generator_function();
  
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().done);

  generator = generator_function();
  let iterable = generator[Symbol.iterator]();
  // let iter_test = generator[Symbol.iterator]; // [Function: [Symbol.iterator]]
  // console.log(iter_test);

  console.log(iterable.next().value);
  console.log(iterable.next().value);
  console.log(iterable.next().value);
  console.log(iterable.next().value);
  console.log(iterable.next().value);
  console.log(iterable.next().done);
}
// generatorExample();

/**
 * next() 메소드는 선택 인자를 받아 제너레이터 함수가 멈춘 지점에서 yield 문의 반환값으로 지정할 수 있다.
 */
function generatorEx2() {
  function* generator_function() {
    var a = yield 12;
    var b = yield a + 1;
    var c = yield b + 2;
    yield c + 3;
  }
  let generator = generator_function();
  console.log(generator.next().value);
  console.log(generator.next(5).value);
  console.log(generator.next(11).value);
  console.log(generator.next(78).value);
  console.log(generator.next().done);
}
// generatorEx2();

/**
 * 제너레이터 함수는 모든 값을 반환하기 전, 제너레이터 객체의 return() 메소드에
 * 마지막 반환값을 선택 인자로 넘겨 언제라도 도중 하차할 수 있다.
 */
function genratorReturnMethod() {
  function* generator_function() {
    yield 1;
    yield 2;
    yield 3;
  }
  let generator = generator_function();
  console.log(generator.next().value);
  console.log(generator.return(22).value);
  console.log(generator.next().done);
}
// genratorReturnMethod();

/**
 * 제너레이터 함수 내에서 임의로 예외를 발생시키려면 제너레이터 객체의 throw() 메소드에 예외 객체를 지정한다.
 * 
 * 마지막으로 제너레이터 함수가 멈춘 지점에서 예외가 발생.
 * 예외 처리가 끝난 후 throw()는 계속 실행돼서 그 다음 yield된 값을 반환한다.
 */
function generatorThorwMethod() {
  function* generator_function() {
    try {
      yield 1;
    } catch (e) {
      console.log(e); // throw 안에 들어온 예외처리 문자열
      console.log('1st Error');
    }

    try {
      yield 2;
    } catch (e) {
      console.log(e); // throw 안에 들어온 예외처리 문자열
      console.log('2nd Error');
    }
  }
  let generator = generator_function();
  console.log(generator.next().value);
  console.log(generator.throw('exception keyword 1').value);
  console.log(generator.throw('exception keyword 2').done);
}
// generatorThorwMethod();

/**
 * yield* 키워드
 * 
 * 제너레이터 함수 안에서 다른 이터러블 객체를 순회한 이후 그 값을 yield하려면 yleld* 키워드에 해당 표현식을 지정한다.
 */
function yieldKeyword() {
  function* generator_function_1() {
    yield 2;
    yield 3;
  }
  function* generator_function_2() {
    yield 1;
    yield* generator_function_1();
    yield* [4, 5];
  }
  let generator = generator_function_2();
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().value);
  console.log(generator.next().done);
}
// yieldKeyword();

/**
 * 14.04.28
 */

/**
 * for...of loop
 * 
 * 이터러블 객체를 next()로 순회하는 건 불편하잖아?
 * 그래서 ES6는 더 간편한 for...of 루프를 제공해준다고..!
 * 
 * for...of 루프는 이터러블 객체 값을 순회하는 구문이다.
 */
function forOfLoop() {
  function* generator_function() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  let arr = [1,2,3];

  for (let value of generator_function()) {
    console.log(value);
  }

  for (let value of arr) {
    console.log(value);
  }
}
// forOfLoop();

/**
 * 꼬리 호출 최적화
 * 
 * 어떤 함수를 호출하면 메모리에 실행 스택을 생성하여 함수의 변수를 저장한다.
 * 함수 안에서 다른 함수를 호출 어쩌구 저쩌구....
 * 내부 함수의 실행 스택만큼 메모리를 더 점유한다는 게 문제다.
 * 그렇다고 실행 스택을 교환하여 생성하면 CPU 시간이 소비.
 * 중첩이 수백 단계에 이르면 자바스크립트 엔진이
 * RangeError: Maximum call stack size exceeded 예외를 던지며 문제가 심각해진다.
 * 
 * 꼬리 호출(tail call)은 무조건 함수 끝(꼬리)에서 return 문을 실행하도록 함수를 호출하는 기법이다.
 * 똑같은 함수 호출이 꼬리에 꼬리를 물고 이어지는, 꼬리 재귀(tail recursion)라는 재귀의 특수한 형태다.
 * 꼬리 호출을 하면 실행 스택을 새로 만들지 않고 기존 스택을 재사용할 수 있기 때문에 부가적인 CPU 연산과
 * 메모리 점유가 실제로 발생하지 않는다. 꼬리 호출 최적화는 꼬리 호출로 실행 스택을 재활용
 * 
 * ES6부터는 "use strict" 모드 실행하면 꼬리 호출 최적화를 자동으로 수행한다.
 */
function tailCallOpt() {
  function _add(x, y) {
    return x + y;
  }
  function add1(x, y) {
    x = parseInt(x);
    y = parseInt(y);

    // 꼬리 호출
    return _add(x, y);
  }
  function add2(x, y) {
    x = parseInt(x);
    y = parseInt(y);

    // 꼬리 호출 아님
    return 0 + _add(x, y);
  }
  console.log(add1(1, '1')); //2
  console.log(add2(1, '2')); //3
}
// tailCallOpt();

/**
 * 꼬리 호출 아닌 코드를 꼬리 호출로 전환
 * 
 * 가급적 꼬리 호출이 아닌 코드는 꼬리 호출로 변경하여 최적화해야 한다.
 */
function tailCallConversion() {
  function _add(x, y) {
    return x + y;
  }
  function add(x, y) {
    x = parseInt(x);
    y = parseInt(y);

    let result = _add(x, y);
    return result;
  }
  console.log(add(1, '1'));
  // 여기서 _add() 는 꼬리 호출이 아니므로 스택이 2개 쌓인다. 다음과 같이 간단히 꼬리 호출로 바꿀 수 있다.
  function add_conversion(x, y) {
    x = parseInt(x);
    y = parseInt(y);

    return _add(x, y);
  }
  console.log(add(1, '1'));
  // 변수 result를 쓰지 말고 return 문으로 함수 호출을 즉시 반환한다. 꼬리 호출 전환 기법은 이밖에도 상당히 여러 가지다.
}
tailCallConversion();