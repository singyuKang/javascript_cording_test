function solution(n) {
  var answer = 0;

  for (let i = 1; i < n + 1; i++) {
    //i의 약수개수 count
    let count = 0;
    for (let k = 1; k < i + 1; k++) {
      if (i % k === 0) {
        count += 1;
      }
    }

    if (count > 2) {
      answer += 1;
    }
  }

  return answer;
}
