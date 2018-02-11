import { Component } from '@angular/core';
import { WebService } from './../web.service';

@Component({
  selector: 'app-dashboard-friends',
  templateUrl: './dashboard-friends.component.html',
  styleUrls: ['./dashboard-friends.component.css']
})

export class DashboardFriendsComponent  {
  
  constructor(private webService : WebService) {}

}
