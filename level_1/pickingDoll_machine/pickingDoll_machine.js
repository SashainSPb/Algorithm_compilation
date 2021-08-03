function solution(board, moves) {
    let answer = 0;
    let bucket = [];
       
    for (let i = 0; i < moves.length; i ++) {
        for(let j = 0; j < board.length; j++) {
            let index = moves[i];

            if (board[j][index-1] !== 0) {
                bucket.push(board[j][index-1])
                board[j][index-1] = 0;
            } else {
                break;
            }   
        }
    } // bucket => 여기서 바로 비교해주자!
 
//     for (let i = 0; i < bucket.length; i ++) {
//         if(bucket[i] === bucket[i+1]) {
//             answer = answer + 2;
//         }
//     }
       
    return bucket;
}

/*
1. 인형의 위치정보가 담긴 2차원 배열 board와 크레인 움직임이 기록된 1차원 배열 moves를 전달받는다.
2. moves 첫번째 요소 1을 확인한다.
3. board내 요소 배열의 0번째 인덱스를 차례대로 체크하자.
4. 0이라면 다음 요소로 넘어간다.
5. 0이 아니라면 해당 요소를 새로운 배열 pickedDolls에 push하고, 해당 요소를 0으로 바꿔주자 
6. 뽑힌 인형 정보가 담긴 pickedDolls을 완성시킨다.

7. 배열을 순회하면서 다음 요소와 겹치면 answer에 count 1을 해주자.
8. count 2이 될 경우, 중복되는 요소를 삭제한 나머지 요소를 배열로 새로 만들어주자. 
9. 새롭게 만들어진 배열을 다시 순회하면서 중복되는 요소를 검색해주자. 
10. anwer를 리턴해주자.
*/