'use strict';
// 무조건 큰 경우부터 찾는 것! 
// -> 큰 화폐부터 찾아서 최소한의 동전 개수를 파악함. 

// 560원을 거슬러 줄 때 최소한의 동전을 사용해서 거슬러주는 방법 
// 500원 50원 10원이 있음. 

let solution = (money = 560) => {
    // result : 총 몇 개의 동전이 쓰이는지 
    let result = 0;
    result += Math.floor(money / 500); // 500원짜리는 이 만큼이 쓰이는데 result에 더해줌.
    // 다 나눠줬으면 money를 500원 미만으로 떨어뜨려야 50원으로 할 수 있어. 
    money %= 500; 
    console.log(`동전 >> ${result}개 사용`);
    console.log(`잔액 >> ${money}`);

    result += Math.floor(money / 50);
    money %= 50;  
    console.log(`동전 >> ${result}개 사용`);
    console.log(`잔액 >> ${money}`);

    result += Math.floor(money / 10);
    console.log(`동전 >> ${result}개 사용`);
    console.log(`잔액 >> ${money}`);
    
    return result;
}

let money = 2100;
console.log(solution(2160));