// ❗️당장에 큰 걸 최대한으로 선택해서 결국 선택 횟수가 최소한이 돼야 해❗️

// 5분 1분 10초로 입력받은 숫자에 최소한의 선택 횟수로 도달해야하는 문제!! 
// 즉 욕심을 한 번에 많이내서 결국 최소한의 횟수로 그 결과에 도달해야한다!!! 

const input = require('fs').readFileSync('test.txt').toString();
let tc = Number(input);
let times = [300, 60, 10]; 
let countButton = [0, 0, 0]; // 각 초에 대한 버튼 click 수!
let rest = tc.toString().split('').map((value) => +value);
let count = 0;
if(rest[rest.length - 1] === 0) {
    // 0이 아니면...
    for(let i = 0; i < times.length; i++) {
        console.log(`${i + 1}번째 >> ${times[i]}초 >> `);
        countButton[i] += Math.floor(tc / times[i]); // 결국 해야하는 거! => 각 초가 몇 번인지! 
        console.log(`${countButton[i]}번 눌러야 함!`); // 그 초를 하고나면 그 만큼 원래 input에서 빼줘야 해! 그래야 다음 시간으로 가..
        console.log(`남은 시간 >> ${tc -= (times[i] * countButton[i] )}`);
    }
}else { // 1의자리가 0이 아니라면.. 절대 300 60 10초로 선택할 수 없어.. 그래서 -1출력하면 돼!
    console.log(`${tc}는 1의자리가 0이 아니어서... 선택할 수 없습니다! 죄송합니다...`);
    console.log(-1); // 숫자 -1출력! 
}
console.log(`최종 버튼 click 수 >> ${countButton.reduce((acc, cur) => acc + cur)}`);


// 즉 그 당장의 값을 몇 번 해줘야 하는지에 대한 count!! 
// count를 해줬으면 이제 기본 값에서 그 만큼 욕심낸 값을 빼줘야 하는거야!! 
// => 이 2개만 잘 하면 돼!