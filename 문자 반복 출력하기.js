function solution(my_string, n) {
  var answer = "";
  for (i of my_string) {
    for (let k = 0; k < n; k++) {
      answer += i;
    }
  }
  return answer;
}
