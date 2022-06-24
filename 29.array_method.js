/* 
1. moreThan100 함수를 구현해 주세요.
숫자로 구성된 배열을 인자로 받습니다.

100 보다 크거나 같으면, true 를

100 보다 작으면 false 로 요소를 변경하여, 새로운 배열을 return 해주세요.

예를 들어,
nums(input)가
[100, 9, 30, 7]
이라면

return은
[true, false, false, false]

2. formatDate 함수를 구현해 주세요.
날짜가 담긴 배열을 인자로 받습니다.

날짜의 data type은 string이며, 보내는 날짜 타입은 'YYYY-MM-DD' 입니다.

해당 날짜의 형식을 'YYYY년 MM월 DD일' 로 바꿔서, 새로운 배열을 return 해주세요.

예를 들어,
dates(input)가
['2019-03-21', '2019-04-21', '2019-05-21']
이라면

return은
['2019년 03월 21일', '2019년 04월 21일', '2019년 05월 21일']
*/

const moreThan100 = (number) => {
    const newArr = number.map((elm) => {
        if(elm >= 100){
            return elm = true;
        }else{
            return elm = false;
        }
    })

    return newArr;
}

const formatDate = dates => {

    dates.map((date, index) => {
     let year = date.split('-')[0]
     let month = date.split('-')[1]
     let day = date.split('-')[2]
  
     dates[index] = `${year}년 ${month}월 ${day}일`
    })
    return dates;
  }