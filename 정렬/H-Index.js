function solution(citations) {
  var answer = 0;
  let n = citations.length;

  //n편중 h번 이상 인용된 논편이 h 편 이상 h 번 이하 h의 최댓값

  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (i >= citations[i]) {
      return i;
    }
  }

  return citations.length;
}
