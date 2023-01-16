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

//my_answwer    bfs 로 풀이함
function solution(numbers, target) {
  var answer = 0;

  let plus_list = [];
  const temp = numbers.shift();
  plus_list.push(temp);
  plus_list.push(-temp);

  numbers.forEach((data) => {
    let temp_list = [];
    while (plus_list.length > 0) {
      const temp_value = plus_list.shift();
      temp_list.push(temp_value + data);
      temp_list.push(temp_value - data);
    }
    // console.log(temp_list)
    plus_list = temp_list;
  });
  // console.log(plus_list)
  plus_list.forEach((data) => {
    if (data === target) {
      answer++;
    }
  });

  return answer;
}
