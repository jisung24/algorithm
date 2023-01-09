// 3 ==> testcase
// 124 => 돈1 
// 25 => 돈2
// 194 => 돈3

let moneyArr = [25, 10, 5, 1]; // 내가 거슬러 줄 수 있는 돈의 종류! => 큰 것 부터 최대한으로 거슬러주어서 결과적으로 최소한의 개수로 주어야 한다. 
// 1. 큰 것 부터 선택! 
let countArr2 = [0, 0, 0]; // 각 돈에 몇 번인지...
let countArr = [0, 0, 0, 0];
let input = require('fs').readFileSync('test.txt').toString().split('\n');
let [tc, ...money] = input.map((value) => +value);

for(let i = 0; i < money.length; i++) {
    console.log(money[i]);
    for(let j = 0; j < countArr.length; j++) {
        console.log(`${moneyArr[j]}원 시작한다!!`);
        countArr[j] += Math.floor(money[i] / moneyArr[j]);
        console.log(`${moneyArr[j]}는 ${countArr[j]}번!`);
        money[i] -= (moneyArr[j] * countArr[j])
        if(money[i] < moneyArr[j]) {
            console.log('끝!');
            break;
        }
        console.log(`남은 돈 >> ${money[i]}`);
    }
    console.log(`총 >> ${countArr.reduce((acc, cur) => acc + cur)}번!`);
}