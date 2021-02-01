import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactDetailsComponent, CustomerDetailsComponent, PersonalDetailsComponent, SuggestionsComponent, ToDoListComponent } from './components';

@NgModule({
  declarations: [ToDoListComponent, SuggestionsComponent, ContactDetailsComponent, CustomerDetailsComponent, PersonalDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: CustomerDetailsComponent
    }])
  ]
})
export class CustomerDetailsModule { }
