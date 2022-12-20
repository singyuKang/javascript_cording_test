function solution(my_string) {
  var answer = "";
  const lowerCaseStr = my_string.toLowerCase();
  return lowerCaseStr.split("").sort().join("");
}
