function solution(s) {
    var answer = 0;
    var answer = s.replace(/one/g,'1').replace(/two/g, '2').replace(/three/g, '3').replace(/four/g, '4').replace(/five/g, '5').replace(/six/g, '6').replace(/seven/g, '7').replace(/eight/g, '8').replace(/nine/g, '9').replace(/zero/g, '0')
    
    var answer = Number(answer);
    return answer;
}

/*
let str = 'apple, banana, orange, banana';
let replaced_str = str.replace(/banana/g, 'tomato');

1. 숫자와 문자가 뒤섞인 문자열 s를 받는다
2. s 문자열에 영단어가 있는지 확인한다.
3. 영단어가 있다면 해당 문자를 숫자로 replace를 통해 바꿔주자.
4. 숫자로 치환된 문자열 변수 answer를 Number method를 통해 숫자로 바꿔주자
5. answer를 리턴한다. 
6. 시간복잡도 재체크 
*/