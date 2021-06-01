import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyExpensesComponent } from './daily-expenses/daily-expenses.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { LoanComponent } from './loan/loan.component';
import { MonthlyExpensesComponent } from './monthly-expenses/monthly-expenses.component';
import { BalanceComponent } from './balance/balance.component';
import { SavingsComponent } from './savings/savings.component';
import { AccountingComponent } from './accounting.component';



@NgModule({
  declarations: [
    DailyExpensesComponent,
    CreditCardsComponent,
    LoanComponent,
    MonthlyExpensesComponent,
    BalanceComponent,
    SavingsComponent,
    AccountingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountingModule { }
