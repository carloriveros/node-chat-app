const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));



io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage',generateMessage('Admin','welcome to the chat'))

  socket.broadcast.emit('newMessage',generateMessage('Admin','A new user just joined'))

  socket.on('createMessage',(message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage',generateMessage(message.from,message.text))
    callback();

    // socket.broadcast.emit('newMessage',generateMessage(message.from,message.text))
  })

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage',generateLocationMessage('Admin',coords.latitude,coords.longitude))
  })

  socket.on('disconnect', (socket) => {
    console.log(' user Disconnected');
  })
})



server.listen(port, () =>{
  console.log(`Server is up on port ${port}`)
})
