function solution(numbers) {
  let answer = 0;
  numbers.map((data) => {
    answer += data;
  });
  answer = answer / numbers.length;

  return answer;
}
