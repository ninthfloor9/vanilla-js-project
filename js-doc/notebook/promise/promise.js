/* 
1. 난 가수다. 
2. 밤, 낮으로 앨범이 언제 나오는지 들어보는 팬들을 상대해야 한다.
3. 그래서 앨범이 출시되면 팬들이 자동으로 소식을 받아보게 해야한다.
3-1. 구독리스트를 만들어 이메일 주소를 수집하고
3-2. 앨범이 준비되면 팬들에게 메일을 보내 앨범 소식을 받아보게 한다.
*/

/* 
1. 제작코드(producing code) - 원격에서 스크립트를 불러오는 것 같은 시간이 걸리는 일을 한다. 
위의 비유에선 '가수"

2. 소비코드(consuming code) - '제작 코드'의 결과를 기다렸다가 소비한다. 
이때 소비주체(함수)는 여럿이 될 수 있다. 소비코드는 "팬"

3. 프라미스(promise) - '제작코드'와 '소비코드'를 연결해주는 자바스크립트 객체임. 위의 비유
기준으로는 프라미스 = '구독 리스트'.  '프라미스'는 시간이 얼마나 걸리든 상관없이 약속한 결과를
만들어내는 '제작코드'가 준비되었을때, 모든 소비코드가 결과를 사용할 수 있게 해줌

제작코드(가수) <-> 프라미스(구독리스트) <-> 소비코드(팬)
*/

/* 
let promise = new Promise(function(resolve, reject) {
    executor(제작코드, '가수')
});

1. new function 문법이다. (생성자 함수)
2. 생성자 함수(constructor function)
2-1 함수 이름의 첫 글자는 대문자로 시작함
2-2 반드시 new 연산자를 붙여 실행한다.


1. new Promise에 전달되는 함수는 executor(실행자, 실행함수)
2. new Promise가 만들어질때 자동으로 실행됨, 결과를 최종적으로 만들어주는 제작코드를 포함
3. executor의 인수 resolve 와 reject는 자체 콜백임
3-1 executor 에서 결과를 즉시 얻든 늦게 얻든 상관없이 상황에 따라 인수로 넘겨준 콜백 중 하나를 반드시 호출해야한다.
resolve(value) - 일이 성공적으로 끝나면 결과를 나타내는 value와 함께 호출

*/

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('완료'), 1000);
}); // resolve 나 reject 중 하나는 반드시 호출해야함

console.log(promise); // Promise {<pending>} (1)

setTimeout(() => {
  console.log(promise);
},2000);
// Promise {<fulfilled>: '완료'} (2)

let promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject("에러발생!"), 1000);
});

console.log(promise2); // Promise {<pending>} (1)

setTimeout(() => {
  console.log(promise2);
},2000);
// Promise {<rejected>: '에러발생!'}(2)

/* 

1. executor는 즉각 호출되었다. 
2. resolve / reject에 1초 setTimeout을 줬다.
3. 즉각 호출되었기 때문에 console.log 로 보는 promise 상태가 pending 이었다가
4. 2초후에 호출되는 console.log 에는 fulfilled / rejected 가 되었다.
*/



// 프라미스 객체는 executor와 결과나 에러를 받을 소비함수를 이어주는 역할을 한다. 
// then - .then

/*
promise.then(
  function(resolve) {결과(result)를 다룬다.}, - 프라미스가 이행되었을때 실행되는 함수, 여기서 실행 결과를 받는다.
  function(error) {에러를 다룬다.} - 프라미스가 거부되었을때 실행되는 함수, 여기서 에러를 받는다.
)
*/