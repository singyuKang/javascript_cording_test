function solution(n, k) {
  var answer = 0;
  if (n >= 10) {
    k -= Math.floor(n / 10);
  }
  return 12000 * n + k * 2000;
}
