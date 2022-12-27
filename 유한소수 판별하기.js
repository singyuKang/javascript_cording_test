let getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

const primeFactors = (n) => {
  const answer = [];
  // 2로 나눠지면 계속 나누기
  while (n % 2 === 0) {
    answer.push(2);
    n /= 2;
  }

  // 3부터 루트n까지 나눌 수 있으면 나누기
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      answer.push(i);
      n /= i;
    }
  }

  // 루트n부터 n까지 소수인 경우 처리
  if (n > 2) answer.push(n);
  return answer;
};

function solution(a, b) {
  var answer = 1;
  let array = [];
  array = primeFactors(b / getGCD(a, b));
  array.forEach((data) => {
    console.log(data);
    if (data % 2 === 0 || data % 5 === 0) {
      console.log(data);
    } else {
      answer = 2;
    }
  });

  return answer;
}
