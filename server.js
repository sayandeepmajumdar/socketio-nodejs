const express = require('express');
const socketio = require('socket.io');

const app = express();
const path = require('path');




app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});
app.get('/sever', (req, res) => {
    res.send("Hello World");
});

const PORT = 5001;
const server = app.listen(PORT, () => {
    console.log('Server running! '+ PORT)
});

const io = socketio(server)

io.on('connection', (socket) => {
    console.log(`New connection: ${socket.id}`);

    // socket.emit('notification', 'Thanks for connecting to Codedamn!')

    socket.on('message', (data) => {
        console.log(`New message from ${socket.id}: ${data}`);
    })

})