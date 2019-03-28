
import { switchMap } from 'rxjs/operators';
import { Customer } from './../customer';
import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: Customer;
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe
      (switchMap((params: ParamMap) => this.customerService.getCustomer(+params.get('id'))))
      .subscribe(customer => this.customer = customer);
  }

}
