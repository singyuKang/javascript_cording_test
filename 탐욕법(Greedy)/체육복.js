function solution(n, lost, reserve) {
  let lostLength = lost.length;
  let answer = n - lostLength;

  let temp_array = [];

  for (let i = 0; i < lostLength; i++) {
    if (reserve.includes(lost[i])) {
      reserve = reserve.filter((data) => data != lost[i]);
      answer += 1;
    } else {
      temp_array.push(lost[i]);
    }
  }

  console.log(temp_array);

  lost = temp_array.sort();

  for (let i = 0; i < lostLength; i++) {
    if (reserve.includes(lost[i] - 1)) {
      answer += 1;
      reserve = reserve.filter((data) => data != lost[i] - 1);
    } else if (reserve.includes(lost[i] + 1)) {
      answer += 1;
      reserve = reserve.filter((data) => data != lost[i] + 1);
    }
  }

  console.log(reserve);

  return answer;
}
