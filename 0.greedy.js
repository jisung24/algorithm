'use strict';
// 무조건 큰 경우부터 찾는 것! 
// -> 큰 화폐부터 찾아서 최소한의 동전 개수를 파악함. 

// 560원을 거슬러 줄 때 최소한의 동전을 사용해서 거슬러주는 방법 
// 500원 50원 10원이 있음. 

let solution = (money) => {
    let result_500 = 0; // 총 사용되는 동전개수! 
    let result_50 = 0; // 총 사용되는 동전개수! 
    let result_10 = 0; // 총 사용되는 동전개수! 

    result_500 += (Math.floor(money / 500)); // 500원짜리 사용개수! 
    // 500원을 사용했으면 이제 사용한 만큼 떨어뜨려줘야해! 
    console.log(`500won >> ${result_500}`);
    money %= 500; // 이제 남은돈은 500원으로 거슬러 줄 수 없음. 

    result_50 += (Math.floor(money / 50));
    console.log(`50won >> ${result_50}`)
    money %= 50; 

    result_10 += (Math.floor(money / 10));
    console.log(`10won >> ${result_10}`);
    money %= 10; 

    let sumOfCoin = result_500 + result_50 + result_10;
    return sumOfCoin;
}

let money = 2100;
console.log(`총 사용되는 동전 개수 >> ${solution(2160)}개`); // 최소한의 동전개수 8개이다. 

// 가장 큰 값으로 거슬러주고.. 개수를 증가시켜준다! 
// 남은 값을 큰 값 밑으로 떨어뜨려준다!! 