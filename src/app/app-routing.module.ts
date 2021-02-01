import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonContainerComponent } from './components/button-container/button-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account-details'
  },
  {
    path: 'account-details',
    loadChildren: () => import('./modules/account-details/account-details.module').then(m => m.AccountDetailsModule)
  },
  {
    path: 'customer-details',
    loadChildren: () => import('./modules/customer-details/customer-details.module').then(m => m.CustomerDetailsModule)
  },
  {
    path: 'dynamic-form',
    loadChildren: () => import('./modules/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule)
  },
  {
    path: 'button',
    component: ButtonContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
