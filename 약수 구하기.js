function solution(n) {
  var answer = [];

  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  // answer.push(n)
  return answer;
}
