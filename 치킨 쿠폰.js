function solution(chicken) {
  var answer = 0;
  let coupon = chicken;
  // 1081 ->  1081쿠폰
  // 1081쿠폰 -> 108마리       1장 쿠폰 남음
  // 108 쿠폰 -> 10마리         8장 쿠폰남음
  // 10마리 -> 10쿠폰            0장 쿠폰남음
  // 100쿠폰  -> 10마리    0쿠폰    10쿠폰    ->   1마리    0쿠폰
  // 1081 쿠폰 -> 108마리 108쿠폰 +  1쿠폰 -> 109쿠폰 -> 10마리 + 9쿠폰    19쿠폰 -> 1마리     9쿠폰 10쿠폰->    1마리 0쿠폰     끝
  while (coupon >= 10) {
    answer += Math.floor(coupon / 10);
    coupon = Math.floor(coupon / 10) + (coupon % 10);
    console.log(coupon);
  }

  return answer;
}
