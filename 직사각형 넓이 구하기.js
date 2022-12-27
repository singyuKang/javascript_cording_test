function solution(dots) {
  console.log(
    dots.sort((a, b) => {
      return a[0] - b[0];
    })
  );
  console.log(
    dots.sort((a, b) => {
      return a[1] - b[1];
    })
  );
  return Math.abs(dots[0][0] - dots[1][0]) * Math.abs(dots[0][1] - dots[2][1]);
}
