function solution(lottos, win_nums) {
    let answer = [];
    let rankTable = {6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6};
    let matchedNum = 0;
    let oCount = 0;
    
    for (let i = 0; i < lottos.length; i ++) {
        if(lottos[i] === 0) {
            oCount ++
        } // 0의 숫자를 세주자 
        if(win_nums.includes(lottos[i])){
            matchedNum ++ 
        }
    } // 기본적인 matchedNum 확인
    
    return [rankTable[matchedNum+oCount], rankTable[matchedNum]];
}

/*
* 인식이 불가한 번호 => 0
* lottos, win_nums  => 길이 6인 정수 배열, 정수 범위는 0~45이며 중복되지 않음.
* 접근 방식 => 인식 가능한 숫자와 당첨번호를 비교, 인식 불가한 번호가 다 일치할 경우와 일치하지 않을 경우로 접근.

1. lottos 배열을 loop를 돌려주자.
2. lottos 내 요소가 win_nums에 포함되어 있는지 include를 사용해주자.
3. 인식 불가한 숫자인 0 개수를 카운트하자. (oCount)
4. 인식 가능한 숫자 중에 당첨 번호와 일치하는 수를 카운트하자. (matchedNum)
5. 당첨 가능한 최고 순위 개수는 matchedNum + oCount, 최저 순위 개수는 matchedNum
6. lookUp 테이블 활용하여 랭크를 배열로 반환하자.
*/