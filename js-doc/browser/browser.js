// getElement, querySelector 로 요소 검색하기

//getElementById html 태그의 id를 참조한다.

let ddabong = document.getElementById('ddabong'); // id = ddabong 으로 dom 요소 지정하고
ddabong.style.background = ''; // 이 dom 요소의 style의 backgound color를 yellow
ddabong.style.textAlign = 'center'; // 이 dom 요소의 style의 textAlign 을 center로;

// querySelectorAll 자식요소중 주어진 CSS 선택자에 대응하는 요소 모두를 반환한다.

let elements = document.querySelectorAll('ul > li:last-child'); // ul > li 에서 마지막 요소를 모두 반환한다.
for (let elem of elements) {
    console.log(elem.innerHTML); // 반복문으로 돌려서 html 내용을 읽어 1-2, 2-2 를 반환한다.
}

// 일반적인 CSS 선택자를 포함해서 가상클래스(pseudo-class)도 사용할 수 있다.