const http = require("http")
const concat = require("concat-stream")

http.get(process.argv[2], (resp)=>{
    resp.setEncoding('utf8')
    resp.on('error', err =>{
        return console.log(err)
    })
    const concatBuffer = concat(buffer => {
        console.log(buffer.length)
        console.log(buffer.toString())
    })
    resp.pipe(concatBuffer)
})