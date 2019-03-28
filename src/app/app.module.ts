import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';

import { SortService } from './sortable-table/sort.service';
import { SortableTableDirective } from './sortable-table/sortable-table.directive';
import { SortableColumnComponent } from './sortable-table/sortable-column.component';
import { UpdateStatusComponent } from './update-status/update-status.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    SortableTableDirective, 
    SortableColumnComponent, UpdateStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
