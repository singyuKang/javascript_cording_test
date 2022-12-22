function solution(emergency) {
  var answer = [];
  let before_emergency = [...emergency];
  let after_emergency = emergency.sort((a, b) => a - b);

  console.log("before :", before_emergency);
  console.log("after :", after_emergency);

  after_emergency.forEach((data) => {
    console.log(emergency.length - before_emergency.indexOf(data));
    answer.push(emergency.length - before_emergency.indexOf(data));
  });

  return answer;
}
