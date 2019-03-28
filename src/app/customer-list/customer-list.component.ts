import { Observable, from } from "rxjs";
import { CustomerService, SortCriteria } from "./../customer.service";
import { Customer } from "./../customer";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"]
})
export class CustomerListComponent implements OnInit {
  customers: Observable<Customer[]>;
  errors: string = null;
  criteria: SortCriteria = {
    sortColumn: 'id',
    sortDirection: 'asc'
  };
  conds: Customer = new Customer(); // query conditions
  loading: boolean;
 
  selectedCustomer: Customer;

  constructor(public router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers(this.criteria);
  }

  onSelect(customer: Customer){
    this.selectedCustomer = customer;
    console.log(this.selectedCustomer);
  }

  onSorted($event: SortCriteria) {
    this.criteria = $event;
    this.getCustomers($event);
  }

  getCustomersByConds(conds: Customer, sortCriteria: SortCriteria) {
    this.errors = null;
    this.loading = true;
    this.customerService.getCustomersByConds(conds, sortCriteria)
      .subscribe(
        result => {
          if (result.success) {
            this.customers = result.data;
          } else {
            this.errors = result.data;
          }
        },
        error => console.log(error), () => this.loading = false);
  }

  getCustomers(sortCriteria: SortCriteria) {
    this.errors = null;
    this.loading = true;
    this.customerService.getCustomersList(sortCriteria)
      .subscribe(
        result => {
          if (result.success) {
            this.customers = result.data;
          } else {
            this.errors = result.data;
          }
        },
        error => console.log(error), () => this.loading = false);
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.getCustomers(this.criteria);
        },
        error => console.log(error));
  }

  viewCustomer(customer: Customer) {
    this.router.navigate(['/details']);
  }

  
}
