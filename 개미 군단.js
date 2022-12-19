function solution(hp) {
  var answer = 0;
  //최소한의 병력     장군 5    병정 3  일개미 1     23 =5 (4)    3   =  3 (1) + (0)
  let warlord = Math.floor(hp / 5);
  let subordinate_three = Math.floor((hp % 5) / 3);
  let subordinate_one = Math.floor((hp % 5) % 3);
  answer = warlord + subordinate_three + subordinate_one;
  return answer;
}
