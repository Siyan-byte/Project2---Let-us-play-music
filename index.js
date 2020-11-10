//Initialize the express 'app' object
let express = require('express');
let app = express();
app.use('/', express.static('public'));

//Initialize the actual HTTP server. Be able to access the 
// http server to establish a proper socket connection 

let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});


//Initialize socket.io
let io = require('socket.io').listen(server);

//Listen for individual clients/users to connect
io.sockets.on('connection', function (socket) {
    console.log("We have a new client: " + socket.id);

    //Listen for a message named 'button' from this client
    socket.on('button', function(button){
        
        console.log("Received a 'button' event");
        console.log(button);

        //Send a response to all clients, including this one
        io.sockets.emit('button', button);

    });

    //Listen for this client to disconnect
    socket.on('disconnect', function () {
        console.log("A client has disconnected: " + socket.id);
    });
});