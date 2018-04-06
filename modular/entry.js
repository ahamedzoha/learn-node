const worker  = require("./modular")

const callback = (err, data)=>{
    if(err){
        console.log(err)
    }else{
        data.forEach(element => {
            console.log(element)
        })
    }
}
worker(process.argv[2], process.argv[3], callback)