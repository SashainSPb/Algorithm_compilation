function solution(numbers) {
    let answer = numbers.map((ele) => `${ele}`).sort((a,b) => (b+a)-(a+b)).join('');
    return answer[0] === "0" ? "0" : answer;
}

/* greedy 알고리즘으로 접근해보자. 
1. 정수가 담긴 배열 numbers를 전달받는다.
2. map을 써서 요소 type을 string으로 변환하자. 
3. 문자열 요소 두 개를 더해준다. 
4. 문자열 요소 두 개를 뒤 순서부터 더해주자.
5. 3번과 4번 프로세스에서 나온 값을 string 상태로 비교 & 내림차순 형태로 정렬 (JS 특성 적극 이용)  
6. 배열 내 요소를 join method를 통해 하나의 문자열로 합쳐주자
7. 합쳐진 값이 문자열 "0"일 경우, "0"을 그대로 뱉고, 아니면 answer를 뱉는다. 
*/
