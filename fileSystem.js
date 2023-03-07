const fs = require('fs')

let file = fs.readFileSync(process.argv[2])

file = file.toString()
file = file.split('\n')

console.log((file.length) - 1)

//const fs = require('fs')

//const contents = fs.readFileSync(process.argv[2])
//const lines = contents.toString().split('\n').length - 1
//console.log(lines)
