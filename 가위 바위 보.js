function solution(rsp) {
  var answer = "";
  for (i of rsp) {
    console.log(i);
    if (i === "2") {
      answer += 0;
    } else if (i === "0") {
      answer += 5;
    } else {
      answer += 2;
    }
  }

  return answer;
}
