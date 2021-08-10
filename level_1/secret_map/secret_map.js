function solution(n, arr1, arr2) {
    var answer = [];
    return answer;
}

/*
1. 사각형의 크기를 결정하는 n과 정수를 요소로 갖는 배열 arr1, arr2를 받는다.
2. 10진법 요소를 2진법으로 변환해주자. arr.toString(2) method 
2-1. arr.map(ele => ele.toString(2)) 
2-2. n과 2진법으로 변환된 ele의 자리수를 비교
2-3. n보다 작다면 작은 만큼 앞에 '0'을 붙여주자. repeat method
3. ['00111', '11101', '11001'] 식으로 arr1, arr2를 변환시켜준다.

4. 이진법으로 변환된 arr1, arr2 요소를 하나씩 비교해주자.
4-1. 이중 배열로 미리 answer에 공백을 넣어주자. 
5. 첫번째 인덱스의 값에 1이 하나라도 있다면 공백을 #로 바꿔주자.
6. 둘다 0이라면 continue. 
7. answer를 리턴해주자.


*/