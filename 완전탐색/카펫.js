function solution(brown, yellow) {
  var answer = [];
  //가로의 길이는 같거나 세로보다 길다      8<brown<5000.    1<= yellow <2000000

  // x+y-2 = brown/2.       (x-2)*(y-2) = yellow
  for (let i = 3; i < brown / 2 + 3; i++) {
    let y = brown / 2 - i + 2;
    if ((i - 2) * (y - 2) === yellow) {
      if (i >= y) {
        answer.push(i);
        answer.push(y);
      }
    }
  }

  return answer;
}
