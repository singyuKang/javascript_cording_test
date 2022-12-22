function solution(s) {
  var answer = "";
  // let s_array = s.split("")
  const dic = {};

  s.split("").forEach((data) => {
    dic[data] === undefined ? (dic[data] = 1) : (dic[data] += 1);
  });

  return Object.entries(dic)
    .map((data) => (data[1] === 1 ? data[0] : null))
    .filter((data) => data != null)
    .sort()
    .join("");
}
