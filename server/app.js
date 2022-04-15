const io = require("socket.io")(3000, {
    cors: {
        origin: ['http://localhost:3001']
    }
})
console.log("Connected");

io.on("connection", socket => {
    console.log(socket.id)
})