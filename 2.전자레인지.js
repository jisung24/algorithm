'use strict';
const input = Math.floor(require('fs').readFileSync('test.txt').toString());
// console.log(input, typeof input);

/**
 * 
 * @param {*} input : 입력받은 초! 
 */
function solution(input) {
    let result_300 = 0;
    let result_60 = 0;
    let result_10 = 0;
    let lastNumber = input
    .toString()
    .split('')
    .map((value) => +value);
    if(lastNumber[lastNumber.length - 1] !== 0) { // 저 3개를 이용하여 나타낼 수 없는 숫자!! => 일의자리가 0이 아니면 안 돼! 
        console.log(-1);
    }else {
        result_300 += (Math.floor(input / 300));
        console.log(`5분버튼 >> ${result_300}번`);
        input = (input % 300); 

        result_60 += (Math.floor(input / 60)); // 60번 개수!! 
        console.log(`1분버튼 >> ${result_60}번`);
        input = (input % 60);

        result_10 += (Math.floor(input / 10)); // 10번 개수!! 
        console.log(`10초버튼 >> ${result_10}번`);
        input = (input % 10);
    }
}
solution(input);