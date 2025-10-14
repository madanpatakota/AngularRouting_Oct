import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class OrdersService {
  getOrders() {
    return [
      {
        OrderID: 1,
        OrderName: 'Veg-Food',
        OrderLocation: 'Bangolore',
      },
      {
        OrderID: 2,
        OrderName: 'Non-Veg-Food',
        OrderLocation: 'Bangolore',
      },
    ];
  }


  getCustomersList(){
    return [
      {
        OrderID: 1,
        CustomerName : "Ravi",
        CustomerFoodName : ["Daal","Rice"],
        CustomerAge  : 25,
        CustomerGender : 'Male',
        CusotmerLocation : 'Bangolore',
        Information   : "He is a software engineer from HSR Layout"
      },
      {
        OrderID: 2,
        CustomerName : "Ram",
        CustomerFoodName : ["CB","Non-veg-curry"],
        CustomerAge  : 24,
        CustomerGender : 'Male',
        CusotmerLocation : 'Bangolore',
         Information   : "He is a HR from BTM"
      },
    ];
  }



}
