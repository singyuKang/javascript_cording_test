function solution(keyinput, board) {
  var answer = [];

  let my_state = [0, 0];
  let max_x = (board[0] - 1) / 2;
  let max_y = (board[1] - 1) / 2;

  keyinput.forEach((data) => {
    if (data === "left") {
      console.log(data);
      if (my_state[0] - 1 < -max_x) {
        console.log("nop");
      } else {
        my_state[0] -= 1;
      }
    } else if (data === "right") {
      console.log(data);
      if (my_state[0] + 1 > max_x) {
        console.log("nop");
      } else {
        my_state[0] += 1;
      }
    } else if (data === "up") {
      console.log(data);
      if (my_state[1] + 1 > max_y) {
        console.log("nop");
      } else {
        my_state[1] += 1;
      }
    } else if (data === "down") {
      console.log(data);
      if (my_state[1] - 1 < -max_y) {
        console.log("nop");
      } else {
        my_state[1] -= 1;
      }
    }
  });

  console.log(my_state);

  return my_state;
}
