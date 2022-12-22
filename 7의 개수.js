function solution(array) {
  var answer = 0;
  array.forEach((data) => {
    let data_string = data.toString();
    for (i of data_string) {
      if (i === "7") {
        answer += 1;
      }
    }
  });

  return answer;
}
