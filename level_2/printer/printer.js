function solution(priorities, location1) {
    let answer = 0;
    return answer;
}

/*
1. 인쇄대기 목록인 priorities와 목록 중에 인쇄 요청한 문서의 인덱스를 나타내는 location을 매개변수로 받는다. 
2. 인쇄 요청 문서를 string 처리를 해서 나머지 요소와 구분해주자. 
3. 인쇄대기 목록 요소를 하나씩 loop로 돌려주자. 
4. 뽑힌 요소와 나머지 인쇄대기 목록 요소를 some method를 통해 크기 비교해주자. 
4-1. 뽑힌 요소보다 큰 나머지 요소가 존재한다면, 뽑힌 요소를 pop하여 push 해주자.
4-2. 존재하지 않는다면 cotinue로 넘겨주자.
5. 2번에서 string 처리된 요소를 찾아 인덱스를 반환하자. 
*/