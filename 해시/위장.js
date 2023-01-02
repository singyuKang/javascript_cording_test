function solution(clothes) {
  var answer = 1;

  let dic = {};

  clothes.forEach((data) => {
    if (dic[data[1]] === undefined) {
      dic[data[1]] = 1;
    } else {
      dic[data[1]] += 1;
    }
  });

  for (const key in dic) {
    answer *= dic[key] + 1;
  }

  return answer - 1;
}
