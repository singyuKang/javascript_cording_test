function solution(lines) {
  const table = Array.from({ length: 200 }, () => new Set());
  lines.forEach(([a, b], index) => {
    for (let i = a; i < b; i++) {
      table[i + 100].add(index);
    }
  });

  let count = 0;
  // console.log(table.forEach((data)=>{
  //     if([...data].length >1){
  //         console.log(data)
  //     }
  // }))
  table.forEach((line) => {
    console.log(line);
    if ([...line].length > 1) count++;
  });
  return count;
}
