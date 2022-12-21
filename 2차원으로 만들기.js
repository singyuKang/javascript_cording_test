function solution(num_list, n) {
  var answer = [];

  //my answer
  let array = [];
  num_list.forEach((data, index) => {
    // console.log(data)
    if ((index + 1) % n === 0) {
      array.push(data);
      answer.push([...array]);
      array = [];
    } else {
      array.push(data);
    }
  });

  //another answer

  //   console.log(num_list.splice(0,n))
  // console.log(num_list)
  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
