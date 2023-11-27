const express = require('express');
const port = 8000;
const server = express();


server.listen(port,function(err){
    if(err){
        console.log(err.message);
        return;
    }
    console.log(`server upon port:${port}`);
})