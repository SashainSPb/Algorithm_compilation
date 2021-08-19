function solution(number, k) {
    let answer = [];
    
    const dfs = (nums, num, arr = []) => { // nums는 num = 자리수
        
        if(num === 3) answer.push([...arr]);
        else {
            for(let i = 0; i < nums.length; i ++) {
                arr.push(nums[i]);
                dfs(nums.slice(i + 1), num + 1, arr);
                arr.pop();   
            }
        } // 조합 생성 

    }
    
    
    return answer;
}

/* greedy 알고리즘 참조 요망

1. 배열로 만들어주자. [1,9,2,4]
2. number.length - k 만큼의 자리수를 뽑아주자. 
3. 전체 배열에서 2번 프로세스에서 나온 자리수를 뽑아서 조합을 만들어주자.
4. [[1,9], [1,2], [1,4], [9,2], [9,4], [2,4]]
5. join method를 이용해서 문자열로 바꿔주자.
6. 내림차순으로 sort해 주자.
7. 0번째 인덱스 수를 반환해주자.

* 조합
let answer = [];

const dfs = (nums, num, arr = []) => {
  //3개를 선택한다는가정에 3개가 선택 됐다면 출력
  if (num === 3) answer.push([...arr]);
  else {
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs(nums.slice(i + 1), num + 1, arr);
      arr.pop();
    }
  }
};
dfs([1, 2, 3, 4], 0);
//[ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]

*/