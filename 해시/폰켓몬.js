function solution(nums) {
  var answer = 0;
  let nums_length = nums.length;
  let max_poketmon = nums.length / 2;

  const set = new Set(nums);

  if (max_poketmon < set.size) {
    return max_poketmon;
  } else {
    return set.size;
  }
}
