import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer();
const socketServer = new Server(server);

const createSocketServer = (app) => {
  socketServer.on('connection', (socket) => {
     socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
  socketServer.listen(5001);
};

export default socketServer;
export { createSocketServer };