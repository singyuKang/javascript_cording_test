function solution(n, numlist) {
  var answer = [];

  const result_list = numlist.map((data) => {
    if (data % n === 0) {
      return data;
    }
  });
  return result_list.filter((element) => element);

  //filter 을 처음부터 썼으면 깔끔하게 짤수있음
  return numlist.filter((num) => num % n === 0);
}
