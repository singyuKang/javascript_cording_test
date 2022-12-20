function solution(numbers, direction) {
  var answer = [];

  //right
  if (direction === "right") {
    let popResult = numbers.pop();
    numbers.splice(0, 0, popResult);
    answer = numbers;
  }
  //left
  else if (direction === "left") {
    let popResult = numbers.shift();
    numbers.push(popResult);
    answer = numbers;
  }

  return answer;
}
