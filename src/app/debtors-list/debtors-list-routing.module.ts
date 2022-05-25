import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebtorsListPage } from './debtors-list.page';

const routes: Routes = [
  {
    path: '',
    component: DebtorsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebtorsListPageRoutingModule {}
