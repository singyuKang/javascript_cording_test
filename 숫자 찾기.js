function solution(num, k) {
  var answer = 0;
  console.log(num.toString().indexOf(k));
  answer = num.toString().indexOf(k);
  if (answer === -1) {
    return answer;
  } else {
    return (answer += 1);
  }
}
