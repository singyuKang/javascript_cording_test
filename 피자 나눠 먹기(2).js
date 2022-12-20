function solution(n) {
  var answer = 1;
  // 6 12 18 ... 6의 배수조각
  // 2    10 * x 가 6의 배수 만족
  while (true) {
    if ((answer * 6) % n === 0) {
      break;
    } else {
      answer += 1;
    }
  }
  return answer;
}
