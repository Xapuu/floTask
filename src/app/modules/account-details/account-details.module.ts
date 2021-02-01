import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountDetailsComponent, LegalInformationComponent, SettingsComponent, SupportComponent, TransactionHistoryComponent } from './components';
import { ButtonModule } from '../button/button.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LegalInformationComponent, TransactionHistoryComponent, SettingsComponent, SupportComponent, AccountDetailsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path:'',
      component: AccountDetailsComponent
    }])
  ]
})
export class AccountDetailsModule { }
