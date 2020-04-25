import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { GetCustomerComponent } from './get-customer/get-customer.component';
import { TrancationComponent } from './trancation/trancation.component';


const routes: Routes = [
  {path:'addcustomer',component:AddCustomerComponent}
  ,{path:'getcustomer',component:GetCustomerComponent}
  ,{path:'transaction',component:TrancationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
