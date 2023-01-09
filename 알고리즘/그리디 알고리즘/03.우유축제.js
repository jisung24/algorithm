'use strict';

// 이 문제가 왜 greedy야..?
// 1. 딸기우유 
// 2. 초코
// 3. 바나나 
// 1. 딸기 

// 즉 1 -> 2 -> 3 이 무한 반복 돼!! 
// 1 2 3 1 2 3 1 2 3이런식으로! 
// ❗️즉 다음에 와야 할 숫자를 계속 초기화를 시켜주면서 그 숫자랑 일치 할 경우에 ++해주는 식을 짜주면 돼!❗️
const input = require('fs').readFileSync('test.txt').toString().split('\n');
console.log(input);
const [shopCount, shops, empty] = input;
let shopArr = shops.split(' ').map((value) => +value);
// 가게 정보!! 
// 1. 내가 우유를 살 수 있는 숫자!! 
console.log(shopArr.length); //
let next = 0; //처음에 0일 때! 
let cnt = 0;
for(let i = 0; i < shopArr.length; i++) {
    if(shopArr[i] === next && shopArr[i] === 0) { // 일단 next === 0
        cnt++;
        console.log('우유 하나 삼! ');
        console.log(`${cnt}개 삼 지금까지!`);
        next = 1; // 다음이 1 
    }
    if(shopArr[i] === 1 && shopArr[i] === next) {
        cnt++;
        console.log(`${next}번 발견 `);
        console.log(`${cnt}개 삼!!`);
        next = 2;
    }
    if(shopArr[i] === 2 && shopArr[i] === next) {
        cnt++;
        console.log(`${next}번 발견 `);
        console.log(`${cnt}개 삼!!`);
        next = 0;
    }
}
console.log(`우유 총 >> ${cnt}개 삼!`);