var socket = io();

    socket.on('connect', function (){
        console.log('connected to server');

    
    socket.emit('createMessage',{
            to:'rich2@gmail.com',
            text:'Hai how are youfrom rich2'
            });
    });

    socket.on('disconnect',function(){
          console.log('disconnected from server');
     });


     socket.on('newMessage', function(newMessage){
        console.log('New Message',newMessage );
     });