var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){ //client sends
    io.emit('posting:message', msg); //broadcast
  });
});

http.listen(1337, function(){
  console.log('listening on 1337 skeet skeet')
});
