function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    console.log(answer);
    answer += 1;

    while (answer.toString().includes("3") || answer % 3 === 0) {
      answer += 1;
    }
  }

  return answer;
}
