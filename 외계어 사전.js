function solution(spell, dic) {
  var answer = 2;

  dic.forEach((data) => {
    if (data.split("").sort().join("") === spell.sort().join("")) {
      answer = 1;
    }
  });

  return answer;
}
