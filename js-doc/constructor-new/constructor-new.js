// 객체 만들기 
let obj1 = new Object(); 
let obj = {}; // 객체 리터럴,

console.log(obj);
console.log(obj1);

let obj2 = {
  name: "John",
  age: 30
}

// 메서드 만들기

obj2.sayHi = function() {
  console.log('안녕하세요');
}; // 함수 표현식으로 메서드를 만든다. (함수)

obj2.sayHi(); // 함수 호출

function sayHi2() {
  console.log('안녕하세요2');
}

obj2.sayHi2 = sayHi2; // 이런식으로 선언한 함수를 객체에 추가하여 메서드를 만들 수 있다.
obj2.sayHi2(); 

// 메서드 만들기 단축구문

obj2 = {
  sayHi3: function() {
    console.log('안녕하세요3');
  }
} // 함수 표현식 쓰듯이 sayHi3 라는 key 에 함수를(메서드를)추가한다. - 추가가 아니다.

obj2 = {
  sayHi4() {
    console.log('안녕하세요4');
  }
} // 위에서 더 단축할 수 있다.

obj2.sayHi4();
console.log(obj2) // {sayHi4: ƒ} 위와 같이 단축구문으로 넣었더니 "추가" 가 아니라 "선언"이다.


// 메서드와 this - 대부분의 메서드가 객체 프로퍼티의 값을 활용한다. 메서드 내부에서 this 를 사용하면 객체에 접근할 수 있다.(메서드를 호출할 때 사용된 객체)

let obj3 = {
  name: "jjeong",
  age: "40",
  sayHi5() {
    console.log(this.name);
  },
  sayHi6() {
    console.log(obj3.age);
  }
}

// let obj4 = obj3;
// obj3 = null;
// obj4.sayHi5(); // 이런식으로 다른값으로 변경하면 에러가 난다. obj3도 null 에러가 난다.

obj3.sayHi5(); // jjeong , this.name 은 객체 value "jjeong"을 의미한다.
obj3.sayHi6(); // 40, 굳이 this를 쓰지 않을수도 있다.

// 하지만 obj3에 대한 변경이 있으면 원하는 값을 참조할 수 없다. (안전하게 this를 쓰는게 나음)


// this 는 꽤 자유롭고 런타임(컨텍스트)에 따라 결정된다.

function sayHello() {
  console.log(this.name);
} // 참조할만한 객체 프로퍼티가 없어도 에러가 나지 않는다.

let user = {name:"jjeong"};
let admin = {name:"Admin"};

function sayHello2() {
  console.log(this.name);  
}

user.f = sayHello2;
admin.f = sayHello2;

user.f(); 
admin.f();

console.log(user); // {name: 'jjeong', f: ƒ}
console.log(admin); // {name: 'Admin', f: ƒ}

// 추가된 메서드의 객체 프로퍼티를 각각 참조한다.
// 참조할 객체가 없어도 함수호출은 가능하지만 여기서 this 는 undefined 가 할당된다.
// 하지만 엄격모드가 아니면 전역객체를 참조하게 된다.



// 생성자 함수
// 객체를 만드는 다른 방법 - 생성자 함수 :  유사한 객체 여러개를 쉽게 만들 수 있다.
// 함수 이름 첫글자는 대문자로 시작한다. / 반드시 new를 붙인다.


function User2(n) {
  this.n = n;
  this.isAdmin = false;
} // 객체 프로퍼티 안의 n이라는 키의 value User2 함수의 n 인자로 받는다.

let user2 = new User2("보라");
// User2 를 생성자 함수로 객체르 생성한다.
// 객체가 생성되는 방식은 User2(n) 함수를 따른다. 
// user2 라는 객체 프로퍼티 안에 n의 key는 인자로 받은 "보라"다. 결국 {n:"보라", isAdmin:false}
// 함수를 => 생성자 함수로 넣어 생성자 함수로 인한 객체 생성방식을 결정한다.
console.log(user2);
console.log(user2.n);
console.log(user2.isAdmin);






