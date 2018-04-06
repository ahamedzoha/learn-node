const fs = require("fs")

module.exports = (dirName, extName, callback)=>{
    fs.readdir(dirName, (err, data)=> {
        if (err){
            return callback(err)
        }else{
            let regex_test = new RegExp('.+\.'+extName + '$')  
            data = data.filter((element)=>{
                return regex_test.test(element)
            })
            callback(null, data)
        }
    })
}