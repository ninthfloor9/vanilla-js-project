console.log("hello :", "hihi");

/* {비교연산자}

- 보다 큼,작음 : a > b, a , b
- 보다 크거나,작거나 같음 : a >= b, a <= b
- 같음 : a == b
- a = b 는 할당기호임
- 같지 않음 : a != b

불린형 반환

- true 가 반환되면, 긍정, 참, 사실
- false 가 반화되면, 부정, 거짓, 사실이 아님
*/

console.log("true", 2 > 1 );
console.log("false", 2 == 1);
console.log("true", 2 != 1);

// 반환된 불린값은 다른 값처럼 변수에 할당 가능

let result = 5 > 4; // true
console.log("5 > 4", result);


// 문자열 비교는 뒤쪽의 문자열은 앞쪽 문자열보다 크다('사전') 순이다. (사전편집-lexicographical)

console.log("Z > A", 'Z' > 'A'); // true
console.log("Glow > Glee", 'Glow' > 'Glee'); // true, 왼쪽부터 같은 위치의 문자를 한글자씩 비교하는듯

// 비교가 종료되었고, 문자열의 길이도 같다면 두 문자열은 동일하다. 하지만 길이가 다르면 긴 문자열이 더 크다
// 정확히는 유니코드 순이고, 대소문자를 따진다. 대문자가 소문자보다 더 크다.

// 다른 형을 가진 값일때

console.log("2(string) > 1(num)", '2' > 1 ); //true, 자료형이 다르면 이 값들을 숫자형으로 바꾼다.

console.log('true==1', true == 1); // true, true는 1로
console.log('false==0', false == 0) // false, false 는 0으로 변환된다.





