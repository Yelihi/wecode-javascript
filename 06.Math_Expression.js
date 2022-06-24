/*

let num = 1;
let newNum = num++;
console.log(num); -> 2
console.log(newNum); -> 1


우선 num 에 1이 초기화 되었습니다. 이후 newNum에 num이 초기화 되었고, 그 다음 num = num + 1 이 적용됩니다.
newNum 에는 초기화 된 1이 그대로 남아있습니다.

풀어서 쓰자면

let num = 1
let newNum = num;
num = num + 1

이런 순서입니다.




*/

function mathExpression(){
    let result = ((5 + 6) * 10) / (2 * 2.5);

    return result;
}