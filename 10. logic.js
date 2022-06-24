/*

논리 연산자 중에 or 와 and 가 있는데, 이 논리연산자의 
좀 더 정확한 의미를 알아보면

a || b
한글로 편하게 해석을 하자면 a 혹은 b 라 해석가능합니다.
근데 사실 이 의미는 a 가 거짓이면 b를 실행해라 라는 뜻입니다.
즉 true 와 false 를 순서대로 따지겠다는 의미입니다.

a && b 
역시 이것도 a 가 true 이면 b를 따지겠다는 것입니다. 
이는 결국 단순 조건식에서만 사용하는게 아니라는 의미죠

fuca || fucb 이런식도 가능합니다.



*/

function rockPaperScissors(player1, player2) {
      if ( (player1 === "가위" && player2 === "보" ) || (player1 === "바위" && player2 === "가위") || (player1 === "보" && player2 === "바위") ) {
        result = "player1";
      } else if((player1 === "가위" && player2 === "바위")||(player1 === "바위" && player2 === "보")||(player1 === "보" && player2 === "가위")){
        result = "player2";
      } else if(player1 === player2){
        result = "player1";
      }
      return result;
    }