import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClTreasutyLoanRoutingModule } from './cl-treasuty-loan-routing.module';
import { NewMgsBatchComponent } from './new-mgs-batch/new-mgs-batch.component';
import { ClTreasutyLoanComponent } from './cl-treasuty-loan.component';
import { NewMgsSingleComponent } from './new-mgs-single/new-mgs-single.component';
import { ClTreasutyLoanService } from './services';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';

@NgModule({
  imports: [
    CommonModule,
    ClTreasutyLoanRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyPrimeNGModule
  ],
  declarations: [NewMgsBatchComponent, ClTreasutyLoanComponent, NewMgsSingleComponent],
  providers: [
    ClTreasutyLoanService,
  ]
})
export class ClTreasutyLoanModule { }
