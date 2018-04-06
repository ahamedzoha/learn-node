const fs = require("fs")

fs.readdir(process.argv[2], (err, data)=>{
    if(err){
        console.log(err)
    }else{
        let regex_test = new RegExp('.+\.'+process.argv[3] + '$')  
        data.filter((element)=>{
            return regex_test.test(element)
        }).forEach((element)=>{
            console.log(element)
        })
    }
})

// var fs = require('fs')
//     var path = require('path')
    
//     var folder = process.argv[2]
//     var ext = '.' + process.argv[3]
    
//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })