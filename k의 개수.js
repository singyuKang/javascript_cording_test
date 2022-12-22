function solution(i, j, k) {
  // i 부터 j 까지 k의 빈도수 체크
  var answer = 0;
  for (i; i < j + 1; i++) {
    const count_array = i.toString().split("");
    count_array.forEach((data) => {
      if (Number(data) === k) {
        answer += 1;
      }
    });
  }

  return answer;
}
