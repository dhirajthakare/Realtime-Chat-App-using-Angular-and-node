import { Component, OnInit } from '@angular/core';
import { SocketIoServiceService } from '../socket-io-service.service';

@Component({
  selector: 'app-group-chat-box',
  templateUrl: './group-chat-box.component.html',
  styleUrls: ['./group-chat-box.component.css'],
})
export class GroupChatBoxComponent implements OnInit {
  constructor(private service:SocketIoServiceService) {}

  user: string = '';
  room: string = '';
  messageText: string = '';
  allMessage: any = [];

  ngOnInit(): void {
    this.getEmitedValue();
  }

  getEmitedValue(){
    this.service.getJoinUser().subscribe(res=>{
      this.allMessage.push(res);
    })
    this.service.getLeaveUser().subscribe(res=>{
      this.allMessage.push(res);
    })
    this.service.getMessage().subscribe(res=>{
      this.allMessage.push(res);
    })
  }

  join() {
    this.service.joinRoom({user:this.user,room:this.room})
  }

  leave() {
    this.service.leaveRoom({user:this.user,room:this.room})
  }
  sendMessage() {
    if(this.messageText){
      this.service.sendMessage({user:this.user,room:this.room,message:this.messageText})
    }
    this.messageText = '';
  }
}
