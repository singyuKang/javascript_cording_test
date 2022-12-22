function solution(n) {
  var answer = [];
  let divide = 2;

  while (divide <= n) {
    if (n % divide === 0) {
      // console.log('n : ', n)
      // console.log('divide : ', divide)

      answer.push(divide);
      n = n / divide;
    } else {
      //         console.log('n : ', n)
      // console.log('divide : ', divide)
      divide += 1;
    }
  }

  console.log(answer);

  const answer_filter = answer.filter((data, index) => {
    return answer.indexOf(data) === index;
  });
  //set 도 중복 제거 가능

  return answer_filter;
}
