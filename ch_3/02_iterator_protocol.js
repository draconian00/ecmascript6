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
yieldKeyword();