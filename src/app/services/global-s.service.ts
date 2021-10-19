import { Injectable} from '@angular/core';
import { io } from 'socket.io-client';
import PouchDB from 'pouchdb'
import { type } from 'os';
//var pdb=require('../../../node_modules/pouchdb-all-dbs/dist/pouchdb.all-dbs.min.js')
//var PouchDB = require('pouchdb');
// var k =require('../../../node_modules/pouchdb-all-dbs/dist/pouchdb.all-dbs.min.js');
// name=> name of the ppl who our user is sending msg
//messageSource=> from our user perceptive 
type messageDocT = {
  id?:string,
  name:string,
  messageSource:'to'|'from',
  message:string,
  date:number
}
@Injectable({
  providedIn: 'root'
})
export class GlobalSService{
  
pouchDb!: PouchDB.Database<{}>
  constructor() {  
  }
 name!:string;
 current = new Date();
 users!:Array<any>
//  =[
//   {
//     id:'dssd',
//     user:'1'
//   },
//   {
//    id:'dsresd',
//    user:'2'
//  },{
//    id:'dsersd',
//    user:'3'
//  },{
//    id:'dsssd',
//    user:'4'
//  },{
//    id:'dsdsd',
//    user:'5'
//  },
//  {
//    id:'ds34sd',
//    user:'6'
//  },
//  {
//   id:'dss43d',
//   user:'7'
// },{
//   id:'ds34sd',
//   user:'8'
// },{
//   id:'dss3d',
//   user:'9'
// },{
//   id:'d4ssd',
//   user:'10'
// },  {
//  id:'ds23sd',
//  user:'11'
// },
// {
// id:'dss4d',
// user:'12'
// },{
// id:'dssd3',
// user:'13'
// },{
// id:'ds34sd',
// user:'14'
// },{
// id:'dss34d',
// user:'15'
// },
// {
// id:'dss34d',
// user:'16'
// },
// {
// id:'dss34d',
// user:'17'
// },{
// id:'dss43d',
// user:'18'
// },{
// id:'ds433sd',
// user:'19'
// },{
// id:'ds43sd',
// user:'20'
// },
// ]
setConn =(userNAme:string)=>{
  const socket = io("localhost:3000", {
    reconnectionDelayMax: 10000,
     query: { "userName": userNAme } 
   });
   socket.on('users',(rs)=>{
    this.users = rs.filter((v:any)=>{
      return v.user != this.name
    })
   })
   socket.on('new_message',(rs)=>{
     console.log('recievd msg')
    console.log(rs)
    //here
   })
   
}
setDB=(un:string)=>{
this.pouchDb= new PouchDB(un);
}
getAllDocs=()=>{
  if(this.pouchDb){
    this.pouchDb .allDocs({
      include_docs: true,
      attachments: true
    }).then((rs)=>{
      console.log("DB results")
      console.log(rs)
    }).catch((error)=>{
      console.log("DB error")
      console.log(error)
    })
  }else{
    console.log('no DB')
  }
}
setMsg=(msg:string, name:string,date:number, sender:'to'|'from'='to')=>{
  var db = this.pouchDb
  var msgg:messageDocT = {
    name:name,
    messageSource:sender,
    message:msg,
    date: date
  }
  console.log('mg in setMsg')
  console.log(msgg)
  if(db){
    db.post(
      msgg
    ).then((res)=>{
      console.log('msg added',res)

    }).catch((e)=>{
      console.log('error saving DOC',e)
    })
  }
}
}
