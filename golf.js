function golfScore(par, strokesfor) {
  let namedScore
  if(par === (strokesfor + 1)){
    namedScore = 'Birdie'
  }else if(par === (strokesfor - 1)){
    namedScore = 'Bogey'
  }else if(par === (strokesfor - 2)){
    namedScore = 'Double Bogey'
  }else if(par === strokesfor) {
    namedScore = 'Par'
  } else if(strokesfor === 1){
    namedScore = 'Hole-in-one!'
  }else if(par === strokesfor + 2){
    namedScore = 'Eagle'
  }else {
    namedScore = 'Go Home!'
  }
  return namedScore
}

console.log(golfScore(4, 7))
console.log(golfScore(4, 6))
console.log(golfScore(4, 5))
console.log(golfScore(4, 4))
console.log(golfScore(4, 3))
console.log(golfScore(4, 2))
console.log(golfScore(4, 1))
