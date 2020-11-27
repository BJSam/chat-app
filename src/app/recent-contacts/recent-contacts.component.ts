import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SService } from '../services/s.service';
@Component({
  selector: 'app-recent-contacts',
  templateUrl: './recent-contacts.component.html',
  styleUrls: ['./recent-contacts.component.scss']
})
export class RecentContactsComponent implements OnInit {
  data = [];
  selectedItem: any =  {
    name: 'jhon',
    msg: 'helo',
    newMsg: 4,
    imgUrl: '../../assets/f1.jpg'
  };
  constructor(public route: Router, public service: SService ) { }

  ngOnInit(): void {
   if (this.service.socket){
    this.service.socket.on('cnn', (dt: any) => {console.log(dt); });
   }
   if (!this.service.userName){
    const user = prompt('Enter your name');
    if (user){
   this.service.userObserver.next(user.toLowerCase().trim());
  }
  }
   setInterval(() => {
 if(this.service.userName){
  this.service.getUsers(this.service.userName).subscribe(val => {
    if (val && this.data.length !== val.length){
      this.data = val;
    }
  });
 }
   }, 1000);
  }
  listClick = (event: any, newValue: object) => {
    this.selectedItem = newValue;
    this.service.currentUser = newValue;
    this.service.profileDetails = null;
    if (this.service.socket){
    console.log(this.service.socket.id);
   }
}
}
