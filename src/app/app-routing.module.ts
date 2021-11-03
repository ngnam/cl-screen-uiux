import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cl-treasuty-loan', loadChildren: './cl-treasuty-loan/cl-treasuty-loan.module#ClTreasutyLoanModule' },
  { path: '**', redirectTo: '/cl-treasuty-loan', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
