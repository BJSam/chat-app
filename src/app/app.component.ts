import { Component, OnInit } from '@angular/core';
import { SService } from './services/s.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public service: SService, ){}
  title = 'chatApp';
}
