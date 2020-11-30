import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { SService } from '../services/s.service';
@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.scss']
})

export class MainChatComponent implements OnInit {
  CurrentUser: any;
  @ViewChild('msg') msg: ElementRef;
  messages = new Map();
  constructor(public route: Router, public service: SService, private db: AngularFirestore) { }
  async ngOnInit(): Promise<void> {
   // this.service.getAllOldMessages();
    this.service.oldMessages.subscribe(
      (d) => {
        if (d){
          const map = new Map(Object.entries(d));
          this.messages = map;
        }
      }
   );
    this.service.recivedMessage.subscribe(async (data) => {
      if (data){
        if (this.messages.has(`${data.from}`)){
        const oldMsgs = await this.messages.get(`${data.from}`);
        this.messages.set(`${data.from}`, [data, ...oldMsgs]);
        }else{
        this.messages.set(`${data.from}`, [data]);
        }
      }
    });
  }
  isPropPresent = (obj: Map<any, any>, user) => {
    return obj.has(user);
  }
  sendmessage = async () => {
    this.service.sendMessage(
      this.service.currentUser.user,
      this.service.userName,
      this.msg.nativeElement.value)
      .subscribe(async (data) => {
        if (data){
          this.msg.nativeElement.value = '';
          if (this.messages.has(`${data.to}`)){
          const oldMsgs = await this.messages.get(`${data.to}`);
          this.messages.set(`${data.to}`, [data, ...oldMsgs]);
          }else{
          this.messages.set(`${data.to}`, [data]);
          }
        }
      });
    console.log('messages');
    console.log(this.messages);
  }
  temp (dd){
console.log(typeof dd);
console.log(dd);
  }
}
