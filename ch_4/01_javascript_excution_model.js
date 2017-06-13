"use strict";

/** 자바스크립트 실행 모델
 * 
 * 자바스크립트 코드는 싱글 스레드로 작동한다. -- 스크립트 2개를 동시에 실행하는 건 불가능하다.
 * 브라우저에 접속한 각 웹사이트는 스레드 하나를 메인 스레드로 잡은 채 웹 소스 파일을 내려받고 파싱, 실행한다.
 * 
 * 메인 스레드엔 한번에 하나씩 비동기 작업을 실행하기 위해 큐를 둔다.
 * 이번트 처리기, 콜백 등 어떤 유형의 작업이라도 큐에 쌓을 수 있다.
 * 실행 시간이 오래 걸리는 작업이 섞이면 큐의 다른 작업들과 메인 스크립트를 멈추게 할 수도 있다.
 * 
 * HTML5는 메인 스레드와 병렬로 실행되는, 웹 워커(web worker)라는 실제 스레드를 도입했다.
 * 웹 워커의 실행이 끝나거나 메인 스레드에 알림이 필요할 때 새 이벤트를 그냥 큐에 넣는다.
 */

/** 비동기 코드 작성
 * ES5는 이벤트와 콜백이라는, 두 가지 비동기 코드 작성 패턴을 지원한다.
 * 보통 비동기 작업을 시작하고 이벤트 처리기를 등록하거나, 콜백을 전달해서 작업이 끝난 후 실행되도록 코딩한다.
 */


/**
 * 이벤트를 포함한 비동기 코드
 */
function eventExample() {
  var request = new XMLHttpRequest();
  var url = "data.json";

  request.open("GET", url);
  request.addEventListener("load", function() {
    if (request.status === 200) {
      // do something
    } else {
      // error
    }
  }, false);
  request.addEventListener("error", function() {
    // error
  }, false);

  request.send();
}
/**
 * XMLHttpRequest 객체의 send() 메소드는 비동기 실행되며
 * data.json 파일을 읽어들인 후 성공하면 load, 실패하면 error 이벤트 처리기를 각각 호출한다.
 */


/**
 * 콜백을 포함한 비동기 코드
 * 
 * 콜백을 이용한 비동기 자바스크립트 API는 성공/에러 콜백을 모두 넘기고 성공 여부에 따라 어느 한쪽을 호출한다.
 */
function callbackExample() {
  function displayName(json) {
    try {
      console.log(json.Name);
    } catch(e) {
      console.log("ERROR:", e.message);
    }
  }
  function displayProfession(json) {
    try {
      console.log(json.Profession);
    } catch(e) {
      console.log("ERROR:", e.message);
    }
  }
  function displayAge(json) {
    try {
      console.log(json.Age);
    } catch (error) {
      console.log("ERROR:", error.message);
    }
  }
  function displayData(data) {
    try {
      var json = JSON.parse(data);
      displayName(json);
      displayProfession(json);
      displayAge(json);
    } catch (e) {
      console.log("ERROR:", e.message);
    }
  }

  $.ajax({url: "data.json", success: function(result, status, responseObject) {
    displayData(responseObject.responseText);
  }, error: function(xhr, status, error) {
    console.log("ERROR: AJAX 요청을 할 수 없습니다.", error);
  }});
} // local node에서는 안돌아 갑니다.

