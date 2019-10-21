function dwarfRollCall(dwarves) {
  let rollCall= '';
  for (let i = dwarves.length/2; i < dwarves.length; i++){
    rollCall += `${i+1}. ${dwarves[i]} `;
  }
  return rollCall;
}

function summonCaptainPlanet(planeteerCalls){
  let callCaptain = [];
  for (let i = 0; i < planeteerCalls.length; i++){
    callCaptain.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return callCaptain;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  let cheeses = ['cheddar', 'gouda', 'camembert'];
  for (let i = 0; i < foods.length; i++){
    for (let j = 0; j < cheeses.length; j++){
      if (foods[i] === cheeses[j]){
        return foods[i];
      }
    }
  }
  return 'no cheese!';
}


function wordsWithB(words){
  let startB = [];
  for(let i = 0; i < words.length; i++){
    if (words[i][0] === 'b'){
      startB.push(words[i]);
    }
  }
  return startB;
}
