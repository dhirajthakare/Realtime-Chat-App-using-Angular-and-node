import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { GroupChatBoxComponent } from './group-chat-box/group-chat-box.component';

const routes: Routes = [
  { path: '', component: ChatBoxComponent },
  { path: 'groupchat', component: GroupChatBoxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
