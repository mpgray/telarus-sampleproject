import {Component, Input, OnInit} from '@angular/core';
import {ICustomer} from '../services/customers.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @Input() customerDetails: ICustomer;

  constructor() { }

  ngOnInit() {

  }

  total(allOrders) {
    let total = 0;
    for (let order of allOrders) {
      for (let orderTotal of order.services) {
        total += orderTotal.price;
      }
    }
    return total;
  }
}
