/* 

divideArrayInHalf 함수를 다음과 같이 구현해주세요.
divideArrayInHalf 함수는 array를 인자로 받습니다. 이 array는 숫자 값으로 만 구성되어 있으며 총 5개의 요소(element)들로 구성되어 있습니다.

divideArrayInHalf 함수는 인자로 들어온 array 로 부터 새롭게 구성된 배열 result 을 리턴합니다.

array 요소들 중 10과 같거나 작은 값의 요소들은 result의 맨 앞으로, 10보다 큰 값의 요소들은 result의 맨 뒤로 재구성된 배열을 리턴 해주세요.

재구성이 되는 순서는 array의 맨 뒤 요소부터 맨 앞 요소까지 입니다. 즉, 배열의 뒷 요소 부터 재구성을 진행해주세요.

예를 들어, 인자로 들어오는 array가 다음과 같을 때,

[1, 20, 10, 5, 100]

result 배열이 만들어 지는 순서는 다음과 같습니다.

[100]
[5, 100]
[10, 5, 100]
[10, 5, 100, 20]
[1, 10, 5, 100, 20]
&nbsp 따라서 아래와 같은 result가 리턴 되어야 합니다.

[1, 10, 5, 100, 20]



*/

function divideArrayInHalf(array){
    let result = [];
    for(i = array.length -1; i >= 0; i--){
        if(array[i] <= 10){
            result.unshift(array[i]);
        }else{
            result.push(array[i]);
        }
    }
    return result;
}