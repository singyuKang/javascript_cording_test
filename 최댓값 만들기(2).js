function solution(numbers) {
  var answer = 0;
  let sort_list = numbers.sort((a, b) => a - b);

  console.log(sort_list);
  sort_list[0] * sort_list[1] >
  sort_list[sort_list.length - 1] * sort_list[sort_list.length - 2]
    ? (answer = sort_list[0] * sort_list[1])
    : (answer =
        sort_list[sort_list.length - 1] * sort_list[sort_list.length - 2]);
  return answer;
}
