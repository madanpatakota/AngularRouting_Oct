import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor(private orderservice:OrdersService  , private router:Router){}
  
  Orders:any = [];
  ngOnInit(): void {
      this.Orders = this.orderservice.getOrders();
  }

  evtNavigation(orderID:any){

    //Pass based on the params
     //this.router.navigate(['/orders-details', orderID])

    //Pass based on the query params

    //control means condition based navigation

    // let choice = "No";
    // if(choice == "Yes")
    // {
       //this.router.navigate(['/orders-details'], {queryParams:{ID:orderID}})
   // }

     //this.router.navigate(['/orders-details'], {fragment:orderID})
  }

}
