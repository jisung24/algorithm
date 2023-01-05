'use strict';
// 3 => 테스트케이스 개수
// 124 => 거스름돈 1
// 25 => ...2
// 194 => ...3 
let input = require('fs').readFileSync('test.txt').toString().split('\n');
let [ts, ...money] = input.map((value) => +value);
// 와,, 구조분해할당으로 배열을 각각 구분시켜주는 코드...!! => 좋았어 이거

let typeofmoney = [25, 10, 5, 1];

for(let value of money) {
    let moneyArr = [];
    // console.log(`이번 돈 >> ${value} WON`);

    for(let type of typeofmoney) {
        let count = 0;
        count += Math.floor(value / type);
        // console.log(`${type} >> ${count}`); // 잘 나옴.
        moneyArr.push(count);
        value = value - (type * count);
        // console.log(`value >> ${value}`);
    }
    console.log(moneyArr.join(' '));
}
// console.log(moneyArr);
