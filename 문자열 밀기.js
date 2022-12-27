function solution(A, B) {
  var answer = -1;
  let count = 0;

  let A_List = [...A];
  // console.log(A_List.unshift(A_List.pop()))

  while (count <= B.length) {
    if (A_List.join("") === B) {
      return count;
      break;
    }
    A_List.unshift(A_List.pop());
    count += 1;
  }

  return answer;
}
