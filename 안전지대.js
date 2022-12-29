function solution(board) {
  var answer = 0;
  // board = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]

  let answer_board = Array.from(new Array(board.length), () =>
    Array(board.length).fill(0)
  );
  console.log(board);
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board.length; k++) {
      if (board[i][k] === 1) {
        // answer_board[i][k] = 1
        //위

        if (k + 1 < board.length && board[i][k + 1] != 1) {
          board[i][k + 1] = 2;
        }

        //아래
        if (k - 1 >= 0 && board[i][k - 1] != 1) {
          board[i][k - 1] = 2;
        }

        //왼쪽
        if (i - 1 >= 0 && board[i - 1][k] != 1) {
          board[i - 1][k] = 2;
        }

        //오른쪽
        if (i + 1 < board.length && board[i + 1][k] != 1) {
          board[i + 1][k] = 2;
        }

        // 왼쪽위
        if (i - 1 >= 0 && k + 1 < board.length && board[i - 1][k + 1] != 1) {
          board[i - 1][k + 1] = 2;
        }

        //오른쪽위
        if (
          i + 1 < board.length &&
          k + 1 < board.length &&
          board[i + 1][k + 1] != 1
        ) {
          board[i + 1][k + 1] = 2;
        }

        //왼쪽아래
        if (i - 1 >= 0 && k - 1 >= 0 && board[i - 1][k - 1] != 1) {
          board[i - 1][k - 1] = 2;
        }

        //오른쪽아래
        if (i + 1 < board.length && k - 1 >= 0 && board[i + 1][k - 1] != 1) {
          board[i + 1][k - 1] = 2;
        }
      }
    }
  }
  console.log(board);
  board.forEach((data) => {
    data.forEach((item) => {
      if (item === 0) {
        answer += 1;
      }
    });
  });

  return answer;
}
