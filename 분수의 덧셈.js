function gcd(a, b) {
  const remainder = a % b; // 1번
  if (remainder === 0) return b; // 2번
  return gcd(b, remainder); // 3번
}

function solution(denum1, num1, denum2, num2) {
  var answer = [];

  let topNumber = num1 * denum2 + num2 * denum1;
  let bottomNumber = num1 * num2;
  let gcd_number = gcd(topNumber, bottomNumber);
  console.log(gcd(topNumber, bottomNumber));

  answer.push(topNumber / gcd_number);
  answer.push(bottomNumber / gcd_number);

  return answer;
}
