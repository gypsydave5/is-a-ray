#is-a-ray
Answer once and for all the burning question: is this a Ray?

##Installation
```
npm install is-a-ray --save
```

##Usage
```
var isARay = require('is-a-ray')

isARay('Ray Winstone') // true
isARay('Stevie Ray Vaughan') // true
isARay('"Ray of Light" (Madonna Single)') // true (so be it)


isARay('Fay Wray') // false
isARay('A ray of light') // false
isARay('Rays') // false (they are more than one Ray)
isARay('Array') // false
isARay([]) // false
isARay(new Array) // false
```

##Contributing
Feel free to open a pull request if you think that I may have missed a Ray.

###Tests
Tests use [Tape] - only accept the best when testing for Rays - and are run with
`npm test`

###Formatting
The code is formatted to the [standard.js] standard.

##Inspiration
Inspired by the wonderful [isarray] package.

##License
MIT Romney

[Tape]: https://github.com/substack/tape
[isarray]: https://www.npmjs.com/package/isarray
[standard.js]: https://github.com/feross/standard