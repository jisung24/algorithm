'use strict';

// 문제
// 등산가 김강산은 가족들과 함께 캠핑을 떠났다. 하지만, 캠핑장에는 다음과 같은 경고문이 쓰여 있었다.
// 캠핑장은 연속하는 20일 중 10일동안만 사용할 수 있습니다.
// 강산이는 이제 막 28일 휴가를 시작했다. 이번 휴가 기간 동안 강산이는 캠핑장을 며칠동안 사용할 수 있을까?
// 강산이는 조금 더 일반화해서 문제를 풀려고 한다. 

// ⭐️ 캠핑장을 연속하는 P일 중, L일동안만 사용할 수 있다. 강산이는 이제 막 V일짜리 휴가를 시작했다.
// ⭐️ 강산이가 캠핑장을 최대 며칠동안 사용할 수 있을까? (1 < L < P < V)

// 휴가 총 20일 
// 연속하는 8일동안 5번 쓸 수 있는 캠핑장. 

function solution(sumOfDay, continuous, usingDay) {
    let result = 0;

    result += (usingDay * Math.floor(sumOfDay / continuous)); // 10번 쓸 수 있고, 
    sumOfDay %= 8; // 남은 휴가는 이제 4일이다. => 4일동안 5번 쓸 수 있는데 최대 4번 쓸 수 있음. 

    // 만약 4일동안 최대 3번 쓸 수 있어. 그럼 +를 usingDay를 하면 되고, 
    // 5번 쓸 수 있어. 그럼 sumOfDay를 더하면 돼! 
    return sumOfDay > usingDay ? result + usingDay : result + sumOfDay
}
console.log(`캠핑장 >> ${solution(20, 8, 3)}`);