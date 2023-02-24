const app = require('express')();
const http = require('http').Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: ["https://angular-chat-app-og69.vercel.app","http://localhost:4200"],
  },
});
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log("connection");
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });

  socket.on('join room',(data)=>{

    socket.join(data.room);
    console.log(data.user + ' joined the room : ' + data.room);
    socket.broadcast.to(data.room).emit('new join room user',{user:data.user, message:' has joined this room.'})

  })

  socket.on('leave room',(data)=>{

    console.log(data.user + ' left the room : ' + data.room);
    socket.broadcast.to(data.room).emit('leave room user',{user:data.user, message:' has left this room.'})
    socket.leave(data.room);

  })

  socket.on('send message',(data)=>{
    io.in(data.room).emit('get message',{user:data.user, message:data.message})
  })
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
