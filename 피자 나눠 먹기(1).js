function solution(n) {
  var answer = 0;

  while (answer * 7 < n) {
    answer += 1;
  }
  return answer;
}
