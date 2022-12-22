function solution(array, n) {
  var answer = 0;
  // let count=Math.abs(n- array[0]);
  let my_index = 0;

  let my_array = [];

  array.forEach((data) => {
    my_array.push(Math.abs(data - n));
  });

  let check = [];
  let min = Math.min(...my_array);

  for (let index = 0; index < my_array.length; index++) {
    if (my_array[index] === min) {
      check.push(array[index]);
    }
  }

  return Math.min(...check);
}
