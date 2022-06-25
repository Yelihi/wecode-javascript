// 프로토타입 적용해보기

let head = {
    glasses: 1
  };
  
  let table = {
    __proto__ : head,
    pen: 3
  };
  
  let bed = {
    __proto__ : table,
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    __proto__ : bed,
    money: 2000
  };

  console.log(pockets.pen);
  console.log(bed.glasses);

  // 어디에 프로퍼티가 추가될까요

  let animal = {
      eat() {
          this.full = true;
      }
  };

  let rabbit = {
      __proto__ : animal
  };

  rabbit.eat(); // rabbit 왜냐면 . 앞에 있는 객체가 곧 this 이기 때문이다. 

  // 왜 햄스터 두 마리 모두 배가 꽉 찼을까요?

  let hamster = {
      stomach: [],

      eat(food){
          this.stomach.push(food);
      }
  };

  let speedy = {
      __proto__: hamster
      // stomach = [];
  };

  let lazy = {
      __proto__ : hamster
      // stomach = [];
  };

  //햄스터 speedy 가 음식을 먹습니다.
  speedy.eat('apple');
  alert(speedy.stomach); // apple

  // 햄스터 lazy는 음식을 먹지 않았는데 배에 apple이 있다고 나오네요. 
  alert(lazy.stomach); // apple

  /* 
    먹는 함수는 햄스터에 있고, 이를 실행할 때, stomach 를 찾아야 합니다. 근데 this 의 객체인 speedy는 역시나 stomach가 없고, 
    프로토타입 체인을 통해 올라가서 햄스터에서 있음을 발견하고 여기에 넣습니다. 따라서 lazy가 함수를 실행하지 않아도 안에 들어있음
    해결하려면 각각 stomach 를 넣어주면 된다. 
  */
  