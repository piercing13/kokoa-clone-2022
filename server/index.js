const express = require('express');
const app= express();
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');

app.use(cors());

const server= http.createServer(app);

const io=new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    },
});

const CHAT_BOT = 'ChatBot';

let chatRoom = '';
let allUsers = [];

//Listen for when the client connects via socket.io-client
io.on('connection', (socket)=> {
    console.log(`User connected ${socket.id}`);

    socket.on('join_room', (data)=> {
        const {username} = data; //Data sent from client when join_room event emitted
        socket.join(room); // Join the user to a socket room

        let __createdtime__ = Date.now();
        //Send msg to all users currently in the room
        socket.to(room).emit('receive_message', {
            message: `${username} has joined the chat room`,
            username: CHAT_BOT,
            __createdtime__,
        });
    });
    
    
    allUsers.push({id: socket.id, username});
    

});

//Add a user to a room


app.get('/', (req, res) => {
    res.send('Hello world');
  });

server.listen(4000,() => 'Server is running on port 4000');
