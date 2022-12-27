function solution(numlist, n) {
  var answer = [];
  //     let new_array =  numlist.map((data)=>{
  //         return data - n
  //     })
  //     console.log(new_array)
  //     answer = new_array.sort((a,b)=>Math.abs(b)-Math.abs(a)).map((data)=>{
  //         return data + n
  //     }).reverse()

  numlist.sort((a, b) => {
    // console.log(a,b)
    let aGab = Math.abs(a - n);
    let bGab = Math.abs(b - n);
    // console.log(aGab, bGab)
    if (aGab === bGab) return b - a;
    return aGab - bGab;
  });

  console.log(numlist);

  // console.log(new_array.map((data)=>{
  //     return data += n
  // }))

  return numlist;
}
