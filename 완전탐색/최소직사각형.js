function solution(sizes) {
  var answer = 0;
  let new_array = [];
  sizes.forEach((data) => {
    data.sort((a, b) => a - b);
    new_array.push(data);
  });

  console.log(
    new_array.sort((a, b) => {
      return a[0] - b[0];
    })
  );

  answer = new_array[new_array.length - 1][0];

  console.log(
    new_array.sort((a, b) => {
      return a[1] - b[1];
    })
  );

  answer = answer * new_array[new_array.length - 1][1];

  return answer;
}
