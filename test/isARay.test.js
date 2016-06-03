var test = require('tape')
var isARay = require('../index.js')

test('these things are Rays', function (t) {
  t.plan(5)

  t.ok(isARay('Ray Charles'), '"Ray Charles" is a Ray')
  t.ok(isARay('Stevie Ray Vaughan'), '"Stevie Ray Vaughan" is a Ray')
  t.ok(isARay('Ray Davies'), '"Ray Davies" is a Ray')
  t.ok(isARay('Ray Winstone'), '"Ray Winstone" is a Ray')
  t.ok(isARay('Ray Of Light'), 'Madonna\'s hit "Ray Of Light" is a Ray')
})

test('these things are not Rays', function (t) {
  t.plan(4)

  t.notOk(isARay('A ray of light'), '"A ray of light" is not a Ray')
  t.notOk(isARay('Fay Wray'), '"Fay Wray" is not a Ray')
  t.notOk(isARay('Array'), '"Array" is not a Ray')
  t.notOk(isARay([]), 'An array is not a Ray')
})
