import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebtorsListPageRoutingModule } from './debtors-list-routing.module';

import { DebtorsListPage } from './debtors-list.page';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzGridModule } from 'ng-zorro-antd/grid';

import { NzDividerModule } from "ng-zorro-antd/divider";

import { NzListModule } from "ng-zorro-antd/list";
import { DebtItemComponent } from './debt-item/debt-item.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzFormModule } from 'ng-zorro-antd/form';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebtorsListPageRoutingModule,
    NzButtonModule,
    NzGridModule,
    NzDividerModule,
    NzListModule,
    NzStatisticModule,
    NzAvatarModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DebtorsListPage, DebtItemComponent],
  exports: [DebtItemComponent]  
})
export class DebtorsListPageModule {}
