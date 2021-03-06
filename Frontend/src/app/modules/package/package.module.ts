import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';

import { AddNewPackageComponent } from '../../components/package/add-new-package/add-new-package.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    
  ],
  declarations: [AddNewPackageComponent],
  exports: [AddNewPackageComponent]
})
export class PackageModule { }
