import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketIoServiceService {
  constructor() {}

  private socket = io(window.location.hostname != 'localhost'?"https://nodejs-backend-for-realtime-chat.onrender.com/":'http://'+window.location.hostname+':5000');

  sedMsg(value: any) {
    this.socket.emit('chat message', value);
  }

  newUserMsg() {
    let observable = new Observable<{ user: String; message: String }>(
      (observer) => {
        this.socket.on('chat message', (data) => {
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );

    return observable;
  }

  joinRoom(data: any) {
    this.socket.emit('join room', data);
  }

  getJoinUser() {
    let observable = new Observable<{ user: String; message: String }>(
      (observer) => {
        this.socket.on('new join room user', (data) => {
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );

    return observable;
  }

  leaveRoom(data: any) {
    this.socket.emit('leave room', data);
  }

  getLeaveUser() {
    let observable = new Observable<{ user: String; message: String }>(
      (observer) => {
        this.socket.on('leave room user', (data) => {
          console.log(data);
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );

    return observable;
  }

  sendMessage(data: any) {
    this.socket.emit('send message', data);
  }

  getMessage() {
    let observable = new Observable<{ user: String; message: String }>(
      (observer) => {
        this.socket.on('get message', (data) => {
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );

    return observable;
  }
}
