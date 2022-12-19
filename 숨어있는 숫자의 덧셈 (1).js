function solution(my_string) {
  var answer = 0;

  for (data of my_string) {
    //isNaN 정수인지 string 인지 판별
    if (!isNaN(data)) {
      console.log(data);
      answer += Number(data);
    }
  }

  return answer;
}
