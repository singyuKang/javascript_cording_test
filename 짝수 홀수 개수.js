function solution(num_list) {
  var answer = [];
  let odd_number = 0;
  let even_number = 0;

  num_list.forEach((data) => {
    data % 2 === 0 ? (even_number += 1) : (odd_number += 1);
  });
  answer.push(even_number, odd_number);
  console.log(answer);
  return answer;
}
