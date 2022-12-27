function solution(id_pw, db) {
  var answer = "";
  //들어있으면 검사 없으면 fail

  answer = "fail";
  db.forEach((data) => {
    // console.log(data)
    if (data[0] === id_pw[0]) {
      if (data[1] === id_pw[1]) {
        answer = "login";
        return false;
      } else {
        answer = "wrong pw";
        return false;
      }
    }
  });

  return answer;
}
