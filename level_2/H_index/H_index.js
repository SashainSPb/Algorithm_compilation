function solution(citations) {
    var answer = 0;
    citations.sort((a,b) => a-b)
    answer = getMedian(citations);
    return answer;
}

function getMedian(array) {
  if (array.length == 0) return NaN; // 빈 배열은 에러 반환(NaN은 숫자가 아니라는 의미임)
  var center = parseInt(array.length / 2); // 요소 개수의 절반값 구하기

  if (array.length % 2 == 1) { // 요소 개수가 홀수면
    return array[center]; // 홀수 개수인 배열에서는 중간 요소를 그대로 반환
  } else {
    return (array[center - 1] + array[center]) / 2.0; // 짝수 개 요소는, 중간 두 수의 평균 반환
  }
}


/*
1. 논문의 인용 횟수를 담은 배열 citations을 받는다.
2. 오름차순 정렬 수행
3. 요소 하나씩 순회해주자
4. 요소보다 큰 숫자를 

2. [0, 1, 5, 6]
3. h가 1일때 
4.
5.
getMedian()


*/