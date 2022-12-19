function solution(array, height) {
  var answer = 0;
  // array.sort()
  array.forEach((data, index) => {
    // console.log(data, index)
    if (Number(height) < Number(data)) {
      answer += 1;
    }
  });
  return answer;
}
