
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname,'./../public');
const port = process.env.PORT || 3000;
var app =express();

var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New user connected');


    socket.emit('newMessage',{
        from: 'rich@example.com',
        text: 'Hey What is going on it is rich',
        createAt: 345345345
    });

    socket.on('createMessage',(createMessage)=>{
        console.log('createMessage',createMessage);
    });


    socket.on('disconnect',(socket)=>{
        console.log('disconnected');
    });
});



server.listen(port,()=>{
    console.log(`Server is started at port ${port}`);
});