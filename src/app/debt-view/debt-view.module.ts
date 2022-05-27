import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebtViewPageRoutingModule } from './debt-view-routing.module';

import { DebtViewPage } from './debt-view.page';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebtViewPageRoutingModule,
    NzGridModule,
    NzStatisticModule,
  ],
  declarations: [DebtViewPage]
})
export class DebtViewPageModule {}
