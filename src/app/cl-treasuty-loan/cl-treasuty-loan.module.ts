import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClTreasutyLoanRoutingModule } from './cl-treasuty-loan-routing.module';
import { NewMgsBatchComponent } from './new-mgs-batch/new-mgs-batch.component';
import { ClTreasutyLoanComponent } from './cl-treasuty-loan.component';
import { NewMgsSingleComponent } from './new-mgs-single/new-mgs-single.component';
import { ClTreasutyLoanService } from './services';

@NgModule({
  imports: [
    CommonModule,
    ClTreasutyLoanRoutingModule
  ],
  declarations: [NewMgsBatchComponent, ClTreasutyLoanComponent, NewMgsSingleComponent],
  providers: [
    ClTreasutyLoanService,
  ]
})
export class ClTreasutyLoanModule { }
