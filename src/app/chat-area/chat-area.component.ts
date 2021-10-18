import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalSService } from '../services/global-s.service';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})

export class ChatAreaComponent implements OnInit {
  
  id!:string
  constructor(private Aroute: ActivatedRoute,public gs:GlobalSService) { }
  

  ngOnInit(): void {
    this.Aroute.params.subscribe((params) => {
     if(params.id){
      this.id = params.id
     }
  });
  }

}
