function solution(numbers, target) {
  var answer = 0;
  const length = numbers.length;
  dfs(0, 0);
  function dfs(count, sum) {
    if (count === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }

  return answer;
}
