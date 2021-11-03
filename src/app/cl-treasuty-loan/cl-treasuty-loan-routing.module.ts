import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClTreasutyLoanComponent } from './cl-treasuty-loan.component';
import { NewMgsBatchComponent } from './new-mgs-batch/new-mgs-batch.component';
import { NewMgsSingleComponent } from './new-mgs-single/new-mgs-single.component';

const routes: Routes = [
  {
    path: '', component: ClTreasutyLoanComponent,
    children: [
      { path: '', component: NewMgsBatchComponent },
      { path: 'p3', component: NewMgsSingleComponent },

    ]
  },
  { path: '**', redirectTo: '/cl-treasuty-loan' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClTreasutyLoanRoutingModule { }
