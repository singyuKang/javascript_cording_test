function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

function solution(n) {
  var answer = 0;
  let count = 1;
  while (true) {
    if (factorial(count) > n) {
      count -= 1;
      break;
    } else {
      count += 1;
    }
  }

  answer = count;

  return answer;
}
