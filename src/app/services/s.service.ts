import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import * as socketIO from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SService {
  userName;
  userObserver = new BehaviorSubject(null);
  usersListObserver = new BehaviorSubject(null);
  usersList;
  socket: any;
  currentUser;
  profileDetails: any = null;
  recivedMessage = new BehaviorSubject(null);
  recentChatUsers = new BehaviorSubject(null);
  oldMessages = new BehaviorSubject(null);
  constructor(private http: HttpClient, private db: AngularFirestore) {
    if (this.socket){
      console.log(this.socket);
      this.socket.on('new_message', (data) => {
        console.log('new_message data' + data);
      });
    }
    // setInterval(() => {
    //   const httpVal = this.http.get('http://localhost:3000/users');
    //   console.log(httpVal);
    // }, 500);

    this.userObserver.subscribe(async val => {
  if (val){
    let temp;
    this.userName = val;
    this.socket = temp = await socketIO.io('http://localhost:3000', {
      query: {
        userName: val,
        msg: 'helo2',
        newMsg: 7,
        imgUrl: '../../assets/f3.jpg'
      }
    });
    this.getAllOldMessages(this.userName);
    temp.on('new_message', (data) => {
      console.log(data);
      this.recivedMessage.next(data);
    });
  }
  console.log(val);
  });
    this.usersListObserver.subscribe(val => {
    if (val){
      this.usersList = [...this.usersList, val];
    }
  });
  }
  getUsers(except?): Observable<any[]>{
    if (except){
     const httpUrl = 'http://localhost:3000/users?except=' + except;
     return  this.http.get<any[]>(httpUrl);
    }
    else{
      return  this.http.get<any[]>('http://localhost:3000/users/');
    }
  }
  // getSocketId: Observable<any> = (user: any) => {
  //   const httpUrl = 'http://localhost:3000/users/socketid/' + user;
  //   return  this.http.get<any>(httpUrl);
  // }
  async getSocketId(user): Promise<Observable<any>>{
    if (user){
    const httpUrl = 'http://localhost:3000/users/socketid/' + user;
    return  this.http.get<any>(httpUrl);
    }
  }
  sendMessage(to, from, msg): Observable<any>{
    if (to && from && msg){
      const httpUrl = `http://localhost:3000/sendprivatemsg/?from=${from}&&to=${to}&&msg=${msg}&&date=${new Date().getTime()}`;
      return  this.http.get<any[]>(httpUrl);
     }
  }
  getAllOldMessages = async(user) => {
    const httpUrl = `http://localhost:3000/getusersandoldchats/${user}`;
    this.http.get<any[]>(httpUrl).subscribe((dt) => {
      this.oldMessages.next(dt);
      this.recentChatUsers.next(Object.keys(dt));
      console.log(Object.keys(dt));
    });
    }
}
