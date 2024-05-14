// server.js

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', (socket) => {
    console.log('Usuário conectado')

    socket.on('chat message', (data) => io.emit('chat message', data));

    socket.on('disconnect', () => console.log('Usuário desconectado'));
});

http.listen(3000, () => {
    console.log(`Servidor rodando - Link http://localhost:3000`)
});
