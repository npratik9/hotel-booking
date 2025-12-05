const http = require("http")
const app = require("./src/config/express.config")

const htttpServer = http.createServer(app)

const HOST='127.0.0.1'
const PORT = 9005

htttpServer.listen(PORT, HOST, (error)=>{
    console.log("Server is running in port: ",PORT)
    console.log("Press ctrl+c to disconnect...")
})