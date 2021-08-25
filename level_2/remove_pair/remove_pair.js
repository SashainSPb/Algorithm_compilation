function solution(s){
    let answer = 0;
    
    for(let i = 0; i < s.length; i ++) { // baabaa
        if(s[i] === s[i+1]) {
            s = s.slice(0,i) + s.slice(i+2, s.length) // bbaa
            answer = 1;
            i = -1; // 처음부터 반복 
        } else {
            continue;    
        }
    }
        
    if(s.length === 0) {
        return answer;
    }
    
    return answer;
}

/* 
1. 연속된 문자열을 찾아주자.
2. 연속된 문자열을 제거해주자.
3. 2번 프로세스에서 제거된 문자열을 다시 문자열을 찾아주자.
4. 1-3번 동일 반복 후 남은 문자열의 길이가 0이라면 1을 반환하자.
5. 아니라면 0을 반환하자.

stack으로 재 접근
문자열을 slice를 통해 배열로 만들어주자 [a,a,a,a,a]

1. 첫번째 문자열을 떼서 스택에 삽입해주자.
2. 두번째 문자열을 떼서 스택에 삽입해주자.
3. 앞 전 인덱스와 비교하자.
4. 같다면 answer = 1으로 변경
5. 같지 않다면 answer = 0으로 변경

*/