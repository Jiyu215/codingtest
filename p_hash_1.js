//해시 > 완주하지 못한 선수
function solution (participant, completion){
  const map = new Map(); //선수와 선수의 수를 저장

  for (let i = 0; i<participant.length; i++){
    let p = participant[i],
        c = completion[i];
    
  //map.set(key, value)으로 저장 , map.get(key,value) 해당 값을 가져오는데 없으면 undefiend
  //동명이인이 있을 경우때문에 이름에 해당하는 선수의 수를 값을 저장
    map.set(p, (map.get(p)||0)+1); //map에서 참가자값이 없으면 0+1, 있으면 map.get(p)+1
    map.set(c, (map.get(c)||0)-1); //map에서 완주한 참가자의 값이 있으면 -1을 함.
  }

  for(let [name, value] of map){
    //완주를 한 참가자는 0이 될 것이고, 그게 아닐 경우는 1이상이 될 것임.
    //동명이인의 경우 예를 들어 3명이 있고, 2명이 완주한다고 했을때도 3-2 = 1이 남음. 따라서 이름이 한번 출력됨
    if(value>0) return name; 
  }
  return 'notiong';
}
