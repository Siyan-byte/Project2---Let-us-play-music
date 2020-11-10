

//Open and connect socket
let socket = io();

//Listen for confirmation of connection
socket.on('connect', function () {
  console.log("Connected");
});


let audio = [];

// Code to receive a socket message (music) from a server
socket.on('button', (data) => {

  audio[data.button].play();
})

// clienside Emit Event,send the number of the button
function play1() {
  socket.emit('button', {
    button: 0
  })
}

function play2() {
  socket.emit('button', {
    button: 1
  })
}

function play3() {
  socket.emit('button', {
    button: 2
  })
}

function play4() {
  socket.emit('button', {
    button: 3
  })
}

function play5() {
  socket.emit('button', {
    button: 4
  })
}

function play6() {
  socket.emit('button', {
    button: 5
  })
}

function play7() {
  socket.emit('button', {
    button: 6
  })
}

function play8() {
  socket.emit('button', {
    button: 7
  })
}

function play9() {
  socket.emit('button', {
    button: 8
  })
}

function play10() {
  socket.emit('button', {
    button: 9
  })
}

function play11() {
  socket.emit('button', {
    button: 10
  })
}

function play12() {
  socket.emit('button', {
    button: 11
  })
}


window.addEventListener('load', function () {

  for (let i = 0; i < 12; i++) {
    audio[i] = new Audio('music/' + i + '.mp3');
  }
});

