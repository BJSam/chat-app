import { Component, OnInit } from '@angular/core';
import { SService } from '../services/s.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  constructor(public service: SService ) { }

  ngOnInit(): void {
  }

}
