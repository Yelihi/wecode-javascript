/*
return 에 대해서 좀 더 알아보겠습니다.
리턴값은 사실 함수만 호출해서는 알수가 없습니다.
그 결과값을 변수에 저장해야 알 수 있습니다.






*/

function getTotal(price1, price2) {
    let totalPrice1 = calculateTotal(price1);
    let totalPrice2 = calculateTotal(price2);
   return totalPrice1 + totalPrice2
  }
  
  getTotal(1000, 2000)