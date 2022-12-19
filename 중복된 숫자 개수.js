function solution(array, n) {
  var answer = 0;
  array.map((data) => {
    if (data === n) {
      answer += 1;
    }
  });
  return answer;
}
