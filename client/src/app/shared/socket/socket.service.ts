import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:5000'); // Replace with your socket server URL
  }

  public getMessages(): Observable<string> {
    return new Observable<string>((observer) => {
      this.socket.on('chat message', (message: string) => {
        observer.next(message);
      });
    });
  }
}
