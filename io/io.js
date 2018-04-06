const fs = require("fs")

const buff = fs.readFileSync(process.argv[2], 'utf8')
console.log(buff.toString().match(/\n/g).length)