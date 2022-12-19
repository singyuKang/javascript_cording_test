function solution(my_string) {
  var answer = "";

  for (i of my_string) {
    //
    let char = "";
    char = i.toUpperCase();
    // console.log(char)
    if (char === i) {
      answer += i.toLowerCase();
    } else {
      answer += i.toUpperCase();
    }
  }
  return answer;
}
