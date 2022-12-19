function solution(n) {
  var answer = 0;
  // console.log(Math.sqrt(n))
  answer = Math.sqrt(n) % 1 === 0 ? 1 : 2;
  return answer;
}
