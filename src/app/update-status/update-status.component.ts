import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Customer, StatusEnum } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {
  @Input() customer: Customer;
  statusEnum = StatusEnum;

  @ViewChild('closeChangeStatusModel') closeChangeStatusModel: ElementRef;
  
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  onChange(value: any) {
    console.log(value);
    this.customer.status = value;
  }

  updateStatus() {
    if (this.customer.status == null) {
      this.customer.status = 'prospective';
    } 
    this.customerService.updateStatus(this.customer)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error), () => this.closeChangeStatusModel.nativeElement.click());
  }

}
