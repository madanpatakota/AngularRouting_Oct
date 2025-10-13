import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotfoundComponent } from './notfound/notfound.component';

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
  },
  {
    path: 'aboutus',             //https://locahost:4200/aboutus
    component: AboutusComponent,
  },
  {
    path:'**',                  //https://localhost:4200/akkkkkagbgggg
    component:NotfoundComponent
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
  declarations: [AppComponent, HomeComponent, AboutusComponent, NotfoundComponent],
  imports: [BrowserModule , RouterModule.forRoot(routes)],         //register the routes
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
