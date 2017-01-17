function countdown(callback) {
  window.setTimeout(callback() , 2000)
}

function createMultiplier(multiplierValue) {
  if (multiplierValue === 2) {
    return function (number) {number * 2}
  }
  else if (multiplierValue === 3) {
    return function (number) {number * 3}
  }
  else {

  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


function multiplier(a, b) {
  return a * b
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
