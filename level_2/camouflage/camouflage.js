function solution(clothes) {
    let answer = 0;
    let clothesList = {};
    for(let i = 0; i < clothes.length; i ++) {
        if(clothes[i][1] in clothesList) {//key값이 배열에 없을 경우
            clothesList[clothes[i][1]] += 1;
        } else { // 있을 경우
            clothesList[clothes[i][1]] = 1;
        } // obj 생성
    }
    
        answer = Object.values(clothesList).reduce((acc,cur)=> {
            acc = acc * (cur + 1);
            return acc;
        })   
        
    return answer-1;
}

/*
0. 빈 객체 선언 {}
1. 종류별로 sorting 해주자. 
1-1. 이중배열을 순회하면서 두번째 요소인 종류를 비교해주자
1-2. 종류가 같다면 숫자 카운트 +1
1-3. 종류가 다르다면 그 다음 키 추가

2. 완성된 배열을 다시한번 돌려주자.  
2. 해당 아이템을 착용하지 않은 경우를 고려할 때 +1 
3. 하루에 최소 한 개의 의상은 입는다고 가정했을 때 아무것도 안입은 경우를 -1 해주자.
4. 값을 리턴하자.  
*/