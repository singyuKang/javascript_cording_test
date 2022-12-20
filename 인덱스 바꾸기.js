function solution(my_string, num1, num2) {
  let string_array = [];
  let temp = "";
  string_array = my_string.split("");

  temp = string_array[num1];
  string_array[num1] = string_array[num2];
  string_array[num2] = temp;

  return string_array.join("");
}
