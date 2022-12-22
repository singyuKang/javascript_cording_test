function solution(my_string) {
  var answer = 0;

  let result = my_string.replace(/[a-z, A-Z]/g, " ");
  console.log(result.split(" "));

  result.split(" ").forEach((data) => {
    if (data != "") {
      answer += Number(data);
    }
  });

  return answer;
}
