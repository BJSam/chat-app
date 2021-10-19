import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalSService } from '../services/global-s.service';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})

export class ChatAreaComponent implements OnInit {
  id!:string
  text!:string
  sendMessage =(msg:string,id:string)=>{
    if(!id) {
      console.log('No Id found in sendMessage')
      return 
    }
    var time:number=this.gs.current.getTime()
    //http://localhost:3000/sendMM?msg=hello&to=sam-1634556635607&from=iooioi&date=53653256
    this.http.get(`http://localhost:3000/sendMM?msg=${msg}&to=${id}&from=${this.gs.name}&date=${time}`)
    .subscribe(
      (res)=>{
        this.gs.setMsg(msg.trim(),id,time)
        this.text =''
      },(e)=>{
        console.log("http msg send error",e)
      }
    )
  }
  constructor(private router: Router,private Aroute: ActivatedRoute,public gs:GlobalSService,private http: HttpClient,) { }
  getMsg =(id:string)=>{
    if(this.gs.pouchDb){
      this.gs.pouchDb.allDocs({
        include_docs: true,
        attachments: true
      }).then((res)=>{
        console.log('mesgs form db query', res)
      }).catch(e=>{
        console.log('error in dg query',e)
      })
    }
  }
  checkuser(id:string){
    return this.gs.users.find(e=>e.user == id)
  }
  ngOnInit(): void {
    this.Aroute.params.subscribe((params) => {
     if(params.id && this.gs.users && this.gs.users.find(e=>e.user == params.id)){
      this.id = params.id
     }else{
      this.router.navigate(['chat'])
     }
  });
  }

}
