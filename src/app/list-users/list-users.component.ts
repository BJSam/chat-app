import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SService } from './../services/s.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  userName =  null;
  constructor(public route: Router, public service: SService) { 

    this.service.userObserver.subscribe(data=>{
      if(data){
        this.userName = data;
      }
    })

  }

  ngOnInit(): void {
  }

}
