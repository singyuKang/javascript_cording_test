function solution(s) {
  var answer = 0;
  let s_array = s.split(" ");
  console.log(
    s_array.forEach((data, index) => {
      let temp = Number(data);

      if (index === s.length - 1 && data != "Z") {
        // data
        answer += Number(data);
      }

      if (s_array[index + 1] != "Z" && s_array[index] != "Z") {
        answer += Number(data);
      } else {
      }
    })
  );

  return answer;
}
