// 내풀이 실패 -> 최단거리는 BFS로 하는게 효과적
function solution(maps) {
  var answer = -1;

  const n = maps.length;
  const m = maps[0].length;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const queue = [0, 0, 1];

  let need_visit_list = [];

  need_visit_list.push(queue);

  //visit 확인   ->   처음보는곳 list 추가
  while (need_visit_list.length != 0) {
    const node = need_visit_list.shift();
    //도착
    if (node[0] === n - 1 && node[1] === m - 1) {
      return node[2];
    }

    //상하좌우 체크
    for (let i = 0; i < 4; i += 1) {
      const yy = node[0] + dy[i];
      const xx = node[1] + dx[i];
      if (xx >= 0 && yy >= 0 && xx < n && yy < m && maps[yy][xx] === 1) {
        maps[yy][xx] = 0;
        need_visit_list.push([yy, xx, node[2] + 1]);
      }
    }
  }

  return answer;
}

function solution(maps) {
  var answer = 1;

  let visited = maps;
  const n = maps.length;
  const m = maps[0].length;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const queue = [0, 0];

  let need_visit_list = [];

  need_visit_list.push(queue);
  visited[0][0] = 0;

  //visit 확인   ->   처음보는곳 list 추가
  while (need_visit_list.length > 0) {
    let size = need_visit_list.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = need_visit_list.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          if (nx == n - 1 && ny == m - 1) {
            return ++answer;
          }
          need_visit_list.push([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }
    answer++;
  }

  return -1;
}

function solution(maps) {
  var answer = 1;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  let visited = maps;

  let n = maps.length;
  let m = maps[0].legnth;

  let need_visit_list = [];
  need_visit_list.push([0, 0]);
  visited[0][0] = 0;

  while (need_visit_list.length > 0) {
    let size = need_visit_list.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = need_visit_list.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        console.log(nx, ny);
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          console.log("pass");
          if (nx == n - 1 && ny == m - 1) {
            return ++answer;
          }
          need_visit_list.push([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }
    answer++;
  }

  return -1;
}
