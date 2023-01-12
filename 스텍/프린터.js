function solution(priorities, location) {
  var answer = 0;
  let firstElement = 0;

  let max_priorities = Math.max(...priorities);

  while (true) {
    firstElement = priorities.shift();
    if (firstElement < Math.max(...priorities)) {
      priorities.push(firstElement);
      if (location === 0) location = priorities.length - 1;
      else location--;
    } else {
      // 출력
      console.log(location);
      answer++;
      if (location === 0) break;
      else location--;
    }
  }

  return answer;
}
