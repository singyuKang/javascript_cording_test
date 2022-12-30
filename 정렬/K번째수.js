function solution(array, commands) {
  var answer = [];
  commands.forEach((data) => {
    let [i, j, k] = [data[0], data[1], data[2]];
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  });

  return answer;
}
