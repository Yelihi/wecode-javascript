/*
findSmallestElement 함수를 구현해 주세요.
findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.

arr 의 값들 중 가장 작은 값을 리턴 해주세요.

만일 arr 가 비어있으면 0을 리턴 해주세요.

예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 1이 리턴 되어야 합니다.
[20, 200, 23, 1, 3, 9]
*/

function findSmallestElement(arr){
    let minnum = arr[0];
    if(arr.length === 0){
        return 0;
    }
    arr.forEach((ele) => { // map, filter 해도 관계없음
        if(ele < minnum){
            minnum = ele
        }
    });
    return minnum;
}