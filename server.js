require('dotenv').config();

const http = require('http');
const route = require('./route')

const port = process.env.PORT;


http.createServer(route.reqHandler).listen(port,()=>{
    console.log(`Server Running on ${port}`)
})