
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'detail/:id', component: CustomerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
