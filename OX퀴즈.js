function solution(quiz) {
  var answer = [];
  quiz.forEach((data) => {
    let quiz_array = data.split(" ");
    // console.log(data.split(" "))
    if (quiz_array[1] === "+") {
      //+
      if (
        Number(quiz_array[0]) + Number(quiz_array[2]) ===
        Number(quiz_array[4])
      ) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    } else {
      //-
      if (
        Number(quiz_array[0]) - Number(quiz_array[2]) ===
        Number(quiz_array[4])
      ) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    }
  });

  return answer;
}
