/*

class 생성을 연습해보겠습니다.
MyMath 라는 class를 생성해주세요.
constructor 에서는 숫자 2개를 인자로 받아 프로퍼티로 저장합니다.
총 4개의 메서드를 구현해주세요.
getNumber : 두 개의 숫자가 무엇인지 배열로 반환하는 메서드 → ex) [1, 2]
add : 두 개의 숫자를 더하는 메서드
substract : 두 개의 숫자를 빼는 메서드
multiply : 두 개의 숫자를 곱하는 메서드



*/

class MyMath {
    constructor(number1, number2){
        this.number1 = number1;
        this.number2 = number2;
    }

    getNumber(){
        return [this.number1, this.number2];
    }

    add(){
        return this.number1 + this.number2;
    }

    subtract(){
        return this.number1 = this.number2;
    }

    multiply(){
        return this.number1 * this.number2;
    }
}