function solution(numbers) {
  //   var answer = 0;
  let new_list = numbers.sort((a, b) => {
    return a - b;
  });
  console.log(new_list[new_list.length - 1]);

  return new_list[new_list.length - 1] * new_list[new_list.length - 2];
}
