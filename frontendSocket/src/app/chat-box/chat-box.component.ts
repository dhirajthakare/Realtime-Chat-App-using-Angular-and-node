import { Component, OnInit } from '@angular/core';
import { SocketIoServiceService } from '../socket-io-service.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
})
export class ChatBoxComponent implements OnInit {
  messageArray: any = [];

  constructor(private socket: SocketIoServiceService) {}

  ngOnInit(): void {
    this.getSendMessage();
  }

  getSendMessage() {
    this.socket
      .newUserMsg()
      .subscribe((data) => this.messageArray.push(data));
  }

  sendmessage(data: any) {
    this.socket.sedMsg(data.value);
    data.value = '';
  }
}
