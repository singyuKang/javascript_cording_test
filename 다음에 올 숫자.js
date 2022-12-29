function solution(common) {
  var answer = 0;
  // 등차 등비 확인
  if (common[1] + (common[1] - common[0]) === common[2]) {
    answer = common[common.length - 1] + common[1] - common[0];
  } else {
    answer = (common[common.length - 1] * common[1]) / common[0];
  }

  return answer;
}
