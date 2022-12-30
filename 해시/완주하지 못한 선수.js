function solution(participant, completion) {
  let dic = {};

  participant.forEach((data) => {
    if (dic[data] === undefined) {
      dic[data] = 1;
    } else {
      dic[data] += 1;
    }
  });

  completion.forEach((data) => {
    dic[data] -= 1;
  });

  for (i in dic) {
    if (dic[i] === 1) {
      return i;
    }
  }
}
