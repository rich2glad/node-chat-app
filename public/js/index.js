var socket = io();

    socket.on('connect', function (){
        console.log('connected to server');
    });

   

    socket.on('disconnect',function(){
          console.log('disconnected from server');
     });


     socket.on('newMessage', function(newMessage){
        //console.log('New Message',newMessage );
        var li = jQuery('<li></li>');
        li.text(`${newMessage.from}: ${newMessage.text}`);
        jQuery('#messages').append(li);
     });

    //  socket.emit('createMessage',
    //  {
    //     from:'Gladius',
    //     text:'Hi'
    //  },function(data){

    //      console.log('Got it',data);
    //  });

     jQuery('#message-form').on('submit',function(e){
        e.preventDefault();
        socket.emit('createMessage',{
            from:'User',
            text: jQuery('[name=message]').val()
        },function(){

        });
     });

    