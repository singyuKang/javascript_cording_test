function solution(sides) {
  var answer = 0;

  let answer_array = [];

  let largest_length = sides[0] > sides[1] ? sides[0] : sides[1];
  let shortest_length = sides[0] > sides[1] ? sides[1] : sides[0];

  //가장 긴 변이 sides안에
  for (
    let i = largest_length - shortest_length + 1;
    i < largest_length + 1;
    i++
  ) {
    // console.log(i)
    answer_array.push(i);
  }

  //가장 긴 변이 내가 추가하고싶은수일때
  for (let i = largest_length + 1; i < largest_length + shortest_length; i++) {
    console.log(i);
    answer_array.push(i);
  }
  console.log(answer_array.length);

  return answer_array.length;
}
