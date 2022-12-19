function solution(s1, s2) {
  var answer = 0;

  //내가 짠 코드
  if (s1.length < s2.length) {
    s1.forEach((data) => {
      if (s2.includes(data)) {
        answer += 1;
      }
    });
  } else {
    s2.forEach((data) => {
      if (s1.includes(data)) {
        answer += 1;
      }
    });
  }

  //비교 코드
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;

  return answer;
}
