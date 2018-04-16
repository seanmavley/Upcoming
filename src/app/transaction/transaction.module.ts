import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    TransactionRoutingModule
  ],
  declarations: [HomeComponent, DetailComponent, ListComponent]
})
export class TransactionModule { }
