import { Component, OnInit } from '@angular/core';
import { GlobalSService } from '../services/global-s.service';

@Component({
  selector: 'app-default-screen',
  templateUrl: './default-screen.component.html',
  styleUrls: ['./default-screen.component.scss']
})
export class DefaultScreenComponent implements OnInit {

  constructor(public sg:GlobalSService) { }

  ngOnInit(): void {
  }

}
