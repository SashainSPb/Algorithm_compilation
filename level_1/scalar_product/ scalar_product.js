function solution(a, b) {
    let answer = 0;
    
    for(let i = 0; i < a.length; i ++) {
        let multipliedElement = a[i] * b[i];
        answer = answer + multipliedElement;
    }
    
    return answer;
}

/*
1. 배열 a,b를 전달받는다
2. loop를 돌려서 a의 첫번째 요소와 b의 첫번째 요소를 곱한다
3. 상기 곱한 값을 새로운 변수에 할당해주자 multipliedElement
4. answer에 multipliedElement 값을 더해주자
5. answer를 리턴해주자.
*/