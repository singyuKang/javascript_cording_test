function solution(n, t) {
  var answer = 0;

  // 1마리 4시간  -> 2 4 8 16 = 2^4 * 1
  // 3마리 4시간  -> 6 12 24 48 = 2^4 * 3

  console.log(n * Math.pow(2, t));
  return n * Math.pow(2, t);
}
