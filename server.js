const express = require('express');
// const socketio = require('socket.io');
const bodyParser = require('body-parser');
const http = require('http');
const app = express().use(bodyParser.json()); 
const path = require('path');




app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});
app.get('/sever', (req, res) => {
    res.send("Hello World");
});

app.post('/webhook', (req, res) => {
     
     // print request body
   console.log('Received webhook payload:', req.body);
});

const PORT = 5005;
const server = app.listen(PORT, () => {
    console.log('Server running! '+ PORT)
});

// const io = socketio(server)

// io.on('connection', (socket) => {
//     console.log(`New connection: ${socket.id}`);

//     // socket.emit('notification', 'Thanks for connecting to Codedamn!')

//     socket.on('message', (data) => {
//         console.log(`New message from ${socket.id}: ${data}`);

//         const url = 'http://impinj-15-22-aa.local/api/v1/data/stream';
//         const request = http.get(url, (response) => {
//                     // Check if the response is successful (HTTP 200 status code)
//                     if (response.statusCode === 200) {
//                         // Handle incoming data
//                         response.on('data', (chunk) => {
//                         // Convert the chunk buffer to a string
//                         const chunkString = chunk.toString();
//                         console.log("Data:" + chunkString);

//                         // Emit the data to all connected clients
//                         // io.emit('streamData', "chunkString");
//                          socket.emit('value', chunkString);
//                         });

//                         // Handle end of stream
//                         response.on('end', () => {
//                         console.log('Stream ended');
//                         });

//                         // Handle stream error
//                         response.on('error', (error) => {
//                         console.error('Stream error:', error);
//                         });
//                     } else {
//                         console.error('Request failed with status code:', response.statusCode);
//                     }
//                     });

//     })
   

// //     socket.on('get-value', (data) => {
// //     // Send the value back to the client
// //     socket.emit('value', "Hello World");
// //   });

// })