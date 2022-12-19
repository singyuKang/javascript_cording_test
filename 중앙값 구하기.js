function solution(array) {
  var answer = 0;
  let index = 0;
  let sort_array = array.sort((a, b) => {
    return a - b;
  });
  // console.log(sort_array)
  // 5개 2필요   3개 1필요
  index = Math.floor(array.length / 2);
  answer = sort_array[index];
  return answer;
}
