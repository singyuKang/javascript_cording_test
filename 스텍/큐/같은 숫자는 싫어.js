function solution(arr) {
  var answer = [];
  let temp = arr[0];
  answer.push(arr[0]);

  arr.forEach((data) => {
    if (data === temp) {
    } else {
      temp = data;
      answer.push(data);
    }
  });
  return answer;
}
