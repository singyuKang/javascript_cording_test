function solution(n) {
  var answer = 0;

  //my answer
  let n_string = n.toString();
  // console.log(n_string.split("").forEach((data)=>{
  //     answer += Number(data);
  // }))
  n_string.split("").forEach((data) => {
    answer += Number(data);
  });

  //
  n_string.split("").reduce((acc, cur) => acc + Number(cur), 0);

  n.toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);

  return answer;
}
