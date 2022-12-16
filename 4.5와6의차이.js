// 문제
// 상근이는 2863번에서 표를 너무 열심히 돌린 나머지 5와 6을 헷갈리기 시작했다.
// 상근이가 숫자 5를 볼 때, 5로 볼 때도 있지만, 6으로 잘못 볼 수도 있고, 6을 볼 때는, 6으로 볼 때도 있지만, 5로 잘못 볼 수도 있다.
// 두 수 A와 B가 주어졌을 때, 상근이는 이 두 수를 더하려고 한다. 
// 이 때, 상근이가 구할 수 있는 두 수의 가능한 합 중, 최솟값과 최댓값을 구해 출력하는 프로그램을 작성하시오.

// tip : 최댓값은 모든 5를 6으로 바꿔주면 되고, 최솟값은 모든 6을 5로 바꿔서 더해주면 끝! 

const input = require('fs').readFileSync('test.txt').toString().split(' ');
console.log(input);
const num1 = (input[0]); 
const num2 = (input[1]);
const num1Arr = num1.split('').map((value) => +value);
const num2Arr = num2.split('').map((value) => +value);
console.log(num1Arr, num2Arr);

// arr로 일단은 받아보자
let solution = (arr) => { // [ '1430', '4862' ]
    let [num1, num2] = arr.map((value) => value);
    // 그리디 알고리즘 끝! 
}

console.log(solution(input));