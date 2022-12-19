function solution(n) {
  var answer = 0;

  // 20 -> 1 2 4 5 10 20

  //100 -> 1 2 4 5 10 20 25 50 100 약수의 개수

  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      answer += 1;
    }
  }

  return answer;
}
