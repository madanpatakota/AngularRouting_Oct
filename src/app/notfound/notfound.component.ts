import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {

  constructor(private activateRoute : ActivatedRoute) { }


  // here in this case activate route is  //https://localhost:4200/akkkkkagbgggg


  messageInfo = "";
  ngOnInit(): void {
      this.activateRoute.data.subscribe(
        (result)=>{
          console.log(result['message']);    //{ message: 'Page not found!'}
          this.messageInfo = result['message'];    //array and objects
        }
      )
  }



}
