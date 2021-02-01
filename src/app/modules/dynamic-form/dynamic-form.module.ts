import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SuggestionInputComponent } from './suggestion-input/suggestion-input.component';
import { ButtonModule } from '../button/button.module';
import { DropAreaComponent } from './drop-area/drop-area.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    SuggestionInputComponent,
    DropAreaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterModule.forChild([{
      path: '',
      component: DynamicFormComponent
    }])
  ]
})
export class DynamicFormModule { }
