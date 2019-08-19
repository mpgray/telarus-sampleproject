import { Component, OnInit } from '@angular/core';
import {CustomersService, ICustomer} from '../services/customers.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: ICustomer[];
  customerOrders: ICustomer;

  constructor(private customerService: CustomersService ) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((data: {}) => {
      this.customers = data as ICustomer[];
    });
  }

  getOrders(selectedCustomer) {
    this.customerOrders = selectedCustomer;

  }
}
