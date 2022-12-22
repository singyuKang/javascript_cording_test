function product_Range(a, b) {
  var prd = a,
    i = a;

  while (i++ < b) {
    prd *= i;
  }
  return prd;
}

function combinations(n, r) {
  if (n == r || r == 0) {
    return 1;
  } else {
    r = r < n - r ? n - r : r;
    return product_Range(r + 1, n) / product_Range(1, n - r);
  }
}

function factorial(n) {
  let count = 1;
  for (let i = n; i > 0; i--) {
    count = count * i;
  }
  return count;
}

function solution(balls, share) {
  var answer = 0;
  // console.log(factorial(5))
  console.log(factorial(balls));
  console.log(factorial(Math.abs(balls - share)));
  console.log(combinations(balls, share));
  // return answer = combinations(balls, share)
  return (answer =
    Math.abs(factorial(balls)) /
    (factorial(Math.abs(balls - share)) * factorial(share)));
}
