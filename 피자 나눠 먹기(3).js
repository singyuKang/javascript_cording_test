function solution(slice, n) {
  var answer = 0;
  // for(let i =0; i<)
  while (true) {
    if (slice * answer < n) {
      answer += 1;
    } else {
      break;
    }
  }
  return answer;
}
