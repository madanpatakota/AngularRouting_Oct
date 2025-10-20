import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/orders.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit {

  constructor(public activateRoute:ActivatedRoute , public orderservice:OrdersService){}


  SelectedCustoemrs :any;

  OrderInfo :any;
  ngOnInit(): void {
    //http://localhost:4200/orders-details/1
    
    
    this.activateRoute.params.subscribe((result:any)=>{
        console.log("From orderdetails " , result);  //{orderid:1}
        this.OrderInfo = result;//{orderId:1}
        let custoemrsList = this.orderservice.getCustomersList();

        setTimeout(() => {
         this.SelectedCustoemrs = custoemrsList.filter((customer)=>{
             return customer.OrderID == Number(result.orderID) ;   
          });
        },1000);
       

        // console.log(this.SelectedCustoemrs.length)
    })



    this.activateRoute.queryParams.subscribe((result:any)=>{
        console.log("Query params " , result);    // {ID : 1}

       let custoemrsList = this.orderservice.getCustomersList();
        this.SelectedCustoemrs = custoemrsList.filter((customer)=>{
           return customer.OrderID == Number(result.ID) ;   
        }); 
    })


    
    // this.activateRoute.fragment.subscribe((result:any)=>{
    //    console.log("Fragment " , result);    //1

    //    let custoemrsList = this.orderservice.getCustomersList();
    //    this.SelectedCustoemrs = custoemrsList.filter((customer)=>{
    //        return customer.OrderID == result ;   
    //     }); 
    // })



  }
}



// Summary : I need to  focus once i  subscribed the params , queryparams , fragment i need to understand what is the
// Result...