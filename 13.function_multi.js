function meetAt(year, month, date) {
    if(!month && !date){
      return `${year}년`
    }else if(!date){
      return `${year}년 ${month}월`
    }else{
      return `${year}/${month}/${date}`
    }
  }

  // 3개의 인자를 받아서 실행하는 함수입니다. 만일 인자를 3개 다 받지 못할경우에 따라
  // 조건에 따라 리턴값에 차이를 주었습니다. 
  // null 은 false 니깐 조건문에서 걸러집니다.