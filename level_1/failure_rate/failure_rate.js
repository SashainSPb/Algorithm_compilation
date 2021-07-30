function solution(N, stages) {
    
    let answer = [];
    let newAnswer = [];
    let totalUser = stages.length;
    
    for(let i = 1 ; i <= N; i++ ) {
        let unpassedUser = stages.reduce((cnt, ele) => cnt + ( ele === i), 0);
        let failureRate = unpassedUser/totalUser;
        answer.push([i, failureRate]);
        totalUser = totalUser - unpassedUser;
    }
    
    answer.sort((a,b) => b[1] - a[1]); // 내림차순으로 정렬 
    
    for(let ele of answer) {
        newAnswer.push(Number(ele[0]));
    }
    
    return newAnswer;
}

/*
1. 스테이지 수를 나타내는 숫자 N과 스테이지를 클리어한 사용자를 나타내는 배열 stages를 전달인자로 받는다.
2. 1번 스테이지 실패율을 구한다. 배열 내 요소 1 / 전체 사용자 수
3. 스테이지 no.와 해당 실패율을 배열에 넣는다. [StageNo, failureRate]
4. 3번에서 만들어진 배열을 전체배열(answer)에 넣자.
5. 2-5 과정을 반복해준다. 배열 내 요소 N / 전체사용자 수 - 전 스테이지 요소의 총 개수
6. 만들어진 전체 배열 내 요소를 실패율 크기를 기점으로 내림차순 정렬처리를 해주자.
7. 내림차순 된 answer 배열의 stage no.를 의미하는 0번째 idx를 추출하여 새로운 배열(newAnswer)에 넣자
8. newAnswer를 리턴해주자.
*/