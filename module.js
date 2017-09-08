function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

  let counter = 0

  return function() {
     console.log(list[counter])
     counter++
     if (counter >= list.length){
      counter = 0
     }
  }
}

var rollLoadedDie = makeLoadedDie();

module.exports = {
  makeLoadedDie: rollLoadedDie,
}
