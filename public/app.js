window.addEventListener('load', function() {

    //Open and connect socket
    let socket = io();
    //Listen for confirmation of connection
    socket.on('connect', function() {
        console.log("Connected");
    });

// Code to receive a socket message from a server,how to receive music?
socket.on('msg',data)

    sendButton.addEventListener('click', function() {
        let msgObj = { "name": "anonymity", "msg": buttons };

        //Send the message object to the server
        socket.emit('msg', msgObj);
    });
});