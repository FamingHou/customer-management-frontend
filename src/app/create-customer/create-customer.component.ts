import { CustomerService } from './../customer.service';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;
  firstNameInvalid = false;
  lastNameInvalid = false;
  emailIdInvalid = false;

  errors = null;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.customer)
      .subscribe(result => {
        if (result.success) {
          this.submitted = true;
          this.customer = new Customer();
        } else {
          this.errors = result.data;
        }
      }, error => console.log(error));

  }

  onSubmit() {
    this.firstNameInvalid = !this.customer.firstName;
    this.lastNameInvalid = !this.customer.lastName;
    this.emailIdInvalid = !this.customer.emailId;

    if (!this.firstNameInvalid && !this.lastNameInvalid && !this.emailIdInvalid) {
      this.save();

    }
  }
}
