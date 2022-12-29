function solution(num, total) {
  var answer = [];
  let left_sum = 0;
  for (let i = 0; i < num; i++) {
    left_sum += i;
  }

  for (
    let k = (total - left_sum) / num;
    k < (total - left_sum) / num + num;
    k++
  ) {
    answer.push(k);
  }

  return answer;
}
