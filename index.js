module.exports = isARay

function isARay (string) {
  if (string.indexOf('Raymond') >= 0) return 'maybe'
  return string.indexOf('Ray ') >= 0
}
