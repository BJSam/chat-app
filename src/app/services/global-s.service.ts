import { Injectable, OnInit } from '@angular/core';
import { io ,Socket} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class GlobalSService{
  constructor() { 
    
  }
 name!:string;
 users:Array<any>
 =[
  {
    id:'dssd',
    user:'1'
  },
  {
   id:'dsresd',
   user:'2'
 },{
   id:'dsersd',
   user:'3'
 },{
   id:'dsssd',
   user:'4'
 },{
   id:'dsdsd',
   user:'5'
 },
 {
   id:'ds34sd',
   user:'6'
 },
 {
  id:'dss43d',
  user:'7'
},{
  id:'ds34sd',
  user:'8'
},{
  id:'dss3d',
  user:'9'
},{
  id:'d4ssd',
  user:'10'
},  {
 id:'ds23sd',
 user:'11'
},
{
id:'dss4d',
user:'12'
},{
id:'dssd3',
user:'13'
},{
id:'ds34sd',
user:'14'
},{
id:'dss34d',
user:'15'
},
{
id:'dss34d',
user:'16'
},
{
id:'dss34d',
user:'17'
},{
id:'dss43d',
user:'18'
},{
id:'ds433sd',
user:'19'
},{
id:'ds43sd',
user:'20'
},
]
setConn =(userNAme:string)=>{
  const socket = io("localhost:3000", {
    reconnectionDelayMax: 10000,
     query: { "userName": userNAme } 
   });
   socket.on('users',(rs)=>{
    this.users = rs
   })
}
}
