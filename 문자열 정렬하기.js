function solution(my_string) {
  var answer = [];
  for (i of my_string) {
    if (!isNaN(i)) {
      answer.push(Number(i));
    }
  }
  return answer.sort((a, b) => {
    return a - b;
  });
}
