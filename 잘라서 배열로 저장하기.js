function solution(my_str, n) {
  var answer = [];
  let result = [];
  let my_str_array = [];
  my_str_array = my_str.split("");

  for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
    answer.push(my_str_array.splice(0, n).join(""));
  }

  return answer;
}
