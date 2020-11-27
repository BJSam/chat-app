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
        if (this.messages.has(`from||${data.from}`)){
        const oldMsgs = await this.messages.get(`from||${data.from}`);
        this.messages.set(`from||${data.from}`, [data, ...oldMsgs]);
        }else{
        this.messages.set(`from||${data.from}`, [data]);
        }
      }
      console.log(this.messages);
    });
  }
  isPropPresent = (obj: Map<any, any>, prop) => {
    // console.log(`from||${prop.user}`);
    // console.log(obj.has(`from||${prop.user}`));
    return obj.has(`from||${prop.user}`);
  }
  sendmessage = async () => {
    this.service.sendMessage(
      this.service.currentUser.user,
      this.service.userName,
      this.msg.nativeElement.value)
      .subscribe((val) => {
        console.log(val);
      });
  }
  getMessageTAg = (user)=>{
    return `from||${user}`;
  }
}
