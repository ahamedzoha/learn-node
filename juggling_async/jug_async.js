var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}

// const http = require("http")
// const  asyncs = require("async")
// const bl = require("bl")
// const urls = process.argv.slice(2);

// //Needed to use Async module to avoid nesting callbacks

// asyncs.eachSeries(urls, (url, callback) =>{
//     http.get(url, response => {
//         response.pipe(bl((err, data) => {
//             if (err) return callback(err)
//             data = data.toString()
//             console.log(data)
//             callback()
//         }))
//     })
// })
 
 