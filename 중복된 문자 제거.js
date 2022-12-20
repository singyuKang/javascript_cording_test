function solution(my_string) {
  var answer = "";

  const string_array = my_string.split("");
  const set = new Set(string_array);
  answer = [...set].join("");

  return answer;
}
