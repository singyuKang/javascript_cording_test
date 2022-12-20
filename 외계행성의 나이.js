function solution(age) {
  var answer = "";
  let string_age = "";
  const dic = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };
  string_age = String(age);
  for (i of string_age) {
    answer += dic[i];
  }
  return answer;
}
