/* 

아래 설명을 읽고 getExamResult 함수를 구현하세요.
인자 scores 는 다음과 같은 객체입니다. 객체의 요소의 갯수 및 키의 이름들은 달라질 수 있습니다. 객체의 값은 다음 9가지 문자열 중에서 하나를 가지고 있습니다.

'A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'

{
  '생활속의회계': 'C',
  '논리적글쓰기': 'B',
  '독일문화의이해': 'B+',
  '기초수학': 'D+',
  '영어회화': 'C+',
  '인지발달심리학': 'A+',
}

인자 requiredClasses 는 다음과 같이 문자열로 된 배열입니다.

['영어회화', '기초수학', '공학수학', '컴퓨터과학개론']

scores 객체가 가지고 있는 키들은 새로운 객체에 포함되어야 합니다. 단, 그 값들은 다음 원리에 따라 숫자로 바뀌어 할당되어야 합니다.
A+ => 4.5
A => 4
B+ => 3.5
B => 3
C+ => 2.5
C => 2
D+ => 1.5
D => 1
F => 0

새로운 객체는 값으로 0 을 가져야 합니다.

{
  '생활속의회계': 2,
  '논리적글쓰기': 3,
  '독일문화의이해': 3.5,
  '기초수학': 1.5,
  '영어회화': 2.5,
  '인지발달심리학': 4.5,
  '공학수학': 0,
  '컴퓨터과학개론': 0,
}


*/

const getExamResult = (scores, requiredClasses) => {
    const tableScore = {
        "A+" : 4.5,
        "A" : 4,
        "B+" : 3.5,
        "B" : 3,
        "C+" : 2.5,
        "C" : 2,
        "D+" : 1.5,
        "D" : 1,
        "F" : 0,
    }

    for(i in requiredClasses){
        let value = requiredClasses[i];
        if(!Object.keys(scores).includes(value)){
            scores[value] = "F";
        }
    }

    for(key in scores){
        let indexValue = tableScore[scores[key]];
        scores[key] = indexValue;
    }

    return scores;
}