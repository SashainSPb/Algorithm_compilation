function solution(citations) {
  let result = 0;
  citations.sort((a, b) => b-a); // [6,5,3,1,0]

  for (let i = 0; i < citations.length; i++) {
      if (citations[i] < i + 1) { // i=3, citations[3] = 1
        return (result = i); // 배열 내 요소가 idx를 넘는 순간 그 전 단계의 i를 리턴하자.
      }
  }

return result > 0 ? result : citations.length; // result가 0보다 크다면 상기 i의 값을 리턴, 0이라면 길이만큼 리턴
}


/*
1. 인용된 논문 숫자를 요소로 갖는 배열 citation을 받는다.
2. 많이 인용된 논문부터 내림차순으로 정렬해주자.
3. 등록된 논문 수를 오름차순으로 정렬한 후 2번과 비교해주자.
4. 인용된 횟수가 등록된 논문의 해당 순번보다 작을 경우, 그 직전의 순번이 H-index이다.
5. [10,11,12]과 같이 모든 논문의 인용된 횟수가 논문의 순번보다 클 경우, 해당 논문의 개수가 H-index의 최대값이 된다
*/