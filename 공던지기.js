function solution(numbers, k) {
  var answer = 0;

  let index = 0;
  let count = 0;

  // 0 1 2 3.  나머지 활용
  while (count < k) {
    index = index % numbers.length;
    answer = numbers[index];
    index += 2;
    count += 1;
  }

  return answer;
}
