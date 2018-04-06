const net  = require("net")
// const moment = require("moment")
const port = process.argv[2]

// const server = net.createServer(socket => {
//     const time = moment().format('YYYY-MM-DD HH:MM')
//     socket.write(time)
//     socket.end('\n')
// })

// server.listen(port)

const zeroCorrection = i => {
    return (i < 10 ? '0':'')+i 
}

const now = () => {
    const d = new Date()
    return d.getFullYear() + '-'+
    zeroCorrection(d.getMonth()+1) + '-'+
    zeroCorrection(d.getDate()) + ' '+
    zeroCorrection(d.getHours()) + ':'+
    zeroCorrection(d.getMinutes())
}

const server = net.createServer(socket => {
    socket.end(now() + '\n')
})

server.listen(Number(port))