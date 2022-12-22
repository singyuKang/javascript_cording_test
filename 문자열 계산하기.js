function solution(my_string) {
  var answer = 0;
  let my_string_array = [];
  my_string_array = my_string.split(" ");
  answer = eval(my_string);

  //     console.log(my_string_array)
  //     my_string_array[1] === '+' ? answer = Number(my_string_array[0]) + Number(my_string_array[2]) : answer = Math.abs( Number(my_string_array[0]) - Number(my_string_array[2]))

  return answer;
}
