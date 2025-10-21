import { Component, OnInit } from '@angular/core';
import { userService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularRouting_Oct';


  constructor(private userServce : userService){
  }

  ngOnInit() {
      this.userServce.usernameEmitter.subscribe((uname:string) =>{
          this.userName = uname;
      });
  }

  locastorageItem : string | null = localStorage.getItem('username');
  userName        : string        = this.locastorageItem ? this.locastorageItem : 'Guest';




}
