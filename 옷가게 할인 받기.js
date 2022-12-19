function solution(price) {
  var answer = 0;
  answer =
    price < 100000
      ? price
      : price < 300000
      ? Math.floor((price * 95) / 100)
      : price < 500000
      ? Math.floor((price * 9) / 10)
      : Math.floor((price * 4) / 5);
  return answer;
}
