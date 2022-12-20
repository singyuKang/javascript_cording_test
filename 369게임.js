function solution(order) {
  var answer = 0;
  for (i of order.toString()) {
    // console.log(i)
    if (Number(i) === 3 || Number(i) === 6 || Number(i) === 9) {
      answer += 1;
    }
  }

  return answer;
}
