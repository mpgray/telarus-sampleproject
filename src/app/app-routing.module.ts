import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {OrdersComponent} from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
