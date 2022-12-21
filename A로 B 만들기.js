function solution(before, after) {
  let before_array = before.split("").sort().join("");
  let after_array = after.split("").sort().join("");
  if (before_array === after_array) {
    return 1;
  } else {
    return 0;
  }
}
