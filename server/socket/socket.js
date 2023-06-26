import http from 'http';
import { Server } from 'socket.io';

const createSocketServer = (app) => {
  const server = http.createServer(app);
  const io = new Server(server);
  
  io.on('connection', (socket) => {
    console.log('A user connected');
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  
    // Chat event listeners
    socket.on('chat message', (message) => {
      io.emit('chat message', [message]); // Broadcast the message to all connected clients
    });
  });
};

export default createSocketServer;