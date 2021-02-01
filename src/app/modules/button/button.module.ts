import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ToggleComponent } from './components/toggle/toggle.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ToggleComponent
  ],
  exports: [
    ButtonComponent,
    ToggleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ButtonModule { }
