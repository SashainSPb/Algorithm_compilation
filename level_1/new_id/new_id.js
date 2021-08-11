function solution(new_id) {
    let answer = '';
    
    
    let a = new_id.toLowerCase()
    let b = a.replace(/[^\w-._]+/g, '');
    let c = b.replace(/[.]{2,}/g, '.');
    
    if(c[0] === '.'){
        c[0] === '';
    }
    if(c[c.length-1] === '.') {
        c[c.length-1] = '';    
    }
    
    if(c[c.length-1] === '.') {
        c[c.length-1] = '';    
    }
    
    if(c.length === 0 ) {
        c = 'a';
    }
    
    if(c.length >= 16) {
        c = c.slice(0,16)
    }
    
    if(c[c.length-1] === '.') {
        c[c.length-1] = '';    
    }
    
    if(c.length <= 2) {
        c = c.repeat(3);
    }
    
    return c;
}

/*
1. 대문자를 소문자로 다 바꿔주자.
2. 알파벳 소문자, 숫자, - , _ , . 를 제외한 모든 문자를 제거.
3. 마침표가 2번이상 연속된 부분을 하나의 마침표로 치환
4. 마침표가 처음이나 끝에 위치한다면 제거
5-1. 아이디가 비었을 시, a를 대입
5-2. 아이디가 16자 이상일 경우, 16자문자 이상부터 모두 제거
5-3. 4번 프로세스 반복
5-4. 아이디가 길이 2자 이하라면 new_id 문자를 길이가 3이 될때까지 반복해서 끝에 붙여주자.
6. 최종 아이디를 리턴한다.  

let reg = /^[a-z0-9]$/


*/