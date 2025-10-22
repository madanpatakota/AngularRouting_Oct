import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersDetailsComponent } from './orders/orders-details/orders-details.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { exitGuard } from './exit.guard';
import { OrdersTestComponent } from './orders-test/orders-test.component';

//path = address

// 1. based on your path(ex:home)      ---> homelocation(homecompoennt)
// 2. based on your path(ex:aboutus)   ---> aboutus(aboutuscompoennt)


//step 1 : Declare the routes
const routes: Routes = [
  // {
  //   path: '',                   //https://locahost:4200
  //   component:HomeComponent,
  // },
  {
    path: '',                   //https://locahost:4200
    redirectTo:'aboutus',
    pathMatch:'full'
  },
  {
    path: 'home',                //https://locahost:4200/home
    component: HomeComponent,
    children:[{
      path:'hometest',             //https://localhost:4200/home/hometest
      component:OrdersTestComponent
    }]
  },
  {
    path: 'aboutus',             //https://locahost:4200/aboutus
    component: AboutusComponent,
  },
  {
    path: 'orders',             //https://locahost:4200/aboutus
    component: OrdersComponent,
    children:[
      {
        path:'orderstest',                         //https://localhost:4200/orders/orderstest
        component:OrdersTestComponent
      }
      // {
      //   path:'orderstesttest',                  //https://localhost:4200/orders/orderstesttest
      //   component:_______
      // }
    ]
  },
  // {
  //   path:'orders/orderstest',                  //https://localhost:4200/akkkkkagbgggg
  //   component:OrdersTestComponent
  // },
  {
    path: 'login',             //https://locahost:4200/login
    component: LoginComponent,
  },
  {
    path: 'orders-details/:orderID',    //https://locahost:4200/orders/orders-details/1
    //                                   http://localhost:4200/orders-details
    component: OrdersDetailsComponent,
    canActivate   : [authGuard],
    canDeactivate : [exitGuard]
  },
  {
    path:'**',                  //https://localhost:4200/akkkkkagbgggg
    component:NotfoundComponent,
    data : { message: 'Page not found!'}    // i can take the data from the route also
  }

  // {
  //   path:'**',                  //https://localhost:4200/akkkkkagbgggg
  //   redirectTo:'home',
  //   pathMatch:'full'
  // }
];

//https://loclhost:4200/home    ----> home component
//https://loclhost:4200/aboutus ----> aboutus componet

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutusComponent, NotfoundComponent, OrdersComponent, OrdersDetailsComponent, LoginComponent, OrdersTestComponent],
  imports: [BrowserModule , FormsModule, RouterModule.forRoot(routes)],         //register the routes
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
