function solution(numbers) {
  var answer = "";

  // console.log(numbers.sort((a,b)=>a-b))
  numbers = numbers.map((data) => {
    return (data + "").repeat(3);
  });
  numbers.sort().reverse();
  numbers = numbers.map((data) => data.slice(0, data.length / 3));
  answer = numbers.join("");

  return answer[0] === "0" ? "0" : answer;
}

//another answer
function solution(numbers) {
  var answer = "";

  numbers = numbers.map((data) => data + "").sort((a, b) => b + a - (a + b));

  console.log(numbers);
}
