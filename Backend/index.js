const express = require('express');
const port = 8000;
const server = express();
const cors = require('cors');

server.use(cors());
server.get('/',(req,res)=>{
    res.status(200).json({
       message: "Successful Establishment of Connection with Backend Server",
       success:true
    })
})
server.listen(port,function(err){
    if(err){
        console.log(err.message);
        return;
    }
    console.log(`server upon port:${port}`);
})