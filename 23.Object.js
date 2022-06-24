/* 

이제까지 하셨던 Assignment 와는 조금 다른 유형입니다. 그 동안에는 특정값을 구해서 리턴 했다면, 이번에는 인자로 받은 데이터를 조합해서, 구조를 바꿔서 리턴합니다.

getData 함수를 구현해주세요!
getData 함수는 세 개의 배열을 인자로 받습니다.

salesArr : 날짜별 판매량
ex) [["20190401", 34], ["20190402", 23], ["20190403", 29]]
reviewArr : 날짜별 리뷰수
ex) [["20190328", 3], ["20190401", 0], ["20190403", 1]]
likeArr : 날짜별 좋아요수
ex) [["20190328", 98], ["20190401", 102], ["20190403", 125]]
다음 요구사항을 충족하는 객체를 만들어서 return 해주세요.

리턴되는 객체는 아래와 같이 3개의 property를 가집니다.

sumAmount : 총 판매량
sumReview : 총 리뷰개수
sumLike : 총 좋아요수

*/

function getData(salesArr, reviewArr, likeArr){
    let reciveData = {
        sumAmount : salesArr.map((arr) => arr[1]).reduce((a, b) => a += b),
        sumReview : reviewArr.map((arr) => arr[1]).reduce((a, b) => a += b),
        sumLike : likeArr.map((arr) => arr[1]).reduce((a, b) => a += b),
    }

    return reciveData;
}