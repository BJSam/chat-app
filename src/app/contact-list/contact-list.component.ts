import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { GlobalSService } from '../services/global-s.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent  {

  constructor(public sv:GlobalSService) { }


}
