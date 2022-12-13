'use struct';
// 타로는 자주 JOI잡화점에서 물건을 산다. 
// JOI잡화점에는 잔돈으로 500엔, 100엔, 50엔, 10엔, 5엔, 1엔이 충분히 있고,
// 언제나 거스름돈 개수가 가장 적게 잔돈을 준다. 
// 타로가 JOI잡화점에서 물건을 사고 카운터에서 1000엔 지폐를 한장 냈을 때, 
// 받을 잔돈에 포함된 잔돈의 개수를 구하는 프로그램을 작성하시오.

// 입력
// 입력은 한줄로 이루어져있고, 타로가 지불할 돈(1 이상 1000미만의 정수) 1개가 쓰여져있다.
const input = require('fs').readFileSync('test.txt').toString();
const restMoney = parseInt(1000 - input);
console.log(restMoney);

/**
 * 
 * @param {*} money 받아야 할 거스름돈
 */
function solution(money) {
    let result = 0; // 동전 개수! 
    
    result += Math.floor(money / 500);
    console.log(`개수 >> ${result}`);
    money = (money % 500); // 동전을 500원 밑으로 떨어뜨려준다.! 
    
    result += Math.floor(money / 100);
    console.log(`개수 >> ${result}`);
    money = (money % 100);

    result += Math.floor(money / 50);
    console.log(`개수 >> ${result}`);
    money = (money % 50);

    result += Math.floor(money / 10);
    console.log(`개수 >> ${result}`);
    money = (money % 10);

    result += Math.floor(money / 5);
    console.log(`개수 >> ${result}`);
    money = (money % 5);

    result += Math.floor(money / 1);
    console.log(`개수 >> ${result}`);
    money = (money % 1);

    return result;
}

console.log(solution(999));