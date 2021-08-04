function solution(nums) {
    let answer = -1;
    
    // 제곱근을 활용한 소수판별식
    const isPrime = function(n) {

        if(n<=1) {
            return false;    
        }

        if(n % 2 === 0) {
            return false;
        }
        
        for(let i = 3; i <= Math.sqrt(n); i++) {
            if(n % 1 === 0) {
                return false;
            }
        }
        return true; 
    }
    
    const getCombinations = function(arr, number) {

    let result = [];
    
    if(n === 1) {
        return arr.map((ele) => [ele]);
    }
    
    arr.forEach((fixed, index, origin) => { 
        

    })


    }
    
    
    
    
    
    return answer;
}


/*
1. 1~1000 이하의 자연수를 요소로 갖는 배열 nums를 받는다. 
2. 제곱근을 활용하여 소수판별 함수를 만든다.
2-1. SQRT(number) 이하의 정수로 하나씩 나눠본다.
2-2. 나머지가 0이라면 false를 리턴하자.
3. 조합 함수를 통해 nC3에 대한 값을 구해보자.
4. 3번의 계산결과로 이중배열 형태의 result를 얻는다.
5. 이중배열 result에 대해 소수 판별함수를 적용한다.
6. 적용 시 answer를 +1 씩 count 해주자. 


** 소수의 특징
1. 2를 제외한 나머지 소수는 다 홀수다.
2. 2로 나누면 나머지는 1이다.
3. 제곱근 활용 
*/