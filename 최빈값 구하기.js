function solution(array) {
  let answer_list = [];
  let dic = {};

  array.forEach((data) => {
    if (dic[data] === undefined) {
      dic[data] = 1;
    } else {
      dic[data] += 1;
    }
  });
  console.log(dic);
  console.log(Math.max(...Object.values(dic)));
  answer_list = Object.values(dic).filter((data, index) => {
    return data === Math.max(...Object.values(dic));
  });
  console.log(answer_list);

  if (answer_list.length > 1) {
    return -1;
  } else {
    return Number(Object.keys(dic).find((key) => dic[key] === answer_list[0]));
  }
}
