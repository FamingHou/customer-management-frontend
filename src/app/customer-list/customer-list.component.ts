import { Observable, from } from "rxjs";
import { CustomerService, CustomerSearchCriteria } from "./../customer.service";
import { Customer } from "./../customer";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"]
})
export class CustomerListComponent implements OnInit {
  customers: Observable<Customer[]>;
  errors: string = null;
  criteria: CustomerSearchCriteria = {
    sortColumn: 'id',
    sortDirection: 'asc',
    firstName: null,
    lastName: null,
    emailId: null
  };
  loading: boolean;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers(this.criteria);
  }

  onSorted($event: CustomerSearchCriteria) {
    this.criteria = $event;
    this.getCustomers($event);
  }

  getCustomers(criteria: CustomerSearchCriteria) {
    this.errors = null;
    this.loading = true;
    this.customerService.getCustomersList(criteria)
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
}
