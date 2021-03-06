import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';

import { ClientPaymentComponent } from '../../components/client/client-payment/client-payment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
  ],
  declarations: [
    ClientPaymentComponent
  ],
  exports: [
    ClientPaymentComponent
  ]
})
export class PaymentModule { }
