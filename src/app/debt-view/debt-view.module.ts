import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebtViewPageRoutingModule } from './debt-view-routing.module';

import { DebtViewPage } from './debt-view.page';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebtViewPageRoutingModule,
    NzGridModule,
    NzStatisticModule,
    NzButtonModule,
    NzGridModule,
    NzDividerModule,
    NzListModule,
    NzStatisticModule,
    NzModalModule,
    NzAvatarModule,
    NzIconModule,
    NzDatePickerModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DebtViewPage]
})
export class DebtViewPageModule {}
