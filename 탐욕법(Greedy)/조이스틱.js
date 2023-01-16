//my answer 실패
function solution(name) {
  var answer = 0;
  let second_answer = 0;
  let first_list = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "N",
  ];
  let second_list = [
    "A",
    "Z",
    "Y",
    "X",
    "W",
    "V",
    "U",
    "T",
    "S",
    "R",
    "Q",
    "P",
    "O",
  ];

  for (i of name) {
    // console.log(i)
    if (i != "A" && name.split("").length > 1) {
      answer++;
      if (first_list.includes(i)) {
        answer += first_list.indexOf(i);
      } else {
        answer += second_list.indexOf(i);
      }
    }
  }
  const name_list = name.split("");
  const temp = name_list.shift();

  name_list.reverse();
  name_list.unshift(temp);
  const second_string = name_list.join("");
  for (i of second_string) {
    if (i != "A" && second_string.split("").length > 1) {
      second_answer++;
      if (first_list.includes(i)) {
        second_answer += first_list.indexOf(i);
      } else {
        second_answer += second_list.indexOf(i);
      }
    }
  }

  // console.log(name.split("").reverse().join(''))
  // name.reverse()

  return answer > second_answer ? second_answer : answer;
}
