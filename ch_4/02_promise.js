/** 프라미스
 * 프라미스 생성자는 프라미스 인스턴스를 만든다
 * 이 때 비동기 작업에 해당하는 실행자(executor)라는 콜백을 넘기고 실행자는 resolve 콜백과 reject 콜백, 두 파라미터를 가지며,
 * 작업이 성공하면 resolve, 실패하면 reject 콜백이 실행된다. 각각 결과값, 에러 사유를 전달
 */
'use strict';

var XMLHttpRequest = require('local-xmlhttprequest').XMLHttpRequest;

let promise = new Promise(function (resolve, reject) {
  let request = new XMLHttpRequest();
  let url = "data.json";

  request.open("GET", url);

  request.addEventListener("load", () => {
    if (request.status === 200) {
      resolve(request.responseText);
      console.log(request.responseText);
    } else {
      reject("ERROR:", request.status);
    }
  }, false);

  request.addEventListener("error", () => {
    reject("AJAX 요청 실패");
  }, false);

  request.send();
});
/** 실행자 자체는 동기적으로 실행되지만
 * 비동기 작업을 실행하므로 비동기 작업이 끝나기 전에 반환할 수도 있다.
 */


/**
 * 프라미스는 다음 네 가지 상태값을 가진다.
 * 
 * Fulfilled : resolve 콜백이 프라미스 아닌 객체를 인자로, 또는 인자 없이 실행될 때
 * Rejected : 실행자 스코프에서 예외가 발생하거나 reject 콜백이 실행될 경우
 * Pending : resolve / reject 콜백 실행 전
 * settled : pending 이 나닌 fulfilled 나 rejected에 도달한 확정 상태
 */