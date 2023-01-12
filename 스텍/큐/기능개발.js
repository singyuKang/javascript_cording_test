function solution(progresses, speeds) {
  var answer = [];
  let progresses_value = 0;
  let days = 1;
  let count = 0;

  while (progresses.length > 0 && speeds.length > 0) {
    progresses_value = progresses[0] + speeds[0] * days;
    //100이상
    if (progresses_value >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }
    //100미만
    else {
      if (count > 0) {
        answer.push(count);
      }
      count = 0;
      days++;
    }
  }
  answer.push(count);

  return answer;
}
