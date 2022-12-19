function solution(sides) {
  var answer = 0;
  new_sides = sides.sort((a, b) => {
    return a - b;
  });
  // console.log(new_sides)
  if (new_sides[2] < new_sides[0] + new_sides[1]) {
    answer = 1;
  } else {
    answer = 2;
  }

  return answer;
}
