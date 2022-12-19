function solution(strlist) {
  var answer = [];

  strlist.forEach((data) => {
    // console.log(data.length)
    answer.push(Number(data.length));
  });
  return answer;
}
