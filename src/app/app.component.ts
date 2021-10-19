import { Component, Input, OnInit } from '@angular/core';
import { Socket } from 'socket.io-client';
import Swal from 'sweetalert2';
import { GlobalSService } from './services/global-s.service';
import PouchDB from 'pouchdb'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ChatApp';
  name: string = 'Loading...';
  current = new Date();
  constructor(public gs: GlobalSService, ) {
 
  }
  ngOnInit(): void {
   
    if (!this.gs.name && !this.gs.pouchDb) {
      Swal.fire(
        {
          title: 'Enter your name',
          input: 'text',
          inputLabel: 'Nic Name works',
          inputPlaceholder: 'Enter your Name',
          allowOutsideClick: false,
          inputValidator: (value) => {
            if (!value || value.trim().length==0) {
              return 'we require you name'
            } 
            else if(value.trim().length>6) return 'Pls enter nick name, this is not your job appplication form \n( ͡~ ͜ʖ ͡°)'
            else return ''
          },

        }
      ).then((res) => {
        if (res.value)
          this.gs.name = (res.value + '-' + this.current.getTime()).toLowerCase()
        this.name = (res.value + '-' + this.current.getTime()).toLowerCase()
        this.gs.setConn(this.name)
        //this.gs.setDB(this.name)
      })
    }
  }
}
