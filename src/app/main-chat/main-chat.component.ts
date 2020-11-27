import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(public route: Router, private Activeroute: ActivatedRoute, public service: SService) { }

  ngOnInit(): void {
    this.service.recivedMessage.subscribe(async (data) => {
      if (data){
        if (this.messages.has(`${data.from}`)){
        const oldMsgs = await this.messages.get(`${data.from}`);
        this.messages.set(`${data.from}`, [data, ...oldMsgs]);
        }else{
        this.messages.set(`${data.from}`, [data]);
        }
      }
      //console.log(this.messages);
    });
  }
  isPropPresent = (obj: Map<any, any>, user) => {
    //console.log('username:||' + user);
    return obj.has(user);
  }
  sendmessage = async () => {
    this.service.sendMessage(
      this.service.currentUser.user,
      this.service.userName,
      this.msg.nativeElement.value)
      .subscribe(async (data) => {
        if (data){
          if (this.messages.has(`${data.to}`)){
          const oldMsgs = await this.messages.get(`${data.to}`);
          this.messages.set(`${data.to}`, [data, ...oldMsgs]);
          }else{
          this.messages.set(`${data.to}`, [data]);
          }
          //console.log(this.messages);
        }
      });
  }
}
