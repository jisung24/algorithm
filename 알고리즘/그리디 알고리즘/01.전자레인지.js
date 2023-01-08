'use strict';
let ts = require('fs').readFileSync('test.txt').toString();
let input = +ts;
// console.log(input, typeof input); 100 number
let times = [300, 60, 10]
let countArr = []; // 각각의 count를 여기 배열에다가 넣고.. 총 합은 reduce사용하면 돼!

let one = input.toString()
.split('')
.map((value) => +value) // 1의자리 구하는 방법! 


for(let value of times) {
    let count = 0;
    if(one[one.length - 1] !== 0) {
        countArr.push(-1);
        break;
    }
    if(value > input) {
        countArr.push(0);
    }else {
        // 개수를 count해서 count를 Arr에 push한다! 
        count += Math.floor(input / value);
        // 개수를 구하고 이제 input에서 그 값만큼 빼줘야 돼!!!!!!!!!!!!!! 
        input -= (value * count);
        countArr.push(count);
    }
}
console.log(countArr.join(' '));